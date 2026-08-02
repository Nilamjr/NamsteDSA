// pattern.js


// 2nd August
//     1
//    1 2
//   1 2 3
//  1 2 3 4  
let n = 4
for(let i=0; i<n; i++){
    let row = "";
    for(let k=0; k < n-i-1; k++){
        row = row + " ";
    }
    for(let j = 0; j<i+1; j++){
        row = row + (j+1) + " ";
    }
    console.log(row);
}

// 31st July / 1st August 2026

// pattern.js


//      *
//     * *
//    * * *
//   * * * *

// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n-i-1; j++) {
//         row = row + "_";
//     }

//     for(let k = 0; k < i+1; k++){
//         row = row + "* "
//     }

//     console.log(row);
// }

// DRY RUN
// n  i  space   star  
// 4  0  3       1
//    1  2       2     
//    2  1       3
//    3  0       4

// 29/07/2026

// *****
// ****
// ***
// **
// *
// let n = 5;

// for (let i = 0; i < n; i++) {
// let row = "";
//     for (let j = 0; j < n - i; j++) {
//         row = row + "*";
//         // console.log("its an I", i);
//         // console.log("its a J", j);
//     }
//         console.log(row);
// }

// DRY RUN

// i   j  n-i    row     i
// 0   0  5-0=5  *       
//     0  5-1=4  **     1
//     0  5-2=3  ***   2
//    0  5-3=3   ****   3
//     0  5-4=1  *****  4


// 28/07/2026
// let row = "";

// let n = 5;
// In nested loop we incresed i not j and checked output
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i; i++) {
//         row = row + "*";
//     }
//     console.log(row);
// }

// i   j  n-i    row
// 0   0  5-0=5  *
//     1  < 5    * *
//     2  < 5    * * *
//     3  < 5    * * * *
//     4  < 5    * * * * *
// 1


// *****
// ****
// ***
// **
// *

// let n = 5;

// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j < n-i; j++){
//         row = row + "*";
//     }
//     console.log(row);
// }


// i j star
// 0   5      n
// 1   4      n-1
// 2   3      n-2
// 3   2      n-3
// 4   1      n-4  


// PATTERN 
//      1
//     12
//    123
//   1234
//  12345
// 123456

// let n = 6;
// for(let i=0; i<n; i++){
//   let row = "";
//   for(let j=0; j<n-i-1; j++){ 
//     row = row + " " ;
//   }
//   for(let k=0; k<i+1; k++){
//     row = row + (k+1);
//   }
//   console.log(row);
// }

// n=6
// i space digit 
// 0 5     1
// 1 4     2

// *
// **
// ***
// ****

// n = 4;

// for(let i=0; i<n; i++){
// let row = "";
//  for(let j=0;j<=i;j++){
//      row = row + "*";
//     }
//     console.log(row);
// }

// i   j   row
// 0   0   *
// 1   0   *    
//     1   **
// 2   0   *
//     1   ** 
//     2   ***
// 3   0   *
//     1   **
//     2   ***
//     3   **** 

//      *
//    * *
//  * * *
//* * * *

// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for(let k = 0; k < n-i-1 ; k++) {
//         row = row + " ";
//         // console.log(row);
//     }
//     for (let j = 0; j < i+1; j++) {
//         // row = row + j;
//         row = row + "*";
//     }
//     // console.log("Its n-i+1==",  n-i+1);
//     console.log(row);
// }
// n=4
// i  space    star  k  j  n-i-1    i+1    row     
// 0  3        1     0     4-0-1=3         _
//                   1     4-0-1=3         _ _   
//                   2     4-0-1=3         _ _ _
//                      0           0+1=1  _ _ _ *

// Result                                  _ _ _ *

// 1  2        2     0     4-1-1=2         _
//                   1     4-1-1=2         _ _ 
//                      0           1+1=2  _ _ *
//                      1           1+1=2  _ _ * *

// Result                                  _ _ * *

// 2  1        3     0     4-2-1=1         _ 
//                      0           2+1=3  _ *
//                      1           2+1=3  _ * *
//                      2           2+1=3  _ * * *

// Result                                  _ * * *

// 3  0        4        0          3+1=4  *
//                      1          3+1=4  * *
//                      2          3+1=4  * * * 
//                      3          3+1=4  * * * *

// Result                                 * * * *

// **************************************
// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n-i; j++) {
//         // row = row + j;
//         row = row + "*";
//         // console.log(row);
//     }
//     // console.log(i);
// }


// DRY RUN
// if i<n ; j < n - i 

// if console.log outside the second loop

// i  j       n-i    row          if print"*"
// 0  01234   5-0=5  0 1 2 3 4    *****
// 1  0123    5-1=4  0 1 2 3      ****
// 2  012     5-2=3  0 1 2        ***
// 3  01      5-3=2  0 1          **
// 4  0       5-4=1  0            *

// cosole.log inside the second loop

// i  j   n-i        row
// 0  0   5-0 = 5    0
//    1  5-0 = 5     0 1
//    2  5-0 = 5     0 1 2
//    3  5-0 = 5     0 1 2 3
//    4  5-0 = 5     0 1 2 3 4
// 1  0  5-1 = 4     0
// 1  1  5-1 = 4     0 1
// 1  2  5-1 = 4     0 1 2
// 1  3  5-1 = 4     0 1 2 3
// 2  0  5-2 = 3     0
// 2  1  5-2 = 3     0 1
// 2  2  5-2 = 3     0 1 2
// 3  0  5-3 = 2     0
// 3  1  5-3 = 2     0 1
// 4  0  5-4 = 1     0


// i   j    n - i        row
 
// 0   0    5 - 0 = 5    0
// 1   0    5-1 = 4      0 1
// 2   0    5-2 = 3      0 1 2
// 3   0    5-3 = 2      0 1 2 3
// 4   0    5-4 = 1      0 1 2 3 4




// i  j    n-i 

// 0  0  <  5-0=5    * * * * *
//    1  <  5        
//    2  < 5
//    3  < 5
//    4  < 5

//    1  0  < 5-1 = 4
//       1  < 4
//       2 < 4
//       3 < 4 