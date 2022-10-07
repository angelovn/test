function reverse(num, arr) {
  let newArr = [];
  for (let i = num; i > 0; i--) {
    newArr.push(arr[i - 1]);
  }
  console.log(newArr.join(" "));
}
reverse(3, [10, 20, 30, 40, 50]);
