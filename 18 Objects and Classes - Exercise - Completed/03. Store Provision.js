// function storeProvision(arr1, arr2) {
//   // ? 1st arr Current Stock
//   // ? 2nd arr delivery products Ordered
//   let storeProducts = {};
//   for (let i = 0; i < arr1.length; i += 2) {
//     let currentProduct = arr1[i];
//     storeProducts[currentProduct] = Number(arr1[i + 1]);
//   }
//   for (let i = 0; i < arr2.length; i += 2) {
//     let currentDelivery = arr2[i];
//     if (!storeProducts.hasOwnProperty(currentDelivery)) {
//       storeProducts[currentDelivery] = 0;
//     }
//     storeProducts[currentDelivery] += Number(arr2[i + 1]);
//   }
//   for (let el in storeProducts) {
//     console.log(`${el} -> ${storeProducts[el]}`);
//   }
// }
function storeProvision(currentStock, forDelivery) {
  let storeProvisions = {};
  let provisionIndex = 0;
  let deliveryIndex = 0;
  let provisionName = "";
  for (let el of currentStock) {
    if (provisionIndex % 2 === 0) {
      provisionName = el;
    } else {
      storeProvisions[provisionName] = Number(el);
    }
    provisionIndex++;
  }
  for (let el of forDelivery) {
    if (deliveryIndex % 2 === 0) {
      provisionName = el;
    } else {
      if (storeProvisions.hasOwnProperty(provisionName)) {
        storeProvisions[provisionName] += Number(el);
      } else {
        storeProvisions[provisionName] = Number(el);
      }
    }
    deliveryIndex++;
  }
  for (let el in storeProvisions) {
    console.log(`${el} -> ${storeProvisions[el]}`);
  }
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
