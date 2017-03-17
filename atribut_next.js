По сути атрибут onclick является таким же атрибутом, как, к примеру, value. 
И, если мы могли менять атрибут value таким образом - elem.value, то точно также мы можем менять атрибут onclick.

Если мы сделаем так: elem.onclick = func, то привяжем к элементу elem функцию func.

/*
<input type="submit" id="test">
*/

var elem = document.getElementById('test');
elem.onclick = func;
function func()
{
	alert('!');
}

если функция написана без круглых скобок, например func, то она возвращает свой исходный код, 
а если с круглыми скобками, например func(), то возвращает результат работы функции.
alert(func()); //вы увидите строку '!'
alert(func); //а сейчас вы увидите исходный код функции func!

elem.onclick = func - в данном случае я в атрибут onclick записываю исходный код функции, а не ее результат - и все работает. 
Если вы сделаете так - elem.onclick = func() - то запишите результат функции и ничего не будет работать.

когда мы использовали его таким образом window.setInterval(timer, 1000) - в этом случае 
мы также писали функцию timer без круглых скобок, потому что нас интересовал не результат работы функции, а ее код.
-------------------------------------
по клику каждый инпут выдает алертом текст '!':
/*
<input type="submit" value="1">
<input type="submit" value="2">
<input type="submit" value="3">
<input type="submit" value="4">
<input type="submit" value="5">
*/
var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++)
{
	elems[i].onclick = func;
}

function func()
{
	alert('!');
}
---------------------------- this ----------------------------
this - это будто переменная elem, полученная через getElementById. 
К примеру, elem.value позволяет обратиться к атрибуту value, значит this.value будет делать то же самое.

var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++)
{
	elems[i].onclick = func;
}

function func()
{
	alert(this.value); //изменение только здесь
}
-------------------------------- Недостатки
Недостатком такого способа будет то, что мы можем привязать к событию только одну функцию. 
Если попытаться сначала записать одну функцию, а потом другую - у нас ничего не получится.

эту проблему легко обойти, если ввести еще и третью функцию func3. 
Привяжем к атрибуту onclick только func3, а она пусть вызывает func1 и func2 у себя внутри:

var elem = document.getElementById('test');

elem.onclick = func3; //тут привязывается только функция func3

//func3 вызывает func1 и func2:
function func3()
{
	func1();
	func2();
}

function func1()
{
	alert('1');
}

function func2()
{
	alert('2');
}
-------------------------------- addEventListener -------------------------------
Метод addEventListener первым параметром принимает название события, а вторым - функцию, которую нужно привязать к этому событию. 
При этом имя события пишется без 'on': 'click' вместо 'onclick', 'mouseover' вместо 'onmouseover' и так далее.
/*
<input type="submit" id="test">
*/
var elem = document.getElementById('test');
elem.addEventListener('click', func);

function func()
{
	alert('!');
}
----------------
var elem = document.getElementById('test');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);

function func1()
{
	alert('1');
}
function func2()
{
	alert('2');
}
// сработает и функция func1, и функция func2.
------------------------ this для addEventListener ----------------------
/*
<input type="submit" id="test1" value="Кнопка 1">
<input type="submit" id="test2" value="Кнопка 2">
*/
var elem1 = document.getElementById('test1');
elem1.addEventListener('click', func);
var elem2 = document.getElementById('test2');
elem2.addEventListener('click', func);

function func()
{
	alert(this.value);
}
-------
var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++)
{
	elems[i].addEventListener('click', func);
}

function func()
{
	alert(this.value);
}
------------------------------- removeEventListener -------------------------
если, к примеру, к событию onclick привязаны функции func1 и func2, 
то мы сможем отвязать функцию func1, не затрагивая func2 и наоборот.
/*
<input type="submit" id="test">
*/
var elem = document.getElementById('test');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);

elem.removeEventListener('click', func1);
elem.removeEventListener('click', func2);

function func1()
{
	alert('1');
}
function func2()
{
	alert('2');
}
function func3()
{
	alert('3');
}
// сработает функция func3, а первые две - нет.
-----------------------------
будем удалять привязку внутри самих функций.
Пусть при первом клике на кнопку сработают все 3 функции и при этом func1 и func2 отвяжутся от элемента. 
И при следующих кликах будет срабатывать только функция func3, которую мы не отвязываем.

var elem = document.getElementById('test');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);

function func1()
{
	alert('1');
	//Отвяжем функцию func1:
	this.removeEventListener('click', func1);
}
function func2()
{
	alert('2');
	//Отвяжем функцию func2:
	this.removeEventListener('click', func2);
}
function func3()
{
	alert('3');
}
// 1, 2, 3, 3, ..., 3
--------------------------------
/*
<input type="submit" value="Кнопка 1">
<input type="submit" value="Кнопка 2">
<input type="submit" value="Кнопка 3">
*/

var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++)
{
	elems[i].addEventListener('click', func);
}

function func()
{
	alert(this.value);
	this.removeEventListener('click', func);
}