в JavaScript в функцию можно не передавать все параметры - 
если какой-то не передан, вместо него запишется undefined.

Эту особенность можно использовать для указания значений по умолчанию. 
Под ним понимается следующее: если параметр не передан, то вместо него 
возьмется заданное значение.

function func(num) {
	if (num === undefined) {
		num = 3;
	}

	return num * num;
}
----sau:
function func(num) {
	num = num || 3;
	return num * num;
}
---- sau:
function func(num1, num2, num3) {
	num3 = num3 || 3;
	num2 = num2 || 2;

	return num * num;
}

-------------- Область видимости переменных ------------------
глобальные - видны во всем скрипте;
локальные - видны только ограниченной области.
function func() {
	var local = 'Тест!';
	alert(local); //выведет 'Тест!'
}
func();

alert(local); //выведет undefined
---------------
var test = 'Тест!';
function func() {
var test = 'Локальная!';	alert(test); //выведет 'Локальная!'
}
func();
---------------
var test = 'Тест!';
function func() {
	alert(test); //выведет 'Тест!'
}
func();
---------------
var global = 'Тест!';
function func() {
	global = 'Поменялась!';
}
func();

alert(global); //выведет 'Поменялась!'
----------------
function func() {
	local = 'Тест!';
	alert(local); //выведет 'Тест!'
}
func();

alert(local); //выведет 'Тест!'
------------------------------ Строгий режим  --------------------------------
Забыв поставить var, можно случайно затереть глобальную переменную, 
что является источником трудноуловимых ошибок. Поэтому рекомендуется 
включать так называемый строгий режим командой 'use strict';, которая 
пишется в начале скрипта.
если включить строгий режим, то скрипт просто выдаст ошибку, 
которую мы сможем заметить в консоли:

'use strict';

var test = 'Привет!';

function func() {
	test = 'Тест!'; //будет ошибка, нет var
}
func();

alert(test);
----------------- Глобальные переменные через window --------------------
все глобальные переменные являются свойствами объекта window:
var test = 'Тест!';
alert(window.test); //выведет 'Тест!'
------------
var window.test = 'Тест!';
alert(test); //выведет 'Тест!
------------
Такую особенность можно использовать для обмена данными между функциями:

function func1() {
	window.test = 'Тест!';
}

function func2() {
	alert(window.test); //выведет 'Тест!'
}

func1(); //<--- без этого вызова не сработает
func2();
-------------------------- Рекурсия ---------------------------
рекурсия - это когда функция вызывает сама себя.
Давайте разберемся с этим понятием на следующем примере: 
выведем все элементы массива с конца с помощью рекурсии.

Для этого мы будем использовать метод pop, который забирает из массива 
последний элемент (массив при этом уменьшается). Затем будем проверять, 
осталось ли что в массиве с помощью empty.

Если осталось, опять запускаем эту же функцию last, которая забирает 
последний элемент, проверяет осталось ли что в массиве и запускает саму 
себя при необходимости:
function last(arr){
	document.write(arr.pop() + '<br>');

	if (arr.length != 0) {
		last(arr); //recursie
	}
}
last([1, 2, 3, 4]) //4 3 2 1
--------------------------- Exercitii -----------------------------
Дан массив с числами. Выведите последовательно его элементы используя 
рекурсию и не используя цикл.
function arrPrint(arr){
	document.write(arr.shift() + ', ');

	if (arr.length > 0){
		arrPrint(arr);
	}
}
arrPrint([1, 2, 3, 4, 5]) //1, 2, 3, 4, 5,
-----------sau:
function func(arr) {
	alert(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}
---------------------------------------------------
Дано число. Сложите его цифры. Если сумма получилась более 9-ти, 
опять сложите его цифры. И так, пока сумма не станет однозначным числом 
(9 и менее).
function funcNum(num){
	var str = String(num);
	var result = 0;
	for (var i = 0; i < str.length; i++){
		result += Number(str[i]);
	}

	num = result;
	document.write(num + ', ');

	if (num > 9){
		funcNum(num);
	}
}
funcNum(455959); //37, 10, 1,