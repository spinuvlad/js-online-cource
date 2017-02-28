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
---------------------------- Работа с формами (document.forms) -------------------------
Можно получить все HTML формы на странице через document.forms. 
В результате мы получим массив форм, будто он был получен с помощью getElementsByTagName 
(точнее это будет не массив, а псевдомассив (или коллекция) свойств).
/*
<body>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
document.forms[0].innerHTML = '!';
/*
<body>
	<form>
		!
	</form>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
-------------------------
var forms = document.forms;
for (var i = 0; i < forms.length; i++)
{
  forms[i].innerHTML = "!";
}
/*
<body>
	<form>
		!
	</form>
	<form>
		!
	</form>
</body>
*/
------------------- document.forms[i].elements ------------------
document.forms[i].elements - можно найти общее количество форм на странице.
если форме дать имя test, то к ней можно обратиться так - document.forms['test'] или так - document.forms.test.

В следующем примере форме с именем form1 поставим текст '!', 
а форме с именем form2 - текст '?' (двумя разными способами):
/*
<body>
	<form name="form1">
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form name="form2">
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
document.forms.form1.innerHTML = '!';
document.forms['form2'].innerHTML = '?';
/*
<body>
	<form name="form1">
		!
	</form>
	<form name="form2">
		?
	</form>
</body>
*/
----------------------- document.forms[1].elements[0].value = '!' ---------------------
У каждой формы есть свойство elements, которое содержит массив свойств формы. 
С его помощью можно обратиться к определенному свойству формы по его номеру.

Для примера давайте обратимся к форме номер 1, а затем к ее свойству номер 0:
/*
<body>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
document.forms[1].elements[0].value = '!';
/*
<body>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form>
		<input value="!">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
--------------
var elements = document.forms[1].elements;
for(var i = 0; i < elements.length; i++)
{
  elements[i].value = '!';
}
/*
<body>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form>
		<input value="!">
		<input value="!">
		<input value="!">
	</form>
</body>
*/
-------------------------------
К свойствам формы, так же, как и к самим формам, можно обращаться по имени из атрибута name:
/*
<body>
	<form name="form1">
		<input value="1" name="input1">
		<input value="2" name="input2">
		<input value="3" name="input3">
	</form>
</body>
*/
document.forms.form1.elements.input1.value = '!';
/*
<body>
	<form name="form1">
		<input value="!" name="input1">
		<input value="2" name="input2">
		<input value="3" name="input3">
	</form>
</body>
*/
