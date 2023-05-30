// splice() 함수
// splice(n, k, 'kuks');
// n: 삽입할 인덱스
// k: n을 시작으로 대체 될 인덱스의 범위

const day = ['sun', 'mon', 'tue','wed', 'thr', 'fri', 'sat'];
console.log(day);

day.splice(1, 0, 'kuks');
console.log(day);

const day1 = ['sun', 'mon', 'tue','wed', 'thr', 'fri', 'sat'];

day1.splice(1,4,'kuks');
console.log(day1);

const day2 = ['sun', 'mon', 'tue','wed', 'thr', 'fri', 'sat'];
day2.splice(6, 5, 'kuks');
console.log(day2);