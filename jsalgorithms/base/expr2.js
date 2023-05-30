/** 
 * 출처 : 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) - 김태원 인프런
 * 2. 삼각형 판별하기
 * */

function sol(a, b, c){
    let result, max;

    const sum = a + b + c;

    if(a>b) max = a;
    else max = b;
    if(c>max) max = c;
    
    if(sum - max >= max) result = "YES";
    else result = "NO";

    return result;
}

console.log(sol(3, 4, 5));