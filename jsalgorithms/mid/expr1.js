/**
 * 배열 arr의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하기
 * ex. arr = [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3일 때,
 * arr의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 * 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 * 2에서 나온 배열의 3번째 숫자는 5입니다.
 * 배열 arr, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
 * commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 
 * 나온 결과를 배열에 담아 return 하도록 sol 함수 생성
 */
// idx 0~3-1 -> 0 부터 3
let arr = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

function sol(arr, commands){
    let result = [];
    commands.map(command => {
        const [i, j, k] = command;
        result.push(arr.slice(i-1, j).sort((a,b) => a-b)[k-1] );
    });
    return result;
}

console.log(sol(arr, commands));

/*
let i, j, k;
function sol(arr, i, j, k){
    let result = [];
    result = arr.slice(i-1, j);
    
    for(let x=0; x<result.length; x++){
        for (let y=x; y<result.length; y++){
            if(result[y] >result[y+1]){
                let temp = result[y];
                result[y] = result[y+1];
                result[y+1] = temp;
            }
        }
    }
    let num = result[k-1];

    commands = [[num],[result]];

    return commands;
      
}
console.log(sol(arr, 2, 5, 3))
*/
