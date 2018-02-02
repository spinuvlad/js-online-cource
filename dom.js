------------------------- classList ------------------------
Свойство classList содержит псевдомассив который содержит все классы элемента. Кроме того, 
у classList есть несколько методов для работы с классами.
псевдомассив: http://theory.phphtml.net/javascript/pages/pseudo-array.html

элемент.classList //Псеводомассив классов элемента 
элемент.classList.add('класс') //Добавляет указанный класс 
элемент.classList.remove('класс') //Удаляет указанный класс 
элемент.classList.contains('класс') //Проверяет наличие указанного класса 
элемент.classList.toggle('класс') //Добавляет класс, если его нет, удаляет если есть 
elem.classList.length //nr elementelor in atributul "class"
---------------- 
добавим элементу класс 'newClass':
/*
<p id="element" class="class"></p>
*/
var element = document.getElementById('element');
element.classList.add('newClass');
alert(element.getAttribute('class'));
-----------------
удалим класс 'newClass':

var element = document.getElementById('element');
element.classList.remove('newClass');
------------------
Проверим есть ли у элемента класс 'test':
/*
<p id="element" class="test"></p>
*/
var element = document.getElementById('element');
var checkClass = element.classList.contains('test');
document.write(checkClass);
//true
------------------------------ cssText ------------------------
Свойство cssText позволяет задать CSS стили массово одной строкой. 
При этом все содержимое атрибута style перезаписывается.
/*
<p id="element">Тестовый элемент</p>
*/
var element = document.getElementById('element');
element.style.cssText = 'color: red; font-size: 20px;';
-----------------
Чтобы предыдущие стили не перезаписывались, можно сделать так:
/*
<p id="element" style="background: green">Тестовый элемент</p>
*/
var element = document.getElementById('element');
element.style.cssText += 'color: red; font-size: 20px;';
//	<p id="element" style="background: green; color: red; font-size: 20px;">Тестовый элемент</p>
---------------------------- tagName ---------------------------
Свойство tagName содержит имя тега в верхнем регистре (большими буквами).
// <div id="element"></div>
var element = document.getElementById('element');
document.write(element.tagName);
// DIV
---------------------------- createElement --------------------------- Вставка элементов
Метод createElement позволяет создать новый элемент, передав в параметре имя тега.
После создания с элементом можно работать как с обычным элементом, а также его можно добавить на страницу.
/*
<div id="parent"></div>
*/
var parent = document.getElementById('parent');

var p = document.createElement('p');
p.innerHTML = 'Содержимое абзаца';

parent.appendChild(p);
/*
<div id="parent">
	<p>Содержимое абзаца</p>
</div>
*/
------------------
//<table id="table"></table>

var table = document.getElementById('table');

for (var i = 1; i <= 3; i++) {
	var tr = document.createElement('tr'); //создаем tr-ку

	//Заполняем tr-ку td-шками:
	for (var j = 1; j <= 3; j++) {
		var td = document.createElement('td'); //создаем td-шку
		td.innerHTML = j; //пишем в нее текст

		tr.appendChild(td); //добавляем созданную td-шку в конец tr-ки
	}

	table.appendChild(tr); //добавляем созданную tr-ку в конец таблицы
}
-------------------------
Создадим картинку:
/*
<div id="parent"></div>
*/
var parent = document.getElementById('parent');

var img = document.createElement('img');
img.src = '/img/js.png';
img.alt = 'JavaScript';
img.title = 'JavaScript';

parent.appendChild(img);
/*
<div id="parent">
	<img src="/img/js.png" alt="JavaScript" title="JavaScript">
</div>
*/
------------------------------- appendChild ---------------------------- Вставка элементов
Метод appendChild позволяет вставить в конец элемента переданный элемент. 
Чаще всего используется после создания элемента с помощью createElement.

Создадим абзац, и поместим его на страницу в блок с id равным parent:
/*
<div id="parent"></div>
*/
var parent = document.getElementById('parent');

var img = document.createElement('img');
img.src = '/img/js.png';

parent.appendChild(img);

/*
<div id="parent">
	<img src="/img/js.png">
</div>
*/
------------------------------ insertBefore ----------------------------- Вставка элементов
Метод insertBefore позволяет вставить элемент в произвольное место элемента 
(перед переданным дочерним элементом). 
Используется, например, после создания элемента с помощью createElement.

