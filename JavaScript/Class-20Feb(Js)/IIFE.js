// IIFE (immidiate inviked function expression) ye ve function hote ho jo immidiate call hote hain. inka use usi time immidiate ho jata h uske bad ye use me nahi aate.
// inko self invoked fimction bhi kehte hain

// ex 1 -
(function () {
	console.log("this is iife function");
})();

// ex 2-
(function (x) {
	console.log(x * x);
})(4);

// expression function in js full details
