var light = document.documentElement;
light.addEventListener('mousemove', event =>{
	light.style.setProperty('--x', event.clientX + 'px');	
	light.style.setProperty('--y', event.clientY + 'px');
});

/* Свойства объекта event, предназначенные для получения 
   дополнительной информации о событиях, связанных 
   с клавиатурой и мышью. */


/* clientX, clientY (для мыши) - возвращают информацию о 
   положении курсора (clientX - горизонтальная координата, 
   clientY - вертикальная координата) относительно левого 
   верхнего угла клиентской области. */

var tag = document.getElementById('block');
var plus = document.querySelector('div');
plus.addEventListener('click', function(){
tag.classList.toggle('block');
});

document.addEventListener("mousemove", parallax);
 function parallax(e){
 	this.querySelectorAll('.layer').forEach(layer => {
 		const speed = layer.getAttribute('data-speed')

 		const x = (window.innerWidth - e.pageX*speed)/100
 		const y = (window.innerWidth - e.pageY*speed)/100

 		layer.style.transform = `translateX(${x}px) 
 		                         translateY(${y}px)`
 	})
 }