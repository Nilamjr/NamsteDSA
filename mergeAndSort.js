// Problem Statement:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, 
// where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Examples:

// Example 1:
// Input:

// nums1 = [1,2,3,0,0,0], m = 3 nums2 = [2,5,6], n = 3

// Output: [1,2,2,3,5,6]




// Program 
// let nums1 = [1,2,3,0,0,0];

//               p1
// let numsCopy=[1, 2, 3, 0, 0, 0];

//              p2
// let nums2 = [2, 5, 6];

// let mergeSort = function (){}

// for(let i = 0; i < nums1.length; i++){
 
// }

// let a = [1,2,9];
// let b = [5,6,8];

// let c =[];
// let k = 0;
// for(let i = 0; i < a.length; i++){
//     for(let j = 0; j < b.length; j++){
//         if(a[i]<b[j] ){
//             c[k] = a[i];
//             k++;
//         }
//         else{
//             c[k] = b[j];
//             k++;
//         }
//     }
// }
// console.log("array C",c);

// // dry run 
// let arr1 = [3, 5, 7, 0, 0, 0];
//                          p1  
// let arr1Copy = [3, 5, 7, 0, 0, 0];
//                p2
// let arr2 = [5, 8, 10];
// final array - [3, 5, 5, 7 ]

// for(let i = 0; i < arr1.length; i++){
   
//     if(arr1Copy[p1] < arr2[p2]){
//         arr1[i] = arr1Copy[p1];
//         p1++;
//     }
//     else{
//         arr1[i] = arr2[p2];
//         p2++;
//     }
// }

// console.log("My arr1 is here",arr1);


let nums1 = [1,2,3];
let nums2 = [2,5,7];

function merge(nums1, m, nums2, n){
    
    let nums1Copy = nums1.slice(0,m);    
    let p1 = 0;
    let p2 = 0;

    for(let i = 0; i < m+n; i++){
        if(( p2 >= n || p1 < m && nums1Copy[p1] < nums2[p2])){
            nums1[i] = nums1Copy[p1];
            p1++;
        }
        else{
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;

}

let resu = merge(nums1, 3, nums2, 3);
console.log(resu);
