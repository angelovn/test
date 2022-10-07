function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  let heron = s * (s - a) * (s - b) * (s - c);
  console.log(Math.sqrt(heron));
}
triangleArea(2, 3.5, 4);
