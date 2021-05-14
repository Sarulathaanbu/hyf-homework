let boughtCandy = [];

function addCandy(candyType, weight) {
  switch (candyType) {
    case "sweet":
      boughtCandy.push(weight * 0.5);
      break;
    case "chocolate":
      boughtCandy.push(weight * 0.7);
      break;
    case "toffee":
      boughtCandy.push(weight * 1.1);
      break;
    case "chewing-gum":
      boughtCandy.push(weight * 0.03);
      break;
  }
}
let amountToSpend = Math.random() * 100;
console.log(`you can spend ${amountToSpend} on candies`)


function canBuyMoreCandy() {
  let totalAmount = 0;

  for (let i = 0; i < boughtCandy.length; i++) {
    totalAmount += boughtCandy[i];
  }
  console.log(`You already spent ${totalAmount}.`);
  if (totalAmount < amountToSpend) {
    console.log(`You can buy more, so please do!`);
  } else {
    console.log(`Enough candy for you!`);
  }
}
addCandy("sweet", 50);
canBuyMoreCandy();
addCandy("chocolate", 5);
canBuyMoreCandy();
addCandy("toffee", 50);
canBuyMoreCandy();
addCandy("chewing-gum", 50);
canBuyMoreCandy();
