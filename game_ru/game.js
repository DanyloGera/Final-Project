const inputCalc = document.querySelector('.accont'),
      resultCalc = document.querySelector('.result');
function input(nam){
	inputCalc.value = inputCalc.value + nam;
}
function result() {
	if( eval(inputCalc.value) == undefined ){
		resultCalc.value = '0,00' ;
	   inputCalc.value = '0,00' ;
	}
	if ( eval(inputCalc.value) === 20 && inputCalc.value === "3+5+6+6"){
        resultCalc.value = '20'; document.location.href="https://danylogera.github.io/game-1/";
    }
	if ( eval(inputCalc.value) == Infinity){
		resultCalc.value = '0,00' ;
	   inputCalc.value = 'Поздравляю!!! Вы сломали калькулятор.' ; //На ноль не делиться!!! 
	}
  if ( eval(inputCalc.value) === 0.016666666666666666 && inputCalc.value === "3/5/6/6"){
     //resultCalc.value = '540' ;
     inputCalc.value = 'получен навык: #ты звезданутый' ; //На ноль не делиться!!! 
  }
  if ( eval(inputCalc.value) === -14 && inputCalc.value === "3-5-6-6"){
     //resultCalc.value = '540' ;
     inputCalc.value = 'навык: #ты ж моя орегинальность' ; //На ноль не делиться!!! 
  }
  if ( eval(inputCalc.value) === 540 && inputCalc.value === "3*5*6*6"){
     //resultCalc.value = '540' ;
     inputCalc.value = 'Секрет: #высокоактивный социопат' ; //На ноль не делиться!!! 
  }
  if ( eval(inputCalc.value) === 3566){
     //resultCalc.value = '540' ;
     inputCalc.value = 'поставь между ними знак' ; //На ноль не делиться!!! 
  }
	resultCalc.value = eval(inputCalc.value);
	inputCalc.value = eval(inputCalc.value);
}

function backspace() {
	inputCalc.value = inputCalc.value.substring( 0, inputCalc.value.length-1)
}

function reset() {
	resultCalc.value = '0,00' ;
	inputCalc.value = '' ;
}



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