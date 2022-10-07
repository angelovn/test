function pointsValidation(arr) {
  let x1 = arr.shift();
  let y1 = arr.shift();
  let x2 = arr.shift();
  let y2 = arr.shift();
  let formula1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
  let formula2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
  let formula3 = Math.sqrt(
    Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2)
  );
  if (formula1 === Math.trunc(formula1)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (formula2 === Math.trunc(formula2)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (formula3 === Math.trunc(formula3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}
// pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
