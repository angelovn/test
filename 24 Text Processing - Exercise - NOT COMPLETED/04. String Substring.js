function subString(word, sentence) {
  let splitted = sentence.toLowerCase().split(" ");
  for (let words of splitted) {
    if (splitted.includes(word)) {
      console.log(`${word}`);
      break;
    } else {
      console.log(`${word} not found!`);
      break;
    }
  }
}

subString(
  "Javascript",

  "JavaScript is the best programming language"
);

//? other solution
// function subString(word, sentence) {
//   let splitted = sentence.split(" ");
//   for (let words of splitted) {
//     if (word.toLowerCase() === words.toLowerCase()) {
//       console.log(`${word}`);
//       return;
//     }
//   }
//   console.log(`${word} not found!`);
// }
