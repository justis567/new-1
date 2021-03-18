var background,background_Img
var balloon,bomb,bomb_Img,balloon_Img,bomb_Img,dog_Img,score,bombGroup

function preload(){
  background_Img=loadImage("background.png")
  ballon_Img=loadImage("balloon.png")
  bomb_Img=loadImage("bomb.png")
 
  
  }
function setup() {
  createCanvas(1800,700);
  balloon=createSprite(400, 200, 50, 50);
 balloon.addImage(ballon_Img)
 balloon.scale=0.25
 score=0

 bombGroup=new Group()
}

function draw() {
  background(background_Img); 



  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-20
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +20
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-20
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +20
    }
spawnbomb()

if(bombGroup.isTouching(balloon)){
  balloon.velocityX=0
  balloon.scale=0.0
}

  drawSprites();
}

function spawnbomb(){
  if(frameCount%140===0){
  var bomb=createSprite(1500,Math.round(random(200,370)),10,10)
  bomb.addImage(bomb_Img)
bomb.velocityX=-25
bomb.scale=0.10
bomb.lifetime=100
bombGroup.addImage(bombGroup)

}
}