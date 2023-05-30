/** 
 * 출처 : 자바스크립트 알고리즘 문제풀이(코딩테스트 대비) - 김태원 인프런
 * 3. 연필 다스 갯수 구하기
 * */

function sol(n){
    let result;

    result = Math.ceil(n/12);
    return result;
}

console.log(sol(15));