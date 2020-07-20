var bullet, speed, weight;
var wall, thickness;


function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
 speed=random(4,7);
 weight = random(30, 52);

 bullet =  createSprite(100, 200, 50, 30);
 wall = createSprite(1200, 200, thickness, height/2); 
 
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");
  wall.shapeColor = color(80,80,80);

  if (hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    speed = 0;
    var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness); 
    
    
    if (damage > 10){
    wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }

  }
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
bulletRightEdge = lbullet.x + lbullet.width; 
wallLeftEdge = lwall.x;
if (bulletRightEdge >= wall.LeftEdge)
{
 return true
}
return false;
}

