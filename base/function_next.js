function getDigits(num){
	return String(num).split('');
}
document.write(getDigits(123) + '<br>'); // ['1', '2', '3']

function arraySum(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += Number(arr[i]);
	}
	return sum;
}
document.write(arraySum(getDigits(123)) + '<br>'); //6

function inRange(num){
	var sum = arraySum(getDigits(num));

	if (sum >= 1 && sum <= 9){
		return true;
	}
	else{
		return false;
	}
}

var arr = [12, 19, 28, 13, 14, 345];

var result = [];
for (var i = 0; i < 10; i++){
	if(inRange(arr[i])){
		result.push(arr[i]);
	}
}
document.write(result); //[12, 13, 14]
// http://theory.phphtml.net/books/javascript/base/pravilnoe-ispolzovanie-polzovatelskih-funkcij-javascript.html

----------------------------- Exercitii -----------------------------
Дан массив с числами. Создайте из него новый массив, где останутся лежать 
только положительные числа. Создайте для этого вспомогательную функцию 
isPositive(), которая параметром будет принимать число и возвращать true, 
если число положительное, и false - если отрицательное.
function isPositive(num){
	if (num > 0) return true;
	else return false;
}

function arrPositive(arr){
	var result = [];
	for (var i = 0; i < arr.length; i++){
		if (isPositive(arr[i])) result.push(arr[i]);
	}
	return result;
}
document.write(	arrPositive([1, 2, 3, -1, -2, -3])); //[1, 2, 3]
-------------------------------------------
Сделайте функцию isNumberInRange, которая параметром принимает число и 
проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция 
возвращает true, если не так - false. 
function isNumberInRange(num){
	return num > 0 && num < 10;
}
document.write(isNumberInRange(9)); //true
--------------------------------------------
Дан массив с числами. Запишите в новый массив только те числа, 
которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную 
функцию isNumberInRange из предыдущей задачи.
function isNumberInRange(num){
	return num > 0 && num < 10;
}

function arrPositive(arr){
	var newArr = [];
	for (var i = 0; i < arr.length; i++){
		if (isNumberInRange(arr[i])) newArr.push(arr[i]);
	}
	return newArr;
}

document.write(arrPositive([-2, 4, -6, 77, 10, 6])); //[4, 6]
--------------------------------------------
 Сделайте функцию getDigitsSum (digit - это цифра), 
 которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(num){
	var str = String(num);
	var arr = str.split('');
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += Number(arr[i]);
	}
	return sum;
}
document.write(getDigitsSum(123)); //6
----------------- sau:
function getDigitsSum(num){
	var str = String(num);
	var sum = 0;
	for (var i = 0; i < str.length; i++){
		sum += Number(str[i]);
	}
	return sum;
}
document.write(getDigitsSum(123)); //6
-------------------------------------------------
 Найдите все года от 1 до 2018, сумма цифр которых равна 13. Для этого 
 используйте вспомогательную функцию getDigitsSum из предыдущей задачи. 
 function getDigitsSum(num){
	var str = String(num);
	var sum = 0;
	for (var i = 0; i < str.length; i++){
		sum += Number(str[i]);
	}
	return sum;
}

function getYear(year, sum){
	var arr = [];
	var number = 0;
	while (number <= 2018){
		if (getDigitsSum(number) == sum) arr.push(number);
		number++;
	}
	return arr;
}
document.write(getYear(2018, 13));
-----------sau:
for (var i = 1; i < 2017; i++) {
	if (getDigitsSum(i) == 13) {
		console.log(i);
	}
}
----------------------------------------------------
Сделайте функцию isEven() (even - это четный), которая параметром принимает 
целое число и проверяет: четное оно или нет. Если четное - пусть функция 
возвращает true, если нечетное - false. 
function isEven(num){
	return num % 2 == 0;
}
document.write(isEven(8)); //true
----------------------------------------------------
Дан массив с целыми числами. Создайте из него новый массив, где останутся 
лежать только четные из этих чисел. Для этого используйте вспомогательную 
функцию isEven из предыдущей задачи.
function isEven(num){
	return num % 2 == 0;
}

function arrEven(arr){
	var newArr = [];
	for (var i = 0; i < arr.length; i++){
		if(isEven(arr[i])) newArr.push(arr[i]);
	}
	return newArr;
}

document.write(arrEven([2, 21, 6, 7, 77, 234])); //[2, 6, 234]
---------------------------------------------------
Сделайте функцию getDivisors, которая параметром принимает число и 
возвращает массив его делителей (чисел, на которое делится данное число).
function getDivisors(num){
	var arr = [];
	var testNum = 1;
	while (testNum < num){
		if (num % testNum == 0) arr.push(testNum);
		testNum++;
	}
	return arr;
}
document.write(getDivisors(50)); //1,2,5,10,25
------sau:
function getDivisors(num){
	var arr = [];
	for (var i = 1; i < num; i++){
		if (num % i == 0) arr.push(i);
	}
	return arr;
}
document.write(getDivisors(50)); //1,2,5,10,25