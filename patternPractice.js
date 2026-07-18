// pattern.js


//      *
//    * *
//  * * *
//* * * *

let row = "";

let n = 5;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; i++) {
        row = row + "*";
    }
    console.log(row);
}
