const prompt = require("prompt-sync")();

let name = prompt("please enter name => ");

let firstChar = name.charAt(0);

if (firstChar === firstChar.toLowerCase()) {
	firstChar = firstChar.toUpperCase();
} else {
	firstChar = firstChar;
}

console.log(firstChar);
