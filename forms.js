---------------------------- Работа с формами (document.forms) -------------------------
Можно получить все HTML формы на странице через document.forms. 
В результате мы получим массив форм, будто он был получен с помощью getElementsByTagName 
(точнее это будет не массив, а псевдомассив (или коллекция) свойств).
/*
<body>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
document.forms[0].innerHTML = '!';
/*
<body>
	<form>
		!
	</form>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
-------------------------
var forms = document.forms;
for (var i = 0; i < forms.length; i++)
{
  forms[i].innerHTML = "!";
}
/*
<body>
	<form>
		!
	</form>
	<form>
		!
	</form>
</body>
*/
------------------- document.forms[i].elements ------------------
document.forms[i].elements - можно найти общее количество форм на странице.
если форме дать имя test, то к ней можно обратиться так - document.forms['test'] или так - document.forms.test.

В следующем примере форме с именем form1 поставим текст '!', 
а форме с именем form2 - текст '?' (двумя разными способами):
/*
<body>
	<form name="form1">
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form name="form2">
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
document.forms.form1.innerHTML = '!';
document.forms['form2'].innerHTML = '?';
/*
<body>
	<form name="form1">
		!
	</form>
	<form name="form2">
		?
	</form>
</body>
*/
----------------------- document.forms[1].elements[0].value = '!' ---------------------
У каждой формы есть свойство elements, которое содержит массив свойств формы. 
С его помощью можно обратиться к определенному свойству формы по его номеру.

Для примера давайте обратимся к форме номер 1, а затем к ее свойству номер 0:
/*
<body>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
document.forms[1].elements[0].value = '!';
/*
<body>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form>
		<input value="!">
		<input value="2">
		<input value="3">
	</form>
</body>
*/
--------------
var elements = document.forms[1].elements;
for(var i = 0; i < elements.length; i++)
{
  elements[i].value = '!';
}
/*
<body>
	<form>
		<input value="1">
		<input value="2">
		<input value="3">
	</form>
	<form>
		<input value="!">
		<input value="!">
		<input value="!">
	</form>
</body>
*/
-------------------------------
К свойствам формы, так же, как и к самим формам, можно обращаться по имени из атрибута name:
/*
<body>
	<form name="form1">
		<input value="1" name="input1">
		<input value="2" name="input2">
		<input value="3" name="input3">
	</form>
</body>
*/
document.forms.form1.elements.input1.value = '!';
/*
<body>
	<form name="form1">
		<input value="!" name="input1">
		<input value="2" name="input2">
		<input value="3" name="input3">
	</form>
</body>
*/

------------------------------------- select ---------------------------------------
<select id="select">
	<option value="one">Один</option>
	<option value="two" selected>Два</option>
	<option value="three">Три</option>
</select>

var select = document.getElementById('select');
alert(select.value); //two

---------------------

var select = document.getElementById('select');
select.value = 'one';

result:
<select id="select">
	<option value="one" selected>Один</option>
	<option value="two">Два</option>
	<option value="three">Три</option>
</select>

---------------------

Можно обращаться к пунктам списка не по value, а по порядковому номеру таким образом - 
select.selectedIndex (нумерация начинается с нуля). 

var select = document.getElementById('select');
select.selectedIndex = 2;

result:
<select id="select">
	<option value="one">Один</option>
	<option value="two">Два</option>
	<option value="three" selected>Три</option>
</select>

var select = document.getElementById('select');
alert(select.selectedIndex); //выведет 2

---------------------

Если в select.selectedIndex присвоить -1, то не один из пунктов списка не будет выбран: 

var select = document.getElementById('select');
select.selectedIndex = -1;

result:
<select id="select">
	<option value="one">Один</option>
	<option value="two">Два</option>
	<option value="three">Три</option>
</select>

---------------------
<select>
	<option value="one" id="option">Один</option>
	<option value="two" selected>Два</option>
	<option value="three">Три</option>
</select>

var option = document.getElementById('option');
option.selected = true;

<select id="select">
	<option value="one" id="option" selected>Один</option>
	<option value="two">Два</option>
	<option value="three">Три</option>
</select>

-------------------------------------
 Можно также не только указывать новое значение этому свойству, 
 но и считывать его, например, чтобы узнать, выбран данный пункт или нет.

Для тега option также есть свойство index, в котором хранится порядковый 
номер пункта списка (только для чтения), и свойство text, в котором 
хранится текст пункта списка. 
-------------------------------------
<select id="select">
	<option value="one">Один</option>
	<option value="two" selected>Два</option>
	<option value="three">Три</option>
</select>

var select = document.getElementById('select');
var options = select.options;

for (var i = 0; i < options.length; i++) {
	if (options[i].selected === true) {
		options[i].text = '!';
	} else {
		options[i].text = '?';
	}
}

result:
<select id="select">
	<option value="one">?</option>
	<option value="two" selected>!</option>
	<option value="three">?</option>
</select>
------------------------------------- Exercitii ----------------------------------------
 Дана форма с id="form". В ней даны инпуты, в них числа. Дана кнопка. 
 По нажатию на эту кнопку получите форму по ее id, затем циклом переберите 
 все инпуты в ней и найдите сумму чисел из этих инпутов. 

 function func(){
	var inputs = document.forms['form'].elements;
	var result = 0;
	for (var i = 0; i < inputs.length; i++){
			result += Number(inputs[i].value);
	}
	alert(result);
}
-----------------------------------------------------------------------------------------
На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка. 
По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом переберите 
все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов. 

function func(){
	var forms = document.forms;
	var result = 0;
	for (var i = 0; i < forms.length; i++){
		for (var j = 0; j < forms[i].elements.length; j++){
			result += Number(forms[i].elements[j].value);
		}
	}
	alert(result);
}
----------------------------------------------------------------------------------------
	Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут. 

<select id="select" onclick="func()">
	<option value="one" selected>Один</option>
	<option value="two">Два</option>
	<option value="three">Три</option>
</select>
<input type="text" id="input">

function func(){
	var input = document.getElementById('input');
	var select = document.getElementById('select');
	var options = select.options;
	for (var i = 0; i < options.length; i++){
		if (options[i].selected === true){
		input.value = options[i].text;
		}
	}
}
-----------------------------------------------------------------------------------------
Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, 
нажать на кнопку и в селекте становился выбранным пункт с этим номером. 

function func(){
	var value = document.getElementById('input').value;
	var select = document.getElementById('select');
	select.selectedIndex = Number(value-1);
}
-----------------------------------------------------------------------------------------
Дан селект со списком стран. Сделайте так, чтобы при выборе страны рядом появлялся 
еще и селект со списком городов из этой страны. 
