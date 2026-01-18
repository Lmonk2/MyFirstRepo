// ALAB 308.1.1
// Part 1: Math Problems
// This file checks numbers using JavaScript
// ============================

const n1 = 5;
const n2 = 10;
const n3 = 20;
const n4 = 25;
const addedTotal = n1 + n2 + n3 + n4;
const isSum50 = addedTotal === 50;
console.log("Is the sum equal to 50?", isSum50); // Output: true

// Check if each number is odd
const isN1Odd = n1 % 2 !== 0;
const isN2Odd = n2 % 2 !== 0;
const isN3Odd = n3 % 2 !== 0;
const isN4Odd = n4 % 2 !== 0;

const oddCount =
  (isN1Odd ? 1 : 0) +
  (isN2Odd ? 1 : 0) +
  (isN3Odd ? 1 : 0) +
  (isN4Odd ? 1 : 0);
console.log("Count of odd numbers:", oddCount); // Output: 2

const atLeastTwoOdd = oddCount >= 2;
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
const isValid = isSum50 && (oddCount >= 2) && allUnder25 && allUnique;
console.log(
  `The four numbers are valid according to the provided criteria: ${isValid}`
); // Output: true
const divisibleByFive =
  n1 % 5 === 0 &&
  n2 % 5 === 0 &&
  n3 % 5 === 0 &&
  n4 % 5 === 0;
console.log("Are all numbers divisible by 5?", divisibleByFive); // Output: true

const allDivisibleBy5 = divisibleByFive;

const firstLargerThanLast = n1 > n4;

const step1 = n2 - n1; 
const step2 = step1 * n3;
const reminder = step2 % n4;
const mathChain = reminder;
console.log("The final remainder when the result is divided by the fourth number is:", reminder); // Output: 0 

console.log(`Sum is 50: ${isSum50}`);
console.log(`At least two numbers are odd: ${atLeastTwoOdd}`);
console.log(`All numbers under 25: ${allUnder25}`);
console.log(`All numbers are unique: ${allUnique}`);
console.log(`All numbers divisible by 5: ${allDivisibleBy5}`);
console.log(`First number larger than last: ${firstLargerThanLast}`);
console.log(`Math chain result: ${mathChain}`);
console.log(`Overall validity: ${isValid}`);
// --------------------
// Part 2: Practical Math - Road Trip
// --------------------
const totalMiles = 1500;
const fuelCostPerGallon = 3;
const fuelBudget = 175;
const speed55 = 55;
const mpg55 = 30;

const speed60 = 60;
const mpg60 = 28;

const speed75 = 75;
const mpg75 = 23;
// Gallons needed = total miles ÷ miles per gallon
const gallonsNeeded55 = totalMiles / mpg55;
const gallons60 = totalMiles / mpg60;
const gallons75 = totalMiles / mpg75;
// Cost = gallons × price per gallon
const cost55 = gallonsNeeded55 * fuelCostPerGallon;
const cost60 = gallons60 * fuelCostPerGallon;
const cost75 = gallons75 * fuelCostPerGallon;   
const canAfford55 = cost55 <= fuelBudget;
const canAfford60 = cost60 <= fuelBudget;
const canAfford75 = cost75 <= fuelBudget;
console.log(`Can afford at 55 mph: ${canAfford55}`);
// Time = miles ÷ speed
const time55 = totalMiles / speed55;
const time60 = totalMiles / speed60;
const time75 = totalMiles / speed75;
console.log(
    `At 55 mph: Time = ${time55} hours, Cost = $${cost55.toFixed(2)}`
);
console.log(
  `At 75 mph, the trip will take ${time75} hours, cost $${cost75.toFixed(2)}, and stay within budget: ${canAfford75}.`
);
// Driving at 55 mph makes the most sense because it uses the least fuel
// and stays within the budget, even though it takes longer.

function calculateTrip(speed, mpg) {
  // math here
}


// Part 3 Reflection:
// Control flow would allow the program to automatically choose the best speed
// based on budget. Functions would allow the trip calculations to be reused
// instead of repeating code.

