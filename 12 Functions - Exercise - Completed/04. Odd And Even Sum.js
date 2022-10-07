function oddEvenSum(num) {
  let oddSum = 0;
  let evenSum = 0;
  let numberToString = String(num).split("");

  for (let numbers of numberToString) {
    stringToNumber = Number(numbers);
    if (stringToNumber % 2 === 0) {
      evenSum += stringToNumber;
    } else {
      oddSum += stringToNumber;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddEvenSum(1000435);
