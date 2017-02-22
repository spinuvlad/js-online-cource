for (i = 0; i <= 10; i++)
{
  if (i == 0)
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