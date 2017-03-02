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