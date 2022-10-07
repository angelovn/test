function amazing(amazing) {
  let sumAmazing = 0;
  let amazingString = String(amazing);
  for (let i = 0; i < amazingString.length; i++) {
    sumAmazing += Number(amazingString[i]);
  }
  let result = String(sumAmazing);
  if (result.includes("9")) {
    console.log(`${amazing} Amazing? True`);
  } else {
    console.log(`${amazing} Amazing? False`);
  }
}
amazing(1233);
