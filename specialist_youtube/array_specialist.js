var a = [3, 6, 'John'];
a[5] = 5;
a.length = 20;
document.write(a + '<br>');	//3,6,John,,,5,,,,,,,,,,,,,,
a.length = 3;
document.write(a);	//3,6,John
-----------------------------------------
var user = ['a', 'b', 'c'];
user[5] = 'x';

document.write('<b>Primul ciclu: </b><br>');
for(var i = 0; i < user.length; i++)
{
  document.write(user[i] + '<br>');
}

document.write('<b>Al 2-lea ciclu: </b><br>');
for(var i in user)
{
  document.write(user[i] + '<br>');  //nu afiseaza elementele lipsa
}
/*
Primul ciclu:
a
b
c
undefined
undefined
x
Al 2-lea ciclu:
a
b
c
x
*/
---------------------------
var arr = [5, 12];
var result = [];
arr[99] = 7;

for(var i in arr)
{
  result.push(Math.pow(arr[i], 2));
}
document.write(result);
//25,144,49
------------ toString, join -----------------
var a = [1, 2, 3];
var s = a.toString(); //1,2,3 - transforma masivul in string
document.write(s + '<br>');
document.write(typeof(s[1]) + '<br>'); //string

var z = a.join();
document.write(z + '<br>');  //1,2,3
document.write(z[2] + '<br>');  //2

var q = a.join('***');
document.write(q + '<br>'); //1***2***3
document.write(q[1] + '<br>'); //*
----------------- concat --------------------
var a = [1, 5];
var b = [11, 8];
var arr = a.concat(3, b, 'q');
document.write(arr + '<br>'); //1,5,3,11,8,q

var s = [1, 5] + [11, 8];
document.write(s) //1,511,8
---------------- slice ---------------------
var a = [1, 5, 7, 12, 9];
//Incepand cu a[2] - toate elementele
var b = a.slice(2);  //[7, 12, 9]

//Incepand cu a[1] pana la a[3]; a[3] nu este inclus
var c = a.slice(1,3); //[5, 7]

//Incepandu ca a[-3] - 7 pana la a[-1] - 9; a[-1] nu este inclus
var d = a.slice(-3,-1); //[7, 12]

//Daca incurcam cu locul ordinea, se va intoarce nu masiv gol
var e = a.slice(2,1); //[];

//'slice' fara parametri intoarce tot masivul; faco copie a masivului
var f = a.slice();  //[1, 5, 7, 12, 9]
------------- reverse, sort -----------------
var a = [14, 51, 7, 2];
a.reverse();  //[2, 7, 51, 14]

//'sort' - sorteaza in ordine, doar ca considera masivul 'string'
a.sort();  //[14, 2, 51, 7]

// sortarea masivul in ordine crescatoare:
function numSort(a, b)
{
  return a - b;
}
a.sort(numSort); //[2, 7, 14, 51]

// sortarea masivul in ordine descrescatoare:
function numSort(a, b)
{
  return b - a;
}
a.sort(numSort); //[51, 14, 7, 2]

//se poate scrie mai simplu:
a.sort(function(a,b){return a - b});  //[2, 7, 14, 51]
----------------- pop, push ------------------ sfarsitul masivului
var a = [5, 'abc', 73];

//'pop' - taie ultimul element si schimba masivul 'a'
var b = a.pop();  //a = [5, 'abc']; b = a[a.length] = 73

//'push' - adauga elemente 
var c = a.push(12, 3);  //a = [5, abc, 12, 3]; c = a.length = 4 (intoarce lungimea masivului)
---------------- shift, unshift ---------------- inceputul masivului
var a = [5, 'abc', 73];

//'shift' - taie primul element din masiv si il schimba
var d = a.shift(); //a = [abc,73]; d = a[0] = 5

//'unshift' - adauga elemente la inceput
var e = a.unshift(12, 3); // a = [12, 3, abc, 73]; e = a.length = 4
----------------------- splice ------------------- centrul masivului
var a = [5, 'abc', 73, 12, 8];

var arr = a.splice(1, 3);
//arr = [abc, 73, 12], taie de la a[1] - 3 elemente, inclusiv a[1]
//a = [5, 8], ceea ce a ramas in urma la a.splice
--------------
var a = [5, 'abc', 73, 12, 8];

var arr = a.splice(2, 0, 3);
//a = [5, abc, 3, 73, 12, 8], inaite de elemenul a[2], taie '0'(nimic), adauga '3'
//arr = [], intoarce masiv gol
---------------
var a = [5, 'abc', 73, 12, 8];

var arr = a.splice(2, 1, 3);
//a = [5, abc, 3, 73, 12, 8], inaite de elemenul a[2], taie '1' - a[2], adauga '3'
//arr = [73]