class Form
{
constructor()
{
this.input = createInput().attribute("placeholder", "Enter your Name")
this.button = createButton("Play")
this.greeting = createElement("h2")
this.reset = createButton("Reset")
}

hide()
{
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
display()
{
    var title = createElement("h2")
    title.html("Atvika's Car Racing Game")
    title.position(displayWidth/2-50, 0)
    
    this.input.position(displayWidth/2-40, displayHeight/2-80)
    this.button.position(displayWidth/2+30, displayHeight/2)
    this.reset.position(displayWidth-100, 20)
    this.reset.mousePressed(()=>{
player.updateCount(0)
game.update(0)
db.ref("/").update({players:null, finishedPlayersCount:0})

    })
   
    this.button.mousePressed(()=>{
this.button.hide()
this.input.hide()
player.name = this.input.value()
playerCount = playerCount+1;
player.index = playerCount;
player.updatePlayer()
player.updateCount(playerCount)
this.greeting.html("Hello "+player.name )
this.greeting.position(displayWidth/2-70, displayHeight/4)
    })
}
}