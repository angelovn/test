function matrix(num) {
  let matrix = [];
  let newArr = [];
  for (let i = 0; i < num; i++) {
    matrix.push(num);
  }
  for (let j = 0; j < num; j++) {
    newArr.push(matrix);
  }
  console.log(newArr.join("\n").replace(/,/g, " "));
}
matrix(2);
