function numberModi(num) {
  let numString = String(num);
  let sum = 0;
  let numbers = 0;
  let el = numString.split("");
  for (let i = 0; i < el.length; i++) {
    for (let j = 0; j < el.length; j++) {
      sum += Number(el[j]);
      numbers++;
    }
    if (sum / numbers > 5) {
      console.log(el.join(""));
      break;
    } else {
      el.push(9);
    }
    sum = 0;
    numbers = 0;
  }
}
numberModi(101);
