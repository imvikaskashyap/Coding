const prompt = require("prompt-sync")();

// 1st type =>

// function removeDuplicates(cart) {
// 	let uniqueCart = [...new Set(cart)];
// 	return uniqueCart;
// }

// // Prompt the user to enter items in their cart
// let userInput = prompt("Enter items in your cart separated by commas:");

// // Split the user input into an array
// let userCart = userInput.split(",");

// // Remove duplicates from the user's cart
// let uniqueCart = removeDuplicates(userCart);

// // Log the original cart and the unique cart to the console
// console.log("Original cart:", userCart);
// console.log("Unique cart:", uniqueCart);

// 2 type =>

function removeDuplicates(cart) {
	let uniqueCart = [];
	for (let item of cart) {
		if (!uniqueCart.includes(item)) {
			uniqueCart.push(item);
		}
	}
	return uniqueCart;
}

// Prompt the user to enter items in their cart
let userInput = prompt("Enter items in your cart separated by commas:");

// Split the user input into an array
let userCart = userInput.split(",");

// Remove duplicates from the user's cart
let uniqueCart = removeDuplicates(userCart);

// Log the original cart and the unique
console.log("Original cart:", userCart);
console.log("Unique cart:", uniqueCart);
