//Moving hit inside Wathicng


var Time;	
var store1;

var rightTrack=0;
var leftTrack=0;

var gameoverTracker=0;
var TrackJump=0;
var TrackKeyJump=true;

var StopInterval1;
var StopInterval2;
var Option1;
var stuckSpeed=0;


var TrackOnObj=0;

var PlayerPosition;


var TrackerImage1=0;

var Gravity;
var move1;
var Enemies01Move;
var Enemies02Move;
var Game;
var TrackerEnemiesPosition=0;
var TrackerEnemiesPosition1=0;
var TrackerEnemiesPosition2=0;

var BeckUp1=[];
var BeckUp2=[];

var BeckUp3=[];
var BeckUp4=[];

var BeckUp5=[];
var BeckUp6=[];
var BeckUp7=[];


var CoinCollected=[];

function CreateBeckup(){

BeckUp1= StoreEnemiesFirstPosition.slice();
BeckUp2= StoreEnemiesFirstPosition1.slice();

BeckUp3= AllEnemies01.slice();
BeckUp4= AllEnemies02.slice();


///star

BeckUp5=AllStars.slice();
BeckUp6=StoreStarPositionLeft.slice();
BeckUp7=StoreStarPositionTop.slice();


}


function RunBeckup(){

StoreEnemiesFirstPosition=BeckUp1.slice();
StoreEnemiesFirstPosition1=BeckUp2.slice();
AllEnemies01=BeckUp3.slice();
AllEnemies02=BeckUp4.slice();


AllStars=BeckUp5.slice();
StoreStarPositionLeft=BeckUp6.slice();
StoreStarPositionTop=BeckUp7.slice();

}


