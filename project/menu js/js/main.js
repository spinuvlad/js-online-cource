var body = document.getElementsByTagName('body');

var wrapper = document.createElement('div');

wrapper.style.cssText = 'width: 80%; margin: 0 auto; border: 1px dotted;';

wrapper.appendChild(mainMenu(['home', 'aplication', 'production', 'contacts'], '#888', 'blue'));

body[0].appendChild(wrapper);

function mainMenu(arrLinks, bg, hoverBg){
	var menu = document.createElement('div');
	menu.classList.add('main-menu');
	
	var ul = document.createElement('ul');
	ul.style.cssText = 'list-style-type: none; margin: 0; padding: 0';
	ul.style.background = bg;

	for (var i = 0; i < arrLinks.length; i++){
		var li = document.createElement('li');
		li.style.display = 'inline-block';

		var a = document.createElement('a');
		a.href = "#";
		a.innerHTML = arrLinks[i].toUpperCase();
		a.style.cssText = 'display: block; text-decoration: none; padding: 10px; color: #fff';
		a.addEventListener('mouseover', linksHover);

		li.appendChild(a);
		ul.appendChild(li);
	}

	function linksHover(){
		this.style.background = hoverBg;
		this.addEventListener('mouseout', linksOutHover);
	}

	function linksOutHover(){
		this.style.background = bg;
	}

	menu.appendChild(ul);

	return menu;
}



