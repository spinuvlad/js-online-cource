----------------------- length -----------------------
Свойство length позволяет узнать и установить длину строки:
var str = 'abcdefg';
document.write(str.length);
//7

---------------------- toUpperCase -----------------------
toUpperCase производит преобразование строки в верхний регистр из маленьких букв делает большие:
var str = "javascript+html";
document.write(str.toUpperCase());
//JAVASCRIPT+HTML

Но всегда нужно помнить что исходная строка не меняется:
var str = "JavaScript";
var newStr = str.toUpperCase();
document.write('Новая строка: ' + newStr + '<br>');
document.write('Исходная строка: ' + str);
//Новая строка: JAVASCRIPT
//Исходная строка: JavaScript

----------------------- toLowerCase ---------------------------
toLowerCase производит преобразование строки в нижний регистр
var str = "JavaScript";
document.write(str.toLowerCase());
//javascript

------------------------- substr --------------------------
substr возвращает подстроку от строки (исходная строка при этом не изменяется):
Первый параметр задает номер символа, с которого метод начинает отрезать (учтите, 
что нумерация с нуля), а второй параметр - сколько символов отрезать.

Второй параметр не является обязательным, если он не указан, то вырезаны будут 
все символы до конца строки.

Первый параметр также может принимать отрицательные значения. В этом случае 
отсчет символа, с которого начинается обрезание, будет идти с конца строки. 
Причем, последний символ имеет номер "-1", предпоследний - "-2" и так далее.

var str = 'Мне очень нравится JS';
document.write(str.substr(0,3));
//Мне

var str = 'Мне очень нравится JS';
document.write(str.substr(4));
//очень нравится JS

var str = 'Мне очень нравится JavaScript';
document.write(str.substr(-10, 4));
//Java

var str = 'Мне очень нравится JavaScript';
document.write(str.substr(-10));
//JavaScript

------------------------------- substring -----------------------------
substring возвращает подстроку от строки (исходная строка при этом не изменяется).
Если первый параметр больше второго, тогда substringing ведет себя, как будто они поменялись местами.
Например, str.substringing(3, 0) == str.substringing(0, 3).

var str = 'Мне очень нравится JS';
document.write(str.substring(4, 9));
//очень

var str = 'Мне очень нравится JS';
document.write(str.substring(-4));
//Мне очень нравится JS

----------------------------- slice ------------------------------------
slice возвращает указанную часть строки.
var str = 'Мне очень нравится JS';
document.write(str.slice(0,3));
//Мне

var str = 'Мне очень нравится JS';
document.write(str.slice(4));
//очень нравится JS

var str = 'Мне очень нравится JS';
document.write(str.slice(0, -1));
//Мне очень нравится J

----------------------------- indexOf --------------------------------
Метод вернет позицию первого совпадения, а если оно не найдено - то -1
Вторым параметром (он необязателен) можно передать номер символа, откуда следует начинать поиск.
var str = "Я учу Javascript";
document.write(str.indexOf('учу'));
//2

В данном примере в строке "Я учу учу Javascript" также ищется слово "учу", 
однако поиск начинается с 5-той позиции (я указал это вторым параметром). 
Метод вернет 6 (с этой позиции начинается второе слово "учу" в строке):
var str = "Я учу учу Javascript";
document.write(str.indexOf('учу', 5));
//6

В данном примере метод выведет -1, так как подстроки "PHP" в строке "Я учу Javascript" нету:
var str = "Я учу Javascript";
document.write(str.indexOf('PHP'));
//-1

----- lastIndexOf
В данном примере в строке "Б..Б..Б" ищется буква "Б". Так как поиск начинается с конца строки, 
то метод вернет 6 (позиция последней буквы "Б"):
var str = "Б..Б..Б";
document.write(str.lastIndexOf('Б'));
//6

var str = "Б..Б..Б";
document.write(str.lastIndexOf('Б', 5));
//3

var foldStr = '/folder1/folder2/folder3/folder4/';
document.write(foldStr.split('/')[2]);
//folder2

var foldStr = '/folder1/folder2/folder3/folder4/'; 
document.write(foldStr.split('/')[foldStr.split('/').length - 3]); //penultimul de la urma
//folder3
----------------------------- replace ---------------------------
Первым параметром принимается подстрока, которую заменяем, а вторым - подстрока, на которую заменяем:
var str = 'Я учу PHP';
var newStr = str.replace('PHP', 'JavaScript');
document.write(newStr);
//Я учу JavaScript

Чтобы функция заменила все совпадения, следует воспользоваться так называемым глобальным поиском:
var str = 'Я учу PHP PHP';
var newStr = str.replace(/PHP/g, 'JavaScript');
document.write(newStr);
//Я учу JavaScript JavaScript

//IMPORTANT: http://theory.phphtml.net/books/javascript/regular/

--------------------------- split ---------------------------
arr = 'a,b,c'.split(',');
document.write(arr);
// a,b,c

var str = 'я учу javascript!';
var arr = str.split(' '); // obligatoriu spatiu intre ''
document.write(arr);
//я,учу,javascript!

var str = 'я учу javascript!';
var arr = str.split(''); // fara spatiu intre ''
document.write(arr);
//я, ,у,ч,у, ,j,a,v,a,s,c,r,i,p,t,!

var str = '2025-12-31';
    newStr = str.replace(/-/g, ' ').split(' '); // sau newStr = str.split('-');
var date = [newStr[2] + '.' + newStr[1] + '.' + newStr[0]];
document.write(date);
//31.12.2025

var date = '2025-12-31';
var arr = date.split('-');
var newDate = arr[2] + '/' + arr[1] + '/' + arr[0]
document.write(newDate);
//31/12/2025

var str = '/folder1/folder2/folder3/folder4/'; 
var arr = str.split('/'); 
//,folder1,folder2,folder3,folder4,

var foldStr = '/folder1/folder2/folder3/folder4/';
document.write(foldStr.split('/')[2]);
//folder2

var foldStr = '/folder1/folder2/folder3/folder4/'; 
document.write(foldStr.split('/')[foldStr.split('/').length - 3]); //penultimul de la urma
//folder3
----------------------------- join ---------------------------
join объединяет элементы массива в строку с указанным разделителем 
(он будет вставлен между элементами массива).
Разделитель задается параметром функции и не является обязательным. 
Если он не задан - по умолчанию в качестве разделителя возьмется запятая. 
Если вы хотите слить элементы массива без разделителя - укажите его как пустую строку ''.

var arr = ['JS', 'HTML', 'PHP'];
var str = arr.join('-');
document.write(str);
//JS-HTML-PHP

var array = ['JS', 'HTML', 'PHP'];
var str = arr.join();
document.write(str);
//JS,HTML,PHP