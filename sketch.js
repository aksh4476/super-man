var b1, b2;

function setup() {
  createCanvas(400, 400);
  b1=new Building();
  b1.position=0;
  b1.floors=23;
  
  b2=new Building();
  b2.position=1;
  b2.floors=12;

  b3=new Building();
  b3.position=2;
  b3.floor=35;
  
  b4=new Building();
  b4.position=3;
  b4.floor=75;
  
  b5=new Building();
  b5.position=4;
  b5.floor=2;
  
  b6=new Building();
  b6.position=5;
  b6.floor=33;
}

function draw() {
  background(0);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
}