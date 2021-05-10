
var db;
var form, player, game;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var car1, car2, car3, car4;
var cars= [];
var car1Img, car2Img, car3Img, car4Img, groundImg, trackImg;
var finishedPlayersCount=0;
var passedFinish = false;

function preload()
{
car1Img = loadImage("images/car1.png");
car2Img = loadImage("images/car2.png");
car3Img = loadImage("images/car3.png");
car4Img = loadImage("images/car4.png");
groundImg = loadImage("images/ground.png")
trackImg = loadImage("images/track.jpg");
}

function setup(){
    db = firebase.database();
    createCanvas(displayWidth-20, displayHeight-30);
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    if (playerCount===4)
    {
        game.update(1)
       
    }
    if (gameState===1)
    {
        clear()
        game.play()
    }

    if (gameState === 2 && finishedPlayersCount===4)
    {
        game.displayWinner();
    }
    if (finishedPlayersCount===2)
    {
        game.update(2)
    }
    
}



