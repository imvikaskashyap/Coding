// 1.
let obj = {
	id: 1,
	name: "vikas",
	age: 23,
};

console.log(obj);

// accessing the value
console.log(obj.id);
console.log(obj["name"]);

// 2.

let obj2 = new Object();

obj2.id = 2;
obj2.name = "kashyap";
obj2.age = 23;
obj["salary"] = 10000;

console.log("obj2 =>", obj2);

// 3.

function Emp(id, name, age) {
	this.id = id;
	this.name = name;
	this.age = age;
}

let res = new Emp(3, "sunil", 24);
console.log(res);
