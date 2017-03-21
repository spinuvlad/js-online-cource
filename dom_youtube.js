var text = document.querySelector('#text');

text.onclick = function (){
	text.style.color = 'red';
	text.innerHTML = 'hello';
	text.className = 'my_class'; //adaugare clasa elementului
}
