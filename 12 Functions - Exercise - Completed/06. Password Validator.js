function passwordValidator(password) {
  let digitsCount = 0;
  let conditions = 0;
  for (let i = 0; i < password.length; i++) {
    let current = password[i];
    if (!isNaN(current)) {
      digitsCount++;
    }
  }
  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
  } else {
    conditions++;
  }
  function specialChars(str) {
    let chars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return chars.test(str);
  }
  if (specialChars(password)) {
    console.log("Password must consist only of letters and digits");
  } else {
    conditions++;
  }
  if (digitsCount < 2) {
    console.log("Password must have at least 2 digits");
  } else {
    conditions++;
  }
  if (conditions === 3) {
    console.log("Password is valid");
  }
}
// passwordValidator("logIn");
passwordValidator("MyPass123");
// passwordValidator("Pa$s$s");
