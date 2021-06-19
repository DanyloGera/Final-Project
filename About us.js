

$('.click-for-video').click(function() {
  this.style.display = 'none';
  $('div.youtube').css('display', 'block');
  $('video.youtube').prop('src', 'foto/video/video о нас.mp4; controls=0&;');
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
function myFunction() {
  var change = document.getElementById("toggle");
  if (change.innerHTML == "Rango: 'il n'y a rien ici'"){
    change.innerHTML = "Rango:'trouver skill !'";
  }
  else {
    change.innerHTML = "Rango: 'il n'y a rien ici'";
  }
}

var tag = document.getElementById('demo');
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('demo');
});


 const backToTopButton = document.querySelector("#back-to-top-btn");

    window.addEventListener("scroll", scrollFunction);
    
    function scrollFunction() {
      if (window.pageYOffset > 300) { // Show backToTopButton
        if(!backToTopButton.classList.contains("btnEntrance")) {
          backToTopButton.classList.remove("btnExit");
          backToTopButton.classList.add("btnEntrance");
          backToTopButton.style.display = "block";
        }
      }
      else { // Hide backToTopButton
        if(backToTopButton.classList.contains("btnEntrance")) {
          backToTopButton.classList.remove("btnEntrance");
          backToTopButton.classList.add("btnExit");
          setTimeout(function() {
            backToTopButton.style.display = "none";
          }, 250);
        }
      }
    }
    
    backToTopButton.addEventListener("click", smoothScrollBackToTop);
    
    // function backToTop() {
    //   window.scrollTo(0, 0);
    // }
    
    function smoothScrollBackToTop() {
      const targetPosition = 0;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 750;
      let start = null;
      
      window.requestAnimationFrame(step);
    
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
    }
    
    function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    };