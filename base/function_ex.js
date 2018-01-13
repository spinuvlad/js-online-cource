Выведите с помощью цикла столбец чисел от 1 до 100.
function numPrint(num){
	for (var i = 0; i <= num; i++){
		document.write(i + '<br>');
	}
}
numPrint(100)
---------------------------------------------------
Выведите с помощью цикла столбец чисел от 100 до 1
function numPrint(num){
	for (var i = num; i >= 0; i--){
		document.write(i + '<br>');
	}
}
numPrint(100);
---------------------------------------------------
 Выведите с помощью цикла столбец четных чисел от 1 до 100.
 function numPrint(num){
	for (var i = 0; i <= num; i++){
		if (i % 2 == 0) document.write(i + '<br>');
	}
}
numPrint(100); 
-------sau:
for (var i = 2; i < 100; i += 2) {
	document.write(i + '<br>');
}
----------------------------------------------------
Заполните массив 10-ю иксами с помощью цикла. 
function addInArr(num, str){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(str);
	}
	return arr;
}
document.write(addInArr(10, 'x')); //x x x x x x
----------------------------------------------------
Заполните массив числами от 1 до 10 с помощью цикла. 
function addInArr(num){
	var arr = [];
	for (var i = 0; i <= num; i++){
		arr.push(i)
	}
	return arr;
}
document.write(addInArr(10));
----------------------------------------------------
 Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с 
 помощью цикла. Дроби округляйте до двух знаков в дробной части.
 function randomArr(num){
	var arr = [];
	for (var i = 0; i <= num; i++){
		arr.push(Math.random().toFixed(2))  //arr[i] = Math.random(arr[i]).toFixed(2);
	}
	return arr;
}
document.write(randomArr(10));
----------------------------------------------------
Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
function randomArr(max, min){
	var arr = [];
	for (var i = 0; i <= max; i++){
		arr.push(Math.round((Math.random() * (max - min + 1)) + min));  
	}
	return arr;
}
document.write(randomArr(10, 1));
-----------------------------------------------------
Дан массив с числами. С помощью цикла выведите только те элементы массива, 
которые больше нуля и меньше 10-ти.
function funcArr(arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > 0 && arr[i] < 10){
			document.write(arr[i] + ', ');
		}
	}
}
funcArr([2, 22, 5, 9, 16]); //2, 5, 9, 
-----------------------------------------------------
Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со 
значением 5. Как только будет найден первый такой элемент - выведите 'Есть' 
и оборвите цикл. Если такого элемента нет - ничего не выводите.
function checkArr(elem, arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == elem){
			return 'este'; break;
		}
	}
	return 'nu-i';
}
document.write(checkArr(5, [3, 12, 3, 5])); //este
-----------------------------------------------------
Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
function sumArr(arr){
	var result = 0;
	for (var i = 0; i < arr.length; i++){
		result += arr[i];
	}
	return result;
}
document.write(sumArr([1, 2, 3, 4])); //10
-----------------------------------------------------
 Дан массив с числами. С помощью цикла найдите сумму квадратов 
 элементов этого массива.
 function multArr(arr){
	var newArr = [];
	var result = 0;
	for (var i = 0; i < arr.length; i++){
		newArr.push(arr[i] * arr[i]);
	}
	for (var i = 0; i < newArr.length; i++){
		result += newArr[i];
	}
	return result;
}

document.write(multArr([2, 3])); //13
----- sau:
var arr = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += arr[i] * arr[i];
}
alert(sum);
-----------------------------------------------------
Дан массив с числами. Найдите среднее арифметическое его элементов 
(сумма элементов, делить на количество).
function mediaArr(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return (sum/arr.length).toFixed(0);
}
document.write(mediaArr([1, 2, 3, 4, 5, 6])); //4
