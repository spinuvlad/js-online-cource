1. Выведите с помощью цикла столбец чисел от 1 до 100.

function genNum(num)
{
  for (i = 0; i <= num; i++)
  {
    document.write(i + '<br>');
  }
}
genNum(100);
// 1 2 3 4 5 ... 99 100
----------------------------------------------------
2. Выведите с помощью цикла столбец чисел от 100 до 1.

function genReversNum(num)
{
  for (i = num; i >= 0; i--)
  {
    document.write(i + '<br>');
  }
}
genReversNum(100); 
//100 99 98 ... 3 2 1 0
-----------------------------------------------------
3. Выведите с помощью цикла столбец четных чисел от 1 до 100.

function parNum(num)
{
  for (i = 1; i <= num; i++)
  {
    if (i % 2 ==0)
    {
      document.write(i + '<br>');
    }
  }
}
parNum(100);
//2 4 6 8 10 ... 98 100
-----------------------------------------------------
4. Заполните массив 10-ю иксами с помощью цикла.

function addX(num)
{
  var arr = [];
  for (i = 0; i < num; i++)
  {
    arr.push('x');
  }
  document.write(arr);
}
addX(10);
//x,x,x,x,x,x,x,x,x,x
------------------------------------------------------
5. Заполните массив числами от 1 до 10 с помощью цикла.

function addNum(num)
{
  var arr = [];
  for (i = 1; i <= num; i++)
  {
    arr.push(i);
  }
  document.write(arr);
}
addNum(10); 
//1,2,3,4,5,6,7,8,9,10
------------------------------------------------------
6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. 
Дроби округляйте до двух знаков в дробной части.

function genRandom(num)
{
  var arr = [];
  for (i = 0; i <= num; i++)
  {
    arr.push(Math.random(0, 1).toFixed(2));
  }
  document.write(arr);
}
genRandom(10);
//0.62,0.83,0.32,0.08,0.50,0.67,0.40,0.33,0.42,0.17,0.53
-----------------------------------------------------
7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.

function genRandom(num)
{
  var arr = [];
  for (i = 0; i <= num; i++)
  {
    arr.push((Math.random(1, 10)*10).toFixed(0));
  }
  document.write(arr);
}
genRandom(10);
//6,3,7,2,2,3,4,10,7,3,2
-----------------------------------------------------
8. Дан массив с числами. С помощью цикла выведите только те элементы массива, 
которые больше нуля и меньше 10-ти.

var arr = [12, 4, -3, 11, 7, 10, -12, 9];
for (i = 0; i < arr.length; i++)
{
  if (arr[i] > 0 && arr[i] < 10)
  {
    document.write(arr[i] + ','); 
  }
}
//4,7,9,
-----------------------------------------------------
9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. 
Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. 
Если такого элемента нет - ничего не выводите.

var arr = [12, 4, -3, 11, 5, 7, 10, -12, 5, 9];
  for (i = 0; i < arr.length; i++)
  {
    if (arr[i] == 5)
    {
      document.write('Есть');
      break;
    }
  }   
//Есть
------------------------------------------------------
10. Дан массив. С помощью цикла выведите только те элементы массива, 
которые стоят на четных позициях (имеют четные ключи).

var arr = [12, 4, -3, 11, 5, 7, 10, -12, 5, 9];
var arrKeys = Object.keys(arr);
for (i = 0; i < arrKeys.length; i++)
{
  if (arrKeys[i] % 2 == 0)
  {
    document.write(arr[i] + ',')
  }
}
//12,-3,5,10,5,
------------------------------------------------------
11. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

var arr = [12, 4, -3, 11, 5, 7, 10, -12, 5, 9];
var sum = 0;
for (i = 0; i < arr.length; i++)
{
  sum += arr[i];
}
document.write(sum); 
//48
--------------------------------------------------------
12. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

var arr = [12, 4, -3, 11, 5, 7, 10, -12, 5, 9];
var newArr = [];
var sum = 0;
for (var i = 0; i < arr.length; i++)
{
  newArr[i] = arr[i]*arr[i];  // or -  newArr.push(arr[i]*arr[i]);
  sum += newArr[i];
}
document.write(sum);
//714
---------------------------------------------------------
13. Дан массив с числами. Найдите среднее арифметическое его элементов 
(сумма элементов, делить на количество).

