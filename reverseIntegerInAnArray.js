// Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.


let arr = ["N","I","L","A","M"];
         // 0   1   2   3   4    
// let n = 5 
//    swap (0, 4)
//    swap (1, 3)


let arr1 = ["N","I","L","A","M","R","A","K","H","O","L","I","Y","A"];
         // 0   1   2   3   4   5   6   7   8   9   10  11  12  13

// n = 14
//    swap (0, 13)  (i, n-i-1)
//    swap (1, 12)  
//    swap (2, 11)
//    swap (3, 10)
//    swap (4, 9)
//    swap (5, 8)
//    swap (6, 7)


let reverseTheArrChar = function(arr){

    let len = arr.length;
    let halfLen = Math.floor(len/2);

    for(let i = 0; i < halfLen; i++){
        let temp = arr[i];
        arr[i] = arr[len-i-1];
        arr[len-i-1] = temp;
    }

    return arr;
}

 let res = reverseTheArrChar(arr1);
 console.log("Modified array",res);