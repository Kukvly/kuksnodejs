/**
 *  Kuks 팀에는 n명의 팀원이 있다. 부서 이동으로 인해 박스를 이용하여 짐을 옮기던 중 박스에는 무게 제한이 있고,
 *  최대 2개를 넣을 수 있다고 한다. 짐의 무게는 120kg, 80kg, 70kg, 60kg 등 다양하다. 박스를 최대한 적게
 *  사용하여 짐을 옮길 때, 박스 개수의 최소값을 리턴할 수 있는 함수를 작성하시오.
 * 
 */

/*
shift 메서드
0번째 위치의 요소를 제거하고 연이은 나머지 값들의 위치를 한 칸씩 앞으로 당김
length=0 이면 undefined를 리턴한다.
*/

function box (obj, limit){
    let count = 0;
    let sortedObj = obj.sort((a, b) => a - b)

    while (sortedObj.length !==0 ){
        if(sortedObj[0] + sortedObj[sortedObj.length - 1] < limit){
        count++
        sortedObj.shift();
        sortedObj.pop();
        } else{
            count++
            sortedObj.pop();
        }
    }

    return count;
}