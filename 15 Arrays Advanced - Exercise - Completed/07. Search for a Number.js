function searchForNumber(arr, conditions) {
  let newArr = [];
  let counter = 0;
  for (let i = 0; i < conditions[0]; i++) {
    let current = arr[i];
    newArr.push(current);
  }
  console.log(newArr);
  for (let i = 0; i < conditions[1]; i++) {
    newArr.shift();
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === conditions[2]) {
      counter++;
    }
  }
  console.log(`Number ${conditions[2]} occurs ${counter} times.`);
}
searchForNumber(
  [5, 2, 3, 4, 1, 6],

  [5, 2, 3]
);
