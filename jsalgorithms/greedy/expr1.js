/** 
 * 포미가 카운터를 보는 중에 잔고에 돈이 부족해서 동전 개수를 최소화하여 거스름돈 M를 만들어야 한다.
 * 이때, 필요한 동전 개수의 최솟값을 함수로 작성하시오.
 * 동전: (1원, 5원, 10원, 50원, 100원, 500원)
 * 오름차순 정렬
*/

function counter(m) {
    let count = 0;
    const arr = [500, 100, 50, 10, 5, 1];
    for(let item of arr){
        count = count + Math.floor(m/item);
        m = m - item * Math.floor
    }
    return count;
}
