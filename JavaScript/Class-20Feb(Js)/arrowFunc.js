// 1st type - single pramaneter

let multi = (x) => x * x;
console.log(multi(4));

// multi parameter
let add = (x, y) => x + y;
console.log(add(2, 3));

// 2nd type - multiple statement

let type2 = (x, y) => {
	console.log(`adding ${x} & ${y}`);
	return x + y;
};

console.log(type2(4, 5));

// 3rd type - Returning an object

let type3 = (x, y) => ({ adding: x + y, subst: x - y });
console.log(type3(4, 9));

// introduced in ECMASCRIPT june 2015
//