Создадим абзац, и поместим его до второго абзаца:
/*
<div id="parent">
	<p>Абзац</p>
	<p>Абзац</p>
	<p>Абзац</p>
</div>
*/
var parent = document.getElementById('parent');

var p = document.createElement('p');
p.innerHTML = 'Содержимое нового абзаца';

parent.insertBefore(p, parent.children[1]);	// parent.children[1] - это дочерним элемент, до которого нужно вставить элемент.
/*
<div id="parent">
	<p>Абзац</p>
	<p>Содержимое нового абзаца</p>
	<p>Абзац</p>
	<p>Абзац</p>
</div>
*/
---------------------
Добавим параграф в начало элемента с id равным parent:
parent.insertBefore(p, parent.firstChild);

добавлять в начало элемента можно даже тогда, когда в нем нет дочерних элементов:
/*
<div id="parent"></div>
*/
var parent = document.getElementById('parent');

var p = document.createElement('p');
p.innerHTML = 'Содержимое нового абзаца';

parent.insertBefore(p, parent.firstChild);

/*
<div id="parent">
	<p>Содержимое нового абзаца</p>
</div>
*/
-------------------------------- insertAdjacentHTML ------------------------------ Вставка элементов
Метод insertAdjacentHTML позволяет вставлять HTML код в любое место страницы.

можно вставить html код без insertAdjacentHTML:
/*
<div id="element">
	<p>Абзац</p>
</div>
*/
var element = document.getElementById('element');
element.innerHTML +='<p>Новый абзац</p>';
/*
<div id="element">
	<p>Абзац</p>
	<p>Новый абзац</p>
</div>
*/
------------------------
insertAdjacentHTML мы добавили HTML код не затронув остальные элементы. 
Следовательно все назначенные события останутся. 
Помимо того такой способ более гибкий и эффективный.

var element = document.getElementById('element');
element.insertAdjacentHTML('beforeEnd', '<p>Новый абзац</p>');
/*
<div id="element">
	<p>Абзац</p>
	<p>Новый абзац</p>
</div>
*/
'beforebegin'
Before the element itself.
'afterbegin'
Just inside the element, before its first child.
'beforeend'
Just inside the element, after its last child.
'afterend'
After the element itself.
---------------------------------- children ------------------------------- Потомки
Свойство children хранит в себе псевдомассив дочерних элементов.

С помощью innerHTML выведем содержимое первого дочернего элемента блока 
с идентификатором "parent":

/*
<div id="parent">
	<p>Абзац 1</p>
	<p>Абзац 2</p>
</div>
*/
var parent = document.getElementById('parent');
console.log(parent.children[0].innerHTML);
// Абзац 1
----------------------------------
Также свойство childNodes содержит только непосредственных потомков элементов, 
то есть только тех, которые лежат непосредственно внутри элемента.

В данном примере у элемента с id 'parent' в свойстве children только один элемент, 
не смотря на то, что в этом элементе также находится один элемент.
/*
<div id="parent">
	<div>
		<p>Параграф</p>
	</div>
</div>
*/
var parent = document.getElementById('parent');
console.log(parent.children.length);
// 1
-----------------------------------
всех потомков переберем в цикле, и выведем их содержимое:

/*
<div id="parent">
	<p>Капуста</p>
	<p>Морковка</p>
	<p>Картошка</p>
	<p>Фасоль</p>
</div>
*/
var parent = document.getElementById('parent');
var childs = parent.children;

for (var i = 0; i < childs.length; i++){
  var msg = (i + 1) + '. ' + childs[i].innerHTML;
  document.write(msg + '<br>')
}
/*


Капуста

Морковка

Картошка

Фасоль
1. Капуста
2. Морковка
3. Картошка
4. Фасоль
*/
------------------------------- childNodes ------------------------------ Потомки
Свойство childNodes хранит в себе псевдомассив непосредственных потомков элементов 
(включая комментарии и текстовые узлы).
/*
<div id="parent">
	<p>Абзац</p>
	<!-- Коментарий -->
</div>
*/
var parent = document.getElementById('parent');
document.write(parent.childNodes.length);
// 5
-------------------
Свойство childNodes содержит всех потомков, в том числе и комментарии и текстовые узлы 
(текст, и отступы между тегами). 
Поэтому в предыдущем примере у элемента получилось 5 потомков.
/*
<div id="parent"><p>Абзац</p><!-- Коментарий --></div>
*/
var parent = document.getElementById('parent');
console.log(parent.childNodes.length);
 //2
 ------------------------------- firstElementChild ----------------------------- Потомки
 Свойство firstElementChild содержит первый дочерний элемент. 
 Если у элемента нет дочерних элементов - возвращается null.
 // firstChild - http://theory.phphtml.net/javascript/dom/firstChild.html
