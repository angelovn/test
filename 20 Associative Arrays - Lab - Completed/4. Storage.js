function storage(arr) {
  let items = new Map();
  for (let products of arr) {
    let tokens = products.split(" ");
    let name = tokens[0];
    let value = +tokens[1];
    if (items.has(name)) {
      let oldValue = items.get(name, value);
      items.set(name, oldValue + value);
    } else {
      items.set(name, value);
    }
  }
  //? Only with for of, because if return an array
  for (let [key, value] of items) {
    console.log(`${key} -> ${items.get(key, value)}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
