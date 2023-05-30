// 요소 삭제, 추가 및 교체
// You can use toSpliced() to delete, add, and 
// replace elements in an array and create a new array more efficiently than using slice() and concat().
const months = ["Jan", "Mar", "Apr", "May"];
console.log(months);

// index 1에 요소 추가
// const months2 = months.toSpliced(1, 0, "Feb");
//console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// index 2부터 2개 삭제
//const months3 = months2.toSpliced(2, 2);
//console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
// 
//const months4 = months3.toSpliced(1, 1, "Seb", "Mar");
//console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months);