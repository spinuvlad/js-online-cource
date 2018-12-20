var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; - 'вт' - элемент массива.
var arr = ['пн', 256, 'ср', 34, 38, 'сб', 95];
alert(arr[2]); -  // ср
------------------------------
Ассоциативные массивы (объекты)
var obj = {1:'пн', 2:'вт', 3:'ср', 4:'чт', 5:'пт', 6:'сб', 7:'вс'}; // 1: - ключ массива
alert(obj[1]); //выведет 'пн'

Ключи не обязательно должны быть числами, они могут быть и строками.
var obj = {'Коля':200, 'Вася':300, 'Петя':400}; // 'Петя' - ключ
alert(obj['Вася']); //выведет 300
-----------------------------------
let sity = {
	'Chisinau':'Moldova',
	'Kiev':'Ucraina',
	'Moscov':'Russia'
};

for (key in sity) console.log(sity[key]); //Moldova, Ucraina, Russia
for (key in sity) console.log(key); 
console.log(Object.values(sity)); //Moldova, Ucraina, Russia
console.log(Object.keys(sity)); //Chisinau, Kiev, Moscov
console.log(Object.getOwnPropertyNames(sity)); //Chisinau, Kiev, Moscov

var findKey = function(obj, value)
	{
		var key = null;

		for (var prop in obj)
		{
			if (obj.hasOwnProperty(prop))
			{
				if (obj[prop] === value)
				{
					key = prop;
				}
			}
		}

		return key;
	};

	console.log(findKey(sity, 'Ucraina')); //Kiev
-----------------------------------------------
на такие ключи накладываются ограничения: они не должны начинаться с цифры, 
не должны иметь символ дефиса или символ пробела внутри:
var obj = {key1:200, key2:300, key2:400};
alert(obj['key1']); //выведет 200
var obj = {key1:200, key2:300, key2:400};
alert(obj.key1); //выведет 200
--------------------------------
Как еще можно создать массив или объект: Object() и Array()
var obj = new Object(key1:200, key2:300, key2:400);
alert(obj['key1']); //выведет 200
---
var arr = Array('пн', 256, 'ср', 34, 38, 'сб', 95);

с Array не все так просто:
var arr = Array(10);
							||
var arr = [,,,,,,,,,]; Это будет массив, состоящий из 10-ти пустых элементов (их значение будет undefined),
а не массив из одного элемента 10, как мы хотели бы.
--------------------------------
Заполнение массива:
var arr = []
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
alert(arr) //с помощью alert выводим содержимое массива
----------
var obj = {};
obj['Коля'] = 100;
obj['Вася'] = 200;
obj['Петя'] = 300;
--------------------------------
Многомерный массив: Элементы массива могут быть не только строками и числами, но и массивами.
var students = {
	'boys':['Коля', 'Вася', 'Петя'],
	'girls':['Даша', 'Маша', 'Лена'],
};
aletr(students['boys'][0]); //'Коля'
--------------------------------
EXEMPLE:
//Выведем фразу 'Привет, мир!':
var arr = ['Привет, ', 'мир', '!'];
var text = arr[0]+arr[1]+arr[2]; //в переменной text теперь лежит строка 'Привет, мир!'
alert(text);
----
var arr=['a', 'b', 'c', 'd', 'e'];
var test = arr[1];  //test=b
arr[1] = arr[2];    //b=c
arr[2] = test;      //c=b 
alert(arr); 				//a,c,b,d
----
var arr=['a', 'b', 'c', 'd', 'e'];
var test = arr[0];  //test = a
arr[0] = arr [4];   //a = e
arr[4] = test;      //e = a
test = arr[1];      //test = b
arr[1] = arr[3];    //b = d
arr[3] = test;      //d = b
alert(arr);         //e,d,c,b,a
----
var obj = {text:'текст!', 1:'125', key:'element'};
alert(obj.text);	  //текст!
alert(obj[1]);      //125
alert(obj['key']);  //element
----
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
alert('зарплата Пети состовляет ' + obj['Петя']);
alert('зарплата Коли состовляет ' + obj['Коля']);
----
var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj['js'][0]); //jQuery