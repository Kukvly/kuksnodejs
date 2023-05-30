const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr.slice(0));

console.log(arr.slice(1));

console.log(arr.slice(2));

console.log(arr.slice(2, 4));

console.log(arr.slice(1, 6));

console.log(arr.slice(1, 7));

console.log(arr.slice(-2)); // f g

console.log(arr.slice(-3)); // e f g

console.log(arr.slice(2, -1));  // c d e f

console.log(arr.slice()); // a b c d e f g
