var  movrec,fixrec;
function setup() {
  createCanvas(800,400);
  
  fixrec=createSprite(400, 200, 50, 50);
  movrec=createSprite(600, 300, 50, 80);
  fixrec.shapeColor="blue";
  movrec.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  movrec.x=World.mouseX;
  movrec.y=World.mouseY;
  
  if(movrec.x-fixrec.x<movrec.width/2+fixrec.width/2&&fixrec.x-movrec.x<movrec.width/2+fixrec.width/2){
    fixrec.shapeColor="green";
    movrec.shapeColor="green";
  }else{
    fixrec.shapeColor="blue";
    movrec.shapeColor="blue";
  }
  
  if(movrec.y-fixrec.y<movrec.height/2+fixrec.height/2&&fixrec.y-movrec.y<movrec.height/2+fixrec.height/2){
    fixrec.shapeColor="green";
    movrec.shapeColor="green";
  }else{
    fixrec.shapeColor="blue";
    movrec.shapeColor="blue";
  }

  drawSprites();
}