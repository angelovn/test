// class Storage {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.storage = [];
//   }
//   get totalCost() {
//     return this.storage.reduce((acc, el) => {
//       return acc + el.price * el.quantity;
//     }, 0); //? It needs to start from somewhere and that somewhere is 0
//   }
//   addProduct(newProduct) {
//     this.storage.push(newProduct);
//     this.capacity -= newProduct.quantity;
//     return;
//   }
//   getProducts() {
//     let output = [];
//     this.storage.forEach((product) => {
//       output.push(JSON.stringify(product));
//     });
//     return output.join("\n");
//   }
// }
class Storage {
  constructor(capacity) {
    this.capacity = capacity;
    this.total = [];
    this.allProducts = [];
  }
  get totalCost() {
    return this.total.reduce((acc, next) => {
      return acc + next;
    }, 0);
  }
  addProduct(product) {
    this.storage = product;
    this.capacity -= this.storage.quantity;
    this.cost = this.storage.quantity * this.storage.price;
    this.total.push(this.cost);
    this.allProducts.push(this.storage);
  }
  getProducts() {
    let arr = [];
    this.allProducts.forEach((product) => {
      arr.push(JSON.stringify(product));
    });
    return arr.join("\n");
  }
}
let productOne = {
  name: "Cucamber",
  price: 1.5,
  quantity: 15,
};
let productTwo = {
  name: "Tomato",
  price: 0.9,
  quantity: 25,
};
let productThree = {
  name: "Bread",
  price: 1.1,
  quantity: 8,
};

let storage = new Storage(50);

storage.addProduct(productOne);

storage.addProduct(productTwo);

storage.addProduct(productThree);

console.log(storage.getProducts());

console.log(storage.capacity);

console.log(storage.totalCost);
