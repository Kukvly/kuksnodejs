/**
 * 약수의 합
 * 자연수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수 구하기
 * (0<n<=3000 [n: 자연수])
 */

function sol(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        if(n%i === 0) sum+=i;
    }

    return sum;
}

console.log(sol(25));