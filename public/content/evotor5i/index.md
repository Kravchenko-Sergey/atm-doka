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

| Модель    | МЭ      | OC     | EvoPP | UposNative | UPOS          |
| --------- | ------- | ------ | ----- | ---------- | ------------- |
| 520 и 521 | 1.8.4.1 | 4.9.11 | 2.1.8 | 1.105.31   | 33.39.04 (АН) |
| 522       | 3.1.4.1 | 4.9.11 | 2.1.8 | 1.105.31   | 33.39.04 (АН) |

</div>

## <a id="2">Прошивка</a>

## <a id="2.1" class="text-2xl">Что понадобится?</a>

- Флешка в формате FAT32
- [Файл прошивки](https://disk.yandex.ru/d/eB9BL5llaTbtcw)

## <a id="2.2" class="text-2xl">План действий</a>

- Включите смарт-терминал и подключите его к интернету.
- Очистите файловую систему. Перейдите в
  **Обслуживание кассы** → **Эквайринг** или **Эвотор.PAY** → **Файловая система** → **Форматировать**.
- Загрузите обновления платёжного модуля. Перейдите в
  **Обслуживание кассы** → **Эквайринг** → **Прошивка** → **Запрос на обновление**.
- После обновления проверьте, какая версия прошивки установлена. Зайдите в раздел
  **Настройки** → **Обслуживание кассы** → **Эквайринг** → **Общая информация**.
- На данный момент актуальная версия эквайринга для 520 и 521 - **1.8.2.1**, для 522 - **3.1.2.1**.
- [Скачайте файл прошивки](https://disk.yandex.ru/d/eB9BL5llaTbtcw). На данный момент актуальная версия прошивки - **4.9.11**.
- Подготовьте флешку в формате FAT32.
- Поместите файл прошивки в корень флешки.
- Включите кассу.
- Вставьте флешку в кассу. Устройство автоматически начнёт прошивку. На экране появится окно **Обновление системы**.
- Нажмите на **Проверить и установить**.
- Касса начнет расшифровывать файл с обновлением, это займет некоторое время. После успешной установки касса сама перезагрузится. Подождите еще 1-2 минуты и вытащите флешку.
