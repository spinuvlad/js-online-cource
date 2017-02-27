var i = 1;
while (i <= 50)
{
	document.write(i+'<br>');
	i++;
}
/* 1 2 3 4 5 ... 49, 50 */

for (var i = 1; i <= 50; i++)
{
	document.write(i+'<br>');
}
/* 1 2 3 4 5 ... 49, 50 */
---------------------------------
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++)
{
	document.write(arr[i]+'<br>');
}
// 12345
---------------------------------
var result = 1;
var arr = [2, 3, 4, 5];
for (var i = 0; i < arr.length; i++)
{
	result = result * arr[i]; //result *= arr[i];
}
alert(result);
//120
------------------------------------
var obj = {
  'Chisinau':'Moldova',
  'Moscova':'Rusia',
  'Bucuresti':'Romania'
};
for (var key in obj){
write(key+ ', ');
}
//Chisinau, Moscova, Bucuresti,

var obj = {
  'Chisinau':'Moldova',
  'Moscova':'Rusia',
  'Bucuresti':'Romania'
};
for (var key in obj){
write(obj[key]+ ', ');
}
//Moldova, Rusia, Romania, 

var obj = {
  'Chisinau':'Moldova',
  'Moscova':'Rusia',
  'Bucuresti':'Romania'
};
for (var key in obj){
write(key + '- oras ce apartine tarii ' + obj[key]);
}
--------------------------------
