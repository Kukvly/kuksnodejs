// arr.reduce()

const arr = [1, 2, 3, 4];
const init = 0;
const sum = arr.reduce(
    // acc: 누산기
    // cur: 현재값
    (acc, cur) => acc + cur, init
)
console.log("sum: ", sum);
