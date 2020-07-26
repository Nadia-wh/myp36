class Food{

     constructor(){
         var foodStock;
         var lastFed;
         this.image=loadImage("js/Milk.png");
     }

      updateFoodStock(){
          database.ref('/').update({
               foodStock:foodStock.update()
          
             })                   
          }
          getFoodStock(){
               foodStock=foodStock+1
          }
          deductFood(){
               foodStock=foodStock-1
          }
     display(){
     
   var x=80,y=100;

   imageMode (CENTER);
   image(this.image,720,220,70,70);

   if(foodStock!=0){
        for(var i=0;i<foodStock;i++){
             if(i%10==0){
                  x=80;
                  y=y+50;
             }
             image(this.image,x,y,50,50);
             x=x+30;
        }
     }
        }
      
}