function triangle(n) {
  for (let row = 1; row <= n; row++) {
    let printLine = "";
    for (let line = 1; line <= row; line++) {
      printLine += `${row} `;
    }
    console.log(printLine);
  }
}
triangle(3);
// ? The inner loop is the one that prints the numbers the outer loop is for helping the inner to know how many times to print it and an empty string is used again for interpolation to write the numbers on 1 line
