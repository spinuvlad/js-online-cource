alert(2 + 3); //выведет 5
alert(5 - 1); //выведет 4
alert(2 * 3); //выведет 6
alert(6 / 2); //выведет 3
-----
var a = 1;
a = a + 2;
alert(a) //result: 3
-----
Операции инкремента и декремента:
var a = 1;
a++; //увеличит a на 1, что соответствует коду a = a + 1;
alert(a); //выведет 2

var a = 1;
a--; //уменьшит a на 1, что соответствует коду a = a - 1;
alert(a); //выведет 0
------
var a = 1;
a += 3; //этот код полностью эквивалентен коду a = a + 3;

var a = 2;
a -= 3; //этот код полностью эквивалентен коду a = a - 3;

var a = 2;
a *= 3; //этот код полностью эквивалентен коду a = a * 3;

var a = 2;
a /= 3; //этот код полностью эквивалентен коду a = a / 3;

test = test + 1; //test++;
test = test + 1; //test++;
test = test - 1; //test--;
***********************
alert(3 * '3') // 9
alert('3' + 3) // 33
aletr( +'3' + 3) // 6