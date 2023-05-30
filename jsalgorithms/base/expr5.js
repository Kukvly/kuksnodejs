/** 
 * 출처 : 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) - 김태원 인프런
 * 5. 최솟값 구하기
 * */

function sol(arr){
    let result;
    let min = arr[0];

    for(i=1; i<arr.length; i++){
        if (arr[i] < min) min = arr[i];
    }
    result = min;

    return result;
}

console.log(sol([3, 5, 6, 7, 8, 1, 10]));