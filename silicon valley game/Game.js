class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      character1 = createSprite(100,200);
      character1.addImage("character1",player1Img);
      character2 = createSprite(300,200);
    //  car2.addImage("car2",car2_img);
      character3 = createSprite(500,200);
     // car3.addImage("car3",car3_img);
      character4 = createSprite(700,200);
      //car4.addImage("car4",car4_img);
      characters= [character1,character2,character3,character4];
    }
  
    play(){
      form.hide();
      if(frameCount===10){

        side_r=createSprite(displayWidth-10,displayHeight/2, 5, displayHeight-10);
        side_l=createSprite(10,displayHeight/2, 5,displayHeight-10);
        side_t=createSprite(displayWidth/2,10,displayWidth-10, 5)
        side_b=createSprite(displayWidth/2,displayHeight-10, displayWidth-10, 5);
    
      }
      if(frameCount===200){
       /* side_b.visible=false;
        side_t.visible=false;
        side_r.visible=false;
        side_l.visible=false;*/
        side_r=createSprite(displayWidth-60,displayHeight/2, 5, displayHeight-110);
        //side_r=createSprite(550,300, 5, 500);
        side_l=createSprite(60,displayHeight/2, 5,displayHeight-110);
        //side_l=createSprite(50,300, 5, 500);
        side_t=createSprite(displayWidth/2,60,displayWidth-110, 5)
        //side_t=createSprite(300,50, 500, 5);
        side_b=createSprite(displayWidth/2,displayHeight-60, displayWidth-110, 5);
        //side_b=createSprite(300,550, 500, 5);
    
      }else if(frameCount===400)
      {
    
       /* side_b.visible=false;
        side_t.visible=false;
        side_r.visible=false;
        side_l.visible=false;*/
    
        //side_r=createSprite(500,300, 5, 400);
        side_r=createSprite(displayWidth-110,displayHeight/2, 5, displayHeight-210);
        side_l=createSprite(110,displayHeight/2, 5,displayHeight-210);
        //side_l=createSprite(100,300, 5, 400);
        side_t=createSprite(displayWidth/2,110,displayWidth-210, 5)
        //side_t=createSprite(300,100, 400, 5);
        side_b=createSprite(displayWidth/2,displayHeight-110, displayWidth-210, 5);
        //side_b=createSprite(300,500, 400, 5); 
      }
      else if(frameCount===600)
      {
    
      /*  side_b.visible=false;
        side_t.visible=false;
        side_r.visible=false;
        side_l.visible=false;*/
    
        side_r=createSprite(displayWidth-160,displayHeight/2, 5, displayHeight-310);
        side_l=createSprite(160,displayHeight/2, 5,displayHeight-310);
        //side_l=createSprite(100,300, 5, 400);
        side_t=createSprite(displayWidth/2,160,displayWidth-310, 5)
        //side_t=createSprite(300,100, 400, 5);
        side_b=createSprite(displayWidth/2,displayHeight-160, displayWidth-310, 5);
        /*side_r=createSprite(450,300, 5, 300);
    
        side_l=createSprite(150,300, 5, 300);
    
        side_t=createSprite(300,150, 300, 5);
      
        side_b=createSprite(300,450, 300, 5);*/
      }
      
      Player.getPlayerInfo();
      //player.getCarsAtEnd();
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
       // image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        //var display_position = 100;
        
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 60 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          characters[index-1].x = x;
          characters[index-1].y = y;

  
        if (index === player.index){
            stroke(20)
            fill("cyan")
            ellipse(x,y,60,60)
            characters[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = characters[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown("UP_ARROW") && player.index !== null){
        player.distance +=yval;
        yval*=0.98;
        player.xPos+=xval;
        xval*=0.98;
        player.update();
      }
  
      if(keyIsDown("a")){
          xval-=0.2


      }


      if(player.distance > 3000){
        gameState = 2;
        player.rank+=1;
        Player.UpdateCarAtEnd(player.rank);
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      console.log(player.rank)
    }
  }
  