const prompt = require("prompt-sync")();

let name = prompt("please enter name => ");
let count = 0;

for (let i = 0; i < name.length; i++) {
	if (
		name[i] === "a" ||
		name[i] === "e" ||
		name[i] === "i" ||
		name[i] === "o" ||
		name[i] === "u"
	) {
		console.log(name[i]);
		count = count + 1;
	}
}

console.log(count);
