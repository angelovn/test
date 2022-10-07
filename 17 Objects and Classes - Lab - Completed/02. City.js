function city(town) {
  for (let key of Object.keys(town)) {
    //? the keys are being created and then we look into the obj[key] which will give us the values
    console.log(`${key} -> ${town[key]}`);
  }
}
city({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});