var arr = [12, 4, -3, 11, 5, 7, 10, -12, 5, 9];
var sum = 0;
for (var i = 0; i < arr.length; i++)
{
  sum += arr[i];
}
document.write('Rezultat: ' + sum + ' / ' + arr.length + ' = ' + sum/arr.length); 
//Rezultat: 48 / 10 = 4.8
----------------------------------------------------------
14. Нарисуйте пирамиду с помощью document.write, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5:
x 
xx 
xxx 
xxxx 
xxxxx 

var str = '';
function strX(num)
{
  for (var i = 0; i <= num; i++)
  {
    str += 'x';
    document.write(str + '<br>');
  }
}
strX(20);  
-----------------------------------------------------------
1
12
123
1234
12345

var str = '';
function strNum(num)
{
  for (var i = 1; i <= num; i++)
  {
    str += i;
    document.write(str + '<br>');  
  }
}
strNum(9);
------------------------------------------------------------ ***
15. Нарисуйте пирамиду с помощью document.write, как показано на рисунке, 
только у вашей пирамиды должно быть 9 рядов, а не 5:
11111 
22222 
33333 
44444 
55555 

function strNum(num)
{
  for(var i = 1; i <= num; i++) 
  { 
    for(var j = 0; j < 5; j++) 
    { 
      document.write('' + i); 
    } 
    document.write('<br>'); 
  }
}
strNum(9);
------------------------------------------------------------- ***
16. Нарисуйте пирамиду с помощью document.write, как показано на рисунке, 
только у вашей пирамиды должно быть 9 рядов, а не 5:
11111 
1111122222 
111112222233333 
11111222223333344444 
1111122222333334444455555 

function strNum(num)
{
  var str = ''; 
  for(var i = 1; i <= num; i++) 
  { 
    for(var j = 0; j < 5; j++) 
    { 
      str += '' + i; 
    } 
    document.write(str + "<br>"); 
  }
}
strNum(9);
------------------------------------------------------------------
17. Нарисуйте пирамиду с помощью document.write, как показано на рисунке, 
только у вашей пирамиды должно быть 9 рядов, а не 5:
1 
22 
333 
4444 
55555 

function strNum(num){
for (var i = 1; i <= num; i++)
{
  for (var j = 0; j < i; j++)
  {
    document.write('' + i);
  }
  document.write('<br>'); 
}
}
strNum(9);
-------------------------------------------------------------------
18. Сделайте с помощью цикла строку '123456789'.

var str = '';
for ( var i = 1; i <= 9; i++)
{
  str += i;
}
document.write(str); 
--------------------------------------------------------------------
19. Сделайте с помощью цикла строку '122333444455555', 
только ваша строка должна заканчиваться на 9.

var str = '';
for (var i = 1; i <= 9; i++)
{
  for (var j = 0; j < i; j++)
  {
    str += i;
  }
}
document.write(str);
---------------------------------------------------------------------
20. Нарисуйте ёлочку с помощью document.write, как показано на рисунке, 
только ваша ёлочка должна быть до девятки:
1
11
111
1111
11111
2
22
222
2222
22222

str = '';
for (var i = 1; i <= 9; i++)
{
  for (var j = 0; j < 5; j++)
  {
    str += i;
    document.write(str + '<br>');
  }
  str = '';
}
----------------------------------------------------------------------
21. Заполните массив следующим образом: в первый элемент запишите 'x', 
во второй 'xx', в третий 'xxx' и так далее.

var arr = [];
var str = '';
for (var i = 0; i < 9; i++)
{
  str += 'x';
  arr[i] = str;
  document.write(arr[i] + '<br>'); 
}
---------------------------------------------------------------------- ***
22. Заполните массив следующим образом: в первый элемент запишите '1', 
во второй '22', в третий '333' и так далее.

var arr = []; 
for(var i = 1; i < 10; i++) 
{ 
  str = ''; 
  for(var j = 0; j < i; j++) 
  { 
    str += i; 
  } 
  arr.push(str); 	//arr[i] = str; 
} 
document.write(arr);
------------------------------------------------------------------------ ***
23. Выведите на экран первые 20 штук чисел Фибоначчи.
каждое последующее число равно сумме двух предыдущих чисел:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584

