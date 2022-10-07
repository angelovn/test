// function makeDic(arr) {
//   let dict = {};

//   for (let el of arr) {
//     let obj = JSON.parse(el); //? I NEED TO ASSIGN THE NEW OBJECT A VARIABLE
//     dict = Object.assign(dict, obj);
//     //?Properties in the target object are overwritten by properties in the sources if they have the same key.
//     //? NEW PROPERTIES ARE ALWAYS OVERWRITTEN WITH THE NEW VALUES
//   }

//   let sortedKeys = Object.keys(dict);
//   sortedKeys.sort((a, b) => a.localeCompare(b));
//   //? Same without the localeCompare()

//   for (let term of sortedKeys) {
//     let definition = dict[term]; //? the bracket notation
//     console.log(`Term: ${term} => Definition: ${definition}`);
//   }
// }
function makeDic(arr) {
  //* dict = Object.assign(dict, obj);
  //? Properties in the target object are overwritten by properties in the sources if they have the same key.
  //? NEW PROPERTIES ARE ALWAYS OVERWRITTEN WITH THE NEW VALUES
  let dictionary = {};
  for (let el of arr) {
    let parsed = JSON.parse(el);
    let pairs = Object.entries(parsed);
    let k = pairs[0][0];
    let v = pairs[0][1];
    dictionary[k] = v;
  }
  let ar = Object.entries(dictionary);
  let sorted = ar.sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });
  for (let el of sorted) {
    console.log(`Term: ${el[0]} => Definition: ${el[1]}`);
  }
}
makeDic([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
  '{"Coffee":"something to drink."}',
]);
