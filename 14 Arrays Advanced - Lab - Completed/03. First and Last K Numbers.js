function lastFirst(arr) {
  let k = arr.shift();
  console.log(arr.slice(0, k).join(" "));
  console.log(arr.slice(arr.length - k, arr.length).join(" "));
}
lastFirst([3, 6, 7, 8, 9]);
// lastFirst([2, 7, 8, 9]);
