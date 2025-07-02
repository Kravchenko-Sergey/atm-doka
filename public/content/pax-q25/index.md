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

| UPOS     | Prolin OS |
| -------- | --------- |
| 33.33.07 | 2.7.136   |

</div>

## <a id="2">Прошивка</a>

## <a id="2.1" class="text-2xl">Что понадобится?</a>

- Компьютер
- [Папка с файлами](https://disk.yandex.ru/d/jt5WS_fWPZHaUg)
- Комплектный провод
- [Драйвер](https://disk.yandex.ru/d/0XtlL9aZeqnAHA)

## <a id="2.2" class="text-2xl">План действий</a>

- Проверяем установлен ли драйвер на компьютере. Заходим в диспетчер устройств. Если терминал не присвоил себе порт, то устанавливаем драйвер.
- Подключаем терминал к порту USB компьютера.
- Многократно нажимаем на двойку до появления системного меню.
- Выбираем первый пункт - **System Config**.
- Вводим пароль - **123456**.
- Нажимаем 4, чтобы включить **XCB Service**.
- В появившемся меню выбираем пункт 3 - **USB**.
- В скачанной на компьютер [папке](https://disk.yandex.ru/d/jt5WS_fWPZHaUg) запускаем программу **Starter**.
- Вводим номер порта, на котором подключен наш терминал. Номер порта можно посмотреть в диспетчере устройств.
- Выбираем нужную нам прошивку.
- Дожидаемся окончания загрузки.
- На терминале выбираем 4 пункт - **XCB Service**.
- Нажимаем на единицу - **Close Service**.
- Несколько раз нажимаем на красную кнопку и выключаем терминал.
- После перезагрузки терминала остаётся дождаться загрузки UPOS.

## <a id="2.3" class="text-2xl">Видео</a>

<video width='320' height='180' controls class="w-full rounded-xl md:w-[32.5%]">
    <source src='/content/pax-q25/video/PAX Q25.mp4' type='video/mp4' />
</video>
