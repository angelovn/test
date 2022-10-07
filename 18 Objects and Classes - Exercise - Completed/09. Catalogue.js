// function catalogue(arr) {
//   let catalog = [];
//   for (let names of arr) {
//     let [name, price] = names.split(" : ");
//     let obj = { name, price: Number(price) };
//     catalog.push(obj);
//   }
//   catalog.sort((a, b) => a.name.localeCompare(b.name));

//   let currentLetter = "";
//   for (let obj of catalog) {
//     if (obj.name.charAt(0).toUpperCase() === currentLetter) {
//       console.log(`  ${obj.name}: ${obj.price}`);
//     } else {
//       currentLetter = obj.name.charAt(0).toUpperCase();
//       console.log(currentLetter);
//       console.log(`  ${obj.name}: ${obj.price}`);
//     }
//   }
// }
function catalogue(arr) {
  let catalogue = {};
  let sorted = arr.sort((a, b) => {
    return a.localeCompare(b);
  });
  for (let el of sorted) {
    let [productName, productPrice] = el.split(" : ");
    catalogue[productName] = productPrice;
  }
  let pairs = Object.entries(catalogue);
  let currentLetter = "";
  for (let [k, v] of pairs) {
    if (k[0] === currentLetter) {
      console.log(`  ${k}: ${catalogue[k]}`);
    } else {
      currentLetter = k[0].charAt(0).toUpperCase();
      console.log(currentLetter);
      console.log(`  ${k}: ${catalogue[k]}`);
    }
  }
}
catalogue([
  "Appricot : 20.4",

  "Fridge : 1500",

  "TV : 1499",

  "Deodorant : 10",

  "Boiler : 300",

  "Apple : 1.25",

  "Anti-Bug Spray : 15",

  "T-Shirt : 10",
]);
