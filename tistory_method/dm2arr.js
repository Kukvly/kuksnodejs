// JS 2차원 배열
/**
 * n x m array 생성
 * 배열 내 모든 값을 0으로 초기화
 * n: 5
 * m: 4
 */

const arr1 = [];
for(let i=0; i<4; i++){
    const arr2 = [];
    for(let j=0; j<5; j++){
        arr2.push(0);
    }
    arr1.push(arr2);
}

console.log(arr1);