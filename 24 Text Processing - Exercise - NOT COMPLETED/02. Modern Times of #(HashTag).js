function hashTag(str) {
  let split = str.split(" ");
  let hashTagArr = [];
  for (let el of split) {
    let charsOfEl = el.split("");
    for (let char of charsOfEl) {
      if (char === "#") {
        continue;
      } else {
        char = Number(char);
      }
      if (el.startsWith("#") && !el.includes(char) && el.length > 1) {
        hashTagArr.push(el);
        break;
      } else {
        break;
      }
    }
  }
  for (let el of hashTagArr) {
    console.log(el.substring(1, el.length));
  }
}
hashTag("Nowadays everyone uses #123 to tag a #special word in #socialMedia");
