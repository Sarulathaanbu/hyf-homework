console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
  products.forEach(product => {
    const productLi = document.createElement('li');

    let shipsToHTML = '';
    product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

    productLi.innerHTML =
      `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(productLi);
  });
}

renderProducts(products);

const userInput = document.getElementById('search-box');
const userPrice = document.getElementById('start');

const sortName = document.getElementById('sortname');


//   Search Box /////////////////////
userInput.addEventListener("input", function(event) {
  const productName = event.target.value;
  console.log(productName);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
  if (productName) {
    return renderProducts(filteredProducts);
  }
  return renderProducts(products);
});
///////Cheap Products//////////////////////////////

userPrice.addEventListener("click", function(event) {
  const userRange = event.target.value;
  const cheapProducts = products.filter(
    (product) => product.price <= userRange * 1000
  );
  return renderProducts(cheapProducts);
});

////sort options/////////////////////////////
sortName.addEventListener('change', () => {
  const value = sortName.value;
  if (value === 'desc') {
    renderProducts(products.sort((firstProduct, secondProduct) => {
      let firstProductName = firstProduct.name.toLowerCase(),
        secondProductName = secondProduct.name.toLowerCase();

      if (firstProductName > secondProductName) {
        return -1;
      }
      if (firstProductName < secondProductName) {
        return 1;
      }
      return 0;

    }));
  } else if (value === 'asc') {
    renderProducts(products.sort((firstProduct, secondProduct) => {
      let firstProductName = firstProduct.name.toLowerCase(),
        secondProductName = secondProduct.name.toLowerCase();

      if (firstProductName < secondProductName) {
        return -1;
      }
      if (firstProductName > secondProductName) {
        return 1;
      }
      return 0;

    }));

  }
});
