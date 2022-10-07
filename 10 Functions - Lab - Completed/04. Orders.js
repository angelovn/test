function orders(product, quantity) {
  let sum = 0;
  let productsPrice = {
    coffee: 1.5,
    water: 1.0,
    coke: 1.4,
    snacks: 2.0,
  };
  if (product === "coffee") {
    sum = productsPrice.coffee * quantity;
  } else if (product === "water") {
    sum = productsPrice.water * quantity;
  } else if (product === "coke") {
    sum = productsPrice.coke * quantity;
  } else {
    sum = productsPrice.snacks * quantity;
  }
  console.log(sum.toFixed(2));
}
orders("water", 5);
