const prompt = require("prompt-sync")();

let marks = prompt("enter an array of marks => ");
let highestMarks = 0;

for (let i = 0; i < marks.length; i++) {
	highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
}
console.log(`highest marks is => ${highestMarks}`);
