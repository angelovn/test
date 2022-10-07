// function formatGrade(grade) {
//   let formattedGrade = 2;
//   if (grade < 3) {
//     console.log(`Fail (${formattedGrade})`);
//   } else if (grade >= 3.0 && grade < 3.5) {
//     console.log(`Poor (${grade.toFixed(2)})`);
//   } else if (grade >= 3.5 && grade < 4.5) {
//     console.log(`Good(${grade.toFixed(2)})`);
//   } else if (grade >= 4.5 && grade < 5.5) {
//     console.log(`Very good (${grade.toFixed(2)})`);
//   } else if (grade >= 5.5) {
//     console.log(`Excellent (${grade.toFixed(2)})`);
//   }
// }
// formatGrade(3);
// formatGrade(5.51);
// formatGrade(2.99);
// formatGrade(2.99);

function formatGrade(grade) {
  let desc;
  let formattedGrade = grade.toFixed(2);
  if (grade < 3) {
    desc = "Fail";
    formattedGrade = 2;
  } else if (grade < 3.5) {
    desc = "Poor";
  } else if (grade < 4.5) {
    desc = "Good";
  } else if (grade < 5.5) {
    desc = "Very good";
  } else {
    desc = "Excellent";
  }
  console.log(`${desc} (${formattedGrade})`);
}
formatGrade(4.5);
