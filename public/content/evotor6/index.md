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

| МЭ           | ОС     | EvoPP          | UposNative | UPOS          |
| ------------ | ------ | -------------- | ---------- | ------------- |
| SP_V1.01.050 | 6.0.14 | Не применяется | 1.105.31   | 33.39.04 (АН) |

## <a id="2">Прошивка</a>

## <a id="2.1" class="text-2xl">Что понадобится?</a>

- Флешка в формате FAT32
- <div class="flex gap-2 w-full">Переходник USB мама - Type-C папа
    <div class="tooltip">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
      <span class="tooltiptext background-color: bg-gray-50 dark:bg-[#333]">
      <img src="/content/evotor6/image/usb-female-to-type-c-male-converter.png" alt="Переходник USB-C"/>
      </span>
    </div>
    </div>
- [Файл прошивки](https://drive.google.com/uc?export=download&id=1zp8lapO00GubC86cOwkxooq8cZBRzLb5)

## <a id="2.2" class="text-2xl">План действий</a>

- Скачайте [файл прошивки](https://drive.google.com/uc?export=download&id=1zp8lapO00GubC86cOwkxooq8cZBRzLb5).
- Подготовьте флешку в формате FAT32.
- Поместите файл прошивки в корень флешки.
- Включите кассу.
- С помощью переходника подключите флешку к кассе и немного подождите. Устройство найдёт нужный файл и предложит его установить.
- Нажмите на **Проверить и установить**.
- Касса начнет расшифровывать файл с обновлением, это займет некоторое время. После успешной установки касса сама перезагрузится. Подождите еще 1-2 минуты и вытащите флешку.

## <a id="2.3" class="text-2xl">Как добавить eSIM?</a>

- Заходим в настройки устройства. Для этого жмем три раза на логотип Сбера
- Подключаемся к Wi-Fi
- Нажимаем **Мобильная сеть** → **Добавить eSIM**
- Заходим в Мобильное приложение АТМ
- Нажимаем на **три точки** → **eSIM профили**
- Вводим серийный номер терминала
- Выбираем ГОСБ
- Выбираем оператора
- Нажимаем кнопку **Получить QRCode**
- Открываем полученный QR и сканируем его
- При необходимости повторяем три предыдущих шага для добавления eSIM других операторов
