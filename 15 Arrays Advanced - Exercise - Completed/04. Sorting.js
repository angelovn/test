function sorting(arr) {
  let minNum = Number.MIN_SAFE_INTEGER;
  let maxNum = Number.MAX_SAFE_INTEGER;
  let newArr = [];
  let maximum = function max() {
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (current > minNum) {
        minNum = current;
      }
    }
    return minNum;
  };
  let minimum = function min() {
    for (let i = 0; i < arr.length; i++) {
      let current = arr[i];
      if (current < maxNum) {
        maxNum = current;
      }
    }
    return maxNum;
  };
  newArr.push(maximum());
  newArr.push(minimum());
  console.log(newArr);
  console.log(maximum());
  console.log(minimum());
  arr.sort();
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
