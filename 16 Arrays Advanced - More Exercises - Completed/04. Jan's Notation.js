function janNotation(arr) {
  let numbers = [];
  let operations = [];
  let result = 0;
  let error = false;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (!isNaN(el)) {
      let operand = arr[i];
      numbers.push(operand);
    } else {
      let operator = arr[i];
      operations.push(operator);
      if (numbers.length < 2) {
        error = true;
        break;
      }
      switch (operator) {
        case "+":
          result = numbers[numbers.length - 2] + numbers[numbers.length - 1];
          numbers.pop();
          numbers.pop();
          numbers.push(result);
          break;
        case "-":
          result = numbers[numbers.length - 2] - numbers[numbers.length - 1];
          numbers.pop();
          numbers.pop();
          numbers.push(result);
          break;
        case "*":
          result = numbers[numbers.length - 2] * numbers[numbers.length - 1];
          numbers.pop();
          numbers.pop();
          numbers.push(result);
          break;
        case "/":
          result = numbers[numbers.length - 2] / numbers[numbers.length - 1];
          numbers.pop();
          numbers.pop();
          numbers.push(result);
          break;
      }
    }
    if (error) {
      break;
    }
  }
  if (error) {
    console.log("Error: not enough operands!");
  } else {
    if (numbers.length > operations.length) {
      console.log("Error: too many operands!");
    } else {
      console.log(result);
    }
  }
}
janNotation([7, 33, 8, "-"]);
