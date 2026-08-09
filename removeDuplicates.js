// 5th August 2026

// (Move Zeroes to the end )

// [0, 1, 0, 3, 12]

let array3 = [5,2,0, 1, 0, 3, 12];

let moveZeros = function(arr){
    let x = 0;    
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] != 0){
            arr[x] = arr[i];
            arr[i] = 0;
            x = x + 1;
        }
    }
    return arr;
}

let movZero = moveZeros(array3);
// console.log(movZero);
//  x
// [0, 1, 0, 3, 12]
//     i
//     x
// [1, 0, 0, 3, 12]
//        i
//     x
// [1, 0, 0, 3, 12]
//           i
//        x
// [1, 3, 0, 0, 12]
//              i
// [1, 3, 12, 0, 0 ]



// REMOVE AN ELEMENT FROM AN ARRAY 

let val= 3
let array2 = [3,2,3,3,2,4,3,2]; 

let removeanElemt = function(arr){
    let x = 0;    
    // let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != val){
            arr[x] = arr[i];
            x = x + 1;
        }
    }
    return arr1;
}

let remEle = removeanElemt(array2);
console.log(remEle);


// DRY RUN 
// val= 3   

//  x
// [3,2,3,3,2,4,3,2]
//  0

//        x
// [3,2,3,3,2,4,3,2]
//                7
// 2,2,3,3,2,4,3,2

// 2,2,3,3,2,4,3,2

// 2,2,4,3,2,4,3,2

// 2,2,4,2,2,4,3,2


//          x
// array = [3,2,3,3,2];
//          i
         
//          x
// array = [3,2,3,3,2];
//            i!=val        
//         array[x] = array[i]
//         3 = 2 
//            x    
// array = [2,2,3,3,2];
//              i
//            x  
// array = [2,2,3,3,2]
//                i
//            x  
// array = [2,2,3,3,2]
//                  i != val
//              x
// array = [2,2,3,3,2]                
                 




// 4th Aug 

// one pointer for iterate throught array to find any element in an array
// second pointer or element where it should be placed

// let array1 = [1,2,2,2,2,3,4,4,4,4,5,6,7];
// array in non-decreasing
let array1 = [1,2,2,3,3,4,5,6,6,6,7,8,8,8,8,9,10];
let removeDuplicate = function (arr) {
    let x = 0;
    // let row = "";
    for (let i = 0; i < arr.length; i++){
        // console.log("i" , arr[i]);
        // console.log("x value = " + arr[x] + " i value = " + arr[i]);
        // console.log("row", row); 
        
        if (arr[i] > arr[x]) {
            x = x + 1;
            arr[x] = arr[i];
        }
    }
    // return arr;
    return x + 1;
}

let removeDupli = removeDuplicate(array1);
// console.log("Duplicate removed", removeDupli);





// 30th Aug 2026

// removeDuplicate.js

// let removeDuplicates = function(nums) {
//     let x = 0;
//     for (let i = 0; i < nums.length; i++) {
        
//         if (nums[i] > nums[x]) {
//             x = x + 1;
//             nums[x] = nums[i];
//         }
//     }
//     return x + 1;
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; 
// let result = removeDuplicates(nums);

// console.log(result);

// nums = [0]
// nums = [0,1]
// nums = [0,1,2]
// nums = [0,1,2,3]
// nums = [0,1,2,3,4]



// x   i   nums[i]   nums[x]    nums[i] > nums[x]    x=x+1   num[x]

// 0   0   0         0          0   >  0      
// 0   1   0         0          0  >  0 
// 0   2   1         0          1  >  0              1        1
// 1   3   1         1          1  > 1  
// 1   4   1         1          1 > 1 
// 1   5   2         1          2 > 1                1+1=2    2 
// 2   6   2         2          2 > 2                
// 2   7   3         2          3 > 2                2+1=3    3
// 3   8   3         3          3 > 3
// 3   9   4         3          4 > 3                3+1=4    4







// 
//
// let arr = [3,2,4,2,4,2,4,4,3,2,1,5,2];
// let val = 4;
// let abc = function(arr){
//     let x = 0;
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] != val) {
            
//             arr[x] = arr[i];
//             console.log("before",arr[x]);
//             x = x + 1;
//             console.log("after",arr[x]);
//         }
//     }
//     return x;
// }

// let result = abc(arr);
// console.log(result);
