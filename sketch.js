var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var balloonsGroup, arrowsGroup;
var score;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  

}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2
  
  // creating bow to shoot arrow
  bow = createSprite(370,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  balloonsGroup = new Group ();
  arrowsGroup = new Group (); 

  score = 0  
  
}

function draw() {
 background(180);

 // moving ground
 scene.velocityX = -3 


 if (scene.x < 0){
   scene.x = scene.width/2;
 }

 text("score: " + score, 170,150);

  
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
      spawnBalloon();

      if (arrowsGroup.isTouching(balloonsGroup)) {
        balloonsGroup.destroyEach();
        arrowsGroup.destroyEach();

        score = score+1;
      }

      drawSprites();
      text("Score: "+ score, 300,50);
}

// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 133;
  arrow.scale = 0.3;

  //adding arrows to the group
  arrowsGroup.add(arrow);
}


function spawnBalloon() {

  if (World.frameCount % 100 === 0) {
    balloon = createSprite(10,300,10,40);
    balloon.velocityX = 3;
    balloon.y = Math.round(random(100,300));

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: 
      balloon.addImage(red_balloonImage);
      break;
      case 2: 
      balloon.addImage(green_balloonImage);
      break;
      case 3: 
      balloon.addImage(blue_balloonImage);
      break;
      case 4: 
      balloon.addImage(pink_balloonImage);
      break;
      default:
      break;
      
    }

    balloon.scale = 0.1
    balloon.lifetime = 100

    //adding balloons to the group

   balloonsGroup.add(balloon);
    
  }
}



