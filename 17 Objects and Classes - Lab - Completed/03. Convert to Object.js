function convertObject(jsonStr) {
  let newObject = JSON.parse(jsonStr);
  let keys = Object.keys(newObject);
  for (let key of keys) {
    console.log(`${key}: ${newObject[key]}`);
  }
}
convertObject('{"name": "George", "age": 40, "town": "Sofia"}');
