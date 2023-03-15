const prompt = require("prompt-sync")();

function findNumbers(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
			console.log(arr[i]);
		} else {
			continue;
		}
	}
}
let userInput = prompt("enter an array => ");
let arr1 = userInput.split(",");

findNumbers(arr1);