/*
 <div id="parent">
	<p>Первый элемент</p>
	<div>Последний элемент</div>
</div>
*/
var parent = document.getElementById('parent');
document.write(parent.firstElementChild.innerHTML);
 //Первый элемент
 ---------------
 // <div id="parent"></div>
 var parent = document.getElementById('parent');
document.write(parent.firstElementChild);
//null
---------------------------- lastElementChild --------------------------- Потомки
Свойство lastElementChild хранит в себе последний дочерний элемент. 
Если у элемента нет дочерних элементов возвращается null.
//lastChild - http://theory.phphtml.net/javascript/dom/lastChild.html
/*
<div id="parent">
	<p>Первый элемент</p>
	<div>Последний элемент</div>
</div>
*/
var parent = document.getElementById('parent');
document.write(parent.lastElementChild.innerHTML);
//Последний элемент
--------------------------- previousElementSibling ----------------------------- Соседи
previousElementSibling содержит соседа сверху (предыдущий элемент).
/*
<p>Один</p>
<p id="element">Два</p>
*/
var element = document.getElementById('element');
var prev = element.previousElementSibling;
document.write(prev.innerHTML);
//Один
--------------------------- nextElementSibling ---------------------------- Соседи
/*
<p id="element">Один</p>
<p>Два</p>
*/
var element = document.getElementById('element');
var next = element.nextElementSibling;
document.write(prev.innerHTML);
//Два
----------------------------- parentElement ------------------------------ Родители
Свойство parentElement содержит родительский элемент.
/*
<div id="parent">
	<p id="child"></p>
</div>
*/
var child = document.getElementById('child');
var parent = child.parentElement;
document.write(parent.id);
//parent
-------
var html = document.documentElement;
document.write(html.parentElement);
//null
---------------------------- parentNode ----------------------------- Родители
var html = document.documentElement;
document.write(html.parentNode);
//document
----------------------------- cloneNode --------------------------- клонирование
Метод cloneNode позволяет клонировать элемент и получить точную копию элемента. 
Которую затем можно вставить на страницу с помощью appendChild или других подобных методов.

В параметре получает true либо false. Если true, то клонирует элемент полностью, 
вместе со всем атрибутами и дочерними элементами. 
Если false - только сам элемент (без дочерних элементов).
/*
<div id="parent">
	<div class="block">
		<p>Первый абзац</p>
		<p>Второй абзац</p>
	</div>
</div>
*/
var parent = document.getElementById('parent');
var block = parent.querySelector('.block');

var clone = block.cloneNode(true);
parent.appendChild(clone);
/*
<div id="parent">
	<div class="block">
		<p>Первый абзац</p>
		<p>Второй абзац</p>
	</div>

	<div class="block">
		<p>Первый абзац</p>
		<p>Второй абзац</p>
	</div>
</div>
*/
------------------
var parent = document.getElementById('parent');
var block = parent.querySelector('.block');

var clone = block.cloneNode(true);
clone.children[0].innerHTML = 'Новое содержимое первого абзаца';
clone.children[1].innerHTML = 'Новое содержимое второго абзаца';

parent.appendChild(clone);
/*
<div id="parent">
	<div class="block">
		<p>Первый абзац</p>
		<p>Второй абзац</p>
	</div>

	<div class="block">
		<p>Новое содержимое первого абзаца</p>
		<p>Новое содержимое второго абзаца</p>
	</div>
</div>
*/
----------------------------- removeChild ----------------------------- Удаление
Метод removeChild позволяет удалить элемент. Применяется к родительскому элементу, 
с указанием элемента, что нужно удалить.
/*
<div id="parent">
	<p>Первый абзац</p>
	<p id="element">Второй абзац</p>
</div>
*/
var parent = document.getElementById('parent');
var element = document.getElementById('element');

parent.removeChild(element);
/*
<div id="parent">
	<p>Первый абзац</p>
</div>
*/
---------------------
Удалим первый абзац:
/*
<div id="parent">
	<p>Первый абзац</p>
	<p>Второй абзац</p>
</div>
*/
var parent = document.getElementById('parent');
parent.removeChild(parent.firstElementChild);
/*
<div id="parent">
	<p>Второй абзац</p>
</div>
*/
---------------------
Если нужно удалить элемент, но ссылки на его родителя нет, то можно поступить так:
/*
<div>
	<p>Первый абзац</p>
	<p id="element">Второй абзац</p>
</div>
*/
var element = document.getElementById('element');

