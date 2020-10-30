var bullet, wall;
var speed, weight;
var Deform;
var thickness, bulletW, bulletS;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  bulletW = random(30,52);
  bulletS = random(223,321);
  bullet = createSprite(20,140,50,50);
  bullet.shapeColor = "white" ;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "black";
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  if(wall.x-bullet.x < wall.width/2 + bullet.width/2 ){
    bullet.velocityX = 0;
    Deform = 0.5 * bulletW * bulletS * bulletS/(thickness* thickness*thickness) ;
    if(Deform > 10){
      bullet.shapeColor = "red";
    }
    if(Deform<180 && Deform <10){
      bullet.shapeColor = "green";
    }
    
  }
  drawSprites();
}