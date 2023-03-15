const prompt = require("prompt-sync")();

function doubleCartQuantity(cart) {
	for (let i = 0; i < cart.length; i++) {
		cart[i] *= 2;
	}

	return cart;
}

let userInput = prompt("enter an array => ");
let cart = userInput.split(",");
console.log(cart);

let res = doubleCartQuantity(cart);
console.log(res);
