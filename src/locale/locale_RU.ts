export default {

  IntroductionImage: {
    title: 'Экспресс доставка из Казахстана в Россию',
    description: 'Полный спектр транспортно-логистических услуг, включающих транспортировку, ' +
      'хранение и терминальную обработку грузов от двери Отправителя до двери Получателя',
    buttonText: 'Заказать грузоперевозку',
  },

  DirectionsAndTraffics:{
    title: 'Направления и тарифы',
    description: 'Приоритетные направления грузоперевозок компании «AvtoRail Jet»',
    cards: [
      {
        title: 'Направление зоны охвата услуг - Казахстан и Россия',
        subtitle: 'Осуществляем скорую доставку сборных грузов до/в',
        enumeration: ['Казахстан (Алматы)', 'Вся территория России'],
      },
      {
        title: 'Всегда в курсе событий «Рынка грузоперевозок»',
        subtitle: 'Предоставляем эксклюзивные предложения своим Заказчикам по режиму “скорой” доставки',
      },
      {
        title: 'Персональная логистика для бизнеса',
        subtitle: 'Эксклюзивное предложение\nСкорая доставка по направлениям:',
        enumeration: ['Алматы - Новосибирск от 2 дней', 'Алматы - Москва от 5 дней', 'Алматы - Казань от 4 дней', 'Алматы - Екатеринбург от 4 дней']
      }
    ],
    buttonText: 'Оформить заявку',
  },

  PartnershipBalk: {
    officialPartner: "Официальный партнер",
    buttonText: 'Перейти на сайт'
  },

  FAQBlock: {
    title: 'Часто задаваемые вопросы',
    items: [
      {
        title: 'Где передать груз к перевозке?',
        content: 'Города представительства партнеров указаны <a class="decorated-link" href="/#agencies">здесь</a>',
      },
      {
        title:'Как и где производить оплату за перевозку?',
        content: 'Оплата за перевозку взимается до, или после фактически оказанной услуги, по предварительному согласованию Сторон и отражено в документе подписанном Сторонами',
      },
      {
        title: 'Застрахован ли груз?',
        content: 'Компания «AvtoRail Jet» несет полную материальную ответственность за вверенное имущество и' +
          ' принятые на себя обязательства, в рамках действующего законодательства Республики Казахстан и Российской Федерации'
      },
      {
        title:'Какой пакет документов требуется к перевозке?',
        content: 'Для физических лиц - опись перевозимого груза; CMR; СНТ; код ТН ВЭД (в случае отсутствия данных документов, компания “AvtoRail Jet” содействует в формировании пакета документов).\n'+
          '</br>Для юридических лиц - CMR; Invoice; ЭСФ; копия договора на поставку; разрешение на вывоз (в случае ограничений)'
      },

    ]
  },

  TransportCalculationBlock:{
    title:'Расчет стоимости перевозки',
    subtitle: 'Оставьте заявку на расчет стоимости и наш менеджер свяжется с Вами',
    buttonText: 'Заказать грузоперевозку',
    specifyButton: 'Уточнить детали заявки',
    policyAccepting: ['Нажимая кнопку, Вы соглашаетесь с', 'Политикой по обработке персональных данных'],
    inputs: [
      {
        placeholder: 'Ваше имя',
        errorText: 'Имя введено некорректно',
      },
      {
        placeholder: '+7 (xxx) xxx xx xx',
        title: 'Телефон',
        errorText: 'Номер телефона введен некорректно',
      },
      {
        placeholder: 'Почта',
        errorText: 'Адрес почтового ящика введен некорректно'
      }
    ]
  },

  AgenciesCities:{
    title: 'Города представительства партнеров'
  },

  PrettyFooter: {
    caption: 'По России и Казахстану',
    buttonText: 'Заказать грузоперевозку',
    phoneText: '+7 7777 155 100',
    mailText: 'sale@avtorailjet.kz',
    addressText: 'ул. Аргымак, 1 (бывш. Промышленная,1)',
    policyText: 'Политика',
    offerText: 'Оферта',
    copyright: '©ТОО « AvtoRail Jet (АвтоРейл Джет)», 2024'
  },

  FlexibleHeader: {
    routes: ['Главная','Направления и тарифы','Часто задаваемые вопросы','Адреса терминалов партнера'],
    addressText: 'ул. Аргымак, 1 (бывш. Промышленная,1)',
    phoneText: '+7 7777 155 100',
    mailText: 'sale@avtorailjet.kz',
    buttonText: 'Заказать грузоперевозку'
  },

  ModalFieldsWindow: {
    fileErrorNotification: 'Ошибка загрузки файла: поддерживаемые форматы .docx, .doc. Размер файла: до 15Mb',
    fileSuccessNotification: 'Файл загружен',
    fileErrorLabel: 'Ошибка загрузки файла ${filename}',
    fileSuccessLabel: 'Файл ${filename} загружен',
    sendFileError: 'Ошибка при отправке файла! Файл проигнорирован',
    orderError: 'Ошибка при отправке заявки!',

    orderSuccessTitle: 'Заявка успешно оформлена',
    orderSuccessText: 'В ближайшее время с вами свяжутся наши менеджеры',
    successButtonText: 'Вернуться на главную',

    fileWindowTitle: 'Расчет стоимости перевозки',
    fileWindowSubtitle: 'Заполните и прикрепите опись груза для оформления заявки',
    fileDownloadText: 'Опись образец',
    fileUploadText: 'Загрузить файл',
    fileUploadHint: '(не более 15Mb)',
    fileUploadAnother: 'Загрузить другой файл',
    fileButtonText: 'Оформить заявку',

    fieldsWindowTitle: 'Расчет стоимости перевозки',
    fieldsSubtitle: 'Заполните детали заявки',
    fieldsButtonText: 'Далее',
    fieldsInputs: [
      {
        errorText: 'Название города должно быть введено на кириллице',
        placeholder: 'Город отправления',
      },
      {
        errorText: 'Название города должно быть введено на кириллице',
        placeholder: 'Город получения',
      },
      {
        errorText: 'Целое или дробное ненулевое число',
        placeholder: 'Вес, кг',
      },
      {
        errorText: 'Целое или дробное ненулевое число',
        placeholder: 'Объем, м3',
      },
      {
        errorText: 'Число, менее 1млн',
        placeholder: 'Количество мест, шт',
      },
      {
        errorText: 'Код ТН ВЭД должен содержать 10 цифр',
        placeholder: 'Код ТН ВЭД',
      },
      {
        errorText: 'Имя введено некорректно',
        placeholder: 'Ваше имя*',
      },
      {
        errorText: 'Номер телефона введен некорректно',
        placeholder: 'Телефон*',
      },
      {
        errorText: 'Адрес почтового ящика введен некорректно',
        placeholder: 'Почта*',
      },

    ]
  },

  NotFoundPage: {
    title: '404. Данной страницы не существует :(',
    action: 'Вернуться на главную'
  },

  LangSelector: {
    title: 'Выберите язык'
  },

  PolicyPage: {
    title: 'Политика в отношении обработки персональных данных',
    html: '<ol>\n' +
      '          <li><h2>Общие положения</h2></li>\n' +
      '        </ol>\n' +
      '        <p>Настоящая Политика конфиденциальности данных (далее &ndash; Политика конфиденциальности, Политика) действует в отношении данных, которые ТОО &laquo;AvtoRail Jet&raquo; (АвтоРейл Джет) (БИН 240640009737, город Алматы ул. Наурызбай батыра, д.26 кв. 2) может получить с использованием веб-сайта, расположенного в сети Интернет на доменном имени: https://avtorailjet.kz/.</p>\n' +
      '        <p>ТОО &laquo;AvtoRail Jet&raquo; (АвтоРейл Джет) обрабатывает данные пользователей Сайта исключительно в рамках требований Законодательства Республики Казахстан, в том числе Закона Республики Казахстан от 21 мая 2013 года № 94-V &laquo;О персональных данных и их защите&raquo;, а также международных договоров, ратифицированных Республики Казахстан. Политика конфиденциальности разработана в соответствии с их нормами.</p>\n' +
      '        <p>ТОО &laquo;AvtoRail Jet&raquo; (АвтоРейл Джет) ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</p>\n' +
      '        <p>Настоящая Политика применяется ко всей информации, которую ТОО &laquo;AvtoRail Jet&raquo; (АвтоРейл Джет) &nbsp;может получить о посетителях веб-сайта https://avtorailjet.kz/.</p>\n' +
      '        <p>Использование Пользователем Сайта означает согласие с Политикой конфиденциальности и условиями обработки данных. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование Сайта.</p>\n' +
      '        <ol start="2">\n' +
      '          <li><h2>Основные понятия, используемые в Политике</h2></li>\n' +
      '        </ol>\n' +
      '        <p><i>Автоматизированная обработка персональных данных</i> &ndash; обработка персональных данных с помощью средств вычислительной техники;</p>\n' +
      '        <p><i>Блокирование персональных данных</i> &ndash; временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</p>\n' +
      '        <p><i>Веб-сайт</i> &ndash; совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://avtorailjet.kz/;</p>\n' +
      '        <p><i>Информационная система персональных данных</i> &mdash; совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;</p>\n' +
      '        <p><i>Обезличивание персональных данных</i> &mdash; действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;</p>\n' +
      '        <p><i>Обработка персональных данных</i> &ndash; любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;</p>\n' +
      '        <p><i>Оператор</i> &ndash; государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;</p>\n' +
      '        <p><i>Персональные данные</i> &ndash; любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://avtorailjet.kz/;</p>\n' +
      '        <p><i>Пользователь</i> &ndash; любой посетитель веб-сайта https://avtorailjet.kz/;</p>\n' +
      '        <p><i>Предоставление</i> персональных данных &ndash; действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;</p>\n' +
      '        <p><i>Распространение персональных данных</i> &ndash; любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;</p>\n' +
      '        <p><i>Трансграничная передача персональных данных</i> &ndash; передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;</p>\n' +
      '        <p><i>Уничтожение персональных данных</i> &ndash; любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) результате которых уничтожаются материальные носители персональных данных.</p>\n' +
      '        <ol start="3">\n' +
      '          <li><h2>Оператор может обрабатывать следующие персональные данные Пользователя:</h2></li>\n' +
      '        </ol>\n' +
      '        <ul><li>Фамилия, имя, отчество;</li>\n' +
      '        <li>ИИН;</li>\n' +
      '        <li>Адрес;</li>\n' +
      '        <li>Электронный адрес;</li>\n' +
      '        <li>Номера телефонов.</li>\n' +
      '        <li>Также на сайте происходит сбор и обработка обезличенных данных о посетителях с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).</li></ul>\n' +
      '        <p>Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.</p>\n' +
      '        <ol start="4">\n' +
      '          <li><h2>Цели обработки персональных данных</h2></li>\n' +
      '        </ol>\n' +
      '        <p>Цель обработки персональных данных Пользователя &mdash; взаимодействие с Пользователем при оказании услуг.</p>\n' +
      '        <p>Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты sale@avtorailjet.kz с пометкой &laquo;Отказ от уведомлениях о новых продуктах и услугах и специальных предложениях&raquo;.</p>\n' +
      '        <p>Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</p>\n' +
      '        <ol start="5">\n' +
      '          <li><h2>Правовые основания обработки персональных данных</h2></li>\n' +
      '        </ol>\n' +
      '        <p>Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте https://avtorailjet.kz/. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</p>\n' +
      '        <p>Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов &laquo;cookie&raquo; и использование технологии JavaScript).</p>\n' +
      '        <ol start="6">\n' +
      '          <li><h2>Порядок сбора, хранения, передачи и других видов обработки персональных данных</h2></li>\n' +
      '        </ol>\n' +
      '        <p>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</p>\n' +
      '        <p>Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц. Оператор обеспечивает хранение конфиденциальной информации в тайне, не разглашать ее без предварительного письменного разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами конфиденциальных данных, за исключением случаев, предусмотренных Политикой конфиденциальности, заключенными договорами с клиентами, законодательством Республики Казахстан.</p>\n' +
      '        <p>Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.</p>\n' +
      '        <p>Данные Пользователя могут быть переданы уполномоченным органам государственной власти Республики Казахстан только по основаниям и в порядке, установленными законодательством Республики Казахстан.</p>\n' +
      '        <p>В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора sale@avtorailjet.kz с пометкой &laquo;Актуализация персональных данных&raquo;.</p>\n' +
      '        <p>Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора sale@avtorailjet.kz с пометкой &laquo;Отзыв согласия на обработку персональных данных&raquo;.</p>\n' +
      '        <ol start="7">\n' +
      '          <li><h2>Трансграничная передача персональных данных</h2></li>\n' +
      '        </ol>\n' +
      '        <p>Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.</p>\n' +
      '        <p>Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.</p>\n' +
      '        <ol start="8">\n' +
      '          <li><h2>Заключительные положения</h2></li>\n' +
      '        </ol>\n' +
      '        <p>Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты sale@avtorailjet.kz.</p>\n' +
      '        <p>В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией. Пользователь обязуется самостоятельно следить за изменениями Политики конфиденциальности путем ознакомления с актуальной редакцией.</p>\n' +
      '        <p>Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу https://avtorailjet.kz/.</p>'
  }

}