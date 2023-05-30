/**
 * 출처 : 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) - 김태원 인프런
 * 8. 9개의 숫자들 중 7개의 합이 100이어야 할 때,
 * 100이 되지 못하는 두 숫자를 제외한 배열을 return하기
 */


const arr = [14, 15, 16, 4, 6, 85, 20, 25, 56];

function sol(arr){
    let result = arr;
    let sum = arr.reduce((a, b) => a + b, 0);
    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++) {
            if(sum - (arr[i] + arr[j]) === 100) {
                // 두번째 인자값으로 삭제하고 싶은 item의 갯수를 받는다.
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    }
    return result;
}

console.log(sol(arr));

