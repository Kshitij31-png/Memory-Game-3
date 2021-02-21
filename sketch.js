//var cards = [];
const numberOfRows = 4;
const numberofColumns = 4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var tries = 0;
var engine, world;
var cards = []; var i = 0;

function preload() {
  cardImg = loadImage("Card.png");
  Img1 = loadImage("images/1.png");
  Img2 = loadImage("images/2.png");
  Img3 = loadImage("images/3.png");
  Img4 = loadImage("images/4.png");
  Img5 = loadImage("images/5.png");
  Img6 = loadImage("images/6.png");

}
function setup() {
  createCanvas(1000, 1000);
  engine = Engine.create();
  world = engine.world;
  card1 = createSprite(200, 200, 120, 170);
  card1.addImage(cardImg);
  card1.scale = 0.8;
  card2 = createSprite(400, 200, 120, 170);
  card2.addImage(cardImg);
  card2.scale = 0.8;
  card3 = createSprite(600, 200, 120, 170);
  card3.addImage(cardImg);
  card3.scale = 0.8;
  card4 = createSprite(200, 500, 120, 170);
  card4.addImage(cardImg);
  card4.scale = 0.8;
  card5 = createSprite(400, 500, 120, 170);
  card5.addImage(cardImg);
  card5.scale = 0.8;
  card6 = createSprite(600, 500, 120, 170);
  card6.addImage(cardImg);
  card6.scale = 0.8;
  card7 = createSprite(200, 800, 120, 170);
  card7.addImage(cardImg);
  card7.scale = 0.8;
  card8 = createSprite(400, 800, 120, 170);
  card8.addImage(cardImg);
  card8.scale = 0.8;
  card9 = createSprite(600, 800, 120, 170);
  card9.addImage(cardImg);
  card9.scale = 0.8;
  cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9];
}
function draw() {
  background("orange");
  Engine.update(engine);
  for (var i = 0; i < 10; i++) {
    if (mousePressedOver(cards[i])) {
      var x = i;
      var rand = Math.round(random(1, 6));
      switch (rand) {
        case 1: cards[x].addImage(Img1);cards[x].scale = 0.3;
          break;
        case 2: cards[x].addImage(Img2);cards[x].scale = 0.3;
          break;
        case 3: cards[x].addImage(Img3);cards[x].scale = 0.3;
          break;
        case 4: cards[x].addImage(Img4);cards[x].scale = 0.3;
          break;
        case 5: cards[x].addImage(Img5);cards[x].scale = 0.3;
          break;
        case 6: cards[x].addImage(Img6);cards[x].scale = 0.3;
          break;

      }
    }
  }

  drawSprites();
}






