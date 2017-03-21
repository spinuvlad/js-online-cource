1. Дан элемент #test. Добавьте ему класс .www
//	<p id="test">Lorem ipsum dolor.</p>
var text = document.getElementById('test');
text.classList.add('www');
---------------------------------------------
2. Дан элемент #test. Удалите у него класс .www
text.classList.remove('www');
---------------------------------------------
3. Дан элемент #test. Проверьте наличие у него класса .www
alert(text.classList.contains('www'));
//true
----------------------------------------------
4. Дан элемент #test. Добавьте ему класс .www, если его нет и удалите - если есть.
text.classList.toggle('www');
----------------------------------------------
5. Дан элемент #test. Узнайте количество его классов.
alert(text.classList.length);
//1
----------------------------------------------
6. Дан элемент #test. Выведите последовательно алертом его классы.
//	<p id="test" class="qqq eee rrr">Lorem ipsum dolor.</p>
var text = document.getElementById('test');
var arrClass = text.classList;
for (var i = 0; i < arrClass.length; i++){
  alert(arrClass[i]);        
}  
//qqq //eee //rrr
---------------------------------------------- Работа с CSS
7. Дан элемент #test. Сделайте его красного цвета, размером 30px, добавьте ему границу. 
Решите задачу с помощью свойства cssText.
var text = document.getElementById('test');
text.style.cssText = 'color: red; font-size: 30px; border: 1px solid blue';

---------------------------------------------- Свойство tagName
8. Дан элемент #test. По клику на него выведите название его тега.
var text = document.getElementById('test');
text.addEventListener('click', func);

function func(){
  alert(this.tagName);
}
//P
-----------------------------------------------
9. Дан элемент #test. По клику на него выведите название его тега в нижнем регистре.
var text = document.getElementById('test');
text.addEventListener('click', func);

function func(){
  alert(this.tagName.toLowerCase());
}
-----------------------------------------------
10. Даны элементы с классом .www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
/*
<p class="www">Lorem ipsum dolor.</p>
<p class="www">Sapiente, nisi, quas.</p>
<p class="www">Quidem, quo, id!</p>
<p>Lorem ipsum dolor.</p>
<p class="www">Lorem ipsum dolor.</p>
<p class="www">Repellendus, eligendi, architecto!</p>
*/
var text = document.querySelectorAll('.www');
for (var i = 0; i < text.length; i++){
  text[i].innerHTML += ' ' + text[i].tagName.toLowerCase();
}
------------------------------------------------ Вставка элементов
11. Дан ol. Вставьте ему в конец li с текстом 'пункт'.
/*
<ol id="test">
  <li></li>
  <li></li>
</ol>
*/
var test = document.getElementById('test');
var list = document.createElement('li');
list.innerHTML = 'punct';

test.appendChild(list);
/*
1.
2.
3. punct
*/
------------------------------------------------
12. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
//	<ul id="test"></ul>
var test = document.getElementById('test');
var arrMonth = ['ian', 'feb', 'mart', 'apr', 'mai', 'iun', 'iul', 'aug', 'sept', 'oct', 'nov', 'dec'];

for (var i = 0; i < arrMonth.length; i++){
  var list = document.createElement('li');
  list.innerHTML = arrMonth[i];
  test.appendChild(list);
}
// *ian *feb ... *dec
-------------------------------------------------
13. Дан массив. Создайте div через createElement, затем вставьте каждый элемент этого массива 
в отдельный p внутри этого div, затем вставьте этот div в конец body.

var arrMonth = ['ian', 'feb', 'mart', 'apr', 'mai', 'iun', 'iul', 'aug', 'sept', 'oct', 'nov', 'dec'];
var container = document.createElement('div');
var body = document.getElementsByTagName('body');
for (var i = 0; i < arrMonth.length; i++){
  var p = document.createElement('p');
  p.innerHTML = arrMonth[i];
  container.appendChild(p);
}
body[0].innerHTML += container.innerHTML;
-------------------------------------------------
14. Дан элемент #test. Вставьте перед ним абзац с текстом '!!!'.
// <h2 id="test">Lorem ipsum dolor sit.</h2>
var test = document.getElementById('test');
test.insertAdjacentHTML('beforebegin', '<p>!!!</p>');
/*
!!!
Lorem ipsum dolor sit.
*/
--------------------------------------------------
15. Дан элемент #test. Вставьте перед ним абзац с красным текстом '!!!' так, 
чтобы к этому абзацу было привязано следующее событие: по клику на него он должен покраситься в зеленый цвет.
// <h2 id="test">Lorem ipsum dolor sit.</h2>
var test = document.getElementById('test');
test.insertAdjacentHTML('beforebegin', '<p>!!!</p>');
var pText = document.getElementsByTagName('p')[0];
pText.style.color = 'red';
pText.addEventListener('click', func);

