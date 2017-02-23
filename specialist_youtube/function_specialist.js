function sayHello(name, sign)
{
	name = name || 'Guest'; //daca nu se transmite nimic in 'name' - se afiseaza "Guest"
	sign = sign || '...'
	document.write('Hello, ' + name + sign + '<br>');
}
sayHello('John', '!');
var n = 'Mike';
sayHello(n);
sayHello('', '!');  //Guest!
sayHello();  //Guest...
--------------------------------------------------
Functii personala pentru a executa codul:

function print(data)
{
	console.log(data); //document.write(data);
}
//print('Hello,World!');

/* Daca dorim ca aceasta sa fie functie default,
in doc HTML trebuie conectat primul:
<head>
	<title>JS</title>
	<script src="lab.js"></script>
	<scropt src="..."></script>
</head>
*/
--------------------------------------------------
function sum (n1, n2)
{
	return n1 + n2;
	/*
		tot ce e sub return nu se executa
	*/
}
--------------------------------------------------
function abs(num)
{
	return (num < 0) ? -num : num;
}
//intoarce num pozitiv. Analog Math.abs(num);
--------------------------------------------------
function power(num, exp)
{
  var result = 1;
  for (var i = 0; i < exp; i++)
  {
    result *= num;
  }
  return result;
}
document.write(power(2,3))
//8
---------------- zona de vedere a variabilelor ---------------------
var x = 'X';
var y = 'Y';

function outer()
{
  var x = 'x';
  document.write('x-outer: ' + x + '<br>'); //x
  document.write('y-outer: ' + y + '<br> --- <br>'); //Y
  y = 'y';
  function inner(z)
  {
    var y = '_y';
    document.write('x-inner: ' + x + '<br>');  //x din outer
    document.write('y-inner: ' + y + '<br>');  //_y din inner
    document.write('z-inner: ' + z + '<br>');  //z din var declarata in functia inner
  }
  inner('z')
}
outer();
document.write('x - afara functiei: ' + x + '<br>'); //X
document.write('y - afara functiei: ' + y + '<br>'); //y, outer a schimbat din 'Y' in 'y'
----------------
var y = 0;
function foo(x)
{
  if(x)
  {
    document.write(y + '<br>'); //undefined
  }
  else
  {
    var y = 2;
    document.write(y + '<br>'); //2
  }
}
foo(true); //2

//javascript optimizeaza codul de mai sus astfel:
var y = 0;
function foo(x)
{
  var y;
  if(x)
  {
    document.write(y + '<br>'); //undefined, y - nu contine nimic
  }
  else
  {
    y = 2;
    document.write(y + '<br>'); //2
  }
}
foo(false); //2

EXCEPTIONAL!!!! 
document.write(foo); - va afisa toata functia. 
rezulta ca numele functiei este o variabila.
var x = foo; //x va contine intreg cod din foo
x(false); //2
var x = foo(); //x va contine rezultatul functiei foo

var x = function(){};
x();

function outer()
{
  function inner(x)
  {
    document.write(x);
  }
  return inner; //intoarce continutul funtiei inner si NU executia ei.
}
var x = outer();
x('Hello'); //Hello
---------------------------------------------------------
function say(greet)
{
  return function(name)
  {
    return greet + ' ' + name;
  }
}
var en = say('Hello');
//in variabila 'en' se pastreaza function(name)
document.write(en('John') + '<br>'); //Hello John
document.write(en('Mike') + '<br>'); 

var ru = say('Priver');
document.write(ru('Vasya') + '<br>'); //Hello Vasya
document.write(ru('Petea')); 
----------------------------------------------------------
function compare(x)
{
  return function(y)
  {
    if(y > x)
      return true;
    if(y < x)
      return false;
    return null;
  }
}
var c = compare(10);  //y = 10;
document.write(c(9) + '<br>');  //x = 9; false
document.write(c(10) + '<br>'); //null
document.write(c(11) + '<br>-------<br>'); //true

document.write(compare(10)(9)); //y = 10; x = 9
--------------- RECURSIA (CONSUMA MULTE RESURSE) ---------------
function power(base, exp)
{
  if(exp == 0) return 1;
  return base * power(base, exp-1);
}
power(2, 3);
INDEPLINIREA:
function power(2, 3)
{
  if(3 == 0) return 1;
  return 2 * power(2, 3-1);
}

function power(2, 2)
{
  if(2 == 0) return 1;
  return 2 * power(2, 2-1);
}

function power(2, 1)
{
  if(1 == 0) return 1;
  return 2 * power(2, 1-1);
}

function power(2, 1)
{
  if(1 == 0) return 1;
  return 2 * power(2, 1-1);
}
