function printElement(arr) {
  let str = "";
  let lastStepN = Number(arr[arr.length - 1]);
  for (let i = 0; i < arr.length - 1; i += lastStepN) {
    str += `${arr[i]} `;
  }
  console.log(str);
}
printElement(["5", "20", "31", "4", "20", "2"]);
