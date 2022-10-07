function maxNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let isBiggest = true;
    for (let j = i + 1; j < arr.length; j++) {
      // ? Look at what the inner loop does and also the outer loop they work independently from one another
      let nextNum = arr[j];
      if (currentNum <= nextNum) {
        isBiggest = false;
      }
    }
    if (isBiggest) {
      newArr.push(currentNum);
    }
  }
  console.log(newArr.join(" "));
}
maxNumber([1, 4, 3, 2]);