function Detection(){
	Game=requestAnimationFrame(Detection);


  	Gravity=3.7;
  	move1=5;
  	var jumpspeed=9;
  	Enemies01Move=1.5;
  	Enemies02Move=1.5;
  	PlayerPosition=Player.position();



    FlagPosition=Flag.position();


	if(PlayerPosition.left+75 >= FlagPosition.left  && PlayerPosition.left+75 <= FlagPosition.left+140 || PlayerPosition.left+25 <= FlagPosition.left+140 && PlayerPosition.left+25 >= FlagPosition.left   ){

		
		
		if(  PlayerPosition.top+80>=FlagPosition.top && PlayerPosition.top+80<=FlagPosition.top+400 || PlayerPosition.top<=pos.top+30 && PlayerPosition.top>=FlagPosition.top  ){


			cancelAnimationFrame(Game);
			stageclear.play();
		}
}


for(let v=0;v<AllStars.length;v++){

let PP=Player.position();
let pos=$(AllStars[v]).position();


	if(PP.left+75 >= pos.left  && PP.left+75 <= pos.left+30 || PP.left+25 <= pos.left+30 && PP.left+25 >= pos.left   ){

		
		
		if(  PP.top+80>=pos.top && PP.top+80<=pos.top+30 || PP.top<=pos.top+30 && PP.top>=pos.top  ){


			$(AllStars[v]).css({display:'none'})

			CoinCollected.push('1')

			if(CoinCollected.length==6){
				

				for(let i=0;i<14;i++){

					let destroy=AllNoBreak.length-i;
					$(AllNoBreak[destroy]).css({display:'none'});

				}

			}

		}


	}

}




let PlatformP=$(AllPlatforms[0]).position().top;

for(let i=0;i<AllPipes.length;i++){

	let PP=Player.position();
	let pos=$(AllPipes[i]).position();


	let compStyles = window.getComputedStyle(AllPipes[i]);

	let wget=compStyles.getPropertyValue('width');
	let hget=compStyles.getPropertyValue('height');
	let fixedWitdh=parseInt(wget)
	let fixedHeight=parseInt(hget)
	

	if(PP.left+75 >= pos.left  && PP.left+75 <= pos.left+fixedWitdh || PP.left+25 <= pos.left+fixedWitdh && PP.left+25 >= pos.left   ){


		

		if(PP.left<pos.left){

			Option1=true;	

		}if(PP.left>pos.left){
			Option1=false;
		}


		
		
		if(  PP.top+80>=pos.top && PP.top+80<=pos.top+fixedHeight || PP.top<=pos.top+fixedHeight && PP.top>=pos.top  ){

			if(PP.top+80>=pos.top && PP.top+80<=pos.top+10){
	
				clearInterval(StopInterval1);
				TrackKeyJump=true;
				stuckSpeed=0;	
				TrackJump=0;
			}else{
				jumpspeed=0;
				move1=0;
				stuckSpeed=1;	
			}



			if(Option1){

				Player.css({left:'-='+stuckSpeed})

			}else{
				Player.css({left:'+='+stuckSpeed})
			}

			
			
			Gravity=0;
		}


	}


}



for(let i=0;i<AllEnemies01.length;i++){


	let pos=$(AllEnemies01[i]).position();



	if(TrackerEnemiesPosition==0){


	if(pos.left<StoreEnemiesFirstPosition[i]+200){


		if(TrackerImage1<40){

			$(AllEnemies01[i]).css({backgroundImage:'url(./Img/En/En1.png)'})	
			TrackerImage1++;
		}if(TrackerImage1>39){
			$(AllEnemies01[i]).css({backgroundImage:'url(./Img/En/En1-1.png)'})	
			TrackerImage1++;
			if(TrackerImage1>78){
				TrackerImage1=0;
			}
		}

		$(AllEnemies01[i]).css({left:'+='+Enemies01Move });
		
	}else{
		TrackerEnemiesPosition=1;
	}


	}if(TrackerEnemiesPosition==1){




	if(pos.left>StoreEnemiesFirstPosition[i]-200){


		if(TrackerImage1<40){

			$(AllEnemies01[i]).css({backgroundImage:'url(./Img/En/En1.png)'})	
			TrackerImage1++;
		}if(TrackerImage1>39){
			$(AllEnemies01[i]).css({backgroundImage:'url(./Img/En/En1-1.png)'})	
			TrackerImage1++;
			if(TrackerImage1>79){
				TrackerImage1=0;
			}
		}

		$(AllEnemies01[i]).css({left:'-='+Enemies01Move });

	}else{
		TrackerEnemiesPosition=0;
	}


	}



	let PP=Player.position();
	pos=$(AllEnemies01[i]).position();



	if(PP.left+75 >= pos.left  && PP.left+75 <= pos.left+50 || PP.left+25 <= pos.left+50 && PP.left+25 >= pos.left   ){


		if(PP.left<pos.left){

			Option1=true;	

		}if(PP.left>pos.left){
			Option1=false;
		}


		
		
		

			

	
		
		if(  PP.top+75>=pos.top && PP.top+75<=pos.top+50 || PP.top<=pos.top+50 && PP.top>=pos.top  ){

			
		
		

			if(PP.top+80>=pos.top && PP.top+80<=pos.top+20){
	
				
				Kill();
				clearInterval(StopInterval1);
				TrackKeyJump=true;
				stuckSpeed=0;
				TrackJump=0;	
				$(AllEnemies01[i]).css({display:'none' })
				AllEnemies01.splice(i,1);
				StoreEnemiesFirstPosition.splice(i,1)




		

			}else{
				gameoverTracker++;
				GameOver();
				move1=0;
				jumpspeed=0;
				stuckSpeed=1;	
			}



			if(Option1){

				Player.css({left:'-='+stuckSpeed})

			}else{
				Player.css({left:'+='+stuckSpeed})
			}

			
			
			
		}


	}


}






for(let i=0;i<AllEnemies02.length;i++){


	let pos=$(AllEnemies02[i]).position();



	if(TrackerEnemiesPosition1==0){


	if(pos.left<StoreEnemiesFirstPosition1[i]+200){


		
		$(AllEnemies02[i]).css({backgroundImage:'url(./Img/En/En0-left.png)'})	

		$(AllEnemies02[i]).css({left:'+='+Enemies02Move });
		
	}else{
		TrackerEnemiesPosition1=1;
	}


	}if(TrackerEnemiesPosition1==1){


	if(pos.left>StoreEnemiesFirstPosition1[i]-200){

		$(AllEnemies02[i]).css({backgroundImage:'url(./Img/En/En0.png)'})	
		$(AllEnemies02[i]).css({left:'-='+Enemies02Move });

	}else{
		TrackerEnemiesPosition1=0;
	}


	}



	let PP=Player.position();
	pos=$(AllEnemies02[i]).position();



	if(PP.left+75 >= pos.left  && PP.left+75 <= pos.left+50 || PP.left+25 <= pos.left+50 && PP.left+25 >= pos.left   ){


		if(PP.left<pos.left){

			Option1=true;	

		}if(PP.left>pos.left){
			Option1=false;
		}


		
		
		if(  PP.top+75>=pos.top && PP.top+75<=pos.top+50 || PP.top<=pos.top+50 && PP.top>=pos.top  ){

			

			if(PP.top+80>=pos.top && PP.top+80<=pos.top+20){
	
				

				Kill();
				clearInterval(StopInterval1);
				TrackKeyJump=true;
				stuckSpeed=0;	
				TrackJump=0;
				$(AllEnemies02[i]).css({display:'none'})
				AllEnemies02.splice(i,1);
				StoreEnemiesFirstPosition1.splice(i,1)




		

			}else{
				gameoverTracker++;
				GameOver();
				move1=0;
				jumpspeed=0;
				stuckSpeed=1;	
			}



			if(Option1){

				Player.css({left:'-='+stuckSpeed})

			}else{
				Player.css({left:'+='+stuckSpeed})
			}

			
			
			
		}


	}


}



for(let i=0;i<AllEnemies03.length;i++){


	let pos=$(AllEnemies03[i]).position();



	if(TrackerEnemiesPosition2==0){


	if(pos.top<StoreEnemiesFirstPosition2[i]+150){

		$(AllEnemies03[i]).css({top:'+='+Enemies02Move });
		
	}else{
		setTimeout( ()=>{
			TrackerEnemiesPosition2=1;	
		},1300 )
		
	}


	}if(TrackerEnemiesPosition2==1){


	if(pos.top>StoreEnemiesFirstPosition2[i]){

		$(AllEnemies03[i]).css({top:'-='+Enemies02Move });

	}else{
		TrackerEnemiesPosition2=0;
	}


	}



	let PP=Player.position();
	pos=$(AllEnemies03[i]).position();



	if(PP.left+75 >= pos.left  && PP.left+75 <= pos.left+90 || PP.left+25 <= pos.left+90 && PP.left+25 >= pos.left   ){


		if(PP.left<pos.left){

			Option1=true;	

		}if(PP.left>pos.left){
			Option1=false;
		}


		if(  PP.top+80>=pos.top && PP.top+80<=pos.top+100 || PP.top<=pos.top+100 && PP.top>=pos.top  ){
		
			gameoverTracker++;
			GameOver();

			if(Option1){

				Player.css({left:'-='+stuckSpeed})

			}else{
				Player.css({left:'+='+stuckSpeed})
			}

			
			
			
		}


	}


}




for(let i=0;i<AllNoBreak.length;i++){

	let PP=Player.position();
	let pos=$(AllNoBreak[i]).position();



	if(PP.left+75 >= pos.left  && PP.left+75 <= pos.left+50 || PP.left+25 <= pos.left+50 && PP.left+25 >= pos.left   ){


		if(PP.left<pos.left){

			Option1=true;	

		}if(PP.left>pos.left){
			Option1=false;
		}


		
		
		if(  PP.top+80>=pos.top && PP.top+80<=pos.top+50 || PP.top<=pos.top+50 && PP.top>=pos.top  ){


			if(PP.top+80>=pos.top && PP.top+80<=pos.top+10){  		
				clearInterval(StopInterval1);
				TrackKeyJump=true;
				stuckSpeed=0;
				TrackJump=0;	
			}else{
				jumpspeed=0;
				move1=0;
				stuckSpeed=1;

				

				setTimeout( ()=>{

				if(stuckSpeed==1){

					Player.css({top:'-='-0.3})
					
				}

				},2000 );	
			}



			if(PP.top<pos.top+50 && PP.top>pos.top+40 ){
				move1=0;
				jumpspeed=0;
				stuckSpeed=0;
				clearInterval(StopInterval1);
				Player.css({top:'+='+stuckSpeed+3})
			}


			if(Option1){

				Player.css({left:'-='+stuckSpeed})

			}else{
				Player.css({left:'+='+stuckSpeed})
			}

			
			
			Gravity=0;
		}


	}


}




if(PlatformP>=PlayerPosition.top+85){

				Player.css({top:'+='+Gravity})
  				
				
}else{
	            clearInterval(StopInterval1);
				TrackKeyJump=true;
   				Gravity=0;
}






  	if(Keys[87]){

  		
  		
  		if(TrackKeyJump){
  			TrackKeyJump=false;
  			jump.play();





  		StopInterval1=setInterval( ()=>{

  			
  			TrackJump++;
  			Player.css({top:'-='+jumpspeed})
  			if(TrackJump>20){
  				clearInterval(StopInterval1);
  				TrackJump=0;
  				TrackOnObj=0;
  				
  				
  				
  				
  			}

  		},1)


		



  		}


  	
  		



  	}if(Keys[68]){

  		Player.css({left:'+='+move1})
  	
  		if(rightTrack<10){
  			Player.css({backgroundImage:"url(./Img/mario/right0.png)"})	
  			rightTrack++;
  		}if(rightTrack>=10){
  			Player.css({backgroundImage:"url(./Img/mario/right1.png)"})	
  			
  			rightTrack++;
  			if(rightTrack>20){
  				rightTrack=0;
  			}


  		}


  		
  	}if(Keys[65]){
  		
  		Player.css({left:'-='+move1})
  	
  		if(leftTrack<10){
  			Player.css({backgroundImage:"url(./Img/mario/left0.png)",})	
  			leftTrack++;
  		}if(leftTrack>=10){
  			Player.css({backgroundImage:"url(./Img/mario/left1.png)"})	
  			
  			leftTrack++;
  			if(leftTrack>20){
  				leftTrack=0;
  			}


  		}
  		

  	}








let x=document.getElementById('Player')
let x1=x.scrollIntoView( {inline: "center",block:'center' }   );




			
}




