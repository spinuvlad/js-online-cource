/*
Задача. Дана строка 'aaa bbb ccc'. 
Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
*/
var str = 'aaa bbb ccc';
var str = 'aaa bbb ccc';
alert(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
alert(str.substring(4, 7)); //substring(откуда отрезать, докуда отрезать)
alert(str.slice(4, 7)); //slice(откуда отрезать, докуда отрезать)
//bbb
-----------------------
/*
Задача. В переменной date лежит дата в формате '2025-12-31'. 
Преобразуйте эту дату в формат '31/12/2025'.
*/
var str = '2025-12-31';
var arr = str.split('-');
document.write(arr + '<br>');
//получим массив ['2025', '12', '31'] 

var newStr = arr[2]+'/'+arr[1]+'/'+arr[0];
document.write(newStr); 
//получим строку '31/12/2025' 
------------------------- toUpperCase
1. Дана строка 'js'. Сделайте из нее строку 'JS'.

var str = 'js';
document.write(str.toUpperCase());
-------------------------- length
3. Дана строка 'я учу javascript!'. 
Найдите количество символов в этой строке.

var str = 'я учу javascript!';
document.write(str.length);
//17
-------------------------- substr / substring / slice
4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' 
тремя разными способами (через substr, substring, slice).

var str = 'я учу javascript!';
document.write(str.substr(2,3) + '<br>'); //учу
document.write(str.substr(6,11) + '<br>'); //javascript!

document.write(str.substring(2,5) + '<br>'); //учу
document.write(str.substring(6,17) + '<br>'); //javascript!

document.write(str.slice(2,5) + '<br>');//учу
document.write(str.slice(6,17) + '<br>'); //javascript!
--------------------------- indexOf
5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'. 
var str = 'я учу javascript!';
document.write(str.indexOf('учу'));
//2
--------------------------- substring
6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по 
следующему принципу: если количество символов этого текста больше заданного в 
переменной n, то в переменную result запишем первые n символов строки str и 
добавим в конец троеточие '...'. В противном случае в переменную result 
запишем содержимое переменной str.

var str = 'Дана переменная str, в которой хранится какой-либо текст.'
var n = 22;
if (str.length > n){
  var result = str.substring(0, n) + '...';
}
else result = str;
document.write(result);
//Дана переменная str, в...
---------------------------- replace
7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' 
с помощью глобального поиска и замены

var str = 'Я-учу-javascript!';
document.write(str.replace(/-/g, '!'));
//Я!учу!javascript!
---------------------------- split
8. Дана строка 'я учу javascript!'. С помощью метода split 
запишите каждое слово этой строки в отдельный элемент массива.

var str = 'я учу javascript!';
var arr = str.split(' '); // obligatoriu spatiu intre ''
document.write(arr);
//я,учу,javascript!
---------------------------- split
9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый 
символ этой строки в отдельный элемент массива.

var str = 'я учу javascript!';
var arr = str.split(''); // fara spatiu intre ''
document.write(arr);
//я, ,у,ч,у, ,j,a,v,a,s,c,r,i,p,t,!
---------------------------- split	
10. В переменной date лежит дата в формате '2025-12-31'. 
Преобразуйте эту дату в формат '31.12.2025'.

var str = '2025-12-31';
    newStr = str.replace(/-/g, ' ').split(' '); // sau newStr = str.split('-');
var date = [newStr[2] + '.' + newStr[1] + '.' + newStr[0]];
document.write(date);
//31.12.2025
---------------------------- join
11. Дан массив ['я', 'учу', 'javascript', '!']. 
С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. 

var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join('+');
document.write(str);
--------------------------------------------
12. Преобразуйте первую букву строки в верхний регистр.

var str = 'я учу javascript!';
var first = str.slice(0,1).toUpperCase() + str.slice(1);
document.write(first);
//Я учу javascript!
---------------------------------------------
13. Преобразуйте первую букву каждого слова строки в верхний регистр.

var str = 'Преобразуйте первую букву каждого слова строки в верхний регистр.';
var arr = str.split(' ');
for (var i = 0; i < arr.length; i++){
  arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
}
document.write(arr); 
//Преобразуйте,Первую,Букву,Каждого,Слова,Строки,В,Верхний,Регистр.
---------------------------------------------
14. Преобразуйте строку 'var_test_text' в 'varTestText'. 
Скрипт, конечно же, должен работать с любыми аналогичными строками.

var str = 'var_test_text';
var newStr = str.replace(/_/g, ' ');
var arr = newStr.split(' ');
for (var i = 1; i < arr.length; i++){
  arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1); 
}
newStr = arr.join('');
document.write(newStr); 
//varTestText
------ sau:
var str = 'var_test_text';
var arr = str.split('_');
for (var i = 0; i < arr.length; i++)
{
	if (arr[0] != arr[i])
	{
		arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
	}
}
var result = arr.join('');
alert(result);
//varTestText