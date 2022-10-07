function rosettaStone(arr) {
  let stone = {
    zero: " ",
    one: "A",
    two: "B",
    three: "C",
    four: "D",
    five: "E",
    six: "F",
    seven: "G",
    eight: "H",
    nine: "I",
    ten: "J",
    eleven: "K",
    twelve: "L",
    thirteen: "M",
    fourteen: "N",
    fifteen: "O",
    sixteen: "P",
    seventeen: "Q",
    eighteen: "R",
    nineteen: "S",
    twenty: "T",
    twentyOne: "U",
    twentyTwo: "V",
    twentyThree: "W",
    twentyFour: "X",
    twentyFive: "Y",
    twentySix: "Z",
  };
  let templateMatrixLength = Number(arr.shift());
  let message = "";
  let decodingTemplateMatrix = [];
  for (let i = 0; i < templateMatrixLength; i++) {
    let currentArr = arr
      .shift()
      .split(" ")
      .map((el) => Number(el));
    decodingTemplateMatrix.push(currentArr);
  }
  for (let row = 0; row < arr.length; row++) {
    arr[row] = arr[row].split(" ").map((el) => Number(el));
    for (let col = 0; col < arr[row].length; col++) {}
  }

  for (let row = 0; row < templateMatrixLength; row++) {
    let currentRow = decodingTemplateMatrix[row];
    for (let col = 0; col < currentRow.length; col++) {
      // console.log(decodingTemplateMatrix[row][col]);
      for (let r = row; r < arr.length; r += templateMatrixLength) {
        let curRow = arr[r];
        for (let c = col; c < curRow.length; c += currentRow.length) {
          arr[r][c] = arr[r][c] + decodingTemplateMatrix[row][col];
          while (arr[r][c] >= 27) {
            arr[r][c] = arr[r][c] - 27;
          }
          if (arr[r][c] === 0) {
            arr[r][c] = stone.zero;
          } else if (arr[r][c] === 1) {
            arr[r][c] = stone.one;
          } else if (arr[r][c] === 2) {
            arr[r][c] = stone.two;
          } else if (arr[r][c] === 3) {
            arr[r][c] = stone.three;
          } else if (arr[r][c] === 4) {
            arr[r][c] = stone.four;
          } else if (arr[r][c] === 5) {
            arr[r][c] = stone.five;
          } else if (arr[r][c] === 6) {
            arr[r][c] = stone.six;
          } else if (arr[r][c] === 7) {
            arr[r][c] = stone.seven;
          } else if (arr[r][c] === 8) {
            arr[r][c] = stone.eight;
          } else if (arr[r][c] === 9) {
            arr[r][c] = stone.nine;
          } else if (arr[r][c] === 10) {
            arr[r][c] = stone.ten;
          } else if (arr[r][c] === 11) {
            arr[r][c] = stone.eleven;
          } else if (arr[r][c] === 12) {
            arr[r][c] = stone.twelve;
          } else if (arr[r][c] === 13) {
            arr[r][c] = stone.thirteen;
          } else if (arr[r][c] === 14) {
            arr[r][c] = stone.fourteen;
          } else if (arr[r][c] === 15) {
            arr[r][c] = stone.fifteen;
          } else if (arr[r][c] === 16) {
            arr[r][c] = stone.sixteen;
          } else if (arr[r][c] === 17) {
            arr[r][c] = stone.seventeen;
          } else if (arr[r][c] === 18) {
            arr[r][c] = stone.eighteen;
          } else if (arr[r][c] === 19) {
            arr[r][c] = stone.nineteen;
          } else if (arr[r][c] === 20) {
            arr[r][c] = stone.twenty;
          } else if (arr[r][c] === 21) {
            arr[r][c] = stone.twentyOne;
          } else if (arr[r][c] === 22) {
            arr[r][c] = stone.twentyTwo;
          } else if (arr[r][c] === 23) {
            arr[r][c] = stone.twentyThree;
          } else if (arr[r][c] === 24) {
            arr[r][c] = stone.twentyFour;
          } else if (arr[r][c] === 25) {
            arr[r][c] = stone.twentyFive;
          } else if (arr[r][c] === 26) {
            arr[r][c] = stone.twentySix;
          }
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let currentR = arr[i];
    for (let j = 0; j < currentR.length; j++) {
      message += `${arr[i][j]}`;
    }
  }

  console.log(message);
}
// rosettaStone([
//   "2",
//   "59 36",
//   "82 52",
//   "4 18 25 19 8",
//   "4 2 8 2 18",
//   "23 14 22 0 22",
//   "2 17 13 19 20",
//   "0 9 0 22 22",
// ]);
console.log("------------------------------------");
// rosettaStone([
//   "2",
//   "31 32",
//   "74 37",
//   "19 0 23 25",
//   "22 3 12 17",
//   "5 9 23 11",
//   "12 18 10 22",
// ]);
console.log("--------------------------------------");
rosettaStone([
  "1",
  "1 3 13",
  "12 22 14 13 25 0 4 24 23",
  "18 24 2 25 22 0 0 11 18",
  "8 25 6 26 8 23 13 4 14",
  "14 3 14 10 6 1 6 16 14",
  "11 12 2 10 24 2 13 24 0",
  "24 24 10 14 15 25 18 24 12",
  "4 24 0 8 4 22 19 22 14",
  "0 11 18 26 1 19 18 13 15",
  "8 15 14 26 24 14 26 24 14",
]);

//? MY NAME IS OZYMANDIAS KING OF KINGS LOOK ON MY WORKS YE MIGHTY AND DESPAIR
