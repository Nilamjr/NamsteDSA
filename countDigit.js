// Javascript Math methods
// Math.abs(n);
// Math.round(4.6);  
// Math.ceil(4.1);   
// Math.floor(4.9);  
// Math.trunc(4.9); 



// Write a function that returns the count of digits in a number

function countDigits(n) {
    
    // What if number is 0
    if (n == 0) return 1; 

    // what if number is negative
        
    n = Math.abs(n);

    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);   
        count++;
    }
    return count;

}

let num = 0;
let result = countDigits(num);

// console.log(result);


