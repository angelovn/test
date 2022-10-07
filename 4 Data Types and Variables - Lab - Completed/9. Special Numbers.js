function special(n) {
  let sum = 0;
  let result = "";
  for (let i = 1; i <= n; i++) {
    i = String(i);
    for (let j = 0; j < i.length; j++) {
      sum += Number(i[j]);
    }
    result = sum === 5 || sum === 7 || sum === 11;
    if (result) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
    sum = 0; // ? Sum is resets back to 0, because of the new sum
  }
}
special(15);
