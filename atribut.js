onclick - нажатие мышкой;
onmouseover - наведение мышкой;
onmouseout - уход курсора с элемента.

http://theory.phphtml.net/javascript/pages/attrs.html

В следующем примере по нажатию мышкой на кнопку выполнится функция alert:
<input type="submit" onclick="alert('!')">
--------
<input type="submit" onclick="func1(); func2();">
function func1()
{
	alert('1');
}

function func2()
{
	alert('2');
}
----------------------------- getElementById ---------------------------------
в переменной elem у нас лежит ссылка на элемент с атрибутом id в значении test. 
Сама переменная elem является объектом.

Этот объект и тег HTML страницы связаны друг с другом - мы можем поменять какие-либо 
свойства объекта elem и при этом увидим изменения на HTML странице, 
которые произойдут с полученным нами элементом.

<input type="text" value="ok" id="test">
<input type="submit" onclick="func()">

function func()
{
	var elem = document.getElementById('test');
	alert(elem.value); //выведет '!'
	alert(elem.id); //выведет 'test'
	alert(elem.type); //выведет 'text'
}
-------------------------
Можно не только считывать значения атрибутов, но и изменять их. Чтобы, к примеру, 
поменять значение атрибута value, нужно просто присвоить его конструкции elem.value:

function func()
{
	var elem = document.getElementById('test');
	elem.value = 'www'; //присвоим новое значение атрибуту value
}
--------------------------
можно не вводить переменную elem, а строить цепочку из точек таким образом:
function func()
{
	alert(document.getElementById('test').value); //выведет '!'
}
--------------------------
Таким же образом (цепочкой) можно производить и перезапись атрибутов:
function func()
{
	document.getElementById('test').value = 'www';
}
---------------------------
я ввел переменную elem и могу считывать любое количество атрибутов, 
при этом getElementById вызывается только один раз:
function func()
{
	var elem = document.getElementById('test');
	elem.value = 'www';
	elem.type = 'submit';
}
--------------------------- Исключения: атрибуты class и for -----------------------
слово "class" является специальным в JavaScript и поэтому мы не можем просто написать elem.class, 
чтобы считать значение атрибута class. Вместо этого следует писать elem.className.

<input type="text" class="aaa bbb" id="test">
<input type="submit" onclick="func()">

function func()
{
	var elem = document.getElementById('test');
	alert(elem.className);	//aaa bbb
}


атрибуту for (<label for="...">) соответствует свойство с названием htmlFor.
-------------------------------------------------------------
this - указывает на текущий элемент (элемент в котором произошло событие). 
Причем указывает так, будто этот элемент уже получен методом getElementById.

<input type="submit" onclick="func('test1')" id="test1" value="input1">
<input type="submit" onclick="func('test2')" id="test2" value="input2">
<input type="submit" onclick="func('test3')" id="test3" value="input3">

function func(id)
{
	var elem = document.getElementById(id);
	alert(elem.value);
}
--------------------------------- this ---------------------------------
Сделаем так, что каждый инпут будет выводить свое содержимое по нажатию. 
Для этого параметром функции передадим объект this, вот так: func(this).

Этот this - это уже готовая ссылка на объект. То есть если я кликаю на первый инпут - в this 
окажется ссылка на него, если на второй инпут - то на него, и так далее.

<input type="submit" onclick="func(this)" value="input1">
<input type="submit" onclick="func(this)" value="input2">
<input type="submit" onclick="func(this)" value="input3">

function func(elem)
{
	alert(elem.value);
}

-------------------------------- Основы работы с CSS -------------------------------
В JavaScript работа с CSS свойствами происходит путем изменения значения атрибута style для элемента. 
К примеру, чтобы поменять цвет нужно построить следующую цепочку - elem.style.color - 
и присвоить ей нужное значение цвета:

<input type="text" value="!" id="test">
<input type="submit" onclick="func()">

function func()
{
	var elem = document.getElementById('test');
	elem.style.color = 'red';
}
---- sau ----
function func()
{
	document.getElementById('test').style.color = 'red';
}
----------------------------------------------
Существует много CSS свойств, которые пишутся через дефис, 
например, font-size. В этом случае оно преобразуется в fontSize:

function func()
{
	var elem = document.getElementById('test');
	elem.style.fontSize = '15px';
}
-----------------------------------------------
свойство float является исключением (оно является специальным в JavaScript) 
и вместо него следует писать cssFloat:

function func()
{
	var elem = document.getElementById('test');
	elem.style.cssFloat = 'left';
}