function magicSum(arr, sum) {
  let magSum = 0;
  let pairs = "";
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let nextNum = arr[j];
      if (currentNum + nextNum === sum) {
        pairs = `${currentNum} ${nextNum} `;
        newArr.push(pairs);
      }
    }
  }
  console.log(newArr.join("\n"));
}
magicSum(
  [1, 7, 6, 2, 19, 23],

  8
);
