function bombNum(numbers, bombNum) {
  let sum = 0;
  let bomNum = bombNum[0];
  let bombNumPower = bombNum[1];
  while (numbers.includes(bomNum)) {
    let index = numbers.indexOf(bomNum);
    let elementsRemove = bombNumPower * 2 + 1;
    let startIndex = index - bombNumPower;
    if (startIndex < 0) {
      elementsRemove += startIndex;
      startIndex = 0;
    }
    numbers.splice(startIndex, elementsRemove);
  }
  for (let el of numbers) {
    sum += el;
  }
  console.log(sum);
}
bombNum([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
// bombNum([1, 1, 3, 1, 1, 5, 2, 3, 1, 1], [3, 2]);
