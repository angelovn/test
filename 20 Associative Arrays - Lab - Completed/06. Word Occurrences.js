function wordOccurrences(arr) {
  let list = new Map();
  for (let words of arr) {
    let start = 1;
    if (!list.has(words)) {
      list.set(words, start);
    } else {
      let oldValue = list.get(words, start);
      list.set(words, oldValue + 1);
    }
  }
  let sorted = Array.from(list).sort(([key1, value1], [key2, value2]) => {
    return value2 - value1;
  });
  for (let [word, value] of sorted) {
    console.log(`${word} -> ${value} times`);
  }
}
wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
