function smallest(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let small = arr.slice(0, 2);
  console.log(small.join(" "));
}
smallest([30, 15, 50, 5]);