function func(){
  this.style.color = 'green';
}
--------------------------------------------------
16. Дан элемент #test. Найдите первого потомка этого элемента и сделайте его текст красного цвета.
/*
<ul id="test">
  <li>Lorem ipsum dolor.</li>
  <li>Blanditiis, placeat, cum.</li>
  <li>Veritatis, esse, aspernatur.</li>
  <li>Id, non, doloribus.</li>
</ul>
*/
var test = document.getElementById('test');
test.firstElementChild.style.color = 'red'; //test.children[0].style.color = 'red';
---------------------------------------------------
17. Дан элемент #test. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
var test = document.getElementById('test');
test.lastElementChild.style.color = 'red';
---------------------------------------------------
18. Дан элемент #test. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
var test = document.getElementById('test');
var allLi = test.children;
for (var i = 0; i < allLi.length; i++){
  allLi[i].innerHTML += ' !'
}
---------------------------------------------------
19. Дан элемент #test. Найдите его соседа сверху и добавьте ему в конец текст '!'.
/*
<p>Lorem ipsum dolor.</p>
<p id="test">Quo, temporibus doloremque.</p>
<p>Veniam, alias, itaque.</p>
*/
var test = document.getElementById('test');
var prev = test.previousElementSibling;
prev.innerHTML += '!';
----------------------------------------------------
20. Дан элемент #test. Найдите его соседа снизу и добавьте ему в конец текст '!'.
var test = document.getElementById('test');
var next = test.nextElementSibling;
next.innerHTML += '!';
----------------------------------------------------
21. Дан элемент #test. Найдите его соседа снизу его соседа снизу и добавьте ему в конец текст '!'.
var test = document.getElementById('test');
var next = test.nextElementSibling;
var nextNext = next.nextElementSibling;
nextNext.innerHTML += ' !';
---
var test = document.getElementById('test');
var next = test.nextElementSibling.nextElementSibling;
next.innerHTML += ' !';
----------------------------------------------------
22. Дан элемент #test. Найдите его родителя и покрасьте его в красный цвет.
/*
<div>
  <p id="test">Lorem ipsum dolor sit amet.</p>
</div>
*/
var test = document.getElementById('test');
var parent = test.parentElement;
parent.style.cssText = 'background: red';
-----------------------------------------------------
23. Дан элемент #test. Найдите родителя его родителя и покрасьте его в красный цвет.
var test = document.getElementById('test');
var parent = test.parentElement.parentElement;
parent.style.cssText = 'background: red';
-----------------------------------------------------
24. Дан элемент #test. Найдите его родителя, найдите всех потомков этого родителя и поставьте им в конец текст '!'.
/*
<div>
  <p>Lorem ipsum dolor sit amet.</p>
  <p>Quis velit quibusdam totam. Vitae!</p>
  <p>Optio, perspiciatis eos quas repudiandae!</p>
  <p id="test">Labore, recusandae alias iusto id.</p>
  <p>Laudantium, porro delectus nulla veniam.</p>
</div>
*/
var test = document.getElementById('test');
var parent = test.parentElement;
var parentElem = parent.children;
for (var i = 0; i < parentElem.length; i++){
  parentElem[i].innerHTML += ' !';
}
------------------------------------------------------
25. Дан элемент #test. Найдите его родителя, найдите соседа сверху и соседа снизу 
для этого родителя и поставьте им в конец текст '!'.
/*
<h2>Lorem ipsum dolor</h2>
<div>
  <p>Lorem ipsum dolor sit amet.</p>
  <p id="test">Labore, recusandae alias iusto id.</p>
  <p>Laudantium, porro delectus nulla veniam.</p>
</div>
<h2>Lorem ipsum dolor</h2>
*/
var test = document.getElementById('test');
var parent = test.parentElement;
var prev = parent.previousElementSibling;
var next = parent.nextElementSibling;
prev.innerHTML += ' !';
next.innerHTML += ' !';
------------------------------------------------------
26. Дан элемент #parent, внутри него дан элемент #test. Дана кнопка. 
По нажатию на эту кнопку удалите элемент #test.
/*
<div id="parent">
  <p id="test">Lorem ipsum dolor sit.</p>
</div>
<button onclick="func()">Delete</button>
*/
function func(){
  var parent = document.getElementById('parent');
  var test = document.getElementById('test');
  parent.removeChild(test);
}  
------------------------------------------------------
27. Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.
/*
<ol id="parent">
  <li>Lorem ipsum dolor sit.</li>
  <li>Asperiores animi pariatur dolorum.</li>
  <li>Facere, eum adipisci explicabo.</li>
  <li>Aspernatur accusamus odit neque.</li>
  <li>Ex, sunt excepturi quos.</li>
</ol>
<button onclick="func()">Delete last</button>
*/
function func(){
  var parent = document.getElementById('parent');
  var lastElem = parent.lastElementChild;
  parent.removeChild(lastElem);
}  
-----------------------------------------------------
28. Дан элемент. Сделайте так, чтобы по нажатию по нему элемент удалялся.
/*
<p id="test">Lorem ipsum dolor sit.</p>
*/
var test = document.getElementById('test');
var parent = test.parentElement;
test.addEventListener('click', func);

