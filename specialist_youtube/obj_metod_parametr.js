//Gaseste cel mai mic element din masivul arr:
var arr = [5, 45, 3, 89, 100];
//Math.min(arr); - nu lucreaza
//Math - obj (obiect)
//Math.min - funt (functie)
//func.call(obj, param1, param2, ... param_n);
//func.apply(obj, [param1, param2, ... param_n])

var min = Math.min.apply(Math, arr);  //3

/*
console.log(); console - obj; .log - metod; () - parametri

functie 'print' pentru mai multi parametri odata(ca masiv):
function print()
{
  console.log.apply(console, arguments);
}
*/