var arr = [0, 1];
for (i = 0; i < 20; i++)
{
  arr[i+2] = arr[i] + arr[i+1];	//arr.push(arr[i] + arr[i+1]);
}
document.write(arr);
--------------------------------------------------------------------------
24. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
Первым параметром функция принимает значение, которым заполнять массив, 
а вторым - сколько элементов должно быть в массиве. 
Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function arrayFill(str, num)
{
  arr = [];
  for (i = 0; i < num; i++)
  {
    arr[i] = str;
  }
  document.write(arr);
}
arrayFill('x', 5); 
//x,x,x,x,x
-----------------------------------------------------------------------------
25. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, 
чтобы в сумме получилось больше 10-ти.

var arr = [2, -3, 1, 5, -2, 8, 4, -1, 9, 0];
var sum = 0;
for (i = 0; i < arr.length; i++)
{
  sum += arr[i];
  if (sum > 10)
  {
    break;
  }
}
document.write(i+1);
//6
------------------------------------------------------------------------------
26. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, 
чтобы в сумме получилось больше 10-ти.

var arr = [2, -3, 1, 5, -2, 8, 4, -1, 9, 0];
var sum = 0;
var newArr = arr.reverse();
for (i = 0; i < arr.length; i++)
{
  sum += newArr[i];
  if (sum > 10)
  {
    break;
  }
}
document.write(i+1);
//4

var arr = [2, -3, 1, 5, -2, 8, 2, -1, 9, 0];
var counter = 1; 
var sum = 0; 
for(var i = arr.length - 2; i >= 0; i--) 
{ 
  sum += arr[i]; 
  counter++; 
  if(sum > 10) 
  { 
    break; 
  } 
} 
document.write(counter);
//5
-------------------------------------------------------------------------------
27. Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. 
Найдите два решения.

var str = 'hello!';
document.write(str[0].toUpperCase() + str.slice(1));
//Hello!

var str = 'hello!';
var newStr = str.replace(str[0], str[0].toUpperCase());
document.write(newStr);
//Hello!
--------------------------------------------------------------------------------
28. Дана строка. Сделайте заглавным последний символ этой строки не используя цикл. 
Найдите два решения.

var str = 'последний символ';
document.write(str.slice(0, -1) + str.substr(-1).toUpperCase());
//последний симвоЛ

var str = 'последний символ';
var lastSym = str[str.length-1].toUpperCase();
var newStr = str.substring(0, str.length-1);
document.write(newStr + lastSym);
//последний симвоЛ
---------------------------------------------------------------------------------
29. Дана строка, например, '123456'. 
Переверните эту строку (сделайте из нее '654321') не используя цикл.

var str = '123456';
var arr = str.split('');
arr.reverse();
document.write(arr.join(''));
//654321
---------------------------------------------------------------------------------
30. Дано число, например, 3751. 
Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл.

var num = 3751;
var arr = String(num).split('');
var result = arr.splice(-1, 1).concat(arr);
document.write(result.join(''));
//1375
---------------------------------------------------------------------------------
31. Проверьте, что строка начинается на http://

var str = 'http://document.write.com';
var contrStr = str.substr(0, 7);
if (contrStr == 'http://')
{
  document.write(str);
}
else
{
  document.write('Enter corect url adress');
}
----------------------------------------------------------------------------------
32. Проверьте, что строка заканчивается на .html.

var str = 'document.write.html';
var contrStr = str.substr(-5, 5);
if (contrStr == '.html')
{
  document.write(str);
}
else
{
  document.write('Enter corect url adress');
}
-----------------------------------------------------------------------------------
33. Дана строка вида '/folder1/folder2/folder3/folder4/'. 
Строки между слешеми могут быть любыми. 
Получите содержимое второго блока (в нашем случае 'folder2').

var foldStr = '/folder1/folder2/folder3/folder4/';
var pos1 = foldStr.indexOf('/', 1);
var pos2 = foldStr.indexOf('/', pos1+1);

document.write(foldStr.slice(pos1+1, pos2));
//folder2

var foldStr = '/folder1/folder2/folder3/folder4/';
document.write('<b>Решение №2:</b><br>');

document.write('Содержимое второго блока: "' + foldStr.split('/')[2] + '".<br>');
//folder2
-----------------------------------------------------------------------------------
34. Дана строка вида '/folder1/folder2/folder3/folder4/'. Строки между слешеми могут быть любыми. 
Получите содержимое второго блока с конца (в нашем случае 'folder3').

var foldStr = '/folder1/folder2/folder3/folder4/'; 
var pos1 = foldStr.lastIndexOf('/', foldStr.length-2);
var pos2 = foldStr.lastIndexOf('/', pos1-1)
document.write(foldStr.slice(pos2+1, pos1));
//folder3

