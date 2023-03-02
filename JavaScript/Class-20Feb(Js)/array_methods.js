let arr = [3, 4, 5, 6, 7, 5];

// add elements at last
// arr.push(2, 3, 4);

// remove from end
// arr.pop();

// add at start
// arr.unshift(23, 34, 54);

// remove from end
// arr.shift();

// adding 2 arrays
// let arr2 = [2, 6, 7, 4];
// let arr3 = arr.concat(arr2);

// join (converting into string)
// let arr3 = arr.join("&");

// reverse
// let arr3 = arr.reverse();

// checking index
// let arr3 = arr.indexOf(5);

// slice method (from beginning to last index -1)
// let arr3 = arr.slice(2, 5);

// splice method (if you want to add elements in the middle of array then use this method)
//  arr.splice(2, 0, 2); // without deleting
arr.splice(2, 2, 23, 23, 23); // with deleting

console.log(arr);
