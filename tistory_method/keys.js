const arr = ['a', 'b', 'c'];
const iterator = arr.keys();

for (const key of iterator) {
  console.log(key, ': ',arr[key]);
}
