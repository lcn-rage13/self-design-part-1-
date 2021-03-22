function preload() {
player1Img = loadImage("images/player1.png")
player2Img = loadImage("images/player2.png")



}




function setup() {
  createCanvas(windowWidth,windowHeight);
  player1= createSprite(200, 150, 50, 50);
    player1.addImage(player1Img)
 
  player2 = createSprite(1200,150,100,100)
  player2.addImage(player2Img)
  player2.scale = 1.75
  player2.mirrorX(-1)
}

function draw() {
  background("black");  
  text("x: "+mouseX + ", y: " +mouseY,mouseX,mouseY) 
  if (mouseDown("leftButton")) {
   shootingstar = createSprite(player1.x,player1.y,20,10)
    shootingstar.velocityX = 4


  }
   drawSprites();
}