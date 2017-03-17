---------------------- dataset ------------------------
В языке HTML5 разрешено добавлять свои атрибуты тегам, при этом они должны начинаться с data-, 
а затем должно идти любое название атрибута, которое вам удобно (это будет работать корректно во всех браузерах,
кроме IE10 и ниже).

Если вы хотите обратиться к таким атрибутам как с свойствам объекта, то это делается не на прямую, 
а при помощи специального свойства dataset:

/*
<div id="elem" data-price="1000" data-product-number="5">
	Товар Джинсы
</div>
<input type="submit" onclick="func()">
*/
function func()
{
	var elem = document.getElementById('elem');

	alert(elem.dataset.price); //выведет 1000
	alert(elem.dataset.productNumber); //выведет 5
}
---------------
К таким атрибутам можно также обращаться с помощью методов типа getAttribute:
function func()
{
	var elem = document.getElementById('elem');

	alert(elem.getAttribute('data-price'); //выведет 1000
	alert(elem.getAttribute('data-product-number'); //выведет 5
}