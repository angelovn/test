//* ?
//? matches the previous token between zero and one times, as many times as possible, giving back as needed (greedy)
function furniture(arr) {
  let sum = 0;
  let newArr = [];
  let text = arr.join("");
  let regex =
    />>(?<furnitureName>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/g;
  let index = 0;
  let command = arr[index++];
  while ((valid = regex.exec(text)) !== null) {
    //? nameOfVarSomething.groups to get array with all the groups of the regex
    let validName = valid.groups["furnitureName"];
    let validPrice = Number(valid.groups["price"]);
    let validQuantity = Number(valid.groups.quantity);
    newArr.push(validName);
    sum += validPrice * validQuantity;
  }
  console.log(`Bought furniture:`);
  for (let el of newArr) {
    console.log(el);
  }
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}
furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
