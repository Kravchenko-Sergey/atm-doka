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

| Модель             | UPOS               | Telium OS |
| ------------------ | ------------------ | --------- |
| ICT2X0             | 33.18.03           | 9.32.3v   |
| ICT2X0 + Kozen P12 | 33.42.02 (ОЭ) (АН) | 9.32.3v   |

</div>

## <a id="2">Прошивка</a>

## <a id="2.1" class="text-2xl">Что понадобится?</a>

- Флешка в формате FAT32
- **[Папка с файлами](https://disk.yandex.ru/d/-L6rGWh_bGYcog)**

## <a id="2.2" class="text-2xl">План действий</a>

- Включаем терминал.
- Присоединяем флешку.
- Одновременно нажимаем желтую кнопку и точку. Держим до перезагрузки.
- Зажимаем **F4**. На экране терминала должна появиться надпись **USB MASS STORAGE**.
- Ждём появления меню. Выбираем **FLASHCLEAN**.
- Ждём. На экране должна появиться надпись **Software Activate OK**. Терминал перезагрузится. После перезагрузки на экране должна появиться надпись **LLT**.
- Одновременно нажимаем желтую кнопку и точку. Держим до перезагрузки.
- Зажимаем **F4**. На экране терминала должна появиться надпись **USB MASS STORAGE**.
- Ждём появления меню. Выбираем файл ОС - **9_32_3V**.
- Дожидаемся загрузки файлов.
- Ждём. На экране должна появиться надпись **Software Activate OK**. Терминал перезагрузится.
- Одновременно нажимаем желтую кнопку и точку. Держим до перезагрузки.
- Зажимаем **F4**. На экране терминала должна появиться надпись **USB MASS STORAGE**.
- Ждём появления меню. Выбираем файл **Stempel**.
- Дожидаемся загрузки файлов.
- Ждём. На экране должна появиться надпись **Software Activate OK**. Терминал перезагрузится.
- Зажимаем **F4**. На экране терминала должна появиться надпись **USB MASS STORAGE**.
- Ждём появления меню. Выбираем файл с моделью нашего терминала.
- Ждём. На экране должна появиться надпись **Software Activate OK**. Терминал перезагрузится.
- Осталось дождаться загрузки UPOS.

## <a id="2.3" class="text-2xl">Видео</a>

<video width='320' height='180' controls class="w-full rounded-xl md:w-[32.5%]">
    <source src='/content/ingenico-ict220-ict250/video/ICT220-ICT250.mp4' type='video/mp4' />
</video>
