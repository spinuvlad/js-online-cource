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
----------------------------------------------------
реализуйте функцию inArray, которая будет проверять, есть ли в массиве 
элемент с таким значением или нет. Первым параметром функция должна 
принимать значение, а вторым - массив. Если такой элемент есть - функция 
должна вернуть true, а если нет - false.
function inArray(value, arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == value) return true;
	}
	return false;
}
var arr = 'hello world';
document.write(inArray('s', arr)); //false
-----------------------------------------------------
реализуйте функцию isSimple, которая параметром будет принимать число и 
проверять, простое оно или нет. Простое число - это число, которое не 
делится ни на одно другое число (кроме как на 1 и на само себя - 
	на это делятся все числа). Если число простое - 
функция должна вернуть true, в противном случае false.
function isSimple(num){
	for (var i = 2; i < num; i++){
		if (num % i == 0) return false;
	}
	return true;
}

document.write(isSimple(13)); //true
-------------------------------------------------------
реализуйте функцию getIntersection, которая параметрами будет принимать 
два массива и возвращать массив элементов, которые есть и в одном, 
и во втором массиве (это называется пересечение массивов). 
К примеру, getIntersection([1, 2, 3], [2, 3, 4]) должно вернуть [2, 3].
function inArray(value, arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == value) return true;
	}
	return false;
}

function getIntersection(arr1, arr2) {
	var result = [];

	for (var i = 0; i < arr1.length; i++) {
		if(inArray(arr1[i], arr2)) {
			result.push(arr1[i]);
		}
	}
	return result;
}
var arr1 = [12, 2, 3, 5];
var arr2 = [1, 2, 3, 4];
document.write(getIntersection(arr1, arr2)); // [2, 3]
----------------------------------------------------------
реализуйте функцию getGreatestCommonDivisor, которая параметрами будет 
принимать два числа и возвращать наибольший общий делитель (НОД) 
этих двух чисел. К примеру, для чисел 12 и 18 НОД равен 6.
function getDivisors(num){
	var result = [];
	for (var i = 1; i < num; i++){
		if (num % i == 0) result.push(i);
	}

	return result;
}

function checkNumIntersection(num, arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == num) return true;
	}

	return false;
}

function getArrIntersection(arr1, arr2){
	var arrResult = [];
	for (var i = 0; i < arr1.length; i++){
		if(checkNumIntersection(arr1[i], arr2)) arrResult.push(arr1[i]);
	}
	return arrResult;
}

function getGreatestCommonDivisor(num1, num2){
	var arr1 = getDivisors(num1);
	var arr2 = getDivisors(num2);
	var arrDivisors = getArrIntersection(arr1, arr2);
	
	return arrDivisors[arrDivisors.length-1];
}
document.write(getGreatestCommonDivisor(12, 18)); //[6]
----------------------------------------------------
Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать 
строку, делать первый символ этой строки заглавным и возвращать обратно 
строку с заглавной первой буквой.
function ucfirst(str){
	str = str.substring(0, 1).toUpperCase() + str.substring(1);
	return str;
}

function topPrimeSymbol(str){
	var arr = str.split(' ');
	var newArr = [];
	for (var i = 0; i < arr.length; i++){
		newArr[i] = ucfirst(arr[i]); //newArr.push(arr[i])
	}
	return newArr.join(' ');
}
document.write(topPrimeSymbol('ce mai faci')); //Ce Mai Faci
---------------------------------------------------
 Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
 function splitStr(str){
	var arr = str.split('_');

	return arr;
}

function topNext(arr){
	for (var i = 1; i < arr.length; i++){
		arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1);
	}

	return arr;
}

function changeStr(str){
	var arr = splitStr(str);
	var topArr = topNext(arr);
	
	return topArr.join(''); 
}
document.write(changeStr('var_text_hello')); //varTextHello
---------------------------------------------------
Сделайте функцию inArray, которая определяет, есть в массиве элемент с 
заданным текстом или нет. Функция первым параметром должна принимать 
текст элемента, а вторым - массив, в котором делается поиск. Функция 
должна возвращать true или false.
function searchInArr(elem, arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == elem) return true;
	}
	return false;
}

function strInArr(str){
	return str.split(' ');
}

function searchInStr(elem, str){
	var arr = strInArr(str);
	if (searchInArr(elem, arr)) return true;
	else return false;
}

document.write(searchInStr('test', 'acesta este un test')); //true
--------------------------------------------------
Дана строка, например, '123456'. Сделайте из нее '214365'.
function changeStr(str){
	var arr = str.split('');
	var newArr = [];
	var newArr2 = [];
	var newArr3 = [];

	for (var i = 0; i < arr.length; i++){
		if (i % 2 == 0) newArr.push(arr[i]);
		else newArr2.push(arr[i]);
	}

	for (var i = 0; i < newArr2.length; i++){
		newArr3.push(newArr2[i], newArr[i]);
	}

	return newArr3.join('');
}
document.write(changeStr('123456')); //214365