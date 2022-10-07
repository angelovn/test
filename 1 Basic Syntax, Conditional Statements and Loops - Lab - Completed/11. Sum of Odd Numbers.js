function SumOddNum(n) {
  let sumNum = 1;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    console.log(sumNum);
    sum += sumNum;
    sumNum += 2;
  }
  console.log(`Sum: ${sum}`);
}
SumOddNum(5);
// ? We make one variable to start with a number 1 and then in the loop we log this 1st number and then add 2 to it to make it an odd number