var foldStr = '/folder1/folder2/folder3/folder4/'; 
document.write(foldStr.split('/')[foldStr.split('/').length - 3]);
//folder3
----------------------------------------------------------------------------------- ***
35. Дана строка вида '/folder1/folder2/folder3/folder4/'. Строки между слешеми могут быть любыми. 
Удалите из нее блок с заданным номером. Найдите два решения, оба без цикла.

var foldStr = '/folder1/folder2/folder3/folder4/'; 
var num = 2;
document.write(foldStr.split('/')[num]);
//folder2

var num = 2; 
var foldStr = '/folder1/folder2/folder3/folder4/'; 
var arr = foldStr.split('/'); 
arr.splice(num, 1); //din masiv: 1 element de pe pozitia "num"
document.write(arr.join('/'));
//folder2
-------------------------------------------------------------------------------------
36. Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, 
делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

function ucFirst(str)
{
  var arr = str.split(' ');
  for( var i = 0; i < arr.length; i++)
  {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  }
  var newStr = arr.join(' ');
  return newStr;
} 
document.write(ucFirst('cделайте заглавным первый символ каждого слова этой строки.'));
//Cделайте Заглавным Первый Символ Каждого Слова Этой Строки.

var str = 'cделайте заглавным первый символ каждого слова этой строки.'
var newStr = '';
function ucFirst(s) 
{ 
  return s.substr(0, 1).toUpperCase() + s.substr(1); 
} 

var arr = str.split(' '); 
for(var i = 0; i < arr.length; i++) 
{ 
  newStr += ucFirst(arr[i]); 
  newStr += ' '; 
} 
document.write(newStr);
//Cделайте Заглавным Первый Символ Каждого Слова Этой Строки.
------------------------------------------------------------------------------------ ***
37. Дана строка. Сделайте заглавным последний символ каждого слова этой строки.

function ucLast(str)
{
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++)
  {
    arr[i] = arr[i].slice(0, -1) + arr[i].slice(-1).toUpperCase();
  }
  var newStr = arr.join(' ')
  return newStr;
}
document.write(ucLast('cделайте заглавным последний символ каждого слова этой строки.'));
//cделайтЕ заглавныМ последниЙ симвоЛ каждогО словА этоЙ строки.

var str = 'cделайте заглавным последний символ каждого слова этой строки.';
var newStr = '';
function ucLast(s)
{
  return s.slice(0, -1) + s.slice(-1).toUpperCase();
}
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++)
{
  newStr += ucLast(arr[i]);
  newStr += ' '; 
}
document.write(newStr);
//cделайтЕ заглавныМ последниЙ симвоЛ каждогО словА этоЙ строки.
---------------------------------------------------------------------------------- ***
38. Дана строка. Сделайте заглавным каждый четный символ этой строки.

var str = 'cделайте заглавным каждый четный символ этой строки.';
for(var i = 0; i < str.length; i+=2) 
{ 
  str = str.slice(0, i) + str.substr(i, 1).toUpperCase() + str.substr(i+1); 
} 
document.write(str);
//CдЕлАйТе зАгЛаВнЫм кАжДыЙ ЧеТнЫй сИмВоЛ ЭтОй сТрОкИ.
---------------------------------------------------------------------------------- ***
39. Дана строка с дефисами, например '12-345-67-89-10'. 
Замените первые 3 дефиса на !.

var str = '12-345-67-89-10'; 
var counter = 0; 
for(var i = 0; i < str.length; i++) 
{ 
  if(counter < 3) 
  { 
    if(str[i] == '-') 
    { 
      str = str.replace('-', '!'); 
      counter++; 
    } 
  } 
} 
document.write(str);
//12!345!67!89-10
---------------------------------------------------------------------------------- ***
40. Дана строка с дефисами, например '12-345-67-89-10'. 
Замените первые 3 дефиса с конца на !.

var str = '12-345-67-89-10'; 
var counter = 0; 
for(var i = str.length-1; i >= 0; i--) 
{ 
  if(counter < 3) 
  { 
    if(str[i] == '-') 
    { 
      str = str.substr(0,i) + '!' + str.substr(i + 1); 
      counter++; 
    } 
  } 
} 
document.write(str); 
//12-345!67!89!10
-----------------------------------------------------------------------------------
41. Дана строка вида 'var_text_hello'. 
Сделайте из него текст 'varTextHello'.

