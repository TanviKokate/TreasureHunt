var bg,bg2,form,system,code,security, treasureSound;
var score = 0;

function preload() {
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();

  textFont("Showcard Gothic");
  textSize(30);
  fill("white");
  text("Score : " + score, 450, 50);
  if(score === 3) {
    clear();
    background(bg2);
  //text(mouseX + "," + mouseY, mouseX, mouseY);
    textFont("Showcard Gothic");
    fill(236, 240, 241);
    stroke(0);
    strokeWeight(5);
    textSize(40);
    text("Treasure Unlock..!!!", 265, 200);
    text("♛Really..You're an Adventurer♛", 117, 270)
  }
  drawSprites()
}