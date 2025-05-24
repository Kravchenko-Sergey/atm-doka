<style>
   .markdown-content h2 {  
      margin-top: 2rem; 
      margin-bottom: 2rem; 
      font-size: 1.875rem; 
   }
   .markdown-content ul {
      list-style-type: disc; 
      font-size: 1.25rem; 
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
</style>

## <a id="1">Актуальные версии</a>

<div class="overflow-x-auto whitespace-nowrap">

| Модель                        | UPOS                                                             | OS Verix | EOS     | VX-CTLS-2  |
| ----------------------------- | ---------------------------------------------------------------- | -------- | ------- | ---------- |
| VX520<br>VX520 + Kozen P12 \* | 33.18.03<br>33.33.07 \* (АН)<br>33.33.09 \*<br> 33.42.02 \* (ОЭ) | QT00050  | 3.3.2.0 | 01.30.02M6 |

</div>

## <a id="2">Что понадобится?</a>

- Флешка в формате FAT32
- **Папка** [verifone](https://disk.yandex.ru/d/Ym5ZizF5xbCEHQ) с необходимыми файлами

## <a id="3">Как прошить?</a>

- Включаем терминал.
- Присоединяем флешку.
- Для входа в системное меню одновременно зажимаем зелёную кнопку и цифру 7.
- Вводим пароль - `1 alpha alpha 6 6 8 3 1`.
- В меню выбираем пункт - **Memory Function**.
- Выбираем пункт - **Clear Mem**.
- Повторяем пароль.
- Выбираем 4 пункт - **Clear all Groups**.
- Подтверждаем нажатием кнопки 2 - **Confirm**.
- После того как терминал очистится, нажимаем красную кнопку.
- Выбираем 1 - **Restart**. Устройство перезапустится.
- Терминал предложит загрузить все файлы - выбираем **NO**.
- Далее по очереди будут предлагаться файлы прошивок. Выбираем нужную нам прошивку и нажимаем **YES**.
- Все остальные шаги нам не нужны. Нажимаем **NO**.
- Извлекаем флешку после того как терминал предложит это сделать.
- Нажимаем зелёную кнопку.
- Осталось дождаться окончания прошивки и загрузки UPOS.

## <a id="4">Видео</a>

<video width='320' height='180' controls>
    <source src='/content/verifone-vx520/video/VX520.mp4' type='video/mp4' />
</video

##

## <a id="5">Дефектовка</a>

- Заходим в системное меню зажимаем клавиши ввода (зеленая) и цифру семь, далее вводим пароль **1 alpha alpha 6 6 8 3 1**
- Проверка магнитного ридера. Заходим в **Terminal Info** → **Diagnostics** → **Mag Card Diag**. Проводим магнитную полосу карты через магнито приемник. Если на всех трех дорохках значение **VALID** то магнитный ридер исправен. (третью дорожку в расчет небрать)
- Проверка клавиатуры. Заходим в **Terminal Info** → **Diagnostics** → **Keybord Diag**. Далее поочередно нажимаем и визуально наблюдая на дисплее смуену цифр, при нажатии клавиш
- Проверка принтера. Заходим в **Terminal Info** → **Diagnostics** → **Printer Diag** → **Test**. Терминал распечатает тестовый чек
- Проверка GPRS. Заходим в **Download** → нажимаем клавишу ввода зелёная → вводим пароль **1 alpha alpha 6 6 8 3 1** → **Multi-app** → **Partial dnld** → **TCPIP** → нажимаем красную клавишу на клавиатуре , затем под надписью Menu[0] на дисплее нажимаем кнопку на клавиатуре, подаем в меню **Control Panel** → **Tools** → **Network Maint** → **GPRS** → **Network Start GPRS**. Модуль подключается к сети GSM около минуты, при успешном подключении на дисплее будет надпись **Сonnected ( ----ms)** в скобках время подключения к станции GSM. При сообщении на дисплее **Already online** выполните переподключение через пункт меню **Network Restart**
  Для теста необходима рабочая сим карта, предустановленный EOS
- Проверка Ethernet порта. Заходим в **Download** → нажимаем клавишу ввода зелёная → вводим пароль **1 alpha alpha 6 6 8 3 1** → **Multi-app** → **Partial dnld** → **TCPIP** → нажимаем красную клавишу на клавиатуре, затем под надписью Menu[0] на дисплее нажимаем кнопку на клавиатуре, подаем в меню **Control Panel** → **Tools** → **Network Maint** → **Ethernet** → **Network Start** при успешном подключении на дисплее будет надпись -> **Сonnected ( ----ms)** в скобках время подключения. При сообщении на дисплее -> **Already online** выполните переподключение через пункт меню **Network Restart**.
- Проверка модуля смарт-ридера. Заходим в **Terminal Info** → **Diagnostics** → **Smart Card Diag** → **CHIP CARD DIAG** → **CUST SLOT DIAG**. Вставить банковскую карту в картоприемник и нажать **CUST SLOT DIAG**.  
  Появится сообщение на дисплее **POWER UP: PASSED** и **GET ATR: PASSED** если значения **PASSED** то чиповая карта считана успешно. Тест проводит двумя картами шести и восьми контактными картами.
- Проверка модуля STLS. Заходим в **Terminal Info** → **Diagnostics** → **Smart Card Diag** → **CONTACTLESS DIAG** → **TAP AND TEST**. далее подносим банковскую STLS карту к дисплею терминала при исправном модуле STLS наблюдаем на дисплее надписи **SW1_SW2=0x9000 card_type=1**.
  Проверка актуальна для 500 прошивки и выше
