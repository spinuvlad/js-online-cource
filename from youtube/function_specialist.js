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
