function divideBy3() {
  for (let i = 3; i <= 100; i += 3) {
    console.log(i);
  }
}
divideBy3();

//* Another Solution
function divisible() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
