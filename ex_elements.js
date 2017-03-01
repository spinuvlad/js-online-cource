меняет span на тег b, не изменяя при этом текст внутри тега:

Чтобы тег span исчез совсем, нужно поменять его outerHTML, 
а не innerHTML (в этом случае тег b оказался бы внутри span)
/*
<button onclick="spanFunc()">Нажми на меня</button>
<span id="text">Это span с текстом.</span>
*/
function spanFunc()
{
  var elem = document.getElementById('text');
  elem.outerHTML = '<b>' + elem.innerHTML + '</b>';
}
-----------------------------------
Задача. Дан HTML код (см. под задачей). Поменяйте содержимое абзацев на их порядковый номер в коде.
/*
<h2>Заголовок, не поменяется.</h2>
<p>Абзац, поменяется.</p>
<p>Абзац, поменяется.</p>
<p>Абзац, поменяется.</p>
<input type="submit" onclick="tagFunc()">
*/
function tagFunc()
{
  var elems = document.getElementsByTagName('p');
  elems[0].innerHTML = '1';
  elems[1].innerHTML = '2';
  elems[2].innerHTML = '3';
}
------ sau -------
function tagFunc()
{
  var elems = document.getElementsByTagName('p');
  for(var i = 0; i < elems.length; i++)
  {
    elems[i].innerHTML = i+1;
  }
}
--------------------------------------
Задача. Дан HTML код (см. под задачей). Поменяйте содержимое элементов с классом zzz на их порядковый номер в коде.
/*
<h2 class="zzz">Заголовок с классом zzz.</h2>
<p class="zzz">Абзац с классом zzz.</p>
<p class="zzz">Абзац с классом zzz.</p>
<p>Просто абзац, не поменяется.</p>
*/
function classFunc()
{
  var elems = document.getElementsByClassName('zzz');
  for(var i = 0; i < elems.length; i++)
  {
    elems[i].innerHTML = i+1;
  }
}
-----------------------------------------
Задача. Дан HTML код (см. под задачей). Поменяйте содержимое абзацев с классом zzz на их порядковый номер в коде.
/*
<h2 class="zzz">Заголовок с классом zzz.</h2>
<p class="zzz">Абзац с классом zzz.</p>
<p class="zzz">Абзац с классом zzz.</p>
<p>Просто абзац, не поменяется.</p>
*/
function classFunc()
{
  var elems = document.querySelectorAll('p.zzz');
  for(var i = 0; i < elems.length; i++)
  {
    elems[i].innerHTML = i+1;
  }
}
------------------------------------------
Exemple de baza:
Source:  playcode.io/elements_page_js
Public:  elements_page_js.playcode.io

Task-uri:
Source:  playcode.io/elements_task_js
Public:  elements_task_js.playcode.io

addClass(), removeClass(), toggleClass()
Source:  playcode.io/elements_func_js
Public:  elements_func_js.playcode.io
