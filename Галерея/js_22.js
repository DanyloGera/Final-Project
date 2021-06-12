var id;
var posX=350;
var posY=0;
var forward = true;
var up = true;


var isActive = false;
function frame(){
	var element=document.getElementById("anim");
	var element_styles=document.getElementById("container");
	if(posX == 0){
		forward = true;
	}
	else if(posX >= parseInt(element_styles.style.width)- parseInt(element.style.width)){
		forward = false;
	}
	if(posY == 0){
		up = true;
	}
	else if(posY >= parseInt(element_styles.style.height)- parseInt(element.style.height)){
		up = false;
	}
	if(forward)
		posX+=1;
	else
		posX-=1;
	if(up)
		posY+=1;
	else
		posY-=1;

	element.style.top = posY + "px";
	element.style.left = posX + "px";
}

function startOrStop(){
	if(isActive){
		clearInterval(id);
	}
	else{
		id=setInterval(frame,1);		
	}
	isActive= !isActive;
}
// document.getElementById("startStopBtn").addEventListener("click",startOrStop);
