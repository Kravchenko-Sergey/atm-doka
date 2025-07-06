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
</style>

## <a id="1">Актуальные версии</a>

<div class="overflow-x-auto whitespace-nowrap">

| UPOS     | OS Monitor+ | BASE  | API     |
| -------- | ----------- | ----- | ------- |
| 33.33.07 | 3.84        | V1.55 | V010024 |

</div>

## <a id="2">Прошивка</a>

## <a id="2.1" class="text-2xl">Что понадобится?</a>

- Комплектный провод
- Блок питания micro-usb
- Флешка в формате FAT32
- Переходник USB 2.0 мама - USB 2.0 мама
- [Файл прошивки](https://disk.yandex.ru/d/4fC0Y01j_Gu1-A)

## <a id="2.2" class="text-2xl">Как прошить?</a>

- Присоединяем флешку через переходник к проводу подключения пинпада к компьютеру.
- Подключаем питание к сети. Должна появиться запись **U-DISC_DOWNLOAD**. Это означает, что терминал начал сканировать флешку.
- Из появившегося списка выбираем нужный нам файл с прошивкой - **[!SB_SP30_33.33](https://disk.yandex.ru/d/4fC0Y01j_Gu1-A)**. Терминал начнет чтение файла.
- В появившемся меню выбираем **DELETE APP** → **Delete all app**.
- Далее выбираем **DOWNLOAD ALL**. Начнется загрузка файла.
- Нажимаем красную кнопку. Появится надпись **DOWNLOAD OVER**.
- Ещё раз нажимаем красную кнопку. Терминал перезагрузится.
- В момент перезагрузки отсоединяем флешку.
- Осталось дождаться загрузки UPOS.

## <a id="2.3" class="text-2xl">Видео</a>

<video width="320" height="180" controls class="w-full rounded-xl md:w-[32.5%]">
    <source src="/content/pax-sp30/video/PAX SP30.mp4" type="video/mp4" />
</video>
