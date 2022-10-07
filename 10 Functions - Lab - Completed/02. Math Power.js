// ? Normal solve
// function mathPow(num, pow) {
//   let number = Math.pow(num, pow);
//   console.log(number);
// }
// mathPow(3, 4);

// ? Harder Solve
function mathPow(num, pow) {
  let sum = 1;
  for (let i = 1; i <= pow; i++) {
    sum = sum * num;
    //? Multiply the previous result by itself and that's how you pow it
  }
  console.log(sum);
}
mathPow(3, 4);
