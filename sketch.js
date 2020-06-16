var car1,wall,car2,car3,car4,wall2 ;
 var speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car1=createSprite(50,150,50,50);
  car1.velocityX=3;
  car2=createSprite(50,70,50,50);
  car2.velocityX=4;
  car3=createSprite(50,370,50,50);
  car3.velocityX=5;
  car4=createSprite(50,300,50,50);
  car4.velocityX=6;
  wall=createSprite(1400,110,60,height/2);
  wall.shapeColor=color(80,80,80);
  wall2=createSprite(1400,330,60,height/2);
  wall2.shapeColor=color(80,80,80);
  



  

}

function draw() {
  background(255,255,255);  
  
  if (wall.x-car1.x<(wall.width+car1.width)/2)
  {
 car1.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if(deformation>180){
   car1.shapeColor=color(255,0,0);
 }
 if(deformation>180 && deformation>100){
   car1.shapeColor=color(230,230,0);
 }
 if(deformation>100){
   car1.shapeColor=color(0,255,0);
 }
  }
  if (wall.x-car2.x<(wall.width+car2.width)/2)
  {
 car2.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if(deformation>180){
   car2.shapeColor=color(0,255,0);
 }
 if(deformation>180 && deformation>100){
   car2.shapeColor=color(255,0,0);
 }
 if(deformation>100){
   car2.shapeColor=color(230,230,0);
 }
  }
  if (wall2.x-car3.x<(wall2.width+car3.width)/2)
  {
 car3.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if(deformation>180){
   car3.shapeColor=color(0,255,0);
 }
 if(deformation>180 && deformation>100){
   car3.shapeColor=color(230,230,0);
 }
 if(deformation>100){
   car3.shapeColor=color(255,0,0);
 }
  }
  if (wall2.x-car4.x<(wall2.width+car4.width)/2)
  {
 car4.velocityX=0;
 var deformation=0.5*weight*speed*speed/22509;
 if(deformation>180){
   car4.shapeColor=color(0,255,0);
 }
 if(deformation>180 && deformation>100){
   car4.shapeColor=color(230,230,0);
 }
 if(deformation>100){
   car4.shapeColor=color(255,0,0);
 }
  }
  drawSprites();
}