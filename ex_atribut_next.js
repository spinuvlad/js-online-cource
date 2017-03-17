1. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.
/*
<div>
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/1.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/2.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/3.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/4.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/5.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/6.png" alt="">
</div>
*/
var elems = document.getElementsByTagName('img');
for (var i = 0; i < elems.length; i++)
{
  elems[i].onclick = func; 
}
function func()
{
  alert(this.src);
}
---------------------------------------------------------
2. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.
/*
<input type="text">
<input type="text">
<input type="text">
<input type="text">
<input type="text">
*/
var elems = document.getElementsByTagName('input');
for (var i = 0; i < elems.length; i++){
  elems[i].addEventListener('mouseover', func);
}
function func(){
  this.value = this.type;
}

//	playcode.io/8269
---------------------------------------------------------
3. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
/*
<a href="wwww">w*3</a>
<a href="eee">e*3</a>
<a href="rrr">r*3</a>
<a href="ttt">t*3</a>
<a href="yyy">y*3</a>
<a href="uuu">u*3</a>
*/
var elems = document.getElementsByTagName('a');
for (var i = 0; i < elems.length; i++){
  elems[i].addEventListener('mouseover', func);
}
function func(){
  this.innerHTML = this.innerHTML + ' (' + this.href + ') ';
} 

//	playcode.io/8283
---------------------------------------------------------
4. Дополнить предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, 
которое добавляет href в конец текста.

var elems = document.getElementsByTagName('a');
for (var i = 0; i < elems.length; i++){
  elems[i].addEventListener('mouseover', func);
}
function func(){
  this.innerHTML = this.innerHTML + ' (' + this.href + ') ';
  this.removeEventListener('mouseover', func);
} 
//	playcode.io/8292
---------------------------------------------------------
5. Привяжите всем инпутам событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test".
/*
<input type="text">
<input type="text">
<input type="text">
<input type="text">
<input type="text">
<p id="test"></p>
*/
var inputs = document.getElementsByTagName('input');
var text = document.getElementById('test');
for (var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('blur', func);
}
function func(){
  text.innerHTML = this.value;
}
//	playcode.io/8295
---------------------------------------------------------
6. Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, 
но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции.
/*
<input type="text" value="input1">
<input type="text" value="input2">
<input type="text" value="input3">
<input type="text" value="input4">
<input type="text" value="input5">
*/
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('click', func);
}
function func(){
  alert(this.value);
  this.removeEventListener('click', func);
}
// 	playcode.io/8301
---------------------------------------------------------
7. Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
/*
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
<p>6</p>
<p>7</p>
*/
var elems = document.getElementsByTagName('p');
for (var i = 0; i < elems.length; i++){
  elems[i].addEventListener('click', func);
}
function func(){
  this.innerHTML *= this.innerHTML;
}
//	playcode.io/8312
-----------------------------------------------------------
8. Даны абзацы с числами. По клику на абзац в нем должен появится квадрат числа, которое он содержит, 
но только по первому клику. По двойному клику на абзац число в абзаце должно удвоится, но тоже только первый раз.
var elems = document.getElementsByTagName('p');
for (var i = 0; i < elems.length; i++){
  elems[i].addEventListener('click', sqrt);
  elems[i].addEventListener('dblclick', summ);
}
function sqrt(){
  this.innerHTML *= this.innerHTML;
  this.removeEventListener('click', sqrt);
}
function summ(){
  this.innerHTML = this.innerHTML*2;
  this.removeEventListener('dblclick', summ);   
}
//	playcode.io/8318
----------------------------------------------------------
9. Даны абзацы с числами. По первому клику на абзац в нем должен появится квадрат числа, 
которое он содержит. По второму клику - куб. По третьему клику - четвертая степень.
var elems = document.getElementsByTagName('p');
for (var i = 0; i < elems.length; i++){
  elems[i].addEventListener('click', num2);
}

function num2(){
  this.innerHTML *= this.innerHTML;
  this.removeEventListener('click', num2);
  this.addEventListener('click', num3)
}
function num3(){
  this.innerHTML *= this.innerHTML * this.innerHTML;
  this.removeEventListener('click', num3);
  this.addEventListener('click', num4);
}
function num4(){
  this.innerHTML *= this.innerHTML * this.innerHTML * this.innerHTML;
  this.removeEventListener('click', num4);
}
// 	playcode.io/8324
----------------------------------------------------------
10. Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое 
на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-num. 
Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
/*
<input type="text" data-num="8">
<input type="text" data-num="8">
<input type="text" data-num="8">
*/
var inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++){
  inputs[i].addEventListener('blur', func);
}
function func(){
  if (this.value.length >= this.dataset.num){
    this.style.border = '1px solid green';
  }
  else{
    this.style.border = '1px solid red';
  }
}
// Despre dataset      http://theory.phphtml.net/javascript/dom/dataset.html 
//	playcode.io/8332
---------------------------------------------------------
11. Даны дивы. По первому нажатию на каждый див он красится красным фоном, 
по второму красится обратно и так далее каждый клик происходит чередование фона. 
Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый 
и они сменяли друг друга через removeEventListener.
/*
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
*/
var elems = document.getElementsByTagName('div');
for (var i = 0; i < elems.length; i++){
  elems[i].addEventListener('click', funcRed);
}
function funcRed(){
  this.style.backgroundColor = 'red';
  this.removeEventListener('click', funcRed);
  this.addEventListener('click', funcGreen);
} 
function funcGreen(){
  this.style.backgroundColor = 'green';
  this.removeEventListener('click', funcGreen);
  this.addEventListener('click', funcRed);
}
//	playcode.io/8369