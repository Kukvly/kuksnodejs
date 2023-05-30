/** 
 * 출처 : 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) - 김태원 인프런
 * 1. 세 수 중 최솟값 구하기
 * */



function sol(a, b, c){
    let result;

    if (a<b) result = a;
    else result = b;
    if(c < result) result = c;
    return result;
}

console.log(sol(10, 5, 3));