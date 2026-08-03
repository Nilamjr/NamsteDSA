// Largest number

// Is Input an array or not
// let checkArr = function(arr){
//     if (!Array.isArray(arr)) {
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// let arr = [1,2,4];
// let arr = 1422;
// let res = checkArr(arr);
// console.log(res);


// find Largest number in an array

let findLargest = function(arr){

    if (!Array.isArray(arr)) {
        return false;
    }

    if (arr.length === 0) {
        return null
    }
    const isValid = arr.every(
        (num) => typeof num === 'number' && Number.isFinite(num)
    );
    if (!isValid) {
        return false;
    }
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        // console.log("arr[i]",arr[i]);
        // console.log("largest",largest);

        if (arr[i] > largest) {
         largest = arr[i];
        }
    }

  return largest;
}
let arr = NaN;
// let arr = [null, () => {}, undefined, [1,'a'], NaN, Infinity, -Infinity, [NaN], [Infinity], [undefined], [null], [() => {}]];
// let arr = [];
// let arrr = -infintiy;




let largeResult = findLargest(arr);
console.log(largeResult);

// let findSecondLargest = function (x) {

//     let large = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < x.length; i++) {
//         if (x[i] > large) {
//             secondLargest = large;
//             large = x[i];
//         }
//         else if (x[i] > secondLargest) {
//             secondLargest = x[i];
//         }
//     }
//     return secondLargest;
// }

// let arrSecondLarge = [40, 50, 3, 34, 67, 24, 679, 232, 533, 644];
// let result = findSecondLargest(arrSecondLarge);
// // 
// console.log(result);
