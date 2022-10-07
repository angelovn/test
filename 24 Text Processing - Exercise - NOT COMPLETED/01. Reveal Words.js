function reveal(word, sentence) {
  let split = word.split(", ");
  let sentenceSplit = sentence.split(" ");
  for (let i = 0; i < split.length; i++) {
    let currentWord = split[i];
    for (let j = 0; j < sentenceSplit.length; j++) {
      let currentWordSentence = sentenceSplit[j];
      if (currentWordSentence === "*".repeat(currentWord.length)) {
        sentenceSplit[j] = currentWord;
      }
    }
  }
  console.log(sentenceSplit.join(" "));
}
reveal(
  "great, learning",

  "softuni is ***** place for ******** new programming languages"
);
