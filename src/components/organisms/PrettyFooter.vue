<script setup lang="ts">

import TizaLogo from '@/components/atoms/TizaLogo.vue'
import LinkWithIcon from '@/components/molecules/LinkWithIcon.vue'
import PrettyButtonFlexible from '@/components/atoms/PrettyButtonFlexible.vue'
import MailIcoWhite from '@/components/atoms/icons/MailIcoWhite.vue'
import GeoIcoGrayLight from '@/components/atoms/icons/GeoIcoGrayLight.vue'
import scrollToCalculations from '@/hooks/UIActions/scrollToCalculations'
import ByteTransitLogo from '@/components/atoms/icons/ByteTransitLogo.vue'
import { computed } from 'vue'
import { useLangStore } from '@/stores/lang'

defineEmits(['callModalWindow'])
const onLogoClick = ()=>{
  setTimeout(()=>window.scrollTo(0,0));
}

const strings = computed(()=> useLangStore().langStrings.PrettyFooter);

</script>

<template>
  <div class="pretty-footer-top-wrapper">
  <div class = pretty-footer-wrapper>
    <div class = "pretty-footer-upper-block">
      <div class="pretty-footer-logo">
        <RouterLink class="pretty-footer-logo" to="/" @click="onLogoClick">
        <TizaLogo class="pretty-footer-logo"/>
        </RouterLink>
      </div>
      <div class="pretty-footer-upper-content-block">
        <div class = "pretty-footer-phone">
          <div class = "pretty-footer-phone-phone">
            <a class="pretty-footer-link-default" :href="`tel:${strings.phoneText}`">{{ strings.phoneText }}</a>
          </div>
          <div class = "pretty-footer-phone-caption">
            {{ strings.caption }}
          </div>
        </div>
        <div class = "pretty-footer-button">
          <PrettyButtonFlexible :text="strings.buttonText" @click="scrollToCalculations()"/>
        </div>
      </div>
    </div>
    <div class = "divider-block">
    <div class = "divider"/>
    </div>
    <div class = "pretty-footer-lower-block">
      <div class="pretty-footer-links">
        <div class = "pretty-footer-links-one">
          <LinkWithIcon class="pretty-footer-link-default" :text="strings.addressText" :ico="GeoIcoGrayLight"/>
          <LinkWithIcon class="pretty-footer-link-default" style="text-decoration: underline" :text="strings.mailText" :ico="MailIcoWhite" :link="`mailto:${strings.mailText}`"/>
        </div>
        <div class = "pretty-footer-links-two">
          <RouterLink to="/policy" style="color: var(--lightgray); font-size: 12px" class="pretty-footer-link-underlined">{{strings.policyText}}</RouterLink>
          <RouterLink to="/offer" style="color: var(--lightgray); font-size: 12px">{{strings.offerText}}</RouterLink>
          <p style="color: var(--lightgray); font-size: 12px">{{ strings.copyright }}</p>
        </div>
      </div>
      <div class="pretty-footer-logo-logo">
        <ByteTransitLogo link="https://www.sibtrans.ru/route-kazakhstan/"/>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.pretty-footer-links{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
}
.pretty-footer-logo-logo{
  width: 88px;
}
.pretty-footer-link-default:deep(a), .pretty-footer-link-default{
  color: white;
  text-decoration: none;
}
.pretty-footer-top-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--darkgray);
}
.pretty-footer-wrapper{
  width: clamp(0px,100%,1180px);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.pretty-footer-phone-phone{
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
}
.pretty-footer-phone-caption{
  font-size: 14px;
  line-height: 140%;
  text-align: right;
}
.divider-block{
  padding: 20px 0;
}
.divider{
  height: 1px;
  background: #909090;
}
.pretty-footer-lower-block{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.pretty-footer-links-one{
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 15px;
  line-height: 140%;
  text-align: left;
}
.pretty-footer-links-two{
  font-size: 14px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  row-gap: 20px;
  flex-wrap: wrap;
  text-align: left;
}
.pretty-footer-upper-block{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  row-gap: 10px;
}
.pretty-footer-upper-content-block{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
.pretty-footer-button{
  display: none;
  height: 51px;
}
.pretty-footer-logo{
  width: 106px;
  height: 30px;
}
.pretty-footer-links-one:deep(svg){
  fill:white;
}
@media (width >= 768px) {
  .pretty-footer-logo{
    width: 130px;
    height: 37px;
  }
  .pretty-footer-lower-block{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .pretty-footer-links-one{
    padding-right: 20px;
    flex-direction: row;
    gap: 15px;
    text-wrap: nowrap;
  }
  .pretty-footer-links-two{
    padding-top:5px;
    gap: 15px;
    justify-content: start;
    flex-wrap: wrap;
  }
  .pretty-footer-button{
    display: block;
  }
}
@media (width >= 1181px) {
  .pretty-footer-links-two {
    gap: 20px;
  }
  .pretty-footer-links-one{
    gap: 30px;
  }
}
</style>