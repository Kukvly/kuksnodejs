/** 
 * 출처 : 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) - 김태원 인프런
 * 4. 1~N까지 합 출력하기
 * */

function sol (n){
    let sum = 0;

    for(i=1; i<=n; i++){
        sum = sum + i;
    }

    return sum;
}

console.log(sol(10));