var PlayAgine;
function GameOver(){


	if(gameoverTracker==1){

	Song.pause();
	gameover.play();
    cancelAnimationFrame(Game);
    RunBeckup();

    CoinCollected=[];

for(let i=0;i<AllEnemies01.length;i++){

	$(AllEnemies01[i]).css({display:''})
	$(AllEnemies01[i]).css({left:StoreEnemiesFirstPosition[i]})
}

for(let i=0;i<AllEnemies02.length;i++){

	$(AllEnemies02[i]).css({display:''})
	$(AllEnemies02[i]).css({left:StoreEnemiesFirstPosition1[i]})
}


for(let i=0;i<AllStars.length;i++){

	$(AllStars[i]).css({display:''})
	$(AllStars[i]).css({left:BeckUp6[i] ,top:BeckUp7[i] })
}



GameHolder.css({display:'none'})
body.append('<div id="GameScreanOver"></div>');
var GameScreanOver=$('#GameScreanOver');
var W=window.innerWidth;
var H=window.innerHeight;
GameScreanOver.css({background:'black',width:W,height:H,backgroundImage:"url(./Img/GameOver.jpg)",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'});


body.append('<div id="PlayAgine"></div>');
PlayAgine=$('#PlayAgine');
PlayAgine.css({position:'absolute',top:'82%',left:'36%' ,width:W/4,height:H/8,backgroundImage:"url(./Img/Start.png)",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'});


PlayAgine.on('click',()=>{

GameScreanOver.remove();
Load.remove();
PlayAgine.remove();

gameoverTracker=0;
GOTOLoadingScrean();


})


	}




}



function Kill(){

	kill.play();

}