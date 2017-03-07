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

//		playcode.io/7729