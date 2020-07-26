var foodRem=20;
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
var dogImg;
var happyDogImg;
var feed,addFood;
var fedTime;
var foodObj;
var lastFed,fedTime;
var milk1,milk2,milk3,milk4,milk5,milk6,milk7,milk8;
var milk9,milk10,milk11,milk12,milk13,milk14,milk15,milk16,milk17;
var milkImg;

function preload()
{
milkImg=loadImage("js/Milk.png");
dogImg=loadImage("Dog.png");
happyDogImg=loadImage("happydog.png")
}

function setup() {
  createCanvas(1000, 500);

  dog = createSprite(750,390,10,10);
  dog.shapeColor="red";
  dog.scale=0.2;
  dog.addImage(dogImg);

 milk1 = createSprite(450,390,10,10);
 milk1.addImage(milkImg);
 milk1.scale=0.1;
 milk2 = createSprite(400,390,10,10);
 milk2.addImage(milkImg);
 milk2.scale=0.1;
 milk3 = createSprite(350,390,10,10);
 milk3.addImage(milkImg);
 milk3.scale=0.1;
 milk4 = createSprite(300,390,10,10);
 milk4.addImage(milkImg);
 milk4.scale=0.1;
 milk5 = createSprite(250,390,10,10);
 milk5.addImage(milkImg);
 milk5.scale=0.1;
milk6 = createSprite(200,390,10,10);
milk6.addImage(milkImg);
milk6.scale=0.1;
milk7 = createSprite(150,390,10,10);
milk7.addImage(milkImg);
milk7.scale=0.1;
 milk8 = createSprite(100,390,10,10);
 milk8.addImage(milkImg);
 milk8.scale=0.1;
 milk9 = createSprite(100,310,10,10);
 milk9.addImage(milkImg);
 milk9.scale=0.1;
 milk10 = createSprite(450,310,10,10);
 milk10.addImage(milkImg);
 milk10.scale=0.1;
 milk11 = createSprite(400,310,10,10);
 milk11.addImage(milkImg);
 milk11.scale=0.1;
  milk12 = createSprite(350,310,10,10);
  milk12.addImage(milkImg);
  milk12.scale=0.1;
 milk13 = createSprite(300,310,10,10);
 milk13.addImage(milkImg);
 milk13.scale=0.1;
  milk14 = createSprite(250,310,10,10);
  milk14.addImage(milkImg);
  milk14.scale=0.1;
  milk15 = createSprite(200,310,10,10);
  milk15.addImage(milkImg);
  milk15.scale=0.1;
   milk16 = createSprite(150,310,10,10);
   milk16.addImage(milkImg);
   milk16.scale=0.1;
 milk17 = createSprite(0,0,0,0);


  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87)

fill ("white");
stroke (4);
textSize(20);

//text ("Note:Press UP_ARROW Key To Feed Drago Milk!",30,100);
//text ("Food remaining :"+foodRem,200,200);

 fedTime=database.ref('FeedTime');
 fedTime.on("value",function(data){
   lastFed=data.val();
 });

  fill(255,255,254);
  textSize(15);
  //console.log(lastFed);
  if(lastFed>=12){
  text("Last Feed :"+ lastFed%12 + " PM", 350,30);
  }else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);
  }else{
    text("Last Feed :"+ lastFed +" AM",350,30);
  }

  drawSprites();

}

function addFoods(){
  foodS++;
  milk17 = createSprite(450,390,10,10);
  milk17.scale=0.1;
  milk17.addImage(milkImg);
  database.ref('/').update({
    Food:foodS
  })
}
function feedDog(){
  dog.addImage(happyDogImg);
  milk1.x=660;
 //foodObj.updateFoodStock(foodObj.getFoodStock()-1);
database.ref('/').update({
  //Food:foodObj.getFoodStock(),
  FeedTime:hour()

})

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}