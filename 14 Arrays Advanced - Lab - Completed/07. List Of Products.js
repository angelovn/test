function listOfProducts(arr) {
  let newOrder = arr.sort((a, b) => {
    //? or normal sort()
    return a.localeCompare(b);
  });
  let i = 0;
  for (let el of newOrder) {
    i++;
    console.log(`${i}.${el}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
