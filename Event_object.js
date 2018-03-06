var elem = document.getElementById('elem');

elem.onclick = clickEvent;

function clickEvent(myEvent) {
    alert(elem.innerHTML)
}

если при привязывании функции к событию этой функции задать параметр - в этот параметр браузер автоматически положит объект Event. Название этого параметра будет любым - как назовете, так и будете к нему обращаться.

--------------------- clientX, clientY
Пусть в переменной myEvent лежит объект Event. В этом случае координаты клика относительно окна браузера можно найти так: myEvent.clientX для координаты по горизонтали и myEvent.clientY для координаты по вертикали. 

привяжем блоку событие onmousemove (срабатывает при движении мышкой по элементу), и будем показывать координаты курсора при движении мыши: 

var elem = document.getElementById('elem');

elem.onmousemove = coordonateEvent;

function coordonateEvent(myEvent) {
    this.innerHTML = myEvent.clientX + ':' + myEvent.clientY
}

Как работают clientX и clientY: если у вас есть окно 1000 на 1000 пикселей, и мышь находится в центре, то clientX и clientY будут оба равны 500. Если вы затем прокрутите страницу по горизонтали или вертикали, не двигая курсор, то значения clientX и clientY не изменятся, так как отсчитываются относительно окна, а не документа. 

--------------------- pageX, pageY
если у вас есть окно 1000 на 1000 пикселей, и курсор находится в центре, то pageX и pageY будут равны 500. Если вы затем прокрутите страницу на 250 пикселей вниз, то pageY станет равным 750.

Таким образом pageX и pageY содержат координаты события с учетом прокрутки. 

---------------------- event.type
elem.onmousemove = coordonateEvent;

function coordonateEvent(myEvent) {
    this.innerHTML = myEvent.type; //mousemove
}

---------------------- event.target 
С помощью event.target можно получить элемент, в котором произошло событие. Зачем это нужно, если этот элемент содержится в this? 
<div id="elem">
	<p>Абзац</p>
</div>

elem.onmousemove = coordonateEvent;

function coordonateEvent(myEvent) {
    var target = myEvent.target;
    this.innerHTML = target.tagName; //p
}

--------------------- event.keyCode, String.fromCharCode, charCodeAt
Это актуально для тех событий, в которых происходит работа с клавиатурой, например, в onkeypress, onkeydown, onkeyup. 
Оно возвращает не саму клавишу, а ее код. Этот код можно преобразовать в символ с помощью метода String.fromCharCode. 
var str = String.fromCharCode(1070,1085,1080,1082,1086,1076);
document.write(str); //Юникод 

var string = 'ABC'
document.write(string.charCodeAt(0)); //65 - возвращает ascii код символа (числовое значение)
-----
вводите текст в инпут и по мере ввода вы будете видеть код нажатой клавиши и саму клавишу:
var elem = document.getElementById('elem');
var input = document.getElementById('input');

input.onkeypress = getCodeKey;

function getCodeKey(myEvent) {
    var code = myEvent.keyCode;
    var key = String.fromCharCode(code);
    elem.innerHTML = 'Pentru tasta: ' + key + ' corespunde codul: ' + code;
}

------------------- event.ctrlKey, event.altKey и event.shiftKey
Можно узнать, были ли нажаты в момент события клавиши Ctrl, Alt и Shift.
input.onclick = ctrlKey;

function ctrlKey(myEvent) {
    if (myEvent.ctrlKey) elem.innerHTML = 'ctrl';
    if (myEvent.altKey) elem.innerHTML = 'alt';
    if (myEvent.shiftKey) elem.innerHTML = 'shift';
}

------------------- return: false
<a href="/" onclick="return false;">ссылка</a> //nimic
<input onkeypress="return false;"> //nimic

До return false может быть любой JavaScript код - он выполнится, но действие пользователя будет отменено.

------------------- myEvent.preventDefault()
если событие привязывается через JavaScript - то его действие можно отменить с помощью объекта Event, вот так: 
// <a href="/" id="link">ссылка</a>

var link = document.getElementById('link');

link.onclick = linkClick;

function linkClick(myEvent) {
    myEvent.preventDefault();
    alert('Nu poti deschide aceasta trimitere');
}

---------------------------------- Exercitii ---------------------------------------
//http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-objektom-event-na-javascript/1/1.html

var body = document.documentElement;
body.onmousemove = coordonateMouse;

function coordonateMouse(eventObject) {
    body.innerHTML = 'X:' + eventObject.clientX + ' Y:' + eventObject.clientY;
}
-----------------------------------
//http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-objektom-event-na-javascript/1/2.html
var body = document.documentElement;
var elem = document.getElementById('elem');
body.onclick = changePosition;

function changePosition(eventObject) {
    var x = eventObject.clientX;
    var y = eventObject.clientY;
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
}
----------------------------------
//http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-objektom-event-na-javascript/1/3.html
function changePosition(eventObject) {
    var x = eventObject.clientX - (elem.clientWidth / 2);
    var y = eventObject.clientY - (elem.clientHeight / 2);
    elem.style.left = x + 'px';
    elem.style.top = y + 'px';
}
----------------------------------
// http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-objektom-event-na-javascript/2/1.html
function getKeyCode(eventObject) {
    elem.innerHTML = eventObject.keyCode;
}
----------------------------------
//http://theory.phphtml.net/exercises/javascript/dom/osnovy-raboty-s-objektom-event-na-javascript/2/2.html
function getKeyCode(eventObject) {
    elem.innerHTML = String.fromCharCode(eventObject.keyCode);
}
----------------------------------
// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl. 
function ctrlKeyStyle(eventObject) {
    if (eventObject.ctrlKey) elem.style.background = 'green';
}
---------------------------------
//Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'.
function ctrlKeyStyle(eventObject) {
    if (eventObject.ctrlKey) elem.innerHTML = '1';
    if (eventObject.altKey) elem.innerHTML = '2';
    if (eventObject.shiftKey) elem.innerHTML = '3';
}
---------------------------------
//Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13). Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось. 
input.onkeypress = enterKey;

function enterKey(eventObject) {
    if (eventObject.keyCode == 13) {
        elem.innerHTML = input.value;
        input.value = '';
    }
}