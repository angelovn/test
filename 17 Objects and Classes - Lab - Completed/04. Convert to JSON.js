function convertJSON(name, lastName, hairColor) {
  let newObj = {
    name,
    lastName,
    hairColor,
  };
  let newJSON = JSON.stringify(newObj);
  console.log(newJSON);
}
convertJSON("George", "Jones", "Brown");
