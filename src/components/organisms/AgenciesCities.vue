<script setup lang="ts">

import { computed, onMounted, ref, type VNodeRef } from 'vue'
import type {  LngLat,  YMapLocationRequest } from 'ymaps3'
import scriptLoader from '@/hooks/ScriptLoader'
import { getCoordinates } from '@/hooks/API'
import type { AxiosError } from 'axios'
import type { ClustererObject, Feature } from '@yandex/ymaps3-types/packages/clusterer'
import { useLangStore } from '@/stores/lang'


const mapCenter : LngLat = [70.030206, 50.920340];
let map;
const mapRef = ref<VNodeRef | null>(null);


let agencies:Record<string,any>[];
const zoomDefaultValue = 3;

async function initMap(mapCenter : LngLat) {

 //======================================= API REQUESTS & MAP SETTINGS =============================

  await scriptLoader("https://api-maps.yandex.ru/v3/?apikey=" + import.meta.env.VITE_MAPS_API_KEY + "&lang=ru_RU")

    .catch((error: Error) => {
      console.error("Ошибка при подключении к API. Проверьте ключ и убедитесь, что установлены HTTPReferer-ы в ЛК https://developer.tech.yandex.ru/");
      console.error(error.message);
    });

  await ymaps3.ready;
  await getCoordinates().then((res) => {
    agencies = res.data;
  }).catch((err: AxiosError) => {
    console.error(err.message);
  });
  const LOCATION: YMapLocationRequest = {
    center: mapCenter,
    zoom: zoomDefaultValue,
  };
  const { YMap, YMapDefaultSchemeLayer, YMapLayer, YMapFeatureDataSource } = ymaps3;
  const { YMapClusterer, clusterByGrid } = await ymaps3.import('@yandex/ymaps3-clusterer@0.0.1');

  map = new YMap(document.getElementById('map') as HTMLElement, {
    location: LOCATION,
    zoomRange: { min: 3, max: 100 }
  });
  map
    .addChild(new YMapDefaultSchemeLayer({}))
    .addChild(new YMapFeatureDataSource({ id: 'my-source' }))
    .addChild(new YMapLayer({ source: 'my-source', type: 'markers', zIndex: 1800 }))
    .addChild(new YMapFeatureDataSource({id:'titles'}))
    .addChild(new YMapLayer({source:'titles', type: 'markers',zIndex: 9000}));

  //================================================================================================

  //======================================= CITY LABEL =============================================

  const tooltip = document.createElement('div');
  tooltip.className = 'map-agency-tooltip';
  tooltip.style.display = 'none';

  const toolTipElement = new ymaps3.YMapMarker(
    {
      coordinates: [0,0],
      source: 'titles'
    },
    tooltip
  )

  let toolTipLinkedFeauture : Feature | null = null
  const showToolTip = (feauture: Feature)=>{
    tooltip.style.display = 'unset';
    toolTipElement.update({coordinates:feauture.geometry.coordinates});
    tooltip.innerText=(feauture as any).properties.name;
    toolTipLinkedFeauture = feauture;
  }
  const hideToolTip = ()=>{
    tooltip.style.display = 'none';
    toolTipLinkedFeauture = null;
  }

  //================================================================================================

  //======================================= PINS INIT ==============================================

  const marker = (feature: Feature) => {
    const markerContainer = document.createElement('div');
    markerContainer.className = 'map-agency-marker-container';

    markerContainer.addEventListener('mouseover', ()=>{
      showToolTip(feature);
    });
    markerContainer.addEventListener('click',()=>{
      showToolTip(feature);
    });
    markerContainer.addEventListener('mouseleave',()=>{
      hideToolTip();
    })

    return new ymaps3.YMapMarker(
      {
        coordinates: feature.geometry.coordinates,
        source: 'my-source',

      },
      markerContainer
    );
  };
  //================================================================================================

//======================================= PINS GROUP CIRCLE ========================================
  function circle(count: number) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.innerHTML = `
        <div class="circle-content">
            <span class="circle-text">${count}</span>
        </div>
    `;
    return circle;
  }
//==================================================================================================

  const cluster = (coordinates: LngLat, features: Feature[]) =>
    new ymaps3.YMapMarker(
      {
        coordinates,
        source: 'my-source',
      },
      (circle(features.length)).cloneNode(true) as HTMLDivElement
    );

  type coordinatesType = { lnglat: LngLat, city: string }
  const coordinates: coordinatesType[] = [];
  for (let obj of agencies) {
    const element = obj as { city_name: string, coords: LngLat };
    coordinates.push({ lnglat: element.coords.reverse() as LngLat, city: element.city_name })
  }

  const points = coordinates.map((item, i) => ({
    type: 'Feature',
    id: i,
    geometry: { coordinates: item.lnglat },
    properties: { name: item.city },
  }));


  const clusterer = new YMapClusterer({
    method: clusterByGrid({ gridSize: 64 }),
    features: points as unknown as Feature[],
    marker,
    onRender(clusters : ClustererObject[]) {
      for(const cluster of clusters){
        for(const feature of cluster.features){
          if(toolTipLinkedFeauture && feature.id == toolTipLinkedFeauture.id){
            if(cluster.features.length > 1){
              hideToolTip();
            }
          }
        }
      }
    },
    cluster
  });

  map.addChild(toolTipElement)
  map.addChild(clusterer);
}


onMounted(() => {
  initMap(mapCenter);
})

const strings = computed(()=> useLangStore().langStrings.AgenciesCities);

</script>

<template>
<div class="cities-wrapper">
  <div class="cities-title-wrapper">
    <div class = cities-title>
      {{ strings.title }}
    </div>
  </div>
  <div :ref="mapRef" class="meow" id="map"></div>
</div>
</template>

<style scoped>

:global(.circle-content){
  background: #00AEC7;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

:global(.map-agency-marker-container){
  position: absolute;
  top: -50px;
  right: -16px;
  width: 27px;
  height: 33px;
  background: url("@/assets/icons/geoPin.svg");
}
.map-agency-marker-container:hover + .map-agency-tooltip {
  --displaytooltip: block;
}
:global(.map-agency-tooltip){
  position: absolute;
  display: var(--displaytooltip);
  color: var(--blue);
  font-weight: 900;
  top: -45px;
  left: -10px;
  margin-left: 35px;
  text-wrap: nowrap;
  backdrop-filter: blur(10px);
}
#map{
  width: 100%;
  height: 400px;
}
.cities-wrapper {
  color: var(--text-color);
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.cities-title-wrapper{
  display: flex;
  justify-content: center;
}
.cities-title{
  padding: 0 20px;
  width: 100%;
  max-width: 1180px;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
}
@media (768px <= width < 1181px){
  .cities-wrapper {
    padding-top: 70px;
  }
  .cities-title{
    font-size: 24px;
  }
  #map{
    height: 450px;
  }
}
@media (width >= 1181px) {
  .cities-wrapper {
    padding-top: 100px;
    gap: 40px
  }
  .cities-title{
    padding-left: 20px;
    text-align: left;
    font-size: 32px;
  }
  #map{
    height: 600px;
  }
}
</style>