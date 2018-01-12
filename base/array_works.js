Давайте выведем все его элементы на экран. Для этого нам необходимо 
запустить два вложенных друг в друга цикла:

var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {
		alert(arr[i][j]);
	}
}
//12345678910
---------------------------------
 Заполните массив следующим образом: в первый элемент запишите 'x', 
 во второй 'xx', в третий 'xxx' и так далее. 
 var arr = [];
var temp = 'x'
for (var i = 0; i <= 10; i++){
	arr.push(temp);
	temp += 'x';
	document.write(arr[i] + ', ');
}
//x, xx, xxx, xxxx, xxxxx, xxxxxx, xxxxxxx, xxxxxxxx, xxxxxxxxx...
--------------------------------
Заполните массив следующим образом: в первый элемент запишите '1', 
во второй '22', в третий '333' и так далее. 
var arr = [];
var str = '';
for (var i = 1; i < 10; i++){
	for (var j = 0; j < i; j++){
		str += i;
	}
	arr.push(str);
	str = '';
}
document.write(arr);
//1,22,333,4444,55555,666666,7777777,88888888,999999999
---------------------------------
Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
Первым параметром функция принимает значение, которым заполнять массив, 
а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) 
cделает массив ['x', 'x', 'x', 'x', 'x'].

function arrayFill(elem, num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(elem);
	}
	return arr;
}
document.write(arrayFill('x', 9)); //x,x,x,x,x,x,x,x,x
---------------------------------
Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, 
чтобы в сумме получилось больше 10-ти. 
function summCheck(arr, num){
	var summ = 0;
	var count = 0;
	for (var i = 0; i < arr.length; i++){
		if (summ <= num) {
			summ += arr[i];
			count++;
		}
		else break;
	}
	return count;
}
document.write(summCheck([1, 2, 3, 4, 5, 6], 10)); //5
--------------------------------
Дан массив с числами. Не используя метода reverse переверните его 
элементы в обратном порядке.
function revArr(arr){
	var newArr = [];
	for (var i = arr.length-1; i >= 0; i--){
		newArr.push(arr[i]);
	}
	return newArr;
}
document.write(revArr([1, 2, 3, 4, 5, 6])); //6,5,4,3,2,1
-----
Functie care intoarce fraze intregi.
function strRevers(str){
	var arr = str.split('');
	var newArr = [];
	for (var i = arr.length -1; i >= 0; i--){
		newArr.push(arr[i]);
	}
	return newArr.join('');
}
document.write(strRevers('Hello')); //olleH
---------------------------------
Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
Найдите сумму элементов этого массива. Массив, конечно же, может быть 
произвольным.
var arr = [[1, 2, 3], [4, 5], [6]];
var summ = 0;
for (var i = 0; i < arr.length; i++){
	for (var j = 0; j < arr[i].length; j++){
		summ += arr[i][j];
	}
}
document.write(summ); //21
---------------------------------
Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
Найдите сумму элементов этого массива. Массив, конечно же, 
может быть произвольным.
var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var summ = 0;
var newArr = [];
for (var i = 0; i < arr.length; i++){
	for (var j = 0; j < arr[i].length; j++){
		newArr.push(arr[i][j]);
	}
}
for (var k = 0; k < newArr.length; k++){
	for (var m = 0; m < newArr[k].length; m++){
		summ += newArr[k][m];
	}
}
document.write(summ); //36
----------------sau:
var arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var summ = 0;
for (var i = 0; i < arr.length; i++){
	for (var j = 0; j < arr[i].length; j++){
		for (var k = 0; k < arr[i][j].length; k++){
			summ += arr[i][j][k];
		}
	}
}
document.write(summ); //36
