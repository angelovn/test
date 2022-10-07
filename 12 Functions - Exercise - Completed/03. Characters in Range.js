function charsInRange(firstLetter, lastLetter) {
  let first = firstLetter.charCodeAt();
  let last = lastLetter.charCodeAt();
  let min = Math.min(first, last);
  let max = Math.max(first, last);
  let str = "";
  for (let i = min + 1; i < max; i++) {
    let char = String.fromCharCode(i);
    str += `${char} `;
  }
  console.log(str);
}
charsInRange("C", "#");
