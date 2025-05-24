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

| UPOS     | OS Monitor+ | BASE  | API     |
| -------- | ----------- | ----- | ------- |
| 33.33.07 | 3.84        | V1.55 | V010024 |

</div>

## <a id="2">Что понадобится?</a>

- Флешка в формате FAT32
- Переходник USB мама - mini USB папа
- [Файл прошивки](https://disk.yandex.ru/d/GQPfUmSopiLFyA)

## <a id="3">Как прошить?</a>

- Подсоединяем флешку с помощью переходника.
- Включаем терминал.
- Выбираем нужный файл прошивки - **[!SB_S90C_33.33](https://disk.yandex.ru/d/GQPfUmSopiLFyA)**.
- Подтверждаем выбор.
- В появившемся меню выбираем первый пункт - **DELETE APP**.
- Затем выбираем первый пункт - **Delete all app**.
- После того как терминал очистится, выбираем второй пункт - **DOWNLOAD ALL**.
- После окончания прошивки дважды нажимаем красную кнопку и вытаскиваем флешку. Терминал перезапустится.
- Осталось дождаться загрузки UPOS.

## <a id="4">Видео</a>

<video width="320" height="180" controls>
    <source src="/content/pax-s90/video/PAX S90.mp4" type="video/mp4" />
    Ваш браузер не поддерживает видео тег.
</video>
