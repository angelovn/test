function repeatString(str, times) {
  let newStr = "";
  for (let i = 1; i <= times; i++) {
    newStr += str;
  }
  console.log(newStr);
}
repeatString("abc", 3);
