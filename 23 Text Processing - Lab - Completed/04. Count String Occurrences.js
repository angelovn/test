function countString(sentence, word) {
  let count = 0;
  let splitted = sentence.split(" ");
  for (let el of splitted) {
    if (el === word) {
      count++;
    }
  }
  console.log(count);
}
countString(
  "This is a word and it also is a sentence",

  "is"
);
