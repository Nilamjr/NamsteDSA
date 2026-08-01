
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
let arr = [3,2,4,2,4,2,4,4,3,2,1,5,2];
let val = 4;
let abc = function(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] != val) {
            
            arr[x] = arr[i];
            console.log("before",arr[x]);
            x = x + 1;
            console.log("after",arr[x]);
        }
    }
    return x;
}

let result = abc(arr);
console.log(result);
