function distinct(arr) {
  let newArr = []; // ? Always make a newArray if confused
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr.join(" "));
}
// distinct([1, 2, 3, 4]);
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
