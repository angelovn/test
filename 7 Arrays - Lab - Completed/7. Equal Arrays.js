function equal(arr1, arr2) {
  let sum = 0;
  let isIdentical = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isIdentical = false;
      break;
    }
  }
  //? it looks at both of the arrays at the same time and it loops over every single element and if they are all the same if goes and sums all the values of arr1
  if (isIdentical) {
    for (let unparsed of arr1) {
      sum += Number(unparsed);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
equal(
  ["10", "20", "30"],

  ["10", "20", "30"]
);
