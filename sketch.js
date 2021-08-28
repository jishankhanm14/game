var ball;
function setup() {
  createCanvas(400,400);
  background("yellow"); 
  ball=createSprite(180,180,20,20);
  ball.scale=0.9;
}

function draw() 
{
if(keyIsDown(RIGHT_ARROW)){
background("red")
}
if(keyIsDown(LEFT_ARROW)){
  background("green")
  }
  if(keyIsDown(UP_ARROW)){
    background("orange")
    }
    if(keyIsDown(DOWN_ARROW)){
      background("pink")
      }




drawSprites();

}




