document.write(Math.PI);	//3.141592653589793

Math.pow(a, b); // 'a' la puterea 'b'
--------------------------
var arr = [5, 12];
var result = [];
arr[99] = 7;

for(var i in arr)
{
  result.push(Math.pow(arr[i], 2));
}
document.write(result);
//25,144,49
--------------------------- call, apply
//apply - primeste ca parametu - masiv

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