function func(){
  parent.removeChild(test);
}
-----------------------------------------------------
29. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
/*
<form>
  <input type="text" id="input">
</form>
<button onclick="func()">Clone</button>
*/
var input = document.getElementById('input');
var parent = input.parentElement;

var clone = parent.cloneNode(true);

function func(){
  parent.appendChild(clone);  
} 
//	playcode.io/8600
-------------------------------------------------------
30. Дан элемент #test. Найдите первого и последнего потомков этого элемента и поменяйте их тексты местами.
/*
<div id="test">
  <p>Lorem ipsum dolor sit amet.</p>
  <p>Non velit quae accusantium eligendi!</p>
  <p>Eos, voluptate porro mollitia nostrum.</p>
  <p>Ab hic earum reiciendis quae.</p>
  <p>Aperiam, asperiores autem delectus ad!</p>
</div>
*/
var test = document.getElementById('test');
var first = test.firstElementChild;
var last = test.lastElementChild;
var temp = first.innerHTML;
first.innerHTML = last.innerHTML;
last.innerHTML = temp;
------------------------------------------------------
31. Дан элемент #test. Сделайте массив всех его родителей до тега html.
/*
<body>
  <div>
    <ul>
      <li><a href="">link1</a></li>
      <li><a href="" id="test">link2</a></li>
      <li><a href="">link3</a></li>
    </ul>
  </div>
</body>
*/
var test = document.getElementById('test');
var arr = [];
var i = 0;
var parent = test.parentElement;
while (parent !== null){
  arr[i] = parent;
  parent = parent.parentElement;
  i++;
}
console.log(arr);
-----------------------------------------------------
32. Дан элемент #test. Среди всех его родителей найдите ближайшего родителя 
с классом 'www' и поставьте ему в конец текст '!'.
/*
<body> 
  <div class='www'> 
    <ol > 
      <li id='test'>text1</li> 
      <li>text4</li> 
      <li >text2</li> 
      <li>text3</li> 
    </ol> 
  </div> 
</body> 
*/
var elem = document.getElementById('test'); 
var parent; 
parent = elem.parentElement; 
while(parent.className !== 'www'){ 
  parent = parent.parentElement; 
} 
parent.innerHTML += '!'; 
-------------------------------------------------------
33. Дан элемент инпут. Рядом с ним находится кнопочка "+". 
По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.
/*
	<div id="parent">
    <input type="text" id="input">
    <button id="btn">+</button>
  </div>
*/
var parent = document.getElementById('parent') ;
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var n = 1;
input.value = n;
btn.addEventListener('click', func);

function func(){
  n++;
  var elem = document.createElement('input');
  elem.type = "text";
  elem.value = n;
  parent.appendChild(elem); 
}
//	playcode.io/8672
-----------------------------------------------------
34. Даны инпуты. Рядом с каждым из них находится кнопочка "+". 
По нажатию на эту кнопку под нашим инпутом должен появится клон этого инпута.
/*
<div>
  <div><input type="text"><button>+</button></div>
  <div><input type="text"><button>+</button></div>
  <div><input type="text"><button>+</button></div>
  <div><input type="text"><button>+</button></div>
</div>
*/
var btn = document.getElementsByTagName('button');
for (var i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', func);
}

function func(){
  var prev = this.previousElementSibling;
  var parent = this.parentElement;
  var clone = prev.cloneNode(true);
  var br = document.createElement('br');
  parent.append(br);
  parent.appendChild(clone);
}
//	playcode.io/8675
------------------------------------------------------
35. Даны инпут. В него вводится число. По потери фокуса сделайте так, чтобы каждая цифра вставилась в новый инпут. 
Инпутов для цифр изначально не существует, они должны создаться в процессе работы скрипта.
/*
<div>
  <input type="text" id="input" onblur="func()">
</div>
*/
var input = document.getElementById('input');
var parent = input.parentElement;
function func(){
  var num = input.value;
  var arr = num.split('');
  for (var i = 0; i < arr.length; i++){
    var newInput = document.createElement('input');
    newInput.value = arr[i];
    parent.appendChild(newInput); 
  }
} 
//	playcode.io/8678 
-------------------------------------------------------
36. Дана кнопка. Сделайте так, чтобы по нажатию на эту кнопку, скрывался родитель этой кнопки.
/*
<div>
  <button id="btn">Btn</button>
</div>
*/
var btn = document.getElementById('btn');
var parent = btn.parentElement;
btn.addEventListener('click', func);

function func(){
  parent.style.visibility = 'hidden';
  btn.style.visibility = 'visible';
}  
//	playcode.io/8684