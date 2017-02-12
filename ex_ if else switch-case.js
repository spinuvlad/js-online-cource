Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа 
попадает это число (в первую, вторую, третью или четвертую):
var min = prompt('Introdu minute:'); 
if (min >= 0 && min <= 14)
{
	alert('В первую четверть.');
}

if (min >= 15 && min <= 30)
{
	alert('Во вторую четверть.');
}

if (min >= 31 && min <= 45)
{
	alert('В третью четверть.');
}

if (min >= 46 && min <= 59)
{
	alert('В четвертую четверть.');
} 
----------------------
var a = prompt('Enter the string:');
if (a == 'test')
{
alert('Верно!');
}
else
{
alert('Неверно!');
}
-----------------------
var test  = false;
if (test != true)
{
	alert('Верно!');
}
else
{
	alert('Неверно!');
}
**
var test  = false;
if (!test)
{
	alert('Верно!');
}
else
{
	alert('Неверно!');
}
-----------------------
var result, num = Number(prompt('Enter 1 - 4 number:'));
switch (num)
{
  case 1:
    result = 'зима';
  break;
  case 2:
    result = 'весна';
  break;
  case 3:
    result = 'лето';
  break;
  case 4:
    result = 'осень';
  break;
}
alert(result);
----------------------------
Переменная lang может принимать три значения: 'ru', 'en', 'de'. Если она имеет 
значение 'ru', то в переменную arr запишем массив дней недели на русском языке, 
если имеет значение 'en' – то на английском, если 'de' – на немецком. Решите задачу 
ерез 3 if, через switch-case и через многомерный массив:

var arr, lang = 'de';
	if (lang == 'ru')
		{
 			arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
		}
	if (lang == 'en')
		{
			arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		}
	if (lang == 'de')
		{
			arr = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
		}
alert(arr);
***
var arr, lang = 'de';
switch (lang)
{
	case 'ru':
		arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	break;
	case 'en':
		arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	break;
	case 'de':
		arr = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
	break;
}
alert(arr);
***
var lang = 'ru';
var arr = {
  'ru':['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'], 
  'en':['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 
  'de':['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
};
alert(arr[lang]);
-------------------------
var day = Number(prompt('Enter number 1 - 31:'));
if ((day >= 1) && (day <= 10))
{
  alert('Pervaia dekada');
}
else if ((day > 10) && (day <= 20))
{
  alert('Vtoraia dekada');
}
else if ((day < 20) && (day <=31))
{
  alert('tretiaia dekada');
}
else
{
  alert ('Invalid number'); 
}
****
var day = 12;
if (day <= 10 )
{
	var dekada = 1;
}
if (day >= 11 && day <=20 )
{
	dekada = 2;
}
if (day >= 21 && day <=30 )
{
	dekada = 3;
}
alert(dekada); 
----------------------------
В переменной month лежит число от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
 var month = Number(prompt('Enter number 1 - 12:'));
 if (month < 1 || month > 12)
 {
   alert('Invalid number'); 
 }
 if (month == 12 || month <= 2)
 {
   var season = 'зима';
 } 
 if (month >= 3 && month <=5)
 {
   season = 'весна';
 }
 if (month >= 6 && month <= 8)
 { 
   season = 'лето';
 }
 if (month >= 9 && month <= 11)
 {
   season = 'осень'; 
 }
 alert(season);    
 --------------------------
 Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day 
 принимает значение от 1 до 7-ми. Если lang имеет значение 'ru', то в переменную 
 result запишем название дня недели на русском языке в соответствии со значением 
 переменной day (1 - понедельник, 2 - вторник и т.д.). Если же lang имеет 
 значение 'en' – то поступим аналогично, но день недели будет на английском.

var lang = prompt('Enter the language "en" or "ru":');
var nrDay = Number(prompt('Enter number of week day (1 - 7):'));
var day = {
  'ru':['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
var result = day[lang][nrDay-1];  
alert(result); 