// function bunnyKill(arr) {
//   let hangar = [];
//   let damage = 0;
//   let bunniesKilled = 0;
//   //? row1 col1, row2 col2 etc...
//   let coordinates = arr.pop().split(" ");
//   let isExploded = 0;
//   //* every direction and all diagonals
//   for (let i = 0; i < arr.length; i++) {
//     let currentArr = arr[i];
//     let matrixIntegers = currentArr.split(" ").map((el) => Number(el));
//     hangar.push(matrixIntegers);
//   }
//   for (let i = 0; i < coordinates.length; i++) {
//     let currentCoordinates = coordinates[i].split(",").map((el) => Number(el));
//     let row1 = currentCoordinates[0];
//     let col1 = currentCoordinates[1];
//     for (let row = 0; row < hangar.length; row++) {
//       let currentRow = hangar[row];
//       for (let col = 0; col < currentRow.length; col++) {
//         let currentEl = currentRow[col];
//         if (row1 === row && col1 === col) {
//           isExploded++;
//           bunniesKilled++;
//           hangar[row][col] = 0;
//           //? Edno napred
//           if (!hangar[row][col + 1]) {
//             hangar[row][col] = 0;
//           } else {
//             if (hangar[row][col + 1] > currentEl) {
//               hangar[row][col + 1] = Number(hangar[row][col + 1]) - currentEl;
//             } else {
//               hangar[row][col + 1] = 0;
//             }
//           }
//           //? Edno nazad
//           if (!hangar[row][col - 1]) {
//             hangar[row][col] = 0;
//           } else {
//             if (hangar[row][col - 1] > currentEl) {
//               hangar[row][col - 1] = Number(hangar[row][col - 1]) - currentEl;
//             } else {
//               hangar[row][col - 1] = 0;
//             }
//           }
//           //? Edin red nadolu
//           if (!hangar[row + 1][col]) {
//             hangar[row][col] = 0;
//           } else {
//             if (hangar[row + 1][col] > currentEl) {
//               hangar[row + 1][col] = Number(hangar[row + 1][col]) - currentEl;
//             } else {
//               hangar[row + 1][col] = 0;
//             }
//           }
//           //?Edin red nagore
//           if (!hangar[row - 1][col]) {
//             hangar[row][col] = 0;
//           } else {
//             if (hangar[row - 1][col] > currentEl) {
//               hangar[row - 1][col] = Number(hangar[row - 1][col]) - currentEl;
//             } else {
//               hangar[row - 1][col] = 0;
//             }
//           }
//           //? Edin red nadolu edno mqsto nazad
//           if (!hangar[row + 1][col - 1]) {
//             hangar[row][col] = 0;
//           } else {
//             if (hangar[row + 1][col - 1] > currentEl) {
//               hangar[row + 1][col - 1] =
//                 Number(hangar[row + 1][col - 1]) - currentEl;
//             } else {
//               hangar[row + 1][col - 1] = 0;
//             }
//           }
//           //? Edin red nagore edno mqsto napred
//           if (!hangar[row - 1][col + 1]) {
//             hangar[row][col] = 0;
//           } else {
//             if (hangar[row - 1][col + 1] > currentEl) {
//               hangar[row - 1][col + 1] =
//                 Number(hangar[row - 1][col + 1]) - currentEl;
//             } else {
//               hangar[row - 1][col + 1] = 0;
//             }
//           }
//           //?Edin red nadolu edno mqsto napred
//           if (!hangar[row + 1][col + 1]) {
//             hangar[row][col] = 0;
//           } else {
//             if (hangar[row + 1][col + 1] > currentEl) {
//               hangar[row + 1][col + 1] =
//                 Number(hangar[row + 1][col + 1]) - currentEl;
//             } else {
//               hangar[row + 1][col + 1] = 0;
//             }
//           }
//           //? Edno nagore edno nazad
//           if (!hangar[row - 1][col - 1]) {
//             hangar[row][col] = 0;
//           } else {
//             if (hangar[row - 1][col - 1] > currentEl) {
//               hangar[row - 1][col - 1] =
//                 Number(hangar[row - 1][col - 1]) - currentEl;
//             } else {
//               hangar[row - 1][col - 1] = 0;
//             }
//           }
//         }
//       }
//     }
//   }

// for (let i = 0; i < hangar.length; i++) {
//   let current = hangar[i];
//   console.log(current);
// }
// }
function bunnyKill(arr) {
  let bombCells = arr
    .pop()
    .split(" ")
    .map((str) => str.split(",").map((x) => Number(x)));
  let matrix = arr.map((row) => row.split(" ").map((x) => Number(x)));

  let damage = 0;
  let killCounter = 0;

  for (let i = 0; i < bombCells.length; i++) {
    let bombRow = bombCells[i][0];
    let bombCol = bombCells[i][1];
    let bombValue = matrix[bombRow][bombCol];

    if (bombValue <= 0) {
      continue;
    }

    //? It starts on the above row if possible
    let startRow = Math.max(0, bombRow - 1);
    //? It ends on the row below if possible
    let endRow = Math.min(bombRow + 1, arr.length - 1);

    for (let row = startRow; row <= endRow; row++) {
      //* It starts on the previous position if possible
      let startCol = Math.max(0, bombCol - 1);
      //* It ends on the previous position if possible
      let endCol = Math.min(bombCol + 1, arr[row].length - 1);

      for (let col = startCol; col <= endCol; col++) {
        matrix[row][col] -= bombValue;
      }
    }

    killCounter++;
    damage += bombValue;
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) {
        damage += matrix[row][col];
        killCounter++;
      }
    }
  }

  console.log(damage);
  console.log(killCounter);
}
bunnyKill(["5 10 15 20", "10 10 10 10", "10 15 10 10", "10 10 10 10", "3,3"]);

//? [0,0,5,20]
//? [10,0,0,0]
//? [10,5,0,0]
//? [10,0,0,0]
