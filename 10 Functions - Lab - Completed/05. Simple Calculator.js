function simpleCalc(numberOne, numberTwo, operator) {
  let sum = 0;
  switch (operator) {
    case "add":
      sum = numberOne + numberTwo;
      break;
    case "subtract":
      sum = numberOne - numberTwo;
      break;
    case "multiply":
      sum = numberOne * numberTwo;
      break;
    case "divide":
      sum = numberOne / numberTwo;
      break;
  }
  console.log(sum);
}
simpleCalc(5, 5, "multiply");
