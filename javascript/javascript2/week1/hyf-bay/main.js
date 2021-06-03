console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const main = document.querySelector('main');
const ul = document.createElement('ul')
main.appendChild(ul)

function renderProducts(products) {

  for (let i = 0; i < products.length; i++) {
    const li = document.createElement('li')
    const name = document.createElement('h1')
    name.innerHTML = products[i].name
    li.appendChild(name)

    const price = document.createElement('p')
    price.innerHTML = `price: ${products[i].price}`
    li.appendChild(price)

    const rating = document.createElement('p')
    rating.innerHTML = `rating: ${products[i].rating}`
    li.appendChild(rating)

    ul.appendChild(li)
  }
}
renderProducts(products);
