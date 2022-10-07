function oddNumbers(arr) {
  let i = 0;
  let newArr = [];
  for (let el of arr) {
    if (i % 2 !== 0) {
      el *= 2;
      newArr.push(el);
    }
    i++;
  }
  let reversed = newArr.reverse();
  console.log(reversed.join(" "));
}
// oddNumbers([10, 15, 20, 25]);
oddNumbers([3, 0, 10, 4, 7, 3]);
