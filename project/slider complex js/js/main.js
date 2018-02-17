//CUSTOMIZE:

//SLIDER:
var sliderSize = '600px';
var time = 1000; //millsec

//DOTTS:
var dottsDisplay = 'block'; // "block" or "none"
var dottsSize = '10px';
var dottsMargin = '5px';
var dottsInactivBackground = '#888'; //inactive dotts background color
var dottsActiveBackground = 'green'; //active dotts background color

//NAV
var navDisplay = 'block'; // "block" or "none"
var navElemHtml = 'i'; //tagul container pentru butoane
var navLeftClassList = 'fas fa-angle-double-left'; //classe pentru font-awesome, in navElemHtml indica elementul 'i'
var navRightClassList = 'fas fa-angle-double-right'; //classe pentru font-awesome, in navElemHtml indica elementul 'i'
var navLeftInnerHtml = '';
var navRightInnerHtml = '';
var navLeftCssText = 'position: absolute; cursor: pointer; top: 50%; left: 20%; font-size: 30px; transform: translateY(-50%)';
var navRightCssText = 'position: absolute; cursor: pointer; top: 50%; right: 20%; font-size: 30px; transform: translateY(-50%)';
var navBackground = '';
var navColor = 'silver';


var slider = document.getElementById('slider');
var imgs = slider.querySelectorAll('#slider img');
slider.style.position = 'relative';

var i = 0;
var timerSlider;

var dotts = document.createElement('ul');
dotts.classList.add('dotts');
dotts.style.cssText = 'margin: 5px 0; padding: 0; list-style-type: none; left: 50%; transform: translateX(-50%); position: absolute';
dotts.style.display = dottsDisplay;

for (var n = 0; n < imgs.length; n++){
	var li = document.createElement('li');
	li.style.cssText = 'display: inline-block; border-radius: 50%; cursor: pointer';
	li.style.padding = dottsSize;
	li.style.margin = dottsMargin;
	dotts.appendChild(li);	
}


var elemDotts = dotts.querySelectorAll('li');
var nodesDotts = [].slice.call(dotts.querySelectorAll('li')); // IMPORTANT!!!! transformarea obiectului elemDotts in masivul nodesDotts


function funcDotts(){
	stop();
	cursorOut();
	for (var u = 0; u < elemDotts.length; u++){
		elemDotts[u].style.background = dottsInactivBackground;
		imgs[u].style.display = 'none';
	}
	this.style.background = dottsActiveBackground;
	imgs[nodesDotts.indexOf(this)].style.display = 'block'; //IMPORTANT!!!!! aplicarea masivului nodesDotts
}

var buttons = document.createElement('div');
buttons.classList.add('buttons');
buttons.style.color = navColor;
buttons.style.display = navDisplay;

var left = document.createElement('div');
var leftContainer = document.createElement(navElemHtml);
leftContainer.className = navLeftClassList;
leftContainer.style.cssText = navLeftCssText;
leftContainer.style.background = navBackground;
leftContainer.innerHTML = navLeftInnerHtml;
left.addEventListener('click', prev);


var right = document.createElement('div');
var rightContainer = document.createElement(navElemHtml);
rightContainer.className = navRightClassList;
rightContainer.style.cssText = navRightCssText;
rightContainer.style.background = navBackground;
rightContainer.innerHTML = navRightInnerHtml;
right.addEventListener('click', next);

left.appendChild(leftContainer);
right.appendChild(rightContainer);
buttons.appendChild(left);
buttons.appendChild(right);
slider.appendChild(dotts);
slider.appendChild(buttons);

function prev(){
	stop();
	cursorOut();

	imgs[i].style.display = 'none';
	elemDotts[i].style.background = dottsInactivBackground;

	i--;

	if (i < 0) i = imgs.length - 1;

	imgs[i].style.display = 'block';
	elemDotts[i].style.background = dottsActiveBackground;
}

function next(){
	stop();
	cursorOut();

	for (var k = 0; k < imgs.length; k++){
		imgs[k].style.display = 'none';
		elemDotts[k].style.background = dottsInactivBackground;
	}

	i++;

	if (i >= imgs.length) i = 0;

	imgs[i].style.display = 'block';
	elemDotts[i].style.background = dottsActiveBackground;
}

function cursorOut(){
	this.addEventListener('mouseout', start); 
}

function stop(){
	window.clearInterval(window.timerSlider);
}

function start(){
	timerSlider = window.setTimeout(funcSlider, time);
	this.removeEventListener('mouseout', start);
}

function funcSlider(){

	for (var j = 0; j < imgs.length; j++){
		imgs[j].style.cssText = 'margin: 0 auto; display: none';
		imgs[j].style.width = sliderSize;
		elemDotts[j].style.background = dottsInactivBackground;
		elemDotts[j].addEventListener('click', funcDotts);
	}

	imgs[i].style.display = 'block';
	elemDotts[i].style.background = dottsActiveBackground;
	
	i++;
	
	if (i >= imgs.length) i = 0;

	start();

}

funcSlider();
