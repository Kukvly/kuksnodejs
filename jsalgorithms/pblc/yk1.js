// 청약일자
// 유효일자
// 청구일자

const map = new Map();
map.set("청약일자1","20210101");
map.set("청약일자2","20200101");
map.set("청약일자3","20190101");




let 급부보장금액 = [];

//console.log(급부금상세코드);


let 특약_계약증권정보 = [];
let 특약_청구사유정보 = [];
let 특약_보험금청구룰정보 = [];




console.log(특약_계약증권정보);
for (let i = 0; i < map.length; i++) {
    특약_게약증권정보[i] = map.get("청약일자"+i);
    console.log(특약_계약증권정보[i]);
}

// for (let i=0; i < 특약_청구사유정보.length; i++){

// }

// for (let i=0; i < 특약_보험금청구룰정보.length; i++){

// }


// const readline = require("readline");
 
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on("line", (line) => {
//     // 한 줄씩 입력받은 후 실행할 코드
//     // 입력된 값은 line에 저장된다.
//     rl.close(); // 필수!! close가 없으면 입력을 무한히 받는다.
// });

// rl.on('close', () => {
//     // 입력이 끝난 후 실행할 코드
//     let 급부금상세코드 = [324, 473, 459, 460, 461, 463, 464, 465, 103, 462];
//     if(급부금상세코드[1] == rl){
//         console.log("Y");
//         //console.log(rl);
//     }else{
//         console.log("N");
//     }

//         process.exit();
// })