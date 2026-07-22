// pattern.js


//      *
//    * *
//  * * *
//* * * *

let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n-i; i++) {
        row = row + i;
        console.log(i);
    }
    // console.log(i);
}




// i   j    n - i 
 
// 0   0    5 - 0 = 5
// 



// 0



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