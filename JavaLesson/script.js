// ============================
// PART 1: Math Problems
// ============================

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
const n5 = 25;
const total = n1 + n2 + n3 + n4 + n5;
const isSum50 = total === 50;
console.log("Is the sum equal to 50?", isSum50); // Output: true
const oddCount = 
(n1 % 2 !== 0) +
(n2 % 2 !== 0) +
(n3 % 2 !== 0) +
(n4 % 2 !== 0); 
console.log("Count of odd numbers:", oddCount); // Output: 3
const hasTwoOdds = oddCount >= 2;
console.log("Are there at least two odd numbers?", hasTwoOdds); // Output: true
const allUnder25 =
n1 <= 25 &&
n2 <= 25 &&
n3 <= 25 &&
n4 <= 25;
console.log("Are all numbers less than or equal to 25?", allUnder25); // Output: true
const allUnique =
n1 !== n2 &&
n1 !== n3 &&
n1 !== n4 &&
n2 !== n3 &&
n2 !== n4 &&
n3 !== n4;
console.log("Are all numbers unique?", allUnique); // Output: true
const isValid = isSum50 && hasTwoOdds && allUnder25 && allUnique;
console.log(
  `The four numbers are valid according to the provided criteria: ${isValid}`
): // Output: true
const divisibleByFive =
n1 % 5 === 0 &&
n2 % 5 === 0 &&
n3 % 5 === 0 &&
n4 % 5 === 0;
console.log("Are all numbers divisible by 5?", divisibleByFive); // Output: true
const step1 = n2 - n1; 
const step2 = step1 * n3;
const reminder = step2 % n4;
console.log("The final remainder when the result is divided by the fourth number is:", reminder); // Output: 0

<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="app"></div>
    <script src="./index.mjs" type="module"></script>
  </body>
</html>
