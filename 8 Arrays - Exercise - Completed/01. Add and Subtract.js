function addAndSubtract(arr) {
  let sumNew = 0;
  let sumPrevious = 0;
  for (const elements of arr) {
    sumPrevious += elements;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] += i;
      sumNew += arr[i];
    } else {
      arr[i] -= i;
      sumNew += arr[i];
    }
  }
  console.log(arr);
  console.log(sumPrevious);
  console.log(sumNew);
}
addAndSubtract([5, 15, 23, 56, 35]);
