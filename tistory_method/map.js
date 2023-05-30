// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 
// 호출한 결과를 모아 새로운 배열을 반환합니다.

console.log();

const arr = [2, 4, 8, 16, 32];
const arr1 = [16, 25, 49]

console.log(arr);
console.log(arr1);
console.log();

const kuksMap = arr.map(i => i * 3);
const kuksMap1 = arr1.map(Math.sqrt);

console.log(kuksMap);
console.log(kuksMap1);
console.log();

const iterator = kuksMap.keys();

for (const key of iterator) {
  console.log(key, ': ',kuksMap[key]);
}

console.log();

const iterator1 = kuksMap1.keys();
for (const key of iterator1) {
  console.log(key, ': ',kuksMap1[key]);
}
console.log();

console.log(iterator);
console.log(iterator1);
console.log();

