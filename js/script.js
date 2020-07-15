let side = document.getElementById('menu');
let drop = document.getElementById('menu__dropdown');
let close = document.getElementsByClassName('close');

document.getElementById('smallMenu').onclick = function() {  
		if (side.style.display == 'block') {
			side.style.display = 'none';
		} else {
		side.style.display = 'block';
		}
}
document.getElementById('dropdown').onclick = function() {
	if (drop.style.display == 'block') {
			drop.style.display = 'none';
			} else {
				drop.style.display = 'block';
	}
}
for (let i = 0; i < close.length; i++) close[i].onclick = function(){
	if (document.documentElement.clientWidth < 491) { 
		side.style.display = 'none';
		} else if (document.documentElement.clientWidth > 490) {
			side.style.display = 'block';
	}
}
window.onresize = function() {
 	if (document.documentElement.clientWidth < 491) {
	side.style.display = 'none';
	drop.style.display = 'none';
	} else if (document.documentElement.clientWidth > 490) {
		side.style.display = 'block';
		drop.style.display = 'none';
		} 
}

let points = document.getElementsByClassName('section-2__points');

for(let i = 0; i < points.length; i++)
points[i].onclick = function(e) {
	for(let i = 0; i < points.length; i++) {
		if (e.target.classList.contains('section-2__points-active') && e.target.children[0].classList.contains('numbers-active')) {
		    	e.target.classList.remove('section-2__points-active');
		    	e.target.children[0].classList.remove('numbers-active');
		    	this.classList.add('section-2__points-active');
		    	this.children[0].classList.add('numbers-active');
		} else { 	
			for(let i = 0; i < points.length; i++)		
				points[i].classList.remove('section-2__points-active');
				points[i].children[0].classList.remove('numbers-active');
				this.children[0].classList.add('numbers-active');
				this.classList.add('section-2__points-active');
		 	 }    	
		}
}