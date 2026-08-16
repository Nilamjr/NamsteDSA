

// let nums1 = [1,2,3,0,0,0];

//               p1
// let numsCopy=[1, 2, 3, 0, 0, 0];

//              p2
// let nums2 = [2, 5, 6];


// let mergeSort = function (){}

// for(let i = 0; i < nums1.length; i++){
 


// }



let a = [1,2,9];
let b = [5,6,8];

let c =[];
let k = 0;
for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
        if(a[i]<b[j] ){
            c[k] = a[i];
            k++;
        }
        else{
            c[k] = b[j];
            k++;
        }
    }
}
console.log("array C",c);