var canvas;
var music;

var box
var surface1
var surface2
var surface3
var surface4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);

    //create 4 different surfaces
    surface1=createSprite(105,600,180,30)
    surface1.shapeColor="red"
    surface2=createSprite(300,600,180,30)
    surface2.shapeColor="blue"
    surface3=createSprite(495,600,180,30)
    surface3.shapeColor="green"
    surface4=createSprite(690,600,180,30)
    surface4.shapeColor="yellow"

    //create box sprite and give velocity
    box=createSprite(random(20,750),300,35,35)
    box.shapeColor="white"
    box.velocityX=4
    box.velocityY=9
    
 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    box.bounceOff(edges);
    
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor="red"
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor="blue"
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="green"
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="yellow"
        music.play();
    }
    //add condition to check if box touching surface and make it stop
    

    drawSprites()
}
