function sumD(n) {
  let sum = 0;
  let num = String(n);
  for (let i = 0; i < num.length; i++) {
    let digit = num[i];
    let convert = Number(digit);
    sum += convert;
  }
  console.log(sum);
}
sumD(245678);
