function condenseArr(arr) {
  while (arr.length > 1) {
    let temp = [];
    for (let i = 0; i < arr.length - 1; i++) {
      temp[i] = arr[i] + arr[i + 1];
    }
    arr = temp;
  }
  console.log(arr.join(""));
}
condenseArr([5, 0, 4, 1, 2]);
