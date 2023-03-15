const prompt = require("prompt-sync")();

let color1 = prompt("enter 1st color => ");
let color2 = prompt("enter 2nd color => ");

let resultingColor = null;

switch (color1) {
	case "red":
		switch (color2) {
			case "blue":
				resultingColor = "Purple";
			case "yellow":
				resultingColor = "Orange";
		}
		break;
	case "blue":
		switch (color2) {
			case "red":
				resultingColor = "Purple";
			case "yellow":
				resultingColor = "Green";
		}
	case "yellow":
		switch (color2) {
			case "red":
				resultingColor = "Orange";
			case "blue":
				resultingColor = "Green";
		}

	default:
		break;
}

if (resultingColor) {
	console.log(resultingColor);
} else {
	console.log("Invalid color combination");
}
