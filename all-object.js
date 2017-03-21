//	<div id="text">fff</div>
function print_object(obj){
	var res = '<ul>';

	for(i in obj)
		res += '<li><b>' + i + '</b>: ' + obj[i] + '</li>';
	res += '</ul>';

	document.write(res);
}
var text = document.querySelector('#text');
print_object(text);
// print_object(text.style); - va afisa toate proprietatile pentru style a acestul element