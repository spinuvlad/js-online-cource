--------------------------- reverse -------------------------
reverse изменяет порядок элементов в массиве на обратный.

var arr = ['Черный', 'Белый', 'Красный'];
arr.reverse();
document.write(arr); 
//Красный,Белый,Черный

------------------------------ concat --------------------------
Метод concat сливает указанные массивы вместе.

var array1 = ['Один', 'Два'];
var array2 = ['Три', 'Четыре'];
var array3 = ['Пять', 'Шесть'];
var result = array1.concat(array2, array3);
document.write(result);  //Один,Два,Три,Четыре,Пять,Шесть

var array1 = ['Один', 'Два'];
var array2 = ['Три', 'Четыре'];
result = array1.concat(array2, 'Пять', 6, 7);
document.write(result);	 //Один,Два,Три,Четыре,Пять,6,7
---------------------------------------------------------
----------------------------- push -----------------------------
Метод push добавляет неограниченное количество элементов в конец массива. 
Элементы передаются параметром метода.
Метод изменяет исходный массив. Возвращает новую длину массива.

var arr = ['Петя', 'Вася', 'Иван'];
arr.push('Костя', 'Ирина');
document.write(arr); 
//Петя,Вася,Иван,Костя,Ирина

var arr = ['a', 'b', 'c'];
var length = arr.push('d', 'e');
document.write(length);
//5

var arr = [];

for (var i = 1; i <= 10; i++) {
	arr.push(i)
}
console.log(arr);
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

из массива ['a', 'b', 'c', 'd', 'e'] сделаем ['e', 'd', 'c', 'b', 'a']. 
Для этого переберем исходный массив с конца и запишем его элементы в новый 
массив - они будут идти в обратном порядке:
var arr = ['a', 'b', 'c', 'd', 'e'];
var result = [];

for (var i = arr.length - 1; i >= 0; i--) {
	result.push(arr[i]);
}

console.log(result); //выведет ['e', 'd', 'c', 'b', 'a']
---------------------------- unshift ---------------------------
Метод unshift добавляет любое количество новых элементов в начало массива.
Метод изменяет исходный массив. Возвращает новую длину массива.

var arr = ['Красный', 'Голубой', 'Зеленый'];
arr.unshift('Белый', 'Желтый');
document.write(arr); 
//Белый,Желтый,Красный,Голубой,Зеленый

------------------------------ shift --------------------------------
Метод shift удаляет первый элемент массива.
Метод изменяет исходный массив. Возвращает удаленный элемент.

var arr = ['Red', 'Blue', 'Yellow', 'White'];
arr.shift();
document.write(arr + '<br>'); 
document.write(arr.shift()); 
//Blue,Yellow,White
//Blue

--------------------------------- pop --------------------------------
Метод pop удаляет последний элемент массива.
Метод изменяет исходный массив. Возвращает удаленный элемент.

var arr = ['Петя', 'Вася', 'Костя', 'Матвей'];
arr.pop();
document.write(arr + '<br>'); 
document.write(arr.pop()); 
//Петя,Вася,Костя
//Костя

--------------------------------- slice -------------------------------
Первым параметром указывается номер элемента массива, с которого начинается 
вырезание, а вторым параметром - номер элемента, на котором закончится 
вырезание (при этом элемент с этим номером не включится в вырезанную часть).

var arr = ['Red', 'Blue', 'Yellow', 'White'];
document.write(arr.slice(0, 2));
//Red,Blue
var arr = ['Red', 'Blue', 'Yellow', 'White'];
document.write(arr.slice(1));
//Blue,Yellow,White

var arr = ['Red', 'Blue', 'Yellow', 'White'];
document.write(arr.slice(0, -1));
//Red,Blue,Yellow

-------------------------------- splice --------------------------------
Метод splice удаляет или добавляет элементы в массив. Можно только удалять 
элементы, только добавлять или делать и то и другое одновременно.

Первым параметром идет номер элемента массива, который нужно удалить.

Вторым параметром - сколько элементов массива следует удалить. 
Если его поставить в 0 - то элементы удалены не будут (только добавлены новые).
//http://theory.phphtml.net/javascript/array/splice.html

из массива будут удалены элементы 'Яблоко', 'Манго' и 'Груша':
var arr = ['Банан', 'Апельсин', 'Яблоко', 'Манго', 'Груша', 'Мандарин'];
arr.splice(2, 3);
document.write(arr);  //Банан,Апельсин,Мандарин

из массива будут удалены элементы 'Яблоко', 'Манго' и 'Груша' и записаны в переменную del:
var arr = ['Банан', 'Апельсин', 'Яблоко', 'Манго', 'Груша', 'Мандарин'];
var del = arr.splice(2, 3);
document.write(arr + '<br>');  //Банан,Апельсин,Мандарин
document.write(del + '<br>');  //Яблоко,Манго,Груша

сначала будет удален 3 элемент, 
а потом вместо него вставлено еще 2 новых элемента ('Груша' и 'Мандарин'):
var arr = ['Банан', 'Апельсин', 'Яблоко', 'Манго'];
arr.splice(2, 1, 'Груша', 'Мандарин');
document.write(arr); 	//Банан,Апельсин,Груша,Мандарин,Манго

после 3-го элемента будут добавлены еще 2 элемента 
(так как вторым параметром указан 0, то удаления не будет):
var arr = ['Банан', 'Апельсин', 'Яблоко', 'Манго'];
arr.splice(2, 0, 'Груша', 'Мандарин');
document.write(arr);	//Банан,Апельсин,Груша,Мандарин,Яблоко,Манго

из массива будет удален предпоследний элемент 'Груша' (его номер -2):
var arr = ['Банан', 'Апельсин', 'Яблоко', 'Манго', 'Груша', 'Мандарин'];
arr.splice(-2, 1);
document.write(arr);	//Банан,Апельсин,Яблоко,Манго,Мандарин

var arr =  [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
document.write(arr);
//1,a,b,2,3,4,c,5,e

------------------------------- sort -------------------------------
Метод sort производит сортировку массива в лексикографическом порядке.
Также можно указать параметром собственную функцию для сортировки, но это необязательно.

сортировка по алфавиту и выведен отсортированный массив:
var arr = ['Банан', 'Апельсин', 'Яблоко', 'Манго', 'Груша', 'Мандарин'];
arr.sort();
document.write(arr);	//Апельсин,Банан,Груша,Манго,Мандарин,Яблоко

var arr = [43,-3, 10, 100];
arr.sort();
document.write(arr);  //-3,10,100,43

------------------------------ Object.keys --------------------------------
Объект, чьи собственные перечисляемые свойства будут возвращены:

var arr = ['a', 'b', 'c'];
document.write(Object.keys(arr));  //0,1,2

var obj = { 0: 'a', 1: 'b', 2: 'c' };
document.write(Object.keys(obj));	//0,1,2

var obj = { 100: 'a', 2: 'b', 7: 'c' };
document.write(Object.keys(obj));	//2,7,100

var obj = { 'key1': 'a', 'key2': 'b', 'key3': 'c' };
document.write(Object.keys(obj));	//key1,key2,key3

-------------------------------------------
