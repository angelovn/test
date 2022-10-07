function mergeArr(arr1, arr2) {
  let thirdArr = [];
  for (let i = 0; i < arr1.length; i++) {
    let current = Number(arr1[i]);
    let currentArr2 = Number(arr2[i]);
    if (i % 2 === 0) {
      let sum = current + currentArr2;
      thirdArr.push(sum);
    } else {
      current = arr1[i];
      currentArr2 = arr2[i];
      sum = current + currentArr2;
      thirdArr.push(sum);
    }
  }
  console.log(thirdArr.join(" - "));
}
mergeArr(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);
mergeArr(
  ["13", "12312", "5", "77", "4"],

  ["22", "333", "5", "122", "44"]
);
