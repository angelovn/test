function wordsTracker(arr) {
  let wordTracker = {};
  let tokens = arr.shift().split(" ");
  for (let el of tokens) {
    wordTracker[el] = 0;
  }
  for (let words of arr) {
    if (wordTracker.hasOwnProperty(words)) {
      let oldValue = wordTracker[words];
      wordTracker[words] = oldValue + 1;
    }
  }
  let sortedResult = Object.entries(wordTracker).sort(
    ([key1, value1], [key2, value2]) => {
      return value2 - value1;
    }
  );
  for (let [key, value] of sortedResult) {
    console.log(`${key} - ${value}`);
  }
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
