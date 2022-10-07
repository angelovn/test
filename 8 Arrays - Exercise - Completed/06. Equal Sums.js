function equalSum(arr) {
  let foundIndex = "no";
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    let elements = arr[i];
    for (left = 0; left < i; left++) {
      leftSum += arr[left];
    }
    for (right = i + 1; right < arr.length; right++) {
      rightSum += arr[right];
    }
    if (leftSum === rightSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}
equalSum([1, 2, 3, 3]);
