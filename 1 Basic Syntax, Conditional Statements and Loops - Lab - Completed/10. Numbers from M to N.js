function MtoN(numM, numN) {
  for (i = numM; i >= numN; i--) {
    console.log(i);
  }
}
MtoN(4, 1);

// * While Solution
function MAndN(m, n) {
  while (m >= n) {
    console.log(m);
    m--;
  }
}
MAndN(6, 2);
