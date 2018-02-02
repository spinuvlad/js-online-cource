<input type="submit" id="test">

var elem = document.getElementById('test');
elem.onclick = func; // !!!!!!!!!!!!!!!!!!!
function func() {
	alert('!');
}

----
var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++) {
	elems[i].onclick = func;
}

function func() {
	alert('!');
}
---
var elem = document.getElementById('test');

elem.onclick = func3; //тут привязывается только функция func3

//func3 вызывает func1 и func2:
function func3() {
	func1();
	func2();
}

function func1() {
	alert('1');
}

function func2() {
	alert('2');
}
----------------------------- this ---------------------------
this - это будто переменная elem, полученная через getElementById. 
К примеру, elem.value позволяет обратиться к атрибуту value, 
значит this.value будет делать то же самое. 

var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++) {
	elems[i].onclick = func;
}

function func() {
	alert(this.value); //изменение только здесь
}

-------------------- addEventListener -------------------------
<input type="submit" id="test">

var elem = document.getElementById('test');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);

function func1() {
	alert('1');
}
function func2() {
	alert('2');
}
------------------- this для addEventListener --------------------
<input type="submit" id="test1" value="Кнопка 1">
<input type="submit" id="test2" value="Кнопка 2">

var elem1 = document.getElementById('test1');
elem1.addEventListener('click', func);
var elem2 = document.getElementById('test2');
elem2.addEventListener('click', func);

function func() {
	alert(this.value);
}
-------------
var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);
}

function func() {
	alert(this.value);
}
---------------------- removeEventListener ----------------------
<input type="submit" id="test">

var elem = document.getElementById('test');
elem.addEventListener('click', func1);
elem.addEventListener('click', func2);
elem.addEventListener('click', func3);

function func1() {
	alert('1');
	//Отвяжем функцию func1:
	this.removeEventListener('click', func1);
}
function func2() {
	alert('2');
	//Отвяжем функцию func2:
	this.removeEventListener('click', func2);
}
function func3() {
	alert('3');
}

----
<input type="submit" value="Кнопка 1">
<input type="submit" value="Кнопка 2">
<input type="submit" value="Кнопка 3">

var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', func);
}

function func() {
	alert(this.value);
	this.removeEventListener('click', func);
}

--------------------------- Exercitii ----------------------------
Даны картинки. Привяжите к каждой картинке событие, чтобы по 
клику на картинку алертом выводился ее src. 

var imgs = document.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++){
	imgs[i].onclick = func;
}
function func(){
	alert(this.src);
}
------------------------------------------------------------------
 Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку 
 в атрибут title запишется ее текст.

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++){
	links[i].addEventListener('click', func);
}

function func(){
	this.title = this.innerHTML;
	alert(this.title);
}
-------------------------------------------------------------------
Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста 
дописывается ее href в круглых скобках.

var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++){
	links[i].addEventListener('mouseover', func);
}

function func(){
	this.innerHTML += '( ' + this.href + ' )';
	this.removeEventListener('mouseover', func);
}
------------------------------------------------------------------
Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут 
выводит свое value в абзац с id="test".

var inputs = document.getElementsByTagName('input');
var text = document.getElementById('test');

for (var i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('mouseover', func);
}

function func(){
	text.innerHTML = this.value;
}
-------------------------------------------------------------------
 Для всех инпутов сделайте так, чтобы они выводили свой value алертом при 
 нажатии на любой из них, но только по первому нажатию. Повторное нажатие 
 на инпут не должно вызывать реакции. 

var inputs = document.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('click', func);
}

function func(){
	alert(this.value);
	this.removeEventListener('click', func);
}
-------------------------------------------------------------------
	Даны абзацы с числами. По нажатию на абзац в нем должен появится 
	квадрат числа, которое он содержит.

var nums = document.getElementsByTagName('p');

for (var i = 0; i < nums.length; i++){
	nums[i].addEventListener('click', func);
}

function func(){
	this.innerHTML *= this.innerHTML;
}
-------------------------------------------------------------------
	Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
	свое содержимое на правильное количество символов. Сколько символов 
	должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
	правильное количество, то граница инпута становится зеленой, 
	если неправильное - красной.

<input type="text" data-length="8">
<input type="text" data-length="8">
<input type="text" data-length="8">

var inputs = document.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('mouseout', func);
}

function func(){
	if (this.value.length <= this.dataset.length) this.style.border = '1px solid red';
	else this.style.border = '1px solid green';
}
-------------------------------------------------------------------
	Даны дивы. По первому нажатию на каждый див он красится красным фоном, 
	по второму красится обратно и так далее каждый клик происходит 
	чередование фона. Сделайте так, чтобы было две функции: одна красит 
	в красный цвет, другая в зеленый и они сменяли друг друга через 
	removeEventListener.

var elems = document.getElementsByTagName('div');

for (var i = 0; i < elems.length; i++){
	elems[i].addEventListener('click', red);
}

function red(){
	this.style.backgroundColor = 'red';
	this.removeEventListener('click', red);
	this.addEventListener('click', green);
}

function green(){
	this.style.backgroundColor = 'green';
	this.removeEventListener('click', green);
	this.addEventListener('click', red);
}