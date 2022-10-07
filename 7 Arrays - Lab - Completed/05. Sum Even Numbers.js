function sumEven(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    let current = Number(arr[i]);
    if (current % 2 === 0) {
      sum += current;
    }
  }
  console.log(sum);
}
sumEven(["1", "2", "3", "4", "5", "6"]);
