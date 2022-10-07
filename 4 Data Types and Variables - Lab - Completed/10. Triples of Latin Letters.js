// function latin(num) {
//   for (let i = 0; i < num; i++) {
//     let oneLetter = String.fromCharCode(k + 97);
//     for (let j = 0; j < num; i++) {
//       let twoLetter = String.fromCharCode(k + 97);
//       for (let k = 0; k < num; k++) {
//         let letter = String.fromCharCode(k + 97);
//         console.log(`${oneLetter}${twoLetter}${letter}`);
//       }
//     }
//   }
// }
// latin("3");

function trippeLetters(n) {
  for (let i = 0; i < n; i++) {
    let firstLetter = String.fromCharCode(i + 97);
    for (let j = 0; j < n; j++) {
      let secondLetter = String.fromCharCode(j + 97);
      for (let k = 0; k < n; k++) {
        let thirdLetter = String.fromCharCode(k + 97);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}
trippeLetters("3");
