// function evenAndOdd(arr) {
//   let sumEven = 0;
//   let sumOdd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = Number(arr[i]);
//     if (arr[i] % 2 === 0) {
//       sumEven += arr[i];
//     } else {
//       sumOdd += arr[i];
//     }
//   }
//   let sum = Math.abs(sumOdd - sumEven);
//   console.log(sum);
// }
// evenAndOdd([3, 5, 7, 9]);

function evenOddSubtraction(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    } else {
      sum -= arr[i];
    }
  }
  console.log(sum);
}
evenOddSubtraction([3, 5, 7, 9]);
