<button onclick="alert('Привет!')">Нажми на меня</button>
-------------------------------------------------------
Задача. Повторите поведение кнопки по нажатию на нее (она меняет текст в инпуте):

<button onclick="buttonClick()">Нажми на меня</button>
<input type="text" id="input" value="???">

function buttonClick()
{
	var input = document.getElementById('input');
	input.value = '!!!';
}
--------------------------------------------------------
Задача. Повторите поведение кнопки по нажатию на нее 
(она выводит алертом содержимое инпута):

<button onclick="buttonClick()">Нажми на меня</button>
<input type="text" id="input" value="???">

function buttonClick()
{
	var input = document.getElementById('input');
	alert(input.value);
}
---------------------------------------------------------
Задача. Повторите поведение кнопки по нажатию на нее 
(она выводит алертом содержимое инпута, возведенное в квадрат):

<button onclick="buttonClick()">Нажми на меня</button>
<input type="text" id="input" placeholder="Введите число!">

function buttonClick()
{
	var input = document.getElementById('input');
	var number = Number(input.value);
	var square = number*number;
	alert(square);
}
----------------------------------------------------------
Задача. Повторите поведение кнопки по нажатию на нее (она осуществляет 
	обмен содержимым между двумя инпутами, можете понажимать на нее 
	несколько раз или вручную сменить содержимое инпутов):

<button onclick="buttonClick()">Нажми на меня</button>
<input type="text" id="input1" value="!!!">
<input type="text" id="input2" value="???">

function buttonClick()
{
	var input1 = document.getElementById('input1');
	var input2 = document.getElementById('input2');
	var input1Value = input1.value;
	var input2Value = input2.value;
	input1.value = input2Value;
	input2.value = input1Value;
}
-----------------------------------------------------------
<input type="button" onclick="buttonClick(this)" value="Нажми на меня">

function buttonClick(elem)
{
	elem.value = 'Новый текст кнопки';
}
-----------------------------------------------------------
<button onclick="buttonClick()">Нажми на меня</button>
<input type="text" id="text" value="Какой-то текст!">

function buttonClick()
{
	var inputText = document.getElementById('text');
	inputText.style.color = 'red';
}
sau 
function buttonClick()
{
	document.getElementById('text').style.color = 'red';
}
-----------------------------------------------------------
одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует:

<button onclick="lock()">Заблокировать</button>
<button onclick="unlock()">Отблокировать</button>
<input type="text" id="input" value="Какой-то текст!">

function lock()
{
  var input = document.getElementById('input');
  input.disabled = true;
}

function unlock()
{
  var input = document.getElementById('input');
  input.disabled = false;
}
----------------------------------------------------------

Source: playcode.io/atribut_js
Public: atribut_js.playcode.io