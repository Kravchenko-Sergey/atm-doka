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

| Модель                                                            | UPOS                        | OS Monitor+                       |
| ----------------------------------------------------------------- | --------------------------- | --------------------------------- |
| S200 PCI PED 3 \* <br>S200 PCI PED 5 \*\* <br>VX520 + S200 \*\*\* | 33.18.03 \*\*\*<br>33.33.07 | 3.12 (любые 3.1Х) \*<br>5.0X \*\* |

</div>

## <a id="2">Что понадобится?</a>

- Программа [PC Loader](https://disk.yandex.ru/d/qf8P-Mc4FOyUcQ)
- Переходник
- [Файл прошивки](#)

## <a id="3">Как прошить?</a>

- Подключаем терминал.
- При включении многократно нажимаем кнопку **F1**.
- После того как на экране появится меню, нажимаем красную кнопку.
- На компьютере запускаем программу **PC Loader**.
- Заходим в **Setting**.
- В поле **Serial Port** выбираем порт, на котором подключен наш терминал. Номер порта можно посмотреть в диспетчере устройств.
- Заходим в **Application**.
- Указываем путь до файла прошивки.
- Нажимаем **APP Info**.
- Нажимаем **Refresh**.
- Все найденные файлы удаляем. Нажимаем **Delete**.
- После того как файлы удалятся, нажимаем **Download**.
- Дожидаемся окончания прошивки.
- Нажимаем красную кнопку.
- Осталось дождаться загрузки UPOS.

## <a id="4">Видео</a>

<video width='320' height='180' controls>
    <source src='/content/pax-s200/video/PAX S200.mp4' type='video/mp4' />
    
</video>
