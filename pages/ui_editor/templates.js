var templates = {
	'Справка (о программе)' : '{"global":{"title":"О программе UI Editor"},"body":{"container":"true","css":"height: auto;","title":"О программе UI Editor","children":[{"tag":"header","innerHTML":"UI Editor","edit":"true","css":"padding: 5px 10px;margin: 5px;display: block;font-weight: bold;font-size: 20px;text-align: right;","draggable":"true"},{"tag":"paragraph","innerHTML":"UI Editor - это инструмент создания и настройки пользовательского интерфейса в рамках NW.js IDE.<br>Редактор позволяет разрабатывать интерфейсы любой сложности, используя принцип редактирования \\\"drag &amp; drop\\\".<br>Далее, полученный интерфейс можно интегрировать в разрабатываемую на JavaScript программу.","edit":"true","css":"padding:5px 10px;margin:5px;","draggable":"true","contenteditable":"false","children":[{},{},{"draggable":"true"},{"draggable":"true"}]},{"tag":"div","container":"true","css":"padding: 5px 10px;margin: 5px;text-align: center;","draggable":"true","children":[{"tag":"button","type":"button","value":"Понятно","css":"padding:5px 10px;margin:5px;","draggable":"true","events":"click:close;"}]}]}}',
	'Форма отзыка' : '{"global":{"title":"Main Window"},"body":{"container":"true","css":"background-color: #354764;color: #AAC4DE;","children":[{"tag":"header","innerHTML":"Заголовок","edit":"true","css":"padding:5px 10px;margin:5px;display:block;font-weight:bold;font-size:20px;text-align:center;","draggable":"true"},{"tag":"div","container":"true","css":"padding: 5px 10px;margin: 5px;display: flex;","draggable":"true","children":[{"tag":"label","innerHTML":"Ваш текст","edit":"true","css":"padding:5px 10px;margin:5px;display:inline-block;","draggable":"true"},{"tag":"area","css":"padding: 5px 10px;margin: 5px;flex: 1;background-color: #455774;color: #AAC4DE;border: 1px solid #aaaaaa;border-radius: 10px;","draggable":"true","rows":"15","id":"your_text","placeholder":"Hello! I\'m Mike!"}]},{"tag":"div","container":"true","css":"padding: 5px 10px;margin: 5px;text-align: center;","draggable":"true","children":[{"tag":"button","type":"button","value":"Сохранить","css":"padding: 5px 10px;margin: 5px;background-color: #455774;color: #AAC4DE;border-radius: 10px;border: 1px solid #aaaaaa;font-size: 20px;","draggable":"true"}]}]}}'
};