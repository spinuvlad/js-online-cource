1. Выведите столбец чисел от 1 до 100.

var i = 1;
while (i <= 100){
alert(i);
i++;  
}
----------
for (var i = 1; i<=100; i++){
writeln(i);
}
----------------------------------------
2. Выведите столбец чисел от 11 до 33.

var i = 11;
while (i < 34){
writeln(i);
i++;
}
---------
for (var i = 11; i < 34; i++){
writeln(i);
}
-----------------------------------------
3. Выведите столбец четных чисел в промежутке от 0 до 100.

var i = 0;
while(i < 100){
writeln(i);
i += 2;
}
---------
for (var i = 0; i <= 100; i +=2){
writeln(i);
}
------------------------------------------
5. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не 
станет меньше 50. Какое число получится? Посчитайте количество итераций, 
необходимых для этого (итерации - это количество проходов цикла), и запишите 
его в переменную num.

var n = 1000;
var num = 0;
while (n > 50)
{
	num++;
	n /= 2;
}
alert(n);
alert(num);
----------------
for (var n = 1000, num = 0; n > 50; n /= 2, num++);
alert(n);
alert(num);
------------------------------------------
Completarea masivului cu cifre 0 - 100 prin ciclu for:
var arr = [];
for (var i = 0; i <= 100; i++){
	arr[i] = i;
    document.write(arr[i] + '<br>');
}
//0 1 2 3 ... 99 100
------------------------------------------

6. Дан массив с элементами [1, 20, 15, 17, 24, 35]. 
С помощью цикла for выведите все эти элементы на экран.

var arr = [1, 20, 15, 17, 24, 35];
for (var i = 0; i < arr.length; i++){
document.write(arr[i] + '<br>');
}
-----------------
var arr = [1, 20, 15, 17, 24, 35];
var i = 0;
while (i < arr.length){
document.write(arr[i] + '<br>');
i++;
}
-------------------------------------------
7. Дан массив с элементами [1, 20, 15, 17, 24, 35]. 
С помощью цикла for найдите сумму элементов этого массива. 
Запишите ее в переменную result.

var arr = [1, 20, 15, 17, 24, 35];
var result = 0;
for (var i = 0; i < arr.length; i++){
	result += arr[i];
}
document.write(result);
---------------
var arr = [1, 20, 15, 17, 24, 35];
var result = 0, i = 0;
while (i < arr.length){
	result += arr[i];
    i++;
}
document.write(result);
--------------------------------------------
8. Дан объект obj. С помощью первого цикла for-in выведите на экран ключи, 
с помощью второго - элементы.

var obj = {green:'зеленый', red:'красный', blue:'голубой'}
for (element in obj){
	document.write(element + '<br>');
}
for (element in obj){
	document.write(obj[element] + '<br>');
}
--------------------------------------------
9. Дан объект obj с ключами 'Коля', 'Вася', 'Петя' с элементами 
'200', '300', '400'. С помощью цикла for-in выведите на экран строки 
такого формата: 'Коля - зарплата 200 долларов.'.

var obj = {'Коля':200, 'Вася':300, 'Петя':400};
for (key in obj){
	document.write(key + '- зарплата ' + obj[key] + ' долларов.' + '<br>'); 
}
--------------------------------------------
10. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for 
и оператора if выведите на экран столбец тех элементов массива, 
которые больше 3-х, но меньше 10.

var arr = [2, 5, 9, 15, 0, 4];
for (var i = 0; i < arr.length; i++){
	if (arr[i] > 3 && arr[i] < 10){
    	document.write(arr[i] + '<br>');
    }
}
--------------------------------------------
11. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. 
С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < arr.length; i++){
	document.write('-' + arr[i]);
}
---------------------------------------------
12. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for, 
оператора if и document.write выведите на экран столбец элементов массива:
1, 2, 3 
4, 5, 6 
7, 8, 9 

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0, j = 1; i < arr.length; i++, j++)
{
	if (j == 3)
	{
		j = 0;
		document.write(arr[i]+'<br>');
	}
	else
	{
		document.write(arr[i]+', ');
	}
}
----------------------------------------------
13. Составьте массив месяцев. С помощью цикла for выведите все месяцы, 
а текущий месяц выведите жирным. Текущий месяц должен храниться в переменной month.

var arr = ['ian', 'feb', 'mart', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'nov', 'dec'];
var month = 4;
for (var i = 0; i < arr.length; i++){
	if (i == month){
	document.write('<b>' + arr[i] + '</b>' + '<br>');
    }
    else {
    	document.write(arr[i] + '<br>');
    }
}
-----------------------------------------------
14. Составьте массив дней недели. 
С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

var arr = ['lu', 'ma', 'me', 'j', 'v', 'samb', 'dum'];
for (var i = 0; i < arr.length; i++){
	if (i == 5 || i ==6){
    	document.write('<b>' + arr[i] + '</b>' + '<br>');
    }
    else{
    	document.write(arr[i] + '<br>');
    }
}
----------------------------------------------
15. Составьте массив дней недели. С помощью цикла for выведите все дни недели,
а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

var arr = ['lu', 'ma', 'me', 'j', 'v', 'samb', 'dum'];
var day = 3;
for (i = 0; i < arr.length; i++){
	if (i == day){
    	document.write('<i>' + arr[i] + '</i><br>');
    }
    else{
    	document.write(arr[i] + '<br>');
    }
}
--------------------------------------------
16. Нарисуйте пирамиду с помощью document.write, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5:
x 
xx 
xxx 
xxxx 
xxxxx 

var symb = 'x';
var num = 20;
for (var i = 1; i <= num; i++){
    document.write(symb + '<br>');
    symb += 'x';
}
-------------
var str = '';
for (var i = 1; i <= 20; i++)
{
	str += 'x';
	document.write(str+'<br>');
}
---------------------------------------------
17. Нарисуйте пирамиду с помощью document.write, как показано на рисунке, 
только у вашей пирамиды должно быть 9 рядов, а не 5:
1 
22 
333 
4444 
55555 

var str = '';
for (var i = 1; i <= 9; i++)
{
	for (var j = 0; j < i; j++)
	{
		str += i;
	}
	str += '<br>';
}
document.write(str);
---
for (var i = 1; i < 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(i); 
  }
  document.write('<br />'); 
}
----------------------------------
1
12
123
1234
12345
123456
for (var i = 1; i < 10; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(j); 
  }
  document.write('<br />'); 
}
---------
9
9 8
9 8 7
9 8 7 6
9 8 7 6 5
9 8 7 6 5 4 
for (var i = 9; i > 0; i--) {
  for (var j = 9; j >= i; j--) {
    document.write(j + " ");
  }
  document.write('<br />');
}
---------------------------------------------
18. Нарисуйте пирамиду с помощью document.write, как показано на рисунке, 
воспользовавшись циклом for или while:
xx 
xxxx 
xxxxxx 
xxxxxxxx 
xxxxxxxxxx

var str = '';
for (var i = 1; i < 9; i++){
	str = str + 'xx';
    document.write(str + '<br>');
}
-----------
var str = '';
var i = 1;
while (i < 20){
	i++;
    str = str + 'xx';
    document.write(str + '<br>');
}
--------------------------------------
va afisa tabla inmultirii:
for (var i = 1; i<= 10; i++) { 
  for (var j = 1; j <= 10; j++) { // pana nu se termina acest ciclu nu intra in cel de la inceput
    document.write(i + '*' + j + ' = ' + i * j + '<br />');
  }
  document.write('<br />');
}















