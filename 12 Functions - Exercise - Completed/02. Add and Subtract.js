// ?? Normal Functions
function addSubtract(num1, num2, num3) {
  sum(num1, num2);
  function sum(num1, num2) {
    return num1 + num2;
  }

  function subtract(sum, num3) {
    return sum - num3;
  }
  return subtract(sum(num1, num2), num3);
}
addSubtract(23, 6, 10);

//? Function Expression
// function addSubtract(num1, num2, num3) {
//   let sum = function (num1, num2) {
//     return num1 + num2;
//   };
//   sum(num1, num2);
//   let subtract = function (sum, num3) {
//     return sum - num3;
//   };
//   subtract(sum(num1, num2), num3);
//   return subtract(sum(num1, num2), num3);
// }
// addSubtract(23, 6, 10);

// ? Arrow functions
// function addSubtract(num1, num2, num3) {
//   let sum = (num1, num2) => {
//     return num1 + num2;
//   };
//   sum(num1, num2);
//   let subtract = (sum, num3) => {
//     return sum - num3;
//   };
//   return subtract(sum(num1, num2), num3);
// }
// addSubtract(23, 6, 10);
