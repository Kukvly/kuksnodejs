// values() 메서드는 배열에서 각 인덱스에 대한 값을 순회하는
// array iterator 객체를 반환합니다.

const arr = ['a', 'b', 'c'];
const iterator = arr.values();

console.log(iterator);

for (const value of iterator) {
  console.log(value);
  console.log(iterator);
}