const PI = 3.1415;
const radius = 5;
const plantSpace = 0.8;
const startingPlants = 20;
const weeks = 10; // Example: 10 weeks
const area = PI * radius * radius;
const gardenArea = area;
const maxPlants = gardenArea / plantSpace;
const plants = startingPlants * (2 ** weeks);
const week1Plants = startingPlants * (2 ** 1);
const week2Plants = startingPlants * (2 ** 2);
const week3Plants = startingPlants * (2 ** 3);
const week1Percent = week1Plants / maxPlants;
const week2Percent = week2Plants / maxPlants;
const week3Percent = week3Plants / maxPlants;
if (week1Percent > 0.8) {
  console.log("Week 1: Prune the plants");
} else if (week1Percent >= 0.5) {
  console.log("Week 1: Monitor the plants");
} else {
  console.log("Week 1: Plant more plants");
}
const bigPlants = 100 * (2 ** 10);  
const spaceNeeded = bigPlants * plantSpace;
const extraSpace = spaceNeeded - area;
const newRadius = Math.sqrt(area / PI);

try {
  const requiredSpace = 100 * plantSpace;

  if (requiredSpace > gardenArea) {
    throw "Error: Not enough space for 100 plants!";
  }

  console.log("Plants fit in the garden.");
} catch (error) {
  console.log(error);
}