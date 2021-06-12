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
	if ( eval(inputCalc.value) === 20){
        resultCalc.value = '20'; document.location.href="https://danylogera.github.io/game-1/";
    }
	if ( eval(inputCalc.value) == Infinity){
		resultCalc.value = '0,00' ;
	   inputCalc.value = 'Поздравляю!!! Вы сломали калькулятор.' ; //На ноль не делиться!!! 
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