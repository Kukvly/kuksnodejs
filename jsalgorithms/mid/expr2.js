/**
 * 2016년 a월 b일의 요일 구하기
 * 요일: FRI, SAT, SUN, MON, TUE, WED, THU
 * (2016년은 윤년)
 */

function sol(a, b){
    // 요일 초기화
    const ww = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const yy = '2016';
    let mm = a;
    let dd = b;

    let day = ww[new Date(yy+'-'+mm+'-'+dd).getDay()];

    return day;
}

console.log(sol(1,3));

console.log(sol(2,29));

console.log(sol(3,1));

