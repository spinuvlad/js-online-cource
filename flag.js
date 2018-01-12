Флаг - это специальная переменная, которое может принимать только два значения: 
true и false. С помощью флагов можно решать задачи, проверяющие отсутствие 
чего-либо: к примеру, можно проверить, что в массиве нет элемента с 
определенным значением. Давайте приступим.

Поправим проблему: оборвем цикл с помощью break, если элемент уже найден:

var arr = ['a', 'b', 'c', 'd', 'с'];
for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 'c') {
		alert('Есть');
		break; //оборвем цикл
	}
}

var arr = ['a', 'b', 'c', 'd', 'с'];
for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 'c') {
		alert('Есть');
	} else {
		alert('Нет'); //выведет на 'a', 'b' и 'd'
	}
}
-------------------------------------------------------------
var arr = ['a', 'b', 'c', 'd', 'с'];
var flag = false; //считаем, что элемента 'c' нету в массиве

for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 'c') {
		flag = true; //элемент есть - переопределим переменную flag
		break;
	}
}

if (flag === true) {
	alert('Есть');
} else {
	alert('Нет');
}

-------------------------------- Флаги в функции-------------------------
function hasElem(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 'c') {
			return true;
		}
	}

	return false; //элемент 'c' не найден
}
var arr = ['a', 'b', 'c', 'd', 'с'];
alert(hasElem(arr));

если в массиве найдется элемент со значением 'c' - мы выйдем из функции с 
помощью return. Но если в массиве не найдется элемент 'c' - выхода из функции 
е произойдет и выполнение дойдет до команды return false. И получится, 
что функция вернет false в знак того, что элемент 'c' не найден в массиве.

------------------------------- Execrcitii ---------------------------------
Дано число, например 31. Проверьте, что это число не делится ни на одно 
другое число кроме себя самого и единицы. То есть в нашем случае нужно 
проверить, что число 31 не делится на все числа от 2 до 30. Если число 
не делится - выведите 'false', а если делится - выведите 'true'.

function check(num){
	var i = 2;
	while (i < num){
		if (num % i == 0) return true;
		i++;
	}
	return false;
}
document.write(check(31)); //false
************
var num = 31;
var flag = false;
for (var i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = true;
		break;
	}
}

if (flag == true) {
	alert('true');
} else {
	alert('false');
}
-------------------------------
Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. 
Если есть - выведите 'да', а если нет - выведите 'нет'.

var arr = [34, 5, 6, 6, 78, 10];
function check(num){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == num && arr[i+1] == num) return true;
	}
	return false;
}
document.write(check(6)); //true
************
var arr = [34, 5, 4, 6, 78, 10];
var flag = false;
for (var i = 0; i < arr.length; i++){
	if(arr[i] == arr[i+1]) {
		flag = true; break;
	}
}
if (flag == true) document.write('true');
else document.write('false'); //false