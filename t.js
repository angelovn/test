// function s(text) {
//   let split = text.split("");
//   console.log(split);
// }
// s("TryMeIfYouCanHaHa");

// let tex = "naktaisSenpai";
// console.log([...tex]);

function solve() {}
let n = solve();
console.log(n);
let arr = [];
arr["naka"] = 1;
console.log(arr);
console.log(arr.length);
let ar = [1, 2, 3, 4];
let m = [...ar];
console.log(m);

let red = [1, 2, 3, 4, 5, 6];

let result = red.reduce((total, current) => total + current, 1); //? the one is undefined when we don't define it
//* acc accumulator
console.log(result);
