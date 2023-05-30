const [a1, b1, ...lastA] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const arr = [a1, b1, ...lastA];

console.log([a1, b1, ...lastA]);

console.log(arr);

console.log(...lastA);

console.log(arr[lastA]);    // error