for (i = 0; i <= 10; i++)
{
  if (i == 0)   //continue; -sare peste...; - nu va afisa deloc "0"
    document.write(i + ' - zero<br>');
  else if (i % 2 == 0)
    document.write(i + ' - numar par<br>')
  else
    document.write(i + ' - numar impar<br>');
}
/*
0 - zero
1 - numar impar
2 - numar par
3 - numar impar
4 - numar par
5 - numar impar
6 - numar par
7 - numar impar
8 - numar par
9 - numar impar
10 - numar par
*/
continue; - intrerupe iteratia curenta
break; - intrerupe intreg ciclul;
---------------------------------------------
var x = 1, y;
if (x==1)
  y = 'One';
else
  y = 'Zero';

constructia de mai sus poate fi simplificata:
y = (x==1) ? "One" : "Zero";
//One
-----------------------------------------------
metka: while ()
{
	for ()
	{
		if ()
		{
			continue; //paseste peste conditia if
			break; //intrerupe cuclul curent;
			continue metka;
			break metka; //intrerupe ciclul cu numele 'metka'
		}
	}
}
-----------------------------------------------
var x = 2; // switch foloseste comparatia stricta(dupa tip) "==="
switch(x) 
{
	case 0: document.write('Zero'); break;
	case 1: document.write('One'); break;
	case 2: document.write('Two'); break;
	case 3: document.write('Three'); break;
	case 4: document.write('Four'); break;
	default: document.write('...'); break;
	//default - se va executa in caz in care "x" nu este in case
}
-----------------------------------------------
var num = 2112;
var str = 'На ветке сидит ' + num + ' ворон';
var x = '';
/*
1 - а
2, 3, 4 - ы
11 - 14
*/
if (num % 100 < 11 || num % 100 > 14)
{
	switch(num % 10)
	{
		case 1: x = 'a'; break;
		case 2:
		case 3:
		case 4: x = 'ы';
	}
}
document.write(str + x);

--- sau ---

var num = 333;
var str = 'На ветке сидит ' + num + ' ворон';
var x = '';
if (num == 1)
{
  x = 'a';
}
else if (num > 1 && num < 5)
{
  x = 'ы';
}
else if (num > 4)
{
  x = '';
}
document.write(str + x);
--------------------------------------------------
