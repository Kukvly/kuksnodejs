/**
 * 출처 : 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) - 김태원 인프런
 * 6. 배열 내의 숫자들 중 홀수값들의 합과 홀수 중 가장 작은 값 구하기
 */

const arr = [3,5,7,9,10,13,14];

function sol(arr){
    let result = [];
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let k of arr){
        if(k % 2 === 1){
            sum += k;
            if(k < min) min = k;
        }
    }
    result.push(sum);
    result.push(min);
    return result;
}


console.log(sol(arr));

