class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {

    if (currency.toLowerCase().includes('dollar')) {
      return this.price * 0, 16
    } else if (currency.toLowerCase().includes('euro')) {
      return this.price * 0, 13
    } else if (currency.toLowerCase().includes('pound')) {
      return this.price * 0, 12
    } else {
      return this.price
    }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product)
  }

  removeProduct(product) {
    const updatedProducts = this.products.filter((e) => product.name !== e.name)
    this.products = updatedProducts
  }

  searchProduct(productName) {
    return this.products.filter(a => a.name === productName)
  }

  getTotal() {
    return this.products.reduce((a, b) => a.price + b.price)

  }

  renderProducts() {
    const ul = document.querySelector("body");
    this.products.forEach(element => {
      const liname = document.createElement("h2");
      liname.innerHTML = element.name;
      ul.appendChild(liname)

      const liprice = document.createElement("p");
      liprice.innerHTML = element.price;
      ul.appendChild(liprice)
    });
  }

  getUser() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        const user = document.getElementById('product')
        const h3 = document.createElement('h3')
        user.appendChild(h3)
        h3.innerHTML = `Username: ${data.username}`
        const p = document.createElement('p')
        user.appendChild(p)
        p.innerHTML = `Email: ${data.email}`
      }).then(() => this.renderProducts())
      .then(() => {
        const total = document.getElementById('total')
        total.innerHTML = `Total Price: ${this.getTotal()}`
      })
  }

}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const product1 = new Product("Samsung TV", 6000);
const product2 = new Product("Speakers", 7000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.removeProduct(product1);
console.log(shoppingCart)
shoppingCart.renderProducts();
shoppingCart.getUser();
console.log(shoppingCart.getTotal());
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("dollars"));
