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

| UPOS     | OS         |
| -------- | ---------- |
| 33.33.07 | VR0028-201 |

</div>

## <a id="2">Прошивка</a>

## <a id="2.1" class="text-2xl">Что понадобится?</a>

- Флешка в формате FAT32
- Переходник USB мама - mini USB папа
- [Папка с файлами](https://disk.yandex.ru/d/MS548Ff0grXoUw)

## <a id="2.2" class="text-2xl">План действий</a>

- Включаем терминал.
- Подключаем флешку с помощью переходника.
- Перезагружаем терминал.
- Многократно нажимаем красную кнопку до появления системного меню.
- Удаляем старый UPOS - кнопка **2**.
- Подтверждаем удаление.
- Нажимаем **0**.
- В появившемся меню выбираем пункт 1 - **Download AP**.
- Далее выбираем пункт 2 - **USB Disk**.
- После завершения прошивки нажимаем любую кнопку.
- Дважды нажимаем красную кнопку.
- На экране должна появиться надпись **[Default Select]**.
- Если её нет, нажимаем **1**.
- Нажимаем зелёную кнопку.
- Осталось дождаться загрузки UPOS.

## <a id="2.3" class="text-2xl">Видео</a>

<video width="320" height="180" controls class="w-full rounded-xl md:w-[32.5%]">
  <source src="/content/castles-vega3000-mob/video/Castles vega 3000 GPRS.mp4" type="video/mp4" />
</video>
