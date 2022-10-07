// function employees(arr) {
//   let employees = [];

//   for (let i = 0; i < arr.length; i++) {
//     let currentName = arr[i];
//     let employee = { currentName, length: currentName.length };
//     employees.push(employee);
//     console.log(
//       `Name: ${employee.currentName} -- Personal Number: ${employee.length}`
//     );
//   }
// }
function employees(arr) {
  for (let name of arr) {
    let personalNumber = name.length;
    let employee = { name, personalNumber };
    console.log(`Name: ${employee.name} -- Personal Number: ${personalNumber}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
