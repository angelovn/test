function cen(sentence, word) {
  while (sentence.indexOf(word) >= 0) {
    //? it can also includes()
    sentence = sentence.replace(word, "*".repeat(word.length));
  }
  console.log(sentence);
}
cen(
  "A small sentence with some words",

  "small"
);
