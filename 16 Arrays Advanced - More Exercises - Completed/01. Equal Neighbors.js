function equalNeighbors(arr) {
  let equalPairs = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i];
    let nextArr = arr[i + 1];
    for (let j = 0; j < currentArr.length; j++) {
      let currentEl = currentArr[j];
      if (currentArr[j + 1] == currentEl) {
        equalPairs++;
      }
      if (nextArr === undefined) {
        continue;
      }
      if (nextArr[j] == currentEl) {
        equalPairs++;
      }
    }
  }
  console.log(equalPairs);
}
// equalNeighbors([
//   ["2", "3", "4", "7", "0"],
//   ["4", "0", "5", "3", "4"],
//   ["2", "3", "5", "4", "2"],
//   ["9", "8", "7", "5", "4"],
// ]);
console.log("------------------");
equalNeighbors([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);
