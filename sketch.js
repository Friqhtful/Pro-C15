var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score;
var redGroup, blueGroup, greenGroup, pinkGroup, arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);

  score=0;

  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
 redGroup = new Group(); 
 greenGroup = new Group(); 
 blueGroup = new Group(); 
 pinkGroup = new Group(); 
 arrowGroup = new Group(); 
}

function draw() {
 background(0);
 
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if (select_balloon == 2) {
      blueBalloon();
    }
    else if (select_balloon == 3) {
      greenBalloon();
      
    }
    else {
      pinkBalloon();
      
    }

    //redGroup.add(redBalloon);
    //blueGroup.add(blueBalloon);
    //greenGroup.add(greenBalloon);
    //pinkGroup.add(pinkBalloon);
  }
  
  if(arrowGroup.isTouching(redGroup)){
    score = score+1;
    arrowGroup.destroyEach();
    redGroup.destroyEach();
  }
  if(arrowGroup.isTouching(blueGroup)){
    score = score+2;
    arrowGroup.destroyEach();
    blueGroup.destroyEach();
  }
  if(arrowGroup.isTouching(greenGroup)){
    score = score+3;
    arrowGroup.destroyEach();
    greenGroup.destroyEach();
  }
  if(arrowGroup.isTouching(pinkGroup)){
    score = score-1;
    arrowGroup.destroyEach();
    pinkGroup.destroyEach();
  }

  drawSprites();
  textSize=20;
  fill (0);
  text("Score: "+ score, 270, 30)

}



// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  //arrow.debug=true
  //arrow.setCollider(circle, 0, 0, 40)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);
}

function blueBalloon() {
  
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue);
}

function greenBalloon() {
  
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenGroup.add(green);
}

function pinkBalloon() {
  
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;
  pinkGroup.add(pink);
}
