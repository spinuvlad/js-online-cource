-------------------------- innerHTML ----------------------------
/*
<p id="test">Текст абзаца.</p>
<input type="submit" onclick="func()">
*/
function func()
{
  var elem = document.getElementById('test');
  elem.innerHTML = '!';
}
//<p id="test">!</p>
------------------------------
Можно записывать не только текст, но и теги:
/*
<p id="test">Текст абзаца.</p>
<input type="submit" onclick="func()">
*/
function func()
{
  var elem = document.getElementById('test');
  elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
}
//в нашем случае текст станет жирным
-------------------------- outerHTML ---------------------------
outerHTML перезаписывает не только внутренний текст тега, но и сам тег.
/*
<p id="test">Текст абзаца.</p>
<input type="submit" onclick="func()">
*/
function func()
{
	var elem = document.getElementById('test');
	elem.outerHTML = '<b>!</b>';
}
/*
codul html devine astfel:
<b>!</b>
<input type="submit" onclick="func()">
*/
-------------------------- getElementsByTagName -------------------------
getElementsByTagName получает группу тегов по их имени. 
Например, можно получить все абзацы p или все заголовки h2.
Учтите только один нюанс - наш метод возвращает не одно свойство, а массив свойств. 
Получим, к примеру, все абзацы в переменную elems:
/*
<p>Текст абзаца.</p>
<p>Текст абзаца.</p>
<p>Текст абзаца.</p>
<input type="submit" onclick="func()">
*/
function func()
{
	var elems = document.getElementsByTagName('p');
}
/*
В переменной elems теперь лежит массив свойств, это значит, 
что elems[0] - это первый абзац, elems[1] - второй и так далее
*/
function func()
{
	//Получаем массив абзацев в переменную elems:
	var elems = document.getElementsByTagName('p');

	elems[0].innerHTML = '1'; //первому абзацу ставим текст '1'
	elems[1].innerHTML = '2'; //второму абзацу ставим текст '2'
	elems[2].innerHTML = '3'; //третьему абзацу ставим текст '3'
}
----------------------
В следующем примере мы сменим содержимое всех абзацев на страницы на '!', 
воспользовавшись для этого циклом for:
function func()
{
	var elems = document.getElementsByTagName('p');
	for (var i = 0; i < elems.length; i++)
	{
		elems[i].innerHTML = '!';
	}
}
----------------------------- document -------------------------
К примеру, к тегу <body> можно обратиться так: document.body, 
а к тегу <head> - вот так: document.head. 
Такое работает не для всех тегов, а только для избранных.
если скрипт находится в <head>, то в нем недоступен document.body.
/*
<html>
	<head>
		<script>
			alert(document.body); //null, так как body еще нет
		</script>
	</head>
	<body>
		<script>
			alert(document.body); //body уже есть
		</script>
	</body>
</html>
*/
