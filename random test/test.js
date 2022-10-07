// ? That's how you write a for in loop
// let n = {
//   num: 1,
//   numbers: 100,
// };
// for (let proper in n) {
//   console.log(n[proper]);
// }

let ar = ["a", "b", "c"];
ar[4] = "e"; //? When adding a value to the Array and it is on valid index, but for an example when you log it and if it is with 1 index less then it will be something like this ['a','b','c','...','e']
//? arr[4] = 'e'
//? if you console.log(arr[3])
for (let el of ar) {
  console.log(el);
}
console.log(ar[3]);
console.log(ar);

//? Reference error is the function is an expression and is called before initialization, but if it is a normal function there is no problem

// print("k");
// let print = function (msg) {
//   console.log(msg);
// };

// naka("k");
// function naka(msg) {
//   console.log(msg);
// }

//? In a function there can be more than one RETURN operator
// function test(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// let maxNum = test(10, 5);
// console.log(maxNum);

let arr = [3, 8, -1, 5, 2];

// let lastElement = arr.pop();
//? arr.unshift(lastElement); same as arr.unshift(arr.pop());
arr.unshift(arr.pop());
console.log(arr[4]);

//? IMPORTANT
// let num = 5;

// function increment(value) {
//   value += 2;
// }
// increment(num);
// console.log(num);

//? The last value that enters the same keys changes to the newest value always
//? Important

//? delete
// let person = {
//   "alpha": "winston",
//   "bravo": "Sebastian",
//   "charlie": "Monica",
//   "hotel": "Amy",
//   "tango": "Holmes",
// };
// console.log(person);

// delete person["charlie"];
// delete person.bravo;

// console.log(person);

// class Cringe {
//   int cringe;

//   Cringe(){
//   cringe = 10;
//   }

// }
// int main(){

//   Cringe d;
//   d.cringe

// }
