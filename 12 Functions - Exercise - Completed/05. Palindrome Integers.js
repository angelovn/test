function palindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let reversed = String(arr[i]).split("").reverse().join("");
    let palindrome = Number(reversed);
    if (current === palindrome) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
palindrome([123, 323, 421, 121]);