element.parentNode.removeChild(element);
/*
<div id="parent">
	<p>Первый абзац</p>
</div>
*/

------------------------- closest -----------------------
Дан элемент #elem. Давайте найдем среди его родителей элемент с 
классом www и выведем на экран содержимое его атрибута id: 

<div id="parent" class="www">
	<div id="block">
		<p id="elem">Абзац</p>
	</div>
</div>

var elem = document.getElementById('elem');

var parent = elem.closest('.www')
document.write(parent.id); //parent
--------------------------contains-------------------------
Проверим, находится ли абзац #elem в блоке #parent: 

<div id="parent">
	<p id="elem"></p>
</div>

var parent = document.getElementById('parent');
var elem = document.getElementById('elem');

document.write(parent.contains(child)); //true
-----------------
<div id="parent"></div>
<p id="elem"></p>

var parent = document.getElementById('parent');
var elem = document.getElementById('elem');

document.write(parent.contains(elem)); //false
-------------------------matches----------------------------
Проверим, является ли наш элемент абзацем с классом www:

<p id="elem" class="www">Абзац</p>

var elem = document.getElementById('elem');
document.write(elem.matches('p.www')); //true

-------------------------Exercitii-----------------------------
 Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, 
 чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к 
 вставляемым li было привязано следующее событие: по нажатию на 
 li она должна вывести на экран свой текст.

var input = document.getElementById('input');

input.addEventListener('click', func);

function func(){
	var ul = document.getElementById('main');
	var arr = ['lu', 'ma', 'me', 'j', 'v', 's', 'd'];

	for (var i = 0; i < arr.length; i++){
		var li = document.createElement('li');
		li.innerHTML = arr[i];
		ul.appendChild(li);
		li.addEventListener('click', alertt);
	}
}

function alertt(){
	alert(this.innerHTML);
}
--------------------------------------------------------------
 Дан элемент ul, а в нем li #elem. Вставьте перед элементом 
 #elem новую li с текстом '!!!'. 

 var input = document.getElementById('input');

input.addEventListener('click', func);

function func(){
	var ul = document.getElementById('ul');
	var newLi = document.createElement('li');
	newLi.innerHTML = "!!!";
	ul.insertBefore(newLi, ul.children[0]); //sau ul.firstChild
}
-------------sau:
<ul id="ul">
	<li>Элемент</li>
	<li id="elem">Элемент #test</li>
	<li>Элемент</li>
</ul>

var ul = document.getElementById('ul');
var test = document.getElementById('elem');

var li = document.createElement('li');
li.innerHTML = '!!!';

ul.insertBefore(li, test);  
--------------------------------------------------------------
Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.

var input = document.getElementById('input');

input.addEventListener('click', func);

function func(){
	var elem = document.getElementById('elem');
	elem.insertAdjacentHTML('beforebegin','<span>!!!</span>');
}
-------------------------------------------------------------
 Дан элемент #elem. Вставьте после него span с текстом '!!!'.

 function func(){
	var elem = document.getElementById('elem');
	elem.insertAdjacentHTML('afterend','<span>!!!</span>');
}
-------------------------------------------------------------
	Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.

	function func(){
	var elem = document.getElementById('elem');
	elem.insertAdjacentHTML('afterbegin','<span>!!!</span>');
}
-------------------------------------------------------------
Дан элемент #elem. Найдите первого потомка этого элемента и 
сделайте его текст красного цвета.

function func(){
	var ul = document.getElementById('ul');
	var elem = ul.firstElementChild; //ul.firstElementChild.style.color = 'red';
	elem.style.color = 'red';
}
-----------------------------------------------------------
 Дан элемент #elem. Найдите последнего потомка этого 
 элемента и сделайте его текст красного цвета.

function func(){
	var ul = document.getElementById('ul');
	ul.lastElementChild.style.color = 'red';
}
-----------------------------------------------------------
Дан элемент #elem. Найдите всех потомков этого элемента 
и добавьте им в конец текст '!'. 

