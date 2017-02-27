Задача. Найдите корень из числа 1000. Округлите его в большую и меньшую стороны. 
В массив arr запишите первым элементом корень из числа, вторым элементом - 
округление в меньшую сторону, третьим элементом - в большую.
1.
var num = 1000;
var sqrt = Math.sqrt(1000)
var arr = [sqrt, Math.floor(sqrt), Math.ceil(sqrt)];
document.write(arr);

2.
var num = 1000;
var sqrt = Math.sqrt(1000)
var arr = [];
arr[0] = sqrt;
arr[1] = Math.floor(sqrt);
arr[2] = Math.ceil(sqrt);
document.write(arr);
---------------------------------------------
Задача. Заполните массив 30-ю случайными числами от 0 до 1.
var arr = [];
for (i = 0; i < 30; i++){
	arr[i] = Math.random();
}
document.write(arr);
---------------------------------------------
1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
var a = 10, b = 3;
document.write(a % b);
//1
---------------------------------------------
2. Даны переменные a и b. Проверьте, что a делится без остатка на b. 
Если это так - выведите 'Делится' и результат деления, 
иначе выведите 'Делится с остатком' и остаток от деления.

var a = 10, b = 2;
if (a % b == 0){
	document.write('Делится: ' + a / b);
}
else{
	document.write('Делится с остатком: ' + a % b);
}
//5
---------
var a = 10;
var b = 3;
var rest = a % b;
if (rest != 0)
{
	alert('Делится с остатком '+rest);
}
else
{
	alert('Делится, результат деления: '+(a / b));
}
//Делится с остатком 1 
------------------------------------ Math.abs
3. Даны переменные a и b. Найдите найдите модуль разности a и b. 
Проверьте работу скрипта самостоятельно для различных a и b.

var a = 10;
var b = 3;
alert(Math.abs(b-a));
//7
-------------------------------------
4. Даны переменные a и b. Отнимите от a переменную b и результат присвойте 
переменной c. Сделайте так, чтобы в любом случае в переменную c записалось 
положительное значение. Проверьте работу скрипта при a и b, 
равных соответственно 3 и 5, 6 и 1.

var a = 6, b = 1;
var c = Math.abs(b - a);
document.write(c);
//5
-------------------------------- Math.pow, Math.sqrt.
5. Возведите 2 в 10 степень. Результат запишите в переменную st.
var st = Math.pow(2, 10);
document.write(st);
//1024
-------------------------------------
6. Найдите квадратный корень из 245.
var st = Math.sqrt(245);
document.write(st);
//15.652475842498529 
--------------------------------------
7(a). Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. 
Suma tuturor elementelor masivului:

var arr = [4, 2, 5, 19, 13, 0, 11];
var summ = 0;
for (var i = 0; i < arr.length; i++)
{
	summ = summ + arr[i];
}
document.write(summ);
//54

7. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. 
Найдите квадратный корень из суммы кубов его элементов. 
Для решения воспользуйтесь циклом for.

var arr = [4, 2, 5, 19, 13, 0, 11];
var sumCub = 0;
for (var i = 0; i < arr.length; i++)
{
	sumCub = sumCub + Math.pow(arr[i], 3); 
}
document.write('Summa cubov: ' + sumCub + '<br>');
document.write('Radical summ cubov: ' + Math.sqrt(sumCub));
//Summa cubov: 10584
//Radical summ cubov: 102.87856919689348 
------------------------------------- Math.round, Math.ceil, Math.floor, toFixed, toPrecision.
8. Найдите квадратный корень из 379. 
Результат округлите до целых, до десятых, до сотых.

var num = 379;
document.write(Math.sqrt(num) + '<br>');
document.write(Math.sqrt(num).toFixed(0) + '<br>');
document.write(Math.sqrt(num).toFixed(1) + '<br>');
document.write(Math.sqrt(num).toFixed(2));
//19.467922333931785
//19
//19.5
//19.47 
--------------------------------------------------------
9. Найдите квадратный корень из 587. Округлите результат в большую и 
меньшую стороны, запишите результаты округления в объект 
с ключами 'floor' и 'ceil'.

var num = 587;
var sqrt = Math.sqrt(num);
var obj = {};
obj['floor'] = Math.floor(sqrt);
obj['ceil'] = Math.ceil(sqrt);
document.write(obj.floor + '<br>');
document.write(obj.ceil);
//24
//25
-----------
var sq = Math.sqrt(587);
var obj = {'floor': Math.floor(sq), 'celi': Math.ceil(sq)}
document.write(obj.floor + '<br>');
document.write(obj.ceil);
//24
//25
------------------------------------------ Math.max, Math.min.
10. Даны числа 4, -2, 5, 19, -130, 0, 10. 
Найдите минимальное и максимальное число.

var arr = [4, -2, 5, 19, -130, 0, 10];
document.write(Math.max.apply(null, arr) + '<br>');
document.write(Math.min.apply(null, arr));
//19
//-130 
-------------------------------------------  Math.random.
11. Выведите на экран случайное целое число от 1 до 100.
function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.write(getRandomInt(1, 100));
------------------------------------
12. Заполните массив 10-ю случайными целыми числами. 
(Подсказка: нужно воспользоваться циклами for или while).

var arr = [];
for (var i = 0; i <= 100; i++){
  arr[i] = (Math.random()* 100).toFixed(0);
  document.write(arr[i] + '<br>');
}
-------------------------------------
13. Дан массив arr. Найдите среднее арифметическое его элементов. 
Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
var arr = [12, 15, 20, 25, 59, 79];
var summ = 0;
for (var i = 0; i < arr.length; i++){
  var summ = summ + arr[i];
  var result = summ / arr.length;
}
document.write('Suma elementelor din masiv: ' + summ + '<br>');
document.write('Media sumei elementelor masivului: ' + result);
//Suma elementelor din masiv: 210
//Media sumei elementelor masivului: 35
--------------------------------------
14. Напишите скрипт, который будет находить факториал числа. 
Факториал (обозначается !) - это произведение всех целых чисел, меньше данного, 
и его самого. Например, 4! = 1*2*3*4.
var result = 1;
for (var i = 1; i <= 4; i++){
  result = result * i;
  /*
  1 = 1*1
  1 = 1*2
  2 = 2*3
  6 = 6*4
  */
}
document.write(result + '<br>');
--------------------------------------
15. Напишите скрипт, который проверяет, является ли данное число простым 
(простое число - это то, которое делится только на 1 и на само себя).

nextPrime:
for (var i = 2; i < 10; i++) {

for (var j = 2; j < i; j++) {
if (i % j == 0) continue nextPrime;
}
document.write( i + '<br>'); // простое            
}
// 2 3 5 7 ... 