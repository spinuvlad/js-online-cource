//<div id="elem">Текст</div>

#elem {
	width: 200px;
	height: 200px;
	padding: 30px;
	border: 20px solid #BCBCBC;
	overflow: auto;
}
реальный размер блока такой: ширина из width (200px) + левый padding (30px) + 
правый padding (30px) + левая граница (20px) + правая граница (20px) - итого 300px.
граница расширяют блок и по высоте тоже.

------------------------------
//<div id="elem" style="width: 200px;">Текст</div>

var elem = document.getElementById('elem');
alert(elem.style.width); //выведет '200px'

так можно прочитать только те свойства, которые были заданы через атрибут style, 
а те свойства, которые были заданы через CSS - прочитать нельзя.

Однако, способ добраться до недоступных CSS свойств все-таки есть - 
следует использовать функцию getComputedStyle, которую мы сейчас и разберем.

---------------------------- getComputedStyle -------------------------------
параметром функция принимает элемент, а возвращает объект, 
который содержит в себе все CSS свойства переданного элемента.

var elem = document.getElementById('elem');
var style = getComputedStyle(elem); //в style лежат CSS свойства

Давайте выведем, к примеру, ширину. Это делается так - style.width:
var elem = document.getElementById('elem');
var style = getComputedStyle(elem);
alert(style.width);
---------------------------- paddingLeft -------------------------------
var elem = document.getElementById('elem');
var style = getComputedStyle(elem);
alert(style.paddingLeft);
---------------------------- borderTopWidth -----------------------------
---------------------------- borderTopStyle -----------------------------
var elem = document.getElementById('elem');

var style = getComputedStyle(elem);
alert('paddingLeft: ' + style.paddingLeft); //выведет '30px'
alert('borderTopWidth: ' + style.borderTopWidth); //выведет '20px'
alert('borderTopStyle: ' + style.borderTopStyle); //выведет 'solid'
------------------
Неточность getComputedStyle:
#elem {
	width: 200px;
	height: 200px;
	padding: 30px;
	border: 20px solid #BCBCBC;
	overflow: auto;
}
var elem = document.getElementById('elem');
var style = getComputedStyle(elem);
alert('width: ' + style.width); //выведет '200px', но Реальная ширина блока 300px
тут вообще все не кроссбраузерно и лучше getComputedStyle для определения ширины 
и высоты не использовать, а пользоваться метриками
Есть еще один нюанс: если ширина задана в % - то после работы getComputedStyle мы увидим ее в px.
----------------------------------------------------------
---------------------------- clientLeft / clientTop ---------------------------------
classList - ширину левой границы
clientTop - ширину верхней границы

var elem = document.getElementById('elem');
alert('clientTop: ' + elem.clientTop); //выведет 20
alert('clientLeft: ' + elem.clientLeft); //выведет 20

---------------------------- offsetWidth / offsetHeight -----------------------------
Свойства offsetWidth и offsetHeight содержат в себе полную ширину и высоту элемента 
с учетом расширения padding и границей.
var elem = document.getElementById('elem');
alert('offsetWidth: ' + elem.offsetWidth); //выведет 300
alert('offsetHeight: ' + elem.offsetHeight); //выведет 300

--------------------------- clientWidth / clientHeight ------------------------------
clientWidth - ширину текста + padding
clientHeight - то же самое для высоты.
Результат зависит от наличия полосы прокрутки. Если ее нет - увидим 260, 
а если есть - 260 минус полоса прокрутки
var elem = document.getElementById('elem');
alert('clientWidth: ' + elem.clientWidth); //243px

--------------------------- scrollLeft / scrollTop ----------------------------------
Свойства scrollLeft и scrollTop содержат в себе информацию о том, на сколько элемент, 
имеющий полосу прокрутки, прокручен слева и сверху.
var elem = document.getElementById('elem');
alert('scrollTop: ' + elem.scrollTop); //10, 50, 100 ... etc 

Можно также присвоить им нужное значение - и элемент прокрутися в нужное положение.
var elem = document.getElementById('elem');
elem.scrollTop = 100; //top 100px;
------
var elem = document.getElementById('elem');
elem.scrollTop = elem.scrollTop + 100;
будем прокручивать элемент на 100px от текущего положения

-------------------------- scrollWidth / scrollHeight ------------------------------
scrollWidth и scrollHeight содержат в себе полную ширину и высоту элемента с учетом прокрученной части
var elem = document.getElementById('elem');
alert('scrollHeight: ' + elem.scrollHeight); //680

Свойства scrollWidth и scrollHeight можно использовать для того, 
чтобы распахнуть элемент на его полную ширину или высоту.
Кроме того, для корректной работы из elem.scrollHeight следует вычесть верхний и нижний padding.

var elem = document.getElementById('elem');

var style = getComputedStyle(elem);
var paddingTop = parseInt(style.paddingTop);
var paddingBottom = parseInt(style.paddingBottom);

elem.style.height = (elem.scrollHeight - paddingTop - paddingBottom) + 'px';

------------------------------ offsetParent ------------------------------
Свойство offsetParent содержит в себе родителя, относительно которого позиционируется 
элемент. Это будет тег body для статического позиционирования, 
ближайший позиционированный элемент для других типов позиционирования или ближайшая ячейка таблицы.

------------------------------ offsetLeft / offsetTop -----------------------------
Свойства offsetLeft и offsetTop содержат в себе позицию в пикселях 
левого верхнего угла блока относительно его offsetParent.