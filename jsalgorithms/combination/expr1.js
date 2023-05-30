/**
 * 
 * 
 */


/*
const arr = [3, 5, 6, 7]

arr.forEach(element => {
    console.log(element); 
});
*/

// Input: [1, 2, 3, 4]

const arr = [1, 2, 3, 4];

const getCombination = function(arr, num){
    const result = [];
    if(num === 1) return arr.map((element) => [element]);
    arr.forEach((fix, idx, org) => {
        const rest = org.slice(idx + 1);
        //console.log();
        const combination = getCombination(rest, num-1);

        const attached = combination.map((el) => [fixed, ...el]);

        result.push(...attached);
    });

    return result;
}