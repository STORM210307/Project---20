var PLAY = 1;
var END = 0;
var GAMESTATE = 1;
var cat;
var mouse;
var bg;

function preload() {
    //load the images here

bg = loadImage("images/garden.png")


tom1 = loadAnimation("images/tomOne.png")
tom2 = loadAnimation("images/tomTwo.png","images/tomThree.png")
tom3 = loadAnimation("images/tomFour.png")

jerry1 = loadAnimation("images/jerryOne.png")
jerry2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png")
jerry3 = loadAnimation("images/jerryFour.png")

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tom1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerry1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tom3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerry3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");

    }  

    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tom2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerry2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}