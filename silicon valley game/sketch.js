var canvas, backgroundImage;
var side_b,side_t,side_r, side_l;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var xval=0,yval=0;
var form, player, game,player1Img;

var characters,character1,character2,character3,character4;

//var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  player1Img=loadImage("images/character1(part2).png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

/*function readPositionTop(data){
position=data.val();
side_t.x=position.x;
side_t.y=position.y
}

function writePositionTop(x,y){
database.ref("side_TOP/position").set({
'x':position.x + x,
'y':position.y + y
})



}*/