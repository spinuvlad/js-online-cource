------------ getAttribute, setAttribute, removeAttribute и hasAttribute -------------
getAttribute считывает значение указанного атрибута (и атрибут class тут уже не будет исключением):
/*
<input type="text" value="!" id="test">
<input type="submit" onclick="func()">
*/
function func()
{
	var elem = document.getElementById('test');
	alert(elem.getAttribute('value'));
}
//va alerta "!"
----------------------- setAttribute
setAttribute - записывает новое значение в атрибут
А теперь запишем новое значение 'www' в атрибут value:
function func()
{
	var elem = document.getElementById('test');
	elem.setAttribute('value', 'www');
}
//va inlocui "!" cu "www"
----------------------- removeAttribute
removeAttribute удаляет атрибут совсем
function func()
{
	var elem = document.getElementById('test');
	elem.removeAttribute('value');
}
//va sterge complet atributul "value"
----------------------- hasAttribute
hasAttribute проверяет наличие или отсутствие атрибута у свойства.
function func()
{
	var elem = document.getElementById('test');
	alert(elem.hasAttribute('value')); //выведет true
}

------------------------- getElementsByClassName ----------------------
getElementsByClassName получает свойства по их классу (то есть по содержимому атрибута class).
нельзя обратиться ко всем свойствам одновременно, нужно использовать цикл. 
В примере ниже мы получаем все свойства с классом www и ставим им текст '!':
/*
<p class="www">Текст абзаца.</p>
<p class="www">Текст абзаца.</p>
<p class="www">Текст абзаца.</p>
<p>Текст абзаца.</p>
<input type="submit" onclick="func()">
*/
function func()
{
  var elems = document.getElementsByClassName('www');
  for (i = 0; i < elems.length; i++)
  {
    elems[i].innerHTML = '!';
  }
}
/*
<p class="www">!</p>
<p class="www">!</p>
<p class="www">!</p>
<p>Текст абзаца.</p>
<input type="submit" onclick="func()">
*/
----------------------- CSS: querySelector и querySelectorAll ----------------------------
querySelector принимает не id свойства, а любой селектор, а возвращает ссылку на первoe найденнoe свойство 
(если под селектор попадает много свойств, то она вернет ссылку на первoe свойство).

В примере ниже с помощью querySelector мы получаем инпут с классом test и выводим на экран содержимое его атрибута value:
/*
<input type="text" value="!" class="test">
<input type="submit" onclick="func()">
*/
function func()
{
	var elem = document.querySelector('input#test');
	alert(elem.getAttribute('value'));  //!
}

function func()
{
	var elem = document.querySelector('#test');
	alert(elem.getAttribute('value'));	//!
}
------------------ querySelectorAll
querySelectorAll получает группу свойств и работать с ними нужно как с группой (перебирать циклом и т.п.). 
В примере ниже мы получаем все свойства с классом www и ставим им текст '!':
/*
<p class="www">Текст абзаца.</p>
<p class="www">Текст абзаца.</p>
<p class="www">Текст абзаца.</p>
<p>Текст абзаца.</p>
<input type="submit" onclick="func()">
*/
function func()
{
	var elem = document.querySelectorAll('p.www');
	for (var i = 0; i < elem.length; i++)
	{
	  elem[i].innerHTML = '!';
	}
}
/*
<p class="www">!</p>
<p class="www">!</p>
<p class="www">!</p>
<p>Текст абзаца.</p>
<input type="submit" onclick="func()">
*/
----------------------------- Атрибуты data- -----------------------------
В языке HTML5 разрешено добавлять свои атрибуты тегам, при этом они должны начинаться с data-, 
а затем должно идти любое название атрибута, которое вам удобно.

Если вы хотите обратиться к таким атрибутам как с свойствам объекта, то это делается не на прямую, 
а при помощи специального свойства dataset:
/*
<div id="elem" data-price="1000" data-product-number="5">
	Товар Джинсы
</div>
<input type="submit" onclick="func()">
*/
function func()
{
	var elem = document.getElementById('elem');

	alert(elem.dataset.price); //выведет 1000
	alert(elem.dataset.productNumber); //выведет 5
}
--------------------------
К таким атрибутам можно также обращаться с помощью методов типа getAttribute, 
в этом случае следует писать полное название атрибута:

function func()
{
	var elem = document.getElementById('elem');

	alert(elem.getAttribute('data-price')); //выведет 1000
	alert(elem.getAttribute('data-product-number')); //выведет 5
}

------------------!!! IMPORTANT !!!---------------------
При изменении свойства elem.value атрибут elem.getAttribute('value') не меняется:
/*
<input id="test" type="text" value="old">
<input type="submit" onclick="func()">
*/
function func()
{
	var elem = document.getElementById('test');

	elem.value = 'new'; //поменяли свойство
	alert(elem.getAttribute('value')); //выведет 'old' - не изменилось!
}

То есть, изменение свойства на атрибут не влияет, он остается таким же.
А вот изменение атрибута обновляет свойство:
function func()
{
	var elem = document.getElementById('test');

	elem.setAttribute('value', 'new'); //поменяли атрибут
	alert(elem.value); //выведет 'new' - elem.value изменилось!
}

Получается, что атрибут elem.getAttribute('value') хранит исходное значение даже после того, 
как пользователь заполнил поле и свойство изменилось.

Например, можно взять изначальное значение из атрибута и сравнить со свойством, чтобы узнать, 
изменилось ли значение. А при необходимости и перезаписать свойство атрибутом, отменив изменения.
