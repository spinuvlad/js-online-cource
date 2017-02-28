------------ getAttribute, setAttribute, removeAttribute и hasAttribute -------------


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