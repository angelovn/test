function word(string, char, string2) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter === "_") {
      result += char;
    } else {
      result += letter;
    }
  }
  if (result === string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
word("Str_ng", "I", "Strong");
