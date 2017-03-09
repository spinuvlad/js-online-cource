1. Создайте отсчет от 0 до бесконечности:
/*
<div>
  <p id="timer">0</p>
  <button onclick="start()">Нажмите на меня!</button>
</div>
*/
function start()
{
  window.setInterval(func, 1000);
}

function func()
{
  var num = document.getElementById('timer');
  num.innerHTML = parseInt(num.innerHTML) + 1; 
}

//				playcode.io/7718
-------------------------------------------------
2. Создайте отсчет с кнопкой остановки:
/*
<div>
  <p id="timer">0</p>
  <input type="submit" value="Запустить таймер!" onclick="start()" id="start">
  <input type="submit" value="Остановить таймер!" disabled onclick="stop()" id="stop">
</div>
*/
function func()
{
  var timer = document.getElementById('timer');
  timer.innerHTML = parseInt(timer.innerHTML) + 1;
}
function start()
{
  window.timerId = window.setInterval(func, 500); //window.timerId - variabila globala
  var stop = document.getElementById('stop');
  var start = document.getElementById('start');
  stop.disabled = false; 
  start.disabled = true;
}

function stop()
{
  window.clearInterval(window.timerId); 
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  start.disabled = false;
  stop.disabled = true; 
}
//		playcode.io/7720
-----------------------------------------------
3. Создайте тикающие часики:
/*
<body onload="timerTime()">
  <div>
    <p></p>
  </div>
</body>
*/
function timerTime()
{
  window.setInterval(func, 500);
}

function func()
{
  var date = new Date();
  var watch = document.getElementsByTagName('p')[0];
  var arrTime = [date.getHours(), date.getMinutes(), date.getSeconds()];
  for (var i = 0; i < arrTime.length; i++)
  {
    if (arrTime[i] < 10)
    {
      arrTime[i] = '0' + arrTime[i];
    }
  }
  watch.innerHTML = arrTime[0] + ':' + arrTime[1] + ':' + arrTime[2];
} 

//		playcode.io/7725

---- sau : ----
		<script>
			//Запускает таймер
			function go(){
				window.timerId = window.setInterval(timer, 500);
			}
			function timer(){
				var clock = document.getElementById('clock');
				
				var date = new Date();
				clock.innerHTML = addZero(date.getHours())+':'+addZero(date.getMinutes())+':'+addZero(date.getSeconds());
			}
			
			function addZero(num){
				if(num <=9) return '0'+num;
					else return num;
			}
		</script>
	</head>
	<body onload="go()">
		<div id="wrapper">
			<p id="clock">00:00:00</p>
		
		</div>
----------------------------------------------
4. Создайте таймер обратного отсчета:
/*
<div>
  <p id="down">10</p>
  <p style="display: none;" id="text">Обратный отсчет завершен.</p>
  <input type="submit" value="Запустить таймер!" onclick="start()" id="input">
</div>
*/
function start()
{
  window.setInterval(func, 500);
}

function func()
{
  var timer = document.getElementById('down');
  var input = document.getElementById('input');
  var text = document.getElementById('text'); //straniu, insa lucreaza si fara ceasta declaratie
    if (timer.innerHTML > 0)
    {
      timer.innerHTML = timer.innerHTML - 1;
    }
    else
    {
      text.style.display = 'block';
    }
    input.disabled = true; 
}
//		playcode.io/7804
---------------------------------------------
5. Создайте простой слайдер:
// playcode.io/7802  -- varianta proprie (neeficienta)

/*
<body onload="slider()">
  <img id="img" src="" alt="" >
</body>
*/
var numImg = 0; 
function slider()
{
  var img = document.getElementById('img');
  var source = 'http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/';
  if (numImg > 2)
  {
    numImg = 1;
  }
  else numImg++;
  {
    img.src = source + numImg + '.png';
    img.alt = 'images' + numImg;
  }
  window.setTimeout(slider, 1000);
}   
//    playcode.io/7808

----- sau -----
var numImg = 0; 
function slider()
{
  var img = document.getElementById('img');
  var source = 'http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/';
  if (numImg > 2)
  {
    numImg = 1;
  }
  else numImg++;
  {
    img.src = source + numImg + '.png';
    img.alt = 'images' + numImg;
  }
}
window.setInterval(slider, 1000);
------------------------------------------------------
6. Создайте карусель:
//    playcode.io/7811
/*
<div>
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/1.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/2.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/3.png" alt="">
  <input type="submit" onclick="slider(), disInput(this)" id="input" value="Запустить карусель!">
</div>
*/
function slider()
{
  var imgs = document.getElementsByTagName('img');
  var temp = imgs[0].src;
  imgs[0].src = imgs[1].src;
  imgs[1].src = imgs[2].src;
  imgs[2].src = temp;
  window.setTimeout(slider, 1000); //recursie - functie care se cheama singura pe sine cu un interval de 1000ms
}
function disInput(elem)
{
  elem.disabled = true;
}
-----------------------------------------------------
7. Создайте карусель:
//    playcode.io/7855
/*
<div>
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/1.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/2.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/3.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/4.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/5.png" alt="">
  <img src="http://theory.phphtml.net/exercises/javascript/base/zadachi-na-tajmery-javascript/smiles/6.png" alt="">
  <input type="submit" onclick="start()" id="input-start" value="Запустить карусель!">
  <input type="submit" onclick="stop()" id="input-stop" disabled value="Остановить карусель!!">
</div>
*/

function start()
{
  var inputStart = document.getElementById('input-start');
  var inputStop = document.getElementById('input-stop');
  var imgs = document.getElementsByTagName('img');
  var temp = imgs[0].src;
  imgs[0].src = imgs[1].src;
  imgs[1].src = imgs[2].src;
  imgs[2].src = imgs[3].src;
  imgs[3].src = imgs[4].src;
  imgs[4].src = imgs[5].src;
  imgs[5].src = temp;
  window.timerId = window.setTimeout(start, 1000);
  inputStart.disabled = true;
  inputStop.disabled = false;
}

function stop()
{
  var inputStop = document.getElementById('input-stop');
  var inputStart = document.getElementById('input-start')
  inputStart.disabled = false;
  inputStop.disabled = true;
  window.clearInterval(window.timerId);
}
--------------------------------------------------------
8. Создайте отсчет до полуночи:
//    playcode.io/7861
/*
<body onload="timer()">
  <p>До полуночи осталось:</p>
<table>
  <tr>
    <th>Часы</th>
    <th>Минуты</th>
    <th>Секунды</th>
  </tr>
  <tr>
    <td id="hour"></td>
    <td id="min"></td>
    <td id="sec"></td>
  </tr>
</table>
</body>
*/

function timer()
{
  var hour = document.getElementById('hour');
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  var nowDate = new Date();
  var endDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1)
  var rest = endDate - nowDate;
  var secondsFull = Math.floor(rest/1000); 
  var hourRest = secondsFull % (60*60*24);
  var minRest = hourRest % (60*60);
  var secRest = minRest % 60;
      
  hour.innerHTML = addZero(Math.floor(hourRest/(60*60)));
  min.innerHTML = addZero(Math.floor(minRest/60));
  sec.innerHTML = addZero(Math.floor(secRest));
  window.setTimeout(timer, 1000);
}

function addZero(num)
{
  if (num < 10)
  {
    return '0' + num; 
  }
  else
  {
    return num;
  }
}