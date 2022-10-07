function factorialDivision(num1, num2) {
  let sum = num1;
  let sum1 = num2;
  function factorialOne(factorial1) {
    for (let i = num1; i > 1; i--) {
      sum *= --i;
      i++;
    }
    return sum;
  }
  function factorialTwo(factorial2) {
    for (let i = num2; i > 1; i--) {
      sum1 *= --i;
      i++;
    }
    return sum1;
  }
  factorialOne(num1);
  factorialTwo(num2);
  let final = (sum / sum1).toFixed(2);
  console.log(final);
}
factorialDivision(0, 2);
