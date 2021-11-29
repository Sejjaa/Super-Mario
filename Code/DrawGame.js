////Creating Game Drawing Obj

var body;
var GameHolder;

var WidthWindow;
var HeightWindow;

var Player;
var PlayerMainPositionInMap;

var ControlsEnable=false;

var AllPlatforms;

function DrawGame(){
body=$('body');
body.append('<div id="GameHolder"></div>');
GameHolder=$('#GameHolder');
WidthWindow=8000;
HeightWindow=window.innerHeight;
GameHolder.css({background:'black',width:WidthWindow,height:HeightWindow-17,overflow:'hidden'});
LoadAudio();
DrawBackGround();
DrawEnemies();
DrawPlatform();
DrawMapObj();
DrawCoins();

setTimeout( ()=>{

CreateBeckup();

},300 )

}


function DrawPlayer(){

GameHolder.append('<div id="Player"></div>');
Player=$('#Player');
Player.css({ width:80,height:80,position:'absolute',top:HeightWindow-147,left:0,backgroundImage:"url(./Img/mario/mario.png)",backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'  })

PlayerMainPositionInMap=Player.position().top;

if(ControlsEnable==false){
	ControlsEnable=true;
	PlayerControls();
}



}


var jump;
var coin;
var gameover;
var kill;
var stageclear;
var Song;

function LoadAudio(){

jump = new Audio('./Sound/jump.wav');
coin = new Audio('./Sound/coin.wav');
gameover = new Audio('./Sound/gameover.wav');
kill = new Audio('./Sound/kill.wav');
stageclear=new Audio('./Sound/stageclear.wav');
Song=new Audio('./Sound/Song.mp3');

}





var AllEnemies01;
var AllEnemies02;
var AllEnemies03;

function DrawEnemies(){

let x=0;
let left4=400;
let Enemies1;

	GameHolder.append(`<div class="Enemies1 Enemies-${x}"></div>`);
	Enemies1=$(`.Enemies-${x}`);
	Enemies1.css({position:'absolute',left:left4,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En1.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	x++;
	left4=700;

	GameHolder.append(`<div class="Enemies1 Enemies-${x}"></div>`);
	Enemies1=$(`.Enemies-${x}`);
	Enemies1.css({position:'absolute',left:left4,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En1.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



	x++;
	left4=1500;
	
	GameHolder.append(`<div class="Enemies1 Enemies-${x}"></div>`);
	Enemies1=$(`.Enemies-${x}`);
	Enemies1.css({position:'absolute',left:left4,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En1.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	x++;
	left4=1800;
	
	GameHolder.append(`<div class="Enemies1 Enemies-${x}"></div>`);
	Enemies1=$(`.Enemies-${x}`);
	Enemies1.css({position:'absolute',left:left4,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En1.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	x++;
	left4=2200;
	
	GameHolder.append(`<div class="Enemies1 Enemies-${x}"></div>`);
	Enemies1=$(`.Enemies-${x}`);
	Enemies1.css({position:'absolute',left:left4,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En1.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	x++;
	left4=4000;
	
	GameHolder.append(`<div class="Enemies1 Enemies-${x}"></div>`);
	Enemies1=$(`.Enemies-${x}`);
	Enemies1.css({position:'absolute',left:left4,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En1.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



	x++;
	left4=7100;
	
	GameHolder.append(`<div class="Enemies1 Enemies-${x}"></div>`);
	Enemies1=$(`.Enemies-${x}`);
	Enemies1.css({position:'absolute',left:left4,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En1.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



let x1=0;
let left6=1600;
let Enemies2;


	GameHolder.append(`<div class="Enemies2 Enemies1-${x1}"></div>`);
	Enemies2=$(`.Enemies1-${x1}`);
	Enemies2.css({position:'absolute',left:left6,top:HeightWindow-447 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En0.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	x1++;
	left6=5500;

	GameHolder.append(`<div class="Enemies2 Enemies1-${x1}"></div>`);
	Enemies2=$(`.Enemies1-${x1}`);
	Enemies2.css({position:'absolute',left:left6,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En0.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



	x1++;
	left6=6200;

	GameHolder.append(`<div class="Enemies2 Enemies1-${x1}"></div>`);
	Enemies2=$(`.Enemies1-${x1}`);
	Enemies2.css({position:'absolute',left:left6,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En0.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	x1++;
	left6=6200;

	GameHolder.append(`<div class="Enemies2 Enemies1-${x1}"></div>`);
	Enemies2=$(`.Enemies1-${x1}`);
	Enemies2.css({position:'absolute',left:left6,top:HeightWindow-347 ,width:'50px',height:50,backgroundImage:"url(./Img/En/En0.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	let x2=0;
	let left7=1065;
	let Enemies3;

	GameHolder.append(`<div class="Enemies3 Enemies3-${x2}"></div>`);
	Enemies3=$(`.Enemies3-${x2}`);
	Enemies3.css({position:'absolute',left:left7,top:HeightWindow-410 ,width:90,height:100,backgroundImage:"url(./Img/En/En2.png)",backgroundRepeat:'no-repeat',backgroundSize:`90px  100px`,backgroundPosition:'center',})


	x2++;
	left7=2805;
	

	GameHolder.append(`<div class="Enemies3 Enemies3-${x2}"></div>`);
	Enemies3=$(`.Enemies3-${x2}`);
	Enemies3.css({position:'absolute',left:left7,top:HeightWindow-268 ,width:90,height:100,backgroundImage:"url(./Img/En/En2.png)",backgroundRepeat:'no-repeat',backgroundSize:`90px  100px`,backgroundPosition:'center',})


	x2++;
	left7=3150;
	

	GameHolder.append(`<div class="Enemies3 Enemies3-${x2}"></div>`);
	Enemies3=$(`.Enemies3-${x2}`);
	Enemies3.css({position:'absolute',left:left7,top:HeightWindow-385 ,width:90,height:100,backgroundImage:"url(./Img/En/En2.png)",backgroundRepeat:'no-repeat',backgroundSize:`90px  100px`,backgroundPosition:'center',})

	x2++;
	left7=3595;
	

	GameHolder.append(`<div class="Enemies3 Enemies3-${x2}"></div>`);
	Enemies3=$(`.Enemies3-${x2}`);
	Enemies3.css({position:'absolute',left:left7,top:HeightWindow-525 ,width:90,height:100,backgroundImage:"url(./Img/En/En2.png)",backgroundRepeat:'no-repeat',backgroundSize:`90px  100px`,backgroundPosition:'center',})

	x2++;
	left7=4365;
	

	GameHolder.append(`<div class="Enemies3 Enemies3-${x2}"></div>`);
	Enemies3=$(`.Enemies3-${x2}`);
	Enemies3.css({position:'absolute',left:left7,top:HeightWindow-265 ,width:90,height:100,backgroundImage:"url(./Img/En/En2.png)",backgroundRepeat:'no-repeat',backgroundSize:`90px  100px`,backgroundPosition:'center',})

	x2++;
	left7=4565;
	

	GameHolder.append(`<div class="Enemies3 Enemies3-${x2}"></div>`);
	Enemies3=$(`.Enemies3-${x2}`);
	Enemies3.css({position:'absolute',left:left7,top:HeightWindow-265 ,width:90,height:100,backgroundImage:"url(./Img/En/En2.png)",backgroundRepeat:'no-repeat',backgroundSize:`90px  100px`,backgroundPosition:'center',})

	x2++;
	left7=5105;
	

	GameHolder.append(`<div class="Enemies3 Enemies3-${x2}"></div>`);
	Enemies3=$(`.Enemies3-${x2}`);
	Enemies3.css({position:'absolute',left:left7,top:HeightWindow-265 ,width:90,height:100,backgroundImage:"url(./Img/En/En2.png)",backgroundRepeat:'no-repeat',backgroundSize:`90px  100px`,backgroundPosition:'center',})

	x2++;
	left7=6605;
	

	GameHolder.append(`<div class="Enemies3 Enemies3-${x2}"></div>`);
	Enemies3=$(`.Enemies3-${x2}`);
	Enemies3.css({position:'absolute',left:left7,top:HeightWindow-265 ,width:90,height:100,backgroundImage:"url(./Img/En/En2.png)",backgroundRepeat:'no-repeat',backgroundSize:`90px  100px`,backgroundPosition:'center',})


AllEnemies01=$('.Enemies1');
AllEnemies02=$('.Enemies2');
AllEnemies03=$('.Enemies3');

}



function DrawPlatform(){

let left=0;
for(let i=0;i<80;i++){

GameHolder.append(`<div class="Platform Platform-${i}"></div>`);
let platforms=$(`.Platform-${i}`);
platforms.css({position:'absolute',width:'100px',height:'50px',backgroundImage:"url(./Img/platA/Platform.png)",top:HeightWindow-67,left:left})
left+=100;

}


AllPlatforms=$('.Platform');

}

function DrawBackGround(){

let left=0;
let i=0;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
let platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'1000px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame.png)",backgroundRepeat:'no-repeat',backgroundSize:`1000px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=1000;
i++;


GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame1.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame2.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame2.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'1000px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame.png)",backgroundRepeat:'no-repeat',backgroundSize:`1000px  ${HeightWindow-68}px`,backgroundPosition:'center'})


i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame1.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame1.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame2.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'1000px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame.png)",backgroundRepeat:'no-repeat',backgroundSize:`1000px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=1000;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame1.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'1000px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame.png)",backgroundRepeat:'no-repeat',backgroundSize:`1000px  ${HeightWindow-68}px`,backgroundPosition:'center'})


left+=1000;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame1.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})


left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame2.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

left+=500;
i++;

GameHolder.append(`<div class="BackG BackG-${i}"></div>`);
platforms=$(`.BackG-${i}`);
platforms.css({position:'absolute',left:left,top:'0px',width:'500px',height:HeightWindow-68,backgroundImage:"url(./Img/backG/backGame2.png)",backgroundRepeat:'no-repeat',backgroundSize:`500px  ${HeightWindow-68}px`,backgroundPosition:'center'})

}


var Pipes;
var NoBreak;


var AllNoBreak;
var AllPipes;
function DrawMapObj(){
	
	StoreAllEnemiesPosition();

//Pipes

	let iii=0;
	let left1=1050;

	GameHolder.append(`<div class="Pipe Pipe-${iii}"></div>`);
	Pipes=$(`.Pipe-${iii}`);
	Pipes.css({position:'absolute',left:left1,top:HeightWindow-318  ,width:'120px',height:250,backgroundImage:"url(./Img/PlatA/pipe.png)",backgroundRepeat:'no-repeat',backgroundSize:`120px  250px`,backgroundPosition:'center'})


	iii++;
	left1=2800;

	GameHolder.append(`<div class="Pipe Pipe-${iii}"></div>`);
	Pipes=$(`.Pipe-${iii}`);
	Pipes.css({position:'absolute',left:left1,top:HeightWindow-168  ,width:'100px',height:'100px',backgroundImage:"url(./Img/PlatA/pipe.png)",backgroundRepeat:'no-repeat',backgroundSize:`100px  100px`,backgroundPosition:'center'})


	iii++;
	left1=3130;

	GameHolder.append(`<div class="Pipe Pipe-${iii}"></div>`);
	Pipes=$(`.Pipe-${iii}`);
	Pipes.css({position:'absolute',left:left1,top:HeightWindow-288  ,width:'130px',height:'220px',backgroundImage:"url(./Img/PlatA/pipe.png)",backgroundRepeat:'no-repeat',backgroundSize:`130px  220px`,backgroundPosition:'center'})


	iii++;
	left1=3560;

	GameHolder.append(`<div class="Pipe Pipe-${iii}"></div>`);
	Pipes=$(`.Pipe-${iii}`);
	Pipes.css({position:'absolute',left:left1,top:HeightWindow-427  ,width:'160px',height:'360px',backgroundImage:"url(./Img/PlatA/pipe.png)",backgroundRepeat:'no-repeat',backgroundSize:`160px  360px`,backgroundPosition:'center'})


	iii++;
	left1=4360;

	GameHolder.append(`<div class="Pipe Pipe-${iii}"></div>`);
	Pipes=$(`.Pipe-${iii}`);
	Pipes.css({position:'absolute',left:left1,top:HeightWindow-168  ,width:'100px',height:'100px',backgroundImage:"url(./Img/PlatA/pipe.png)",backgroundRepeat:'no-repeat',backgroundSize:`100px  100px`,backgroundPosition:'center'})


	iii++;
	left1=4560;

	GameHolder.append(`<div class="Pipe Pipe-${iii}"></div>`);
	Pipes=$(`.Pipe-${iii}`);
	Pipes.css({position:'absolute',left:left1,top:HeightWindow-168  ,width:'100px',height:'100px',backgroundImage:"url(./Img/PlatA/pipe.png)",backgroundRepeat:'no-repeat',backgroundSize:`100px  100px`,backgroundPosition:'center'})


	iii++;
	left1=5100;

	GameHolder.append(`<div class="Pipe Pipe-${iii}"></div>`);
	Pipes=$(`.Pipe-${iii}`);
	Pipes.css({position:'absolute',left:left1,top:HeightWindow-168  ,width:'100px',height:'100px',backgroundImage:"url(./Img/PlatA/pipe.png)",backgroundRepeat:'no-repeat',backgroundSize:`100px  100px`,backgroundPosition:'center'})


	iii++;
	left1=6600;

	GameHolder.append(`<div class="Pipe Pipe-${iii}"></div>`);
	Pipes=$(`.Pipe-${iii}`);
	Pipes.css({position:'absolute',left:left1,top:HeightWindow-168  ,width:'100px',height:'100px',backgroundImage:"url(./Img/PlatA/pipe.png)",backgroundRepeat:'no-repeat',backgroundSize:`100px  100px`,backgroundPosition:'center'})


///No break Platform

	let ii=0;
	let left2=200;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-170  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=400;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-220  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=260;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=20;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=122;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-440  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=310;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-560  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



	ii++;
	left2=500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-520  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=560;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-510  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=720;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-420  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



	ii++;
	left2=770;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-420  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-420  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=870;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-420  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1270;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1320;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1370;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1420;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1470;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1520;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1570;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1620;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1670;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1720;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



	ii++;
	left2=1770;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1870;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1970;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2020;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-450  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-550  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-600  ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-650 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-700 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-750 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=1920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-800 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



	ii++;
	left2=2070;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2120;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=2170;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2220;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=2270;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2320;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-380 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=2370;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-360 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2420;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-340 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2470;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-320 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2520;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2570;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-280 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=2620;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-260 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=3010;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-260 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=3370;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-360 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=3290;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-222 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=5300;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-250 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=5390;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-290 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5490;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-322 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=5620;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-420 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5420;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=4370;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5220;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})




	ii++;
	left2=5020;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=4820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=4620;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=4320;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=4270;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=4220;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


		ii++;
	left2=4170;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

		ii++;
	left2=4120;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


		ii++;
	left2=4120;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-550 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=4120;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-600 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

		ii++;
	left2=4120;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-650 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

			ii++;
	left2=4120;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-700 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-317 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-267 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=5820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-217 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-167 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-367 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=5820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-417 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-467 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



	ii++;
	left2=5870;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=5970;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=6020;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6070;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

		ii++;
	left2=6120;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6170;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6220;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


		ii++;
	left2=6270;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6320;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6370;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6420;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6470;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6770;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6820;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-300 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=6870;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-250 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-250,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6970;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-200 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7020;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-200 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7070;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-350 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7120;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-400 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7170;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-460 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7220;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7000;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6920;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=6720;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6520;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6320;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=6270;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=6220;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-500 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-117 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-167 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-217 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-267 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-317 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-367 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-417 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-467 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-517 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-567 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-617 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})

	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-667 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})


	ii++;
	left2=7500;

	GameHolder.append(`<div class="NoBreak NoBreak-${ii}"></div>`);
	NoBreak=$(`.NoBreak-${ii}`);
	NoBreak.css({position:'absolute',left:left2,top:HeightWindow-717 ,width:'50px',height:50,backgroundImage:"url(./Img/PlatA/nobreak.png)",backgroundRepeat:'no-repeat',backgroundSize:`50px  50px`,backgroundPosition:'center',})



AllNoBreak=$(`.NoBreak`);
AllPipes=$(`.Pipe`);

}


var StoreEnemiesFirstPosition=[];
var StoreEnemiesFirstPosition1=[];
var StoreEnemiesFirstPosition2=[];
function StoreAllEnemiesPosition(){


for(let i=0;i<AllEnemies01.length;i++){


let Ep= $(AllEnemies01[i]).position().left;

StoreEnemiesFirstPosition.push(Ep);

}	

for(let i=0;i<AllEnemies02.length;i++){


let Ep= $(AllEnemies02[i]).position().left;

StoreEnemiesFirstPosition1.push(Ep);

}

for(let i=0;i<AllEnemies03.length;i++){


let Ep= $(AllEnemies03[i]).position().top;

StoreEnemiesFirstPosition2.push(Ep);

}



}


var AllStars;
var StoreStarPositionLeft=[];
var StoreStarPositionTop=[];

var Flag;

function DrawCoins(){


	GameHolder.append(`<div class="Flag"></div>`);

	Flag=$('.Flag');

	Flag.css({position:'absolute',left:7800,top:HeightWindow-466 ,width:'140px',height:400,backgroundImage:"url(./Img/others/flag.png)",backgroundRepeat:'no-repeat',backgroundSize:`contain`,backgroundPosition:'center',})



	let ci=0;
	let lefta=15;
	let Coins;

	GameHolder.append(`<div class="Coin Coin-${ci}"></div>`);
	Coins=$(`.Coin-${ci}`);
	Coins.css({position:'absolute',left:lefta,top:HeightWindow-380 ,width:'30px',height:30,backgroundImage:"url(./Img/En/star.png)",backgroundRepeat:'no-repeat',backgroundSize:`30px  30px`,backgroundPosition:'center',})


	ci++;
	lefta=1820;

	GameHolder.append(`<div class="Coin Coin-${ci}"></div>`);
	Coins=$(`.Coin-${ci}`);
	Coins.css({position:'absolute',left:lefta,top:HeightWindow-470 ,width:'30px',height:30,backgroundImage:"url(./Img/En/star.png)",backgroundRepeat:'no-repeat',backgroundSize:`30px  30px`,backgroundPosition:'center',})

	ci++;
	lefta=2020;

	GameHolder.append(`<div class="Coin Coin-${ci}"></div>`);
	Coins=$(`.Coin-${ci}`);
	Coins.css({position:'absolute',left:lefta,top:HeightWindow-470 ,width:'30px',height:30,backgroundImage:"url(./Img/En/star.png)",backgroundRepeat:'no-repeat',backgroundSize:`30px  30px`,backgroundPosition:'center',})


	ci++;
	lefta=4200;

	GameHolder.append(`<div class="Coin Coin-${ci}"></div>`);
	Coins=$(`.Coin-${ci}`);
	Coins.css({position:'absolute',left:lefta,top:HeightWindow-560 ,width:'30px',height:30,backgroundImage:"url(./Img/En/star.png)",backgroundRepeat:'no-repeat',backgroundSize:`30px  30px`,backgroundPosition:'center',})

	ci++;
	lefta=6300;

	GameHolder.append(`<div class="Coin Coin-${ci}"></div>`);
	Coins=$(`.Coin-${ci}`);
	Coins.css({position:'absolute',left:lefta,top:HeightWindow-560 ,width:'30px',height:30,backgroundImage:"url(./Img/En/star.png)",backgroundRepeat:'no-repeat',backgroundSize:`30px  30px`,backgroundPosition:'center',})


	ci++;
	lefta=5920;

	GameHolder.append(`<div class="Coin Coin-${ci}"></div>`);
	Coins=$(`.Coin-${ci}`);
	Coins.css({position:'absolute',left:lefta,top:HeightWindow-150 ,width:'30px',height:30,backgroundImage:"url(./Img/En/star.png)",backgroundRepeat:'no-repeat',backgroundSize:`30px  30px`,backgroundPosition:'center',})


	AllStars=$('.Coin');


for(let i=0;i<AllStars.length;i++){


let Ep= $(AllStars[i]).position().top;
let Ep1= $(AllStars[i]).position().left;


StoreStarPositionLeft.push(Ep1);
StoreStarPositionTop.push(Ep);


}


}