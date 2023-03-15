const prompt = require("prompt-sync")();

let confirmPass = 12345678;

let pass = prompt("enter your pass");

if (pass == confirmPass) {
	console.log("Login Successfull");
} else {
	console.log("UnSuccessfull");
}
