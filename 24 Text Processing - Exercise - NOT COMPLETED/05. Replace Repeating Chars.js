function replaceLetters(str) {
  let text = str[0];
  let index = 1;
  //? if the length is smaller it doesn't go into the while loop
  while (index < str.length) {
    if (str[index] !== str[index - 1]) {
      text += str[index];
    }
    index++;
  }
  console.log(text);
}
replaceLetters("a");
