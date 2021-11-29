

var Keys=[];

function PlayerControls(){
	

addEventListener('keydown',(e)=>{

	Keys[event.keyCode] = true;
	
})


addEventListener('keyup',(e)=>{

	Keys[event.keyCode] = false;

})





}