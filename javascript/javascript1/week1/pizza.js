console.log("I love pizza");
let myFav='chicken Pizza';
console.log(myFav);
const pizzaPrice='65';
console.log(pizzaPrice);
console.log(`New pizza order: ${myFav}. The price of the pizza is:${pizzaPrice}`);
//////////////////////Family Pizza //////////
const noOfPizza=4;
var familyPizza = pizzaPrice*2;
let totalPrice = noOfPizza * pizzaPrice+ familyPizza;
console.log(`New pizza order: ${noOfPizza}${myFav} and 1 Family Pizza. Total cost for the order is: ${totalPrice}`);
////////////////No Family Pizza///////////
 totalPrice = noOfPizza * pizzaPrice;
console.log(`New pizza order: ${noOfPizza}${myFav}. Total cost for the order is: ${totalPrice}`);
