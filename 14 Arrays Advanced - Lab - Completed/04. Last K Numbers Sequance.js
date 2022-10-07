function lastKNumbers(n, k) {
  let el = [1];
  for (let i = 0; i < n; i++) {
    let startIndex = Math.max(0, i - k);
    let currentEl = el
      .slice(startIndex, startIndex + k)
      .reduce((a, b) => a + b, 0);
    el.push(currentEl);
  }
  console.log(el.join(" "));
}
lastKNumbers(6, 3);
