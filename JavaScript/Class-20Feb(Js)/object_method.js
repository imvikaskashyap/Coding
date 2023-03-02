let person = {
	id: 299,
	name: "vikas",
	salary: 80000,
};

// get all keys (will return a array)
let keys = Object.keys(person);

// get all values (will return a array)
let values = Object.values(person);

// get all keys & values (will return a array)
let entries = Object.entries(person);

// if you want that no updation, addition and no deletion then use freeeze
// Object.freeze(person);

person.id = 10000000; // no updation
person.address = "MBD"; // no add
// console.log(entries);

// only update allow but new entry not allowed and deleting not allowed - seal
// Object.seal(person);
person.id = 10000; //  updation
person.address = "MBD"; // no add
// console.log(person.id);

// for delete
delete person.name;
// console.log(person);

// copying object
let copy = Object.assign({}, person);
console.log(copy);

let copy2 = Object.assign({ x: "this is copying" }, person); // here x also will be added
console.log(copy2);
