// ? console.log(something,something,something). The comma is saying to log on ONE LINE
//? KEYS ARE STRING
let person = {
  "name": "Naka",
  "age": 20,
  bye() {
    console.log("bye");
  },
};
let b = "bye";
let hi = "sayHi";
person[hi] = function () {
  console.log("Hello");
};
person[hi]();
person[b]();

//? Objects methods most Common
let r = Object.keys(person);
let e = Object.values(person);
let a = Object.entries(person);
console.log(r);
console.log(e);
console.log(a);

//? Loop through Objects
let newArr = [];
let obj = { name: "Peter", age: 18, grade: "5.50" };
for (let keys of Object.keys(obj)) {
  newArr.push(`${keys} : ${obj[keys]}`);
}
console.log(newArr.join(" "));

// ? Value vs Reference Types
//? Stack memory - Organized in a vertical line. We are storing the current context(value) EX:
//? The data from the function is deleted every time a function is executed
let num = 5;
function increment(value) {
  value += 1;
}
//? it makes copy of it and increments it by one and it becomes 6 after that the function ends and it is 5 again
increment(num);
console.log(num);
//? Everything we create in the Stack is getting copied
function Stack() {
  let num = 5;
  //? #1234 address it points to the HEAP.
  let arr = [];
  //? If we assign arr to arr2 it also makes a copy, but it only copies what is in the Stack, so it only copies the address of the 1st arr, not it's value
  let arr2 = arr; //? #1234 address. If any of the elements of arr is changed the elements of arr2 will also be changed, because the point to the same address in (HEAP) memory
  let num2 = num;
  //? 2nd 5 is made. Not address only copy of the value and if we change the num to be 6 the value of num2 will still be 5, because a copy of num was created when num2 was assigned its value
}
//? Heap memory - more messier like a a hay stack. It looks like a table with 2 column one for the address and one for the value

//? JSON - JavaScript Object Notation - a format with which you can transfer data, because we can't send our RAM directly we need to package it so we can send the data (text). It's universal. It's self-describing (it means that the structure is in the data). It is used to exchange date between browser and sever
//? 2 methods in javaScript for JSON
let ob = { name: "john", age: 18 }; //? '{name: blah, age: blag}' it needs to have quotes if it needs to be parsed

//? let text = JSON.stringify(ob);

//? JSON.parse();

console.log(text);

let t = { "name": "Nak", "age": 25 };
console.log(t.name, t.age);
