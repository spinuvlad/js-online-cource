Работа с математическими функциями:
document.write(Math.abs(-3)); //из отрицательного числа делает положительное. 
//3

document.write(Math.round(6.6)); //округление до ближайшего целого числа.
//7

document.write(Math.ceil(3.00001)); //округление числа до целых всегда в большую сторону.
//4

document.write(Math.floor(2.9999)); //округление числа до целых всегда в меньшую сторону. 
//2

document.write(Math.min(-1, -100, -30, -25, 40)); 
//-100
По умолчанию функция не работает с массивами, однако с помощью хитрого приема 
можно найти минимальное значение массива: Math.min.apply(null, arr), где arr - произвольный массив. 
var arr = [40, 20, 42, 100, 67];
document.write(Math.min.apply(null, arr));
//20

document.write(Math.max(-1, 0, -20, -56, -100));
//0

document.write(Math.sqrt(4)); //возвращает квадратный корень числа. 
//2
document.write(Math.sqrt(-100));
//NaN

document.write(Math.pow(3, 4)); //возводит число в заданную степень. 
//81

var str = '10.3px';
document.write(parseInt(str)); //преобразует строку в целое число если только целое число стоит в начале строки, иначе будет выведено NaN.
//10

var str = '10.3px';
document.write(parseFloat(str));  //преобразует строку в число с плавающей точкой.
//10.3

var num = 1.1119;
document.write(num.toFixed(3));  //округление числа до указанного знака после запятой.
//1.112
var num = 1.111;
document.write(num.toFixed());
//1
var num = 12345.6789;
document.write(num.toFixed(-2));
//12300

var num = 678.19324;
document.write(num.toPrecision(4));
//678.2
var num = 678.19324;
document.write(num.toPrecision(2));
//6.8e+2
-------------------------------------------- Math.random
Случайное дробное число между min и max
function getRandomArbitary(min, max)
{
	return Math.random() * (max - min) + min;
}
document.write(Math.random()); //numar neintreg arbitrar de la 0 la 1
//0.5416665468657356

function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.write(getRandomInt(10, 100)); //numar intreg arbitrat de la 10 la 100
//43
-------------------------------------------- isNaN
var num = 13;
document.write(isNaN(num));  //Функция isNaN проверяет, является ли переданный параметр числом или нет.
//false

var num = 'Я люблю Javascript';
document.write(isNaN(num));
//true
-------------------------------------------- isFinite
она вернет false, если число является Infinity или -Infinity или не числом (то есть NaN), в остальных случаях вернет true.
То есть строки, массивы и т.п. будут преобразованы в NaN и соответственно вернут false.
пустая строка '' возвращает true, строка с пробелами '    ' также возвращает true, null возвращает true, для значений true и false также возвращается true.

var num = 3;
document.write(isFinite(num));
//true

var num = 'JS';
document.write(isFinite(num));
//false

var num = Infinity;
document.write(isFinite(num));
//false

var num = 1/0;
document.write(isFinite(num));
//false

var num = '';
document.write(isFinite(num));
//true

Если вам нужна действительно точная проверка на число, которая не считает числом строку из пробелов, 
логические и специальные значения - используйте следующую функцию isNumeric:
function isNumeric(num)
{
	return !isNaN(parseFloat(num)) && isFinite(num);
}
------------------------------------
