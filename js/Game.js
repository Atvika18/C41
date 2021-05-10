class Game{
constructor()
{

}
getState()
{
 var gameStateRef = db.ref('gameState')   
 gameStateRef.on("value", function(data){
     gameState = data.val()
 })
}
update(state)
{
   db.ref('/').update({
       gameState : state
   })
}
async start()
{
    if (gameState===0)
    {
        player = new Player()
        var playerCountRef = await db.ref("playerCount").once("value")
        if (playerCountRef.exists())
        {
            playerCount = playerCountRef.val()
            player.getCount()
        }
        form = new Form()
        form.display()
    }

    car1 = createSprite(100,200);
    car1.addImage(car1Img);
    car2 = createSprite(300,200);
    car2.addImage(car2Img);
    car3 = createSprite(500,200);
    car3.addImage(car3Img);
    car4 = createSprite(700,200);
    car4.addImage(car4Img);
    cars = [car1, car2, car3, car4]
}

play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.allPlayerInfo();

    if(allPlayers !== undefined){
      background(groundImg)
      image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5)
      var display_position = 130;
      var index = 0;
      var x = 200;
       var y = 0;
      for(var plr in allPlayers){
          index = index+1;
          x = x+200;
          y = displayHeight-allPlayers[plr].distance
          cars[index-1].x = x;
          cars[index-1].y = y;
        if (index === player.index)
        {
         fill("red")
          ellipse(x,y, 60);
          camera.position.x= displayWidth/2;
          camera.position.y = cars[index-1].y;
          textSize(20);
          textAlign(CENTER)
        text(allPlayers[plr].name, x,y+60)
        }
        
        
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null && passedFinish===false){
      player.distance +=50
      player.updatePlayer();
    }
    if (player.distance>4200 && passedFinish===false)
    {
      Player.updateFinishedPlayers()
      player.rank = finishedPlayersCount
      console.log(finishedPlayersCount)
      player.updatePlayer()
      passedFinish= true
    }
    drawSprites();
  }
 displayWinner()
 {
   console.log("Game Finished")
 }

}