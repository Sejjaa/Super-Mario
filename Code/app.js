

window.onload = function() {
  
  DrawGame();
  DrawPlayer();
  GOTOLoadingScrean();

};


var Load;
function GOTOLoadingScrean(){


GameHolder.css({display:'none'})
body.append('<div id="GameScrean"></div>');
var GameScrean=$('#GameScrean');
var W=window.innerWidth;
var H=window.innerHeight;
GameScrean.css({background:'black',width:W,height:H,backgroundImage:"url(./Img/BackG.jpg)",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'});

body.append('<div id="Load"></div>');
Load=$('#Load');
Load.css({position:'absolute',top:'60%',left:'36%' ,width:W/3,height:H/6,backgroundImage:"url(./Img/Load.gif)",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'});


setTimeout( ()=>{


Load.remove();



setTimeout( ()=>{

body.append('<div id="Load"></div>');
Load=$('#Load');
Load.css({position:'absolute',top:'60%',left:'41%' ,width:W/5,height:H/6,backgroundImage:"url(./Img/Start.png)",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'});


Load.on('click',()=>{

GameScrean.remove();
Load.remove();
GameHolder.css({display:'',background:'black'})
Song.play();


Song.addEventListener("ended", ()=>{

  Song.play();

});

Player.css({ width:80,height:80,position:'absolute',top:HeightWindow-147,left:0,backgroundImage:"url(./Img/mario/mario.png)",backgroundRepeat:'no-repeat',backgroundSize:'contain',backgroundPosition:'center'  })


Detection();

})


},500 );








},5000  )


}