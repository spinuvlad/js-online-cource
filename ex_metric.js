// ------------------ clientTop, clientLeft
//выведите толщину его верхней границы.
var elem = document.getElementById('elem');
var but = document.getElementById('input');

but.addEventListener('click', function() {
    console.log(elem.clientTop);
});

// ------------------ offsetWidth, offsetHeight
//выведите его полную ширину с учетом границы и padding.
but.addEventListener('click', function() {
    console.log(elem.offsetWidth);
});

//выведите его полную высоту с учетом границы и padding.
but.addEventListener('click', function() {
    console.log(elem.offsetHeight);
});

// ----------------------clientWidth, clientHeight
//выведите его полную ширину без учета границы, но с padding.
but.addEventListener('click', function() {
    console.log(elem.clientWidth);
});

//выведите его полную высоту без учета границы, но с padding.
but.addEventListener('click', function() {
    console.log(elem.clientHeight);
});

//------------------------- getComputedStyle
//Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding.
var elem = document.getElementById('elem');
var styles = getComputedStyle(elem);
var but = document.getElementById('input');

but.addEventListener('click', function() {
    console.log(styles.width + ' ' + styles.height);
});

//------------------------ scrollTop, scrollLeft
//	Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку 
//  выведите на сколько элемент прокручен сверху.
but.addEventListener('click', function() {
    console.log(elem.scrollTop);
});

but.addEventListener('click', function() {
    console.log(elem.scrollLeft);
});

//Дан элемент #elem с вертикальной полосой прокрутки. 
//По нажатию на кнопку прокрутите его до позиции 100px сверху. 
but.addEventListener('click', function() {
    elem.scrollTop += 100;
});

//-------------------- scrollWidth, scrollHeight
//По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки.
but.addEventListener('click', function() {
    console.log(elem.scrollHeight);
});

//По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
but.addEventListener('click', function() {
    elem.scrollTop = elem.scrollHeight - 100;
});

//------------------- 	pageXOffset, pageYOffset
//Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте 
//на сколько страница прокручена по вертикали. 
but.addEventListener('click', function() {
    alert(pageYOffset);
});

//----------------- scrollTo, scrollBy, scrollIntoView
//Дана страница с горизонтальной и вертикальной полосами прокрутки. 
//По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху.
but.addEventListener('click', function() {
    window.scrollTo(300, 500);
});

//По нажатию на кнопку прокрутите на 300px вниз от текущего положения. 
but.addEventListener('click', function() {
    window.scrollBy(0, 300);
});

//-------------------------practica
//По нажатию на кнопку прокрутите страницу до самого низа. 
but.addEventListener('click', function() {
    window.scrollTo(0, document.body.clientHeight);
});

//	По нажатию на кнопку прокрутите страницу на 400px от текущего положения.
but.addEventListener('click', function() {
    window.scrollBy(0, 400);
});

//По нажатию на кнопку проверьте, прокручена ли страница до самого низа. 
//Если это так - прокрутите ее в положение 100px от верхнего края.
but.addEventListener('click', function() {
    var body = document.documentElement;
    if (body.scrollHeight - body.scrollTop == body.clientHeight) {
        window.scrollTo(0, 100);
    }
});

//Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза.
elem.addEventListener('click', function() {
    var startWidth = this.offsetWidth;
    var startHeight = this.offsetHeight;
    this.style.width = startWidth * 2 + 'px';
    this.style.height = startHeight * 2 + 'px';
});