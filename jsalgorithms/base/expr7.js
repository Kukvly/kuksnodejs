/**
 * 출처 : 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) - 김태원 인프런
 * 7. 배열 숫자내의 일의 자리 수와 생성할 함수의 첫번째 인자 값이 일치하게 하는 함수 생성
 */
function sol(k, arr){
    let result = 0;

    for(let x of arr) {
        if (x % 10 === k) result++;
    }

    return result;
}
arr = [25, 23, 11, 47, 53, 17, 33];
console.log(sol(7, arr));