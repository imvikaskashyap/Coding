// function with parameter
function sqr(x) {
	// here x is parameter
	return x * x;
}

let a = sqr(6); // here 6 is argument
// console.log(a);

// function without parameter and return

function greet() {
	console.log("i m learning FSD");
}

let b = greet();

// function without parameter but with return statement
function greet() {
	return "Hi there, i m vikas kashyap";
}
let c = greet();

// function  with default value
function add(x, y) {
	return x + y;
}

let adding = add(2, 4);

function add2(x, y = 5) {
	return x + y;
}

let adding1 = add2(2); // passing 1 argument
// console.log(adding1);

// Note: yadi kisi function me parameter me default value deni h to woh right index se deni chahiye warna ye NaN print karta h.

function multi([x, y = 10]) {
	return x * y;
}

let res = multi([2, 3, 4, 5, 56]);

function multi1([x, y = 10]) {
	return x * y;
}

let res1 = multi([2]);

// console.log(res);

// function with unlimited numbers of argument
// Note: yadi hum kisi function me parameter nahi dete h to arguments automatatic le leta h. because function have arguments proprty.
// ex-
function loop() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}

	return sum;
}

let result = loop(2, 3, 4, 5, 6);
console.log(result);
