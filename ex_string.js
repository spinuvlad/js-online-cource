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
-------------------------
1. Дана строка 'js'. Сделайте из нее строку 'JS'.

var str = 'js';
document.write(str.toUpperCase());
--------------------------
3. Дана строка 'я учу javascript!'. 
Найдите количество символов в этой строке.

var str = 'я учу javascript!';
document.write(str.length);
//17
--------------------------
4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' 
тремя разными способами (через substr, substring, slice).

var str = 'я учу javascript!';
document.write(str.substr(2,3) + '<br>'); //учу
document.write(str.substr(6,11) + '<br>'); //javascript!

document.write(str.substring(2,5) + '<br>'); //учу
document.write(str.substring(6,17) + '<br>'); //javascript!

document.write(str.slice(2,5) + '<br>');//учу
document.write(str.slice(6,17) + '<br>'); //javascript!
---------------------------
5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'. 
var str = 'я учу javascript!';
document.write(str.indexOf('учу'));
//2