var str = 'var_text_hello';
var arr = str.split('_');
for (var i = 1; i < arr.length; i++)
{
  arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
  
}
document.write(arr.join(''));
//varTextHello
------------------------------------------------------------------------------------ ***
42. Дана строка с пробелами по краям. Реализуйте функцию ltrim, которая будет убирать пробелы слева. 
Реализуйте функцию rtrim, которая будет убирать пробелы справа. Реализуйте функцию trim, 
которая будет убирать пробелы по концам строки.

var str = '------Дана строка с пробелами по краям---';
function ltrim()
{
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] != '-')
    {
      str = str.substr(i);
      break;
    }
  }
  document.write(str + '<br>');
}
//ltrim(); 
//Дана строка с пробелами по краям---

function rtrim()
{
  for (var i = str.length-1; i > 0; i--)
  {
    if (str[i] != '-')
    {
      str = str.slice(0, i);
      break;
    }
  }
  document.write(str + '<br>');
}
//rtrim(); 
//------Дана строка с пробелами по края

function trim()
{
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] != '-')
    {
      str = str.substr(i);
      break;
    }
  }
  
  for (var i = str.length-1; i > 0; i--)
  {
    if (str[i] != '-')
    {
      str = str.slice(0, i);
      break;
    }
  }
  document.write(str + '<br>');
}
trim();
//Дана строка с пробелами по края
-------------------------------------------------------------------- ***
43. Сделайте функцию strReplace, которая будет осуществлять поиск и замену. 
Первым параметром функция должна принимать массив 'что меняем', а вторым параметром массив 'на что меняем'. 
Третьим параметром строку, в которой меняем. Функция должна искать в строке элементы первого 
массива и менять их на соответствующие элементы второго массива.

var str = 'я учу xml, css и ruby'; 
var arr1 = ['xml', 'ruby']; 
var arr2 = ['html', 'javascript']; 
function strReplace(arr1, arr2, str) 
{ 
	for(var i = 0; i < arr1.length; i++) 
	{ 
		var index = str.indexOf(arr1[i]); 
		if(index + 1) 
		{ 
			str = str.slice(0, index) + arr2[i] + str.substr(index + arr1[i].length); 
		} 
	} 
	return str; 
} 
document.write('Исходная строка: "' + str + '".<br>'); 
document.write('Меняем элементы из массива: [' + arr1 + '] на элементы из массива: [' + arr2 + '].<br>'); 
document.write('Результат: "' + strReplace(arr1, arr2, str) + '".<br>');

var str = 'я учу xml css и ruby'; 
var arrIn = ['xml', 'ruby']; 
var arrOut = ['html', 'javascript'];
var arrStr = str.split(' ');

function strReplace(arrIn, arrOut, str)
{
  for (var i = 0; i < arrIn.length; i++)
  {
    for (var j = 0; j < arrStr.length; j++)
    {
      if (arrStr[j] == arrIn[i])
      {
        arrStr[j] = arrStr[j].replace(arrIn[i], arrOut[i]);
      }
    }
  }
  document.write(arrStr.join(' '));
}
strReplace(arrIn, arrOut, str);
//
--------------------------------------------------------------------------------- ???
44. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
Функция должна возвращать true или false.

ПОЧЕМУ ВАЗВТАЩЯЕТСЯ "false" ?????????????????????????????

var str = 'Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.';
var arrCheck = ['есть'];
var arrStr = str.split(' ');

function inArray(arrCheck, str)
{
  for (i = 0; i < arrStr.length; i++)
  {
    if (arrCheck == arrStr[i])
    {
      return true;
      break;
    }
    else
    {
      return false;
    }
  }
}
document.write(inArray(arrCheck, str));
------------------------------------------------------------------------------------- ***
45. Дана строка, например, '123456'. Сделайте из нее '214365'.

var str = '123456';
var newStr = '';
for (var i = 0; i < str.length; i = i + 2) 
{
  newStr = newStr + str[i+1] + str[i]; 
}
document.write(newStr); 
//214365
------------------------------------------------------------------------------------- ??????
46. Сделайте функцию, которая меняет местами ключи и значения в ассоциативном массиве (объекте).

var obj = { 'key1': 'a', 'key2': 'b', 'key3': 'c', 'key4': 'd' };
var newObj = {'':''};
//document.write(Object.keys(obj)[0] + Object.keys(obj)[1]);