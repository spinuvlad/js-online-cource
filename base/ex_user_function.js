Задача. Сделайте функцию, которая возвращает куб числа. Число передается параметром.
function cube(num)  //$num
{
  return num*num*num // $num*$num*$num
}
document.write(cube(4));
//64
----------------------------
Задача. Дан массив с числами. Создайте из него новый массив, где останутся 
лежать только положительные числа. Создайте для этого вспомогательную 
функцию isPositive(), которая параметром будет принимать число и 
возвращать true, если число положительное, и false - если отрицательное.

var arr = [1, 2, 3, -1, -2, -3];

function isPositive(num)
{
	if (num >=0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

var newArr = [];
for (var i = 0; i <= arr.length; i++)
{
	if (isPositive(arr[i]))
	{
		newArr.push(arr[i]);
	}
}

document.write(newArr);
//1,2,3
----------------------------------------------------
1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function square(num)
{
  return num * num;
}
document.write(square(4));
//16
------------
function square(num)
{
  var text = num + ' la putera a 2-a este: ' + num*num
  return text;
}
document.write(square(4));
//4 la putera a 2-a este: 16
-------------------------------------------------------
2. Сделайте функцию, которая возвращает сумму двух чисел.
function sum(a,b)
{
  var result = 'suma acestor doua numere este: ' + Number(a+b);
  return result;
}
document.write(sum(2,3));
//suma acestor doua numere este: 5
--------------------------------------------------------
3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function calc(a,b,c)
{
  var result = (a-b)/c;
  return result;
}
document.write(calc(15,3,4));
//3
---------------------------------------------------------
4. Сделайте функцию, которая принимает параметром число от 1 до 7, 
а возвращает день недели на русском языке.

function weekNum(num)
{
  switch (num)
  {
    case 1: 
      var result = 'luni';
    break;
    case 2:
      result = 'marti';
    break;
    case 3:
      result = 'miercuri';
    break;
    case 4:
      result = 'joi';
    break;
    case 5:
      result = 'vineri';
    break;
    case 6:
      result = 'sambata';
    break;
    case 7:
      result = 'duminica';
  }
  return result;
}
document.write(weekNum(5));
//vineri
------------------------------------------------------
5. Дан массив с числами. Запишите в новый массив только те числа, 
которые больше нуля и меньше 10-ти. Создайте для этого вспомогательную 
функцию isNumberInRange(число), которая параметром будет принимать число и 
возвращать true, если число попадает в заданный интервал и false - если не попадает.

var arr = [7, -4, 12, 4, 1, 23, 0, -10];

function isNumberInRange(num)
{
  if (num > 0 && num < 10)
  {
    return true;
  }
  else
  {
    return false;
  }
}

var newArr = [];
for (var i = 0; i <= arr.length; i++)
{
  if (isNumberInRange(arr[i]))
  {
    newArr.push(arr[i]);
  }
}

document.write(newArr);
//7,4,1
------------------------------------------------------
6. Найдите все года от 0 до 2017, сумма цифр которых равна 13. 
Для этого создайте вспомогательную функцию getNumbersSum, которая 
параметром будет принимать число и возвращать сумму цифр этого числа.

function getNumbersSum(num)
{
  var string = String(num).split('');  //numarul se transforma in string
  var sum = 0;
  for (var i = 0; i < string.length; i++)
  {
    sum += Number(string[i]);   //string se transf in number
  }
  if (sum == 13){
    return num; 
  }
}

function pushYear(year)
{
  for (i = 0; i <= year; i++)
  {
    if (getNumbersSum(i))  //??(getNumbersSum(i) == true) - не работает
    {
    document.write(getNumbersSum(i) + '<br>')
    }
  } 
}
pushYear(2017);
---------------------------------------------------------
7. Дан массив с числами. Создайте из него новый массив, где останутся лежать 
только четные из этих чисел. Создайте для этого вспомогательную функцию 
isEven() (even - это четный), которая параметром будет принимать число и 
возвращать true, если число четное и false - если не четное.

var arr = [7, -4, 12, 4, 1, 23, 0, -10];

function isEven(num)
{
  if (num % 2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

var newArr = [];
for (i = 0; i < arr.length; i++)
{
  if(isEven(arr[i]))
  {
    newArr.push(arr[i]);
  }
}
document.write(newArr); 
//-4,12,4,0,-10
------------------------------------------------------------
8. Дан массив с числами. Найдите сумму четных чисел из этого массива. 
Для этого создайте функцию arraySum, которая параметром принимает массив, 
а возвращает его сумму. Также создайте функцию getEven, которая параметром 
принимает массив чисел, а возвращает массив четных чисел. 
Эта функция должна использовать функцию isEven из предыдущей задачи.

var newArr = [];
function getEvenSum(arr)
{
  for (var i = 0; i < arr.length; i++)
  {
    if(isEven(arr[i]))   //verifica daca cifra se imparte la 2 fara rest
    {
      newArr.push(arr[i]); 
    }
  }

  var result = 0;
  for (i = 0; i < newArr.length; i++) //sumeaza elementele noi
  {
    result += newArr[i];
  }
  document.write(result);
}

function isEven(num)  //funtie de verificare daca cifra se imparte la 2 fara rest
{
  if (num % 2 == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

getEvenSum([12, 14, 18, 13, -3, -6]); 
//38
--------------------------------------------------------------
9. Сделайте функцию, которая определяет простое число или нет. 
С помощью этой функции найдите простые числа в промежутке от 1 до 1000 
и запишите их в массив. Затем создайте функцию arraySum, которая параметром 
принимает массив, а возвращает его сумму, и с ее помощью найдите сумму 
простых чисел в промежутке от 1 до 1000.

function arrPrimeNumbers() 
{ 
  var arr = []; 
  for(var i = 2; i <= 1000; i++) 
  { 
    var isPrime = true; 
    for(var j = 2; j < i; j++) 
    { 
      if(i % j == 0) 
      { 
        isPrime = false; 
        break; 
      } 
    } 
    if(isPrime)
    {
      arr.push(i);
    }
  } 
  return arr; 
} 
function arraySum(array) 
{ 
  var sum = 0; 
  for(var i = 0; i < array.length; i++) 
    { 
      sum += array[i]; 
    } 
  return sum;  
} 
document.write(arraySum(arrPrimeNumbers()));
//76127