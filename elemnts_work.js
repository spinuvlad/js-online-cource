document.getElementById('id_name');	//dgi

document.getElementsByTagName('li');	//dgt

document.getElementsByClassName('zzz'); //dgc

document.querySelectorAll('p.zzz'); //dqsa

var elem = document.getElementById('test');
alert(elem.getAttribute('value'));	//ga

var text = document.getElementById('text');
text.removeAttribute('style'); 	//ra

elem.addEventListener('click', func1);	//ael

elem.removeEventListener('click', func1);	//rel

function func(){
	window.setInterval(count, 1000);	//wsi
}

function func(){
	 window.timerId = window.setInterval(count, 1000);
}

function func(){
	window.clearInterval(window.timerId);	//wci
}

function timer()
{
	var elem = document.getElementById('test');
	elem.value = parseInt(elem.value)+1;

	window.setTimeout(timer, 1000); //рекурсия, //wst
}

<div id="elem" data-price="1000" data-product-number="5">
alert(elem.dataset.price); //выведет 1000
alert(elem.dataset.productNumber); //выведет 5

alert(elem.getAttribute('data-price'); //выведет 1000
alert(elem.getAttribute('data-product-number'); //выведет 5

элемент.classList //Псеводомассив классов элемента //cl
элемент.classList.add('класс') //Добавляет указанный класс 	//cla
элемент.classList.remove('класс') //Удаляет указанный класс 	//clr
элемент.classList.contains('класс') //Проверяет наличие указанного класса //clc
элемент.classList.toggle('класс') //Добавляет класс, если его нет, удаляет если есть //clt

element.style.cssText = 'color: red; font-size: 20px;';	//st
element.style.cssText += 'color: red; font-size: 20px;';

element.tagName //имя тега в верхнем регистре

var parent = document.getElementById('parent');
var img = document.createElement('img');	//создать новый элемент 	//dce
img.src = '/img/js.png';
img.alt = 'JavaScript';
img.title = 'JavaScript';
parent.appendChild(img);	//вставить в конец элемента переданный элемента  //apc

var parent = document.getElementById('parent');
var p = document.createElement('p');
p.innerHTML = 'Содержимое нового абзаца';
parent.insertBefore(p, parent.children[1]);	//ib
/*
<div id="parent">
	<p>Абзац</p>
	<p>Содержимое нового абзаца</p>
	<p>Абзац</p>
	<p>Абзац</p>
</div>
*/
parent.insertBefore(p, parent.firstChild);

var element = document.getElementById('element');
element.insertAdjacentHTML('beforeEnd', '<p>Новый абзац</p>');	//ia
/*
<div id="element">
	<p>Абзац</p>
	<p>Новый абзац</p>
</div>
*/
'beforebegin'
'afterbegin'
'beforeend'
'afterend'

var parent = document.getElementById('parent');
console.log(parent.children[0].innerHTML);

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

var parent = document.getElementById('parent');
var childs = parent.children;	//pastreaza masivul copiilor "parent"

for (var i = 0; i < childs.length; i++){
  var msg = (i + 1) + '. ' + childs[i].innerHTML;
  document.write(msg + '<br>')
}

var parent = document.getElementById('parent');
document.write(parent.childNodes.length);

var parent = document.getElementById('parent');
document.write(parent.firstElementChild.innerHTML);	//fec
 //Первый элемент

 var parent = document.getElementById('parent');
document.write(parent.lastElementChild.innerHTML);	//lec
//Последний элемент

var element = document.getElementById('element');
var prev = element.previousElementSibling;	//pes
document.write(prev.innerHTML);	//содержит соседа сверху (предыдущий элемент)

var element = document.getElementById('element');
var next = element.nextElementSibling;	//содержит следущий элемент  //nes

/*
<div id="parentID">
	<p id="child"></p>
</div>
*/
var child = document.getElementById('child');
var parent = child.parentElement;	//содержит родительский элемент  /pre
document.write(parent.id);
//parentID

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

var clone = block.cloneNode(true);  //true, то клонирует элемент полностью, вместе со всем атрибутами и дочерними элементами.
parent.appendChild(clone);	//false - только сам элемент (без дочерних элементов)
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

var style = getComputedStyle(elem); //gcs
//в style лежат CSS свойства

var style = getComputedStyle(elem);
alert(style.paddingLeft); //выведет '30px'
alert(style.borderTopWidth); //выведет '20px'
alert(style.borderTopStyle); //выведет 'solid'
------------------------ metric -----------------------
var elem = document.getElementById('elem');
alert(elem.clientTop); //ширину верхней границы
alert(elem.clientLeft); //ширину левой границы

alert(elem.offsetWidth); //полную ширину и высоту элемента
alert(elem.offsetHeight); 

alert(elem.clientWidth); //ширину текста + padding
alert(elem.clientHeight); 

alert(elem.scrollTop); //на сколько элемент, имеющий полосу прокрутки, прокручен слева и сверху
alert('scrollTop: ' + elem.scrollLeft); //10, 50, 100 ... etc 
elem.scrollTop = elem.scrollTop + 100; //будем прокручивать элемент на 100px от текущего положения

var elem = document.getElementById('elem'); //полную ширину и высоту элемента с учетом прокрученной части
alert(elem.scrollHeight); //680

var elem = document.getElementById('elem');
var style = getComputedStyle(elem);
var paddingTop = parseInt(style.paddingTop);
var paddingBottom = parseInt(style.paddingBottom);
elem.style.height = (elem.scrollHeight - paddingTop - paddingBottom) + 'px';

offsetParent
offsetTop
offsetLeft