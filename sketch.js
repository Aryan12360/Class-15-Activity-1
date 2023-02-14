var ball;
var vx = 2;
var vy = 2;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function draw() 
{
  background(51);
  if(ball.position.x<=50 || ball.position.x>=350)
  {
    vx= -vx;
  }

  if(ball.position.y<=50 || ball.position.y>=350){
    vy = -vy;
  }
  ball.velocity.x = vx;
  ball.velocity.y = vy;

  drawSprites();

}

