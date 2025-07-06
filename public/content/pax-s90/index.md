<style>
   .markdown-content h2 {  
      margin-top: 2rem; 
      margin-bottom: 2rem; 
      font-size: 1.875rem; 
   }
   .markdown-content ul {
      list-style-type: disc; 
      font-size: 1.125rem; 
      display: flex; 
      flex-direction: column; 
      gap: 1rem; 
      padding-left: 20px; 
   }
   .markdown-content a:hover {
      text-decoration: underline;
   }
   .markdown-content table {
      min-width: 100%;
   }
   .markdown-content th {
      padding-left: 0.5rem;    
      padding-right: 0.5rem;   
      padding-top: 0.5rem;     
      padding-bottom: 0.5rem;  
      text-align: left;        
      font-size: 0.875rem;     
      line-height: 1.25rem;    
      font-weight: 500;        
      border: 1px solid;       
      border-color: #e5e7eb;
   }
   .markdown-content td {
      padding: 0.75rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      border: 1px solid #e5e7eb;
   }
   .markdown-content p {
      font-size: 1.125rem;
   }
   .tooltip {
      position: relative;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      margin-left: 5px;
   }
   .tooltip .tooltiptext {
      visibility: hidden;
      width: 240px;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 8px;
      position: absolute;
      z-index: 100;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      transition: opacity 0.3s;
      margin-left: 10px;
   }
   .tooltip .tooltiptext::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent #333 transparent transparent;
   }
   .tooltip:hover .tooltiptext {
      visibility: visible;
      opacity: 1;
   }
   .tooltip img {
      width: 20px;
      height: 20px;
   }
   .tooltip .tooltiptext img {
      width: 100%;
      height: auto;
      display: block;
   }
</style>

## <a id="1">Актуальные версии</a>

<div class="overflow-x-auto whitespace-nowrap">

| UPOS     | OS Monitor+ | BASE  | API     |
| -------- | ----------- | ----- | ------- |
| 33.33.07 | 3.84        | V1.55 | V010024 |

</div>

## <a id="2">Прошивка</a>

## <a id="2.1" class="text-2xl">Что понадобится?</a>

- Флешка в формате FAT32
- <div class="flex gap-2 w-full">Переходник USB мама - mini USB папа
    <div class="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
      <span class="tooltiptext background-color: bg-gray-50 dark:bg-[#333]">
      <img src="/content/pax-s90/image/miniusb.png" alt=""/>
      </span>
    </div>
    </div>
- [Файл прошивки](https://disk.yandex.ru/d/GQPfUmSopiLFyA)

## <a id="2.2" class="text-2xl">Как прошить?</a>

- Подсоединяем флешку с помощью переходника.
- Включаем терминал.
- Выбираем нужный файл прошивки - **[!SB_S90C_33.33](https://disk.yandex.ru/d/GQPfUmSopiLFyA)**.
- Подтверждаем выбор.
- В появившемся меню выбираем первый пункт - **DELETE APP**.
- Затем выбираем первый пункт - **Delete all app**.
- После того как терминал очистится, выбираем второй пункт - **DOWNLOAD ALL**.
- После окончания прошивки дважды нажимаем красную кнопку и вытаскиваем флешку. Терминал перезапустится.
- Осталось дождаться загрузки UPOS.

## <a id="2.3" class="text-2xl">Видео</a>

<video width="320" height="180" controls class="w-full rounded-xl md:w-[32.5%]">
    <source src="/content/pax-s90/video/PAX S90.mp4" type="video/mp4" />
    Ваш браузер не поддерживает видео тег.
</video>

## <a id="3">Дефектовка</a>

## <a id="3.1" class="text-2xl">Внешний вид</a>

- Проверяем наличие посторонних предметов в чип-ридере, магнитном ридере, наличие на корпусе терминала различных субстанций грязи, сколы, трещины.
- Визуально проверяем исправность контактов SIM-модуля и Ethernet-разъема и т.д.
- Субъективно определяем товарный вид терминала.

## <a id="3.2" class="text-2xl">Включение терминала</a>

- Проверяем терминал на включение и наличие сообщений об ошибке  
  **TAMPER**,
  **TAMPERED DEVICE**,
  **TAMPERING DETECTED**,
  **PED TAMPERED**,
  **PLS INPUT PWD**.
  Эти ошибки означают, что терминал неисправен и его необходимо вернуть отправить в СЦ.

## <a id="3.3" class="text-2xl">Магнитный ридер</a>

- Заходим в системное меню, при включении терминала зажимаем кнопку **func**
- Выбираем пункты **Module Test** → **Magcard Reader**
- Проводим карту. Если терминал пишет **READ TRACK OK** или **Status=0** и информацию о прочтении дорожек карты, то ридер исправен.
  Если ридер не реагирует, то либо ридер неисправен либо вы не той стороной проводите карту.

## <a id="3.4" class="text-2xl">Чиповый ридер</a>

- Заходим в системное меню, при включении терминала зажимаем кнопку **func**
  Выбираем пункты: **Module Test** → **Card Readers** → **User Card** → вставляем карту.
  Если терминал пишет **OK** или **Card test done**, то ридер исправен, если выдает **ERR** то ридер не исправен.

## <a id="3.5" class="text-2xl">Бесконтактный ридер</a>

- Заходим в системное меню, при включении терминала зажимаем кнопку **func**
- Выбираем пункты: **Module Test** → **Card Readers**
- Выбираем пункт **A Type Card** или если сразу пишет **PLS SWIPED CARD** подносим бесконтактную карту к терминалу. Должна появится надпись **read succeeded** или **A CARD TEST OK**

## <a id="3.6" class="text-2xl">Клавиатура</a>

- Заходим в системное меню, при включении терминала зажимаем кнопку **func**
- Выбираем пункт: **Module Test** → **KEY TEST** → **User Interface** → **Keyboard** и нажимаем все клавиши. На экране будут отражаться значения.
- Чтобы выйти из меню проверки клавиатуры нажмите дважды цифры **0** или **1**.

## <a id="3.7" class="text-2xl">GPRS</a>

- Заходим в системное меню, при включении терминала зажимаем кнопку **func**
- Выбираем пункты: **Module Check** → **WNET**
- Нажимаем **Enter** пока на терминале не появится надпись **WNET DIALING**, не загорится шкала сигнала и будет виден уровень сигнала.

## <a id="3.8" class="text-2xl">Ethernet</a>

- Визуальный осмотр разъёма.
- Подключить терминал с помощью патчкорда к ноутбуку.
- Зайти в сетевые подключения ноутбука.
- При исправном разъёме Ethernet в сетевых подключениях ноутбука отобразится подключенная сеть.
- Если сетевое подключение не меняется (сетевой кабель не подключен), то ноутбук терминал не определяет, следовательно Ethernet-разъём неисправен.
