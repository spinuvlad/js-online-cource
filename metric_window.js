var body = document.documentElement;

body.clientHeight - inaltimea ferestrei vizibile(numar)
body.clientWidth - latimea ferestrei vizibile(numar)

alert(window.innerWidth / window.innerHeght); // вся ширина окна
alert(document.documentElement.clientWidth); // ширина минус прокрутка

-- -- -- -- -- -- -- -- -- -- -- -- -- -- --scrollHeight
Теоретически, видимая часть страницы– это documentElement.clientWidth / Height, а полный размер с учётом прокрутки– по аналогии, documentElement.scrollWidth / scrollHeight.

Надёжно определить размер страницы с учетом прокрутки можно, взяв максимум из нескольких свойств:
    var scrollHeight = Math.max( //alege valoarea ce mai mare
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
alert('Высота с учетом прокрутки: ' + scrollHeight);

-- -- -- -- -- -- -- -- -- -- -- -- -- -- --pageYOffset || scrollTop
Их можно только читать, а менять нельзя:
    alert('Текущая прокрутка сверху: ' + window.pageYOffset);
alert('Текущая прокрутка слева: ' + window.pageXOffset);

var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
alert("Текущая прокрутка: " + scrollTop);

document.documentElement.scrollTop
document.body.scrollTop(pentru Chrome, Safari, Opera)

На всякий случай– вот самый кросс - браузерный способ, учитывающий IE7 - в том числе:
    var html = document.documentElement;
var body = document.body;

var scrollTop = html.scrollTop || body && body.scrollTop || 0;
scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)

alert("Текущая прокрутка: " + scrollTop);

-- -- -- -- -- -- -- -- -- -- -- -- -- -- - scrollBy
Метод scrollBy(x, y) прокручивает страницу относительно текущих координат.
window.scrollBy(0, 10) // прокрутит страницу на 10px вниз

Метод scrollTo(X, Y) прокручивает страницу к указанным координатам относительно документа.
window.scrollTo(0, 0) // прокрутить в начало документа

-- -- -- -- -- -- -- -- -- -- -- -- -- --scrollIntoView
Метод elem.scrollIntoView(top) вызывается на элементе и прокручивает страницу так, чтобы элемент оказался вверху, если параметр top равен true, и внизу, если top равен false.Причем, если параметр top не указан, то он считается равным true.

this.scrollIntoView() //кнопка оказалась вверху
this.scrollIntoView(false) //кнопка оказалась внизу

для плавного перехода:
    https: //developer.mozilla.org/ru/docs/Web/API/Element/scrollIntoView

    -- -- -- -- -- -- -- -- -- -- --Запрет прокрутки-- -- -- -- -- -- -- -- -- -- -- --
    Иногда бывает нужно временно сделать документ« непрокручиваемым».Например, при показе большого диалогового окна над документом– чтобы посетитель мог прокручивать это окно, но не документ:

    document.body.style.overflow = "hidden"; //страница замрёт в текущем положении
document.body.style.overflow = ""; // anulare

Вместо document.body может быть любой элемент, прокрутку которого необходимо запретить.

Недостатком этого способа является то, что сама полоса прокрутки исчезает.Если она занимала некоторую ширину, то теперь эта ширина освободится, и содержимое страницы расширится, текст« прыгнет», заняв освободившееся место.

Это может быть не очень красиво, но легко обходится, если вычислить размер прокрутки и добавить такой же по размеру padding.

-- -- -- -- -- -- -- -- -- -- -- -- -- -- - Exercitii-- -- -- -- -- -- -- -- -- -- -- -- -
По нажатию на эту кнопку выведите высоту окна браузера.

but.addEventListener('click', function() {
    alert(document.documentElement.clientHeight)
});
-- -- -- -- -- -- -- -- -- -- -- -- -- -- --
По нажатию на эту кнопку прокрутите окно браузера до самого низа.
var body = document.documentElement;
but.addEventListener('click', function() {
    var heightWindow = body.scrollHeight;
    scrollTo(0, heightWindow);
});
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка.
but.addEventListener('click', function() {
    var heightWindow = body.scrollHeight;
    var clientContent = body.clientHeight;
    if (clientContent !== heightWindow) alert('yes')
    else alert('no')
});