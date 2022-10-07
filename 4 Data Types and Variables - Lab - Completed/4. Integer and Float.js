function integer(a, b, c) {
  let sum = a + b + c;
  let result = String(sum);
  let isFloat = false;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === ".") {
      isFloat = true;
    }
  }
  console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
}
integer(9, 100, 1.1);
