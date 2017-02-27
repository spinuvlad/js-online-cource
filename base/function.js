 ***ALERT***
позволяет вывести какой-либо текст в окно браузера в виде диалогового окошка.
alert('Привет, мир!'); 
------
var text = 'Привет, мир!';
alert(text);
------
var text = 10;
alert(text);
*******************
***PROMPT***
выдает окошко и позволяет получить от пользователя какой-либо текст.
var name = prompt('Ваше имя?');
alert('Ваше имя: '+name);
*******************
***CONFIRM***
Если вам нужно просто спросить у пользователя 'Да' или 'Нет', не давая ему 
возможность ввести иной текст - используйте функцию confirm.
Если пользователь нажмет 'ОК' - то функция вернет true, а если 'Отмена' - то вернет false.
var ok = confirm('Вам уже есть 18 лет?');
alert(ok);
*******************
var tc = prompt('Enter the tc grade:');
var tf = 9*tc/5 + 32;
alert('tf grade is: ' + tf);
******************* afisarea rezultatului **********************
document.write
write  - afiseaza in rand
writeln - afiseaza in coloana

******************** length **********************
var arr = ['Петя', 'Вася', 'Дима', 'Олег', 'Вова'];
document.write(arr.length);
//5

var arr = ['Петя', 'Вася', 'Дима', 'Олег', 'Вова'];
arr.length = 2;
document.write(arr);
// Петя, Вася

********************* typeof *********************
alert(typeof variabila1)  //afiseaza tipul variabilei (number, string, boolean, null, undefine, object)
