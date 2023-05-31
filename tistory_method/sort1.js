// 오름차순 & 내림차순

let arr1 = [4, 6, 10, 1, 3];
let arr2 = [4, 6, 10, 1, 3];

arr1.sort((a,b) => a-b) // 오름차순 정렬
console.log(arr1);

arr2.sort((a,b) => b-a) // 내림차순 정렬
console.log(arr2);