let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
console.log(`you can spend ${amountToSpend} on candies`)

function addCandy(candyType, weight) {
  if (candyType === "Sweet") {
    boughtCandyPrices.push(weight * 0.5);
  } else if (candyType === "Chocolate") {
    boughtCandyPrices.push(weight * 0.7);
  } else if (candyType === "Toffee") {
    boughtCandyPrices.push(weight * 1.1);
  } else if (candyType === "Chewing-gum") {
    boughtCandyPrices.push(weight * 0.03);
  }
}
addCandy("sweet", 20);
canBuyMoreCandy();
addCandy("chocolate", 20);
canBuyMoreCandy();
addCandy("toffee", 30);
canBuyMoreCandy();
addCandy("chewing-gum", 100);
canBuyMoreCandy();
addCandy("sweet", 40);
canBuyMoreCandy();
addCandy("toffee", 20);
canBuyMoreCandy();


function canBuyMoreCandy() {
  let totalAmount = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalAmount += boughtCandyPrices[i];
  }

  if (totalAmount < amountToSpend) {
    console.log(`You already spent ${totalAmount}. You can buy more, so please do!`);
  } else {
    console.log(`You already spent ${totalAmount}. Enough candy for you!`);
  }
}
