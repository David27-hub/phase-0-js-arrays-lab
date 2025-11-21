// inventoryManagement.js

// Products should be an array so tests can mutate it in-place.
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(product) {
  products.push(product);
}

function updateProductName(index, name) {
  products[index] = name;
}

function removeLastProduct() {
  products.pop();
}

// Export the parts the tests expect
module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct
};

