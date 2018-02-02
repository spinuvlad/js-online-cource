var slider = document.getElementById('slider');
var imgs = slider.querySelectorAll('#slider img');

var i = 0;

function funcSlider(){

	for (var j = 0; j < imgs.length; j++){
		imgs[j].style.cssText = 'width: 600px; margin: 0 auto; display: none';
	}

	imgs[i].style.display = 'block';
	
	i++;
	
	if (i >= imgs.length) i = 0;

	window.setTimeout(funcSlider, 1000);

}

funcSlider();