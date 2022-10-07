function reverse(string) {
  let newString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let current = string[i];
    newString += current;
  }
  console.log(newString);
}
reverse("Hello");