function func(){
	var ul = document.getElementById('ul');
	var elems = ul.children;
	for (var i = 0; i < elems.length; i++){
		elems[i].innerHTML += '!';
	}
}
-----------------------------------------------------------
Дан элемент #elem. Найдите его соседа сверху и добавьте ему 
в конец текст '!'. 

function func(){
	var elem = document.getElementById('elem');
	var prev = elem.previousElementSibling;
	prev.innerHTML += '!';
}
--------------------------------------------------------------
Дан элемент #elem. Найдите его соседа снизу и добавьте ему 
в конец текст '!'.

function func(){
	var elem = document.getElementById('elem');
	var prev = elem.nextElementSibling;
	prev.innerHTML += '!';
}
--------------------------------------------------------------
	Дан элемент #elem. Найдите его соседа снизу его соседа снизу 
	(следующий элемент за соседним) и добавьте ему в конец текст '!'. 

function func(){
	var elem = document.getElementById('elem');
	var prev = elem.previousElementSibling.previousElementSibling;
	prev.innerHTML += '!';
}
--------------------------------------------------------------
Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.

function func(){
	var elem = document.getElementById('elem');
	var parent = elem.parentElement;
	parent.style.background = "red";
}
----------------------------------------------------------------
Дан элемент #elem. Найдите родителя его родителя и покрасьте 
его в красный цвет. 

function func(){
	var elem = document.getElementById('elem');
	var parent = elem.parentElement.parentElement;
	parent.style.background = "red";
}
-----------------------------------------------------------------
Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. 
По нажатию на эту кнопку удалите элемент #child.

function func(){
	var parent = document.getElementById('parent');
	var child = document.getElementById('child');
	parent.removeChild(child);
}
------------------------------------------------------------------
Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его. 

function func(){
	var parent = document.getElementById('parent');
	var lastChild = parent.lastElementChild;
	parent.removeChild(lastChild);
}
------------------------------------------------------------------
	Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся. 

var child = document.getElementById('child');

child.addEventListener('click', func);

function func(){
	var parent = child.parentElement;
	parent.removeChild(child);
}
---------------- sau:
var elem = document.getElementById('elem');
elem.addEventListener('click', func);

function func() {
	this.parentElement.removeChild(this);
}
-----------------------------------------------------------------
	Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на 
	любую li эта li удалялась.

var lis = document.getElementsByTagName('li');

for (var i = 0; i < lis.length; i++){
	lis[i].addEventListener('click', func);
}

function func(){
	this.parentElement.removeChild(this);
}
-----------------------------------------------------------------
 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут. 

var parent = document.getElementById('text').parentElement;
var submit = document.getElementById('submit');
submit.addEventListener('click', func);

function func(){
	var cloneElement = document.getElementById('text').cloneNode(true);
	parent.appendChild(cloneElement);
}
-----------------------------------------------------------------
 Дан массив. Создайте ul через createElement, затем вставьте каждый 
 элемент этого массива в отдельную li внутри этой ul, затем вставьте 
 эту ul в конец body. 

 var weekDays = ['lu', 'ma', 'me', 'j', 'v', 's', 'd'];

var ul = document.createElement('ul');

var body = document.getElementsByTagName('body');

for (var i = 0; i < weekDays.length; i++){
	var li = document.createElement('li');
	li.innerHTML = weekDays[i];
	ul.appendChild(li);
}

body[0].appendChild(ul);
------------------------------------------------------------------
Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под 
нашим инпутом должен появится еще один пустой инпут.

var button = document.getElementById('button');

var parent = button.parentElement;
button.addEventListener('click', func);

function func(){
	var newInput = document.createElement('input');
	var br = document.createElement('br');
	parent.appendChild(newInput);
	parent.appendChild(br);
}
------------------------------------------------------------------
Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая 
цифра вставилась в новый инпут. Инпутов для цифр изначально не существует, 
они должны создаться в процессе работы скрипта. 

var input = document.getElementById('input');
var parent = input.parentElement;

input.addEventListener('mouseout', func);

function func(){
	var arr = input.value.split('');
	for (var i = 0; i < arr.length; i++){
		var elem = document.createElement('input');
		elem.value = arr[i];
		parent.appendChild(elem);
	}
}
-----------------------------------------------------------------
 Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, 
 скрывался родитель этой кнопки. 
var button = document.getElementById('button');
var parent = button.parentElement;
button.addEventListener('click', func);

function func(){
	parent.hidden = true;
}
-----sau:
var button = document.getElementById('button');
button.addEventListener('click', func);

function func() {
	this.parentElement.style.display = 'none';
}