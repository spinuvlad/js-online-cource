Задача. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.

var date = new Date();
var month = date.getMonth() + 1;
document.write(date.getFullYear() + '-' + month + '-' + date.getDate());
//2017-3-2
--------------------------------
Задача. Выведите на экран текущий месяц словом, по-русски.

var months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
var date = new Date();
var getMonth = date.getMonth()
document.write(months[getMonth]);
//martie
--------------------------------
1.	Выведите на экран текущий день.

var date = new Date();
document.write(date.getDate());
//2
---------------------------------
2.	Выведите на экран текущий месяц.

var date = new Date();
document.write(date.getMonth() + 1);
//3
---------------------------------
3.	Выведите на экран текущий год.

var date = new Date();
document.write(date.getFullYear());
//2017
---------------------------------
4.	Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите 
функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры 
(из 1.9.2014 сделает 01.09.2014).

var date = new Date();
var arrDate = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getDate(), date.getMonth(), date.getFullYear()];
for (var i = 0; i < arrDate.length; i++)
{
  if (arrDate[i] < 10)
  {
    arrDate[i] = '0' + arrDate[i];
  }
}
document.write(arrDate[0] + ':' + arrDate[1] + ':' + arrDate[2] + ' ' + arrDate[3] + '.' + arrDate[4] + '.' + arrDate[5]);  
//13:37:59 02.02.2017
-------------------------------- .getDay() --------------------------------
5. Выведите на экран номер текущего дня недели.
var date = new Date();
document.write(date.getDay());	//5

6. Выведите на экран текущий день недели (словом, по-русски). Создайте для этого вспомогательную функцию, 
которая параметром принимает число, а возвращает день недели по-русски.
function weekDay(num)
{
  var arrWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  document.write(arrWeek[num]);
}
var date = new Date();
weekDay(date.getDay());
//пт
-----------------------------------
7. Узнайте, какой день недели был 7-го января 2015 года.
function weekDay(num)
{
  var arrWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  document.write(arrWeek[num]);
}
var date = new Date();
weekDay(date.getDay()); 
//сб
-------------------------- .getTime() -------------------------
8.	Выведите на экран количество минут с 1-го января 1970 года до настоящего момента времени.
var date = new Date();
var milSec = date.getTime();
document.write('Din 1 ianuarie 1970 au trecut: '+ parseInt(milSec/60000) + ' minute.')
//Din 1 ianuarie 1970 au trecut: 24808659 minute.
-------------------------- Date.parse() -----------------------
9.	Выведите на экран количество секунд, прошедшее между 1 марта 1988 года и текущим моментом с помощью Date.parse.
var date = new Date();
var now = date.getTime();
var past = Date.parse('1988-02-01'); 
document.write((now - past)/1000); 
//917767943.668    
---------------------
10.	Выведите на экран количество секунд с начала дня до настоящего момента времени.
var date = new Date();
var startDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
var now = date.getTime();                            
var start = startDay.getTime();
document.write((now-start)/1000 + '<br>');    
//29078.376
--------------------
11.	Создайте инпут, в который пользователь вводит дату своего рождения в формате '2014-12-31' 
(с конкретным годом). По потери фокуса выведите под инпутом сколько дней осталось до его дня рождения. 
Воспользуйтесь методом Date.parse.
/*
<input type="text" onmouseout="func()" id="input" placeholder="yyyy-mm-dd">
<br><span id="out"></span>  
*/
function func()
{
  var intro = document.getElementById('input').value;
  var out = document.getElementById('out');
  var introChange = '1970-' + Number(intro.substr(5, 2)-1) + intro.substr(7, 3);
  var introParse = Date.parse(introChange);
  var date = new Date();
  var dateStr = '1970-' + date.getMonth() + '-' + date.getDate();
  var dateParse = Date.parse(dateStr);
  var deffMilsec = Math.abs(introParse - dateParse);
  var deffDay = Math.round(deffMilsec/(1000*60*60*24));
  out.innerHTML = 'V-au ramas: ' + deffDay + ' de zile';
}
//start Time: Date.parse('1970-01-01T02:00:00')

Source:playcode.io/7460
Public:7460.playcode.io