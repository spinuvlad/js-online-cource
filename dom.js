------------------------- classList ------------------------
Свойство classList содержит псевдомассив который содержит все классы элемента. Кроме того, 
у classList есть несколько методов для работы с классами.
псевдомассив: http://theory.phphtml.net/javascript/pages/pseudo-array.html

элемент.classList //Псеводомассив классов элемента 
элемент.classList.add('класс') //Добавляет указанный класс 
элемент.classList.remove('класс') //Удаляет указанный класс 
элемент.classList.contains('класс') //Проверяет наличие указанного класса 
элемент.classList.toggle('класс') //Добавляет класс, если его нет, удаляет если есть 
----------------
добавим элементу класс 'newClass':
/*
<p id="element" class="class"></p>
*/
var element = document.getElementById('element');
element.classList.add('newClass');
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
Метод insertBefore позволяет вставить элемент в произвольное место элемента (перед переданным дочерним элементом). 
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
Следовательно все назначенные события останутся. Помимо того такой способ более гибкий и эффективный.

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

С помощью innerHTML выведем содержимое первого дочернего элемента блока с идентификатором "parent":

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
Свойство childNodes содержит всех потомков, в том числе и комментарии и текстовые узлы (текст, и отступы между тегами). 
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
Метод cloneNode позволяет клонировать элемент и получить точную копию элемента. Которую затем можно вставить 
на страницу с помощью appendChild или других подобных методов.

В параметре получает true либо false. Если true, то клонирует элемент полностью, вместе со всем атрибутами и 
дочерними элементами. Если false - только сам элемент (без дочерних элементов).
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