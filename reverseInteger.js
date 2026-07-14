let reverseInteger = function(x){
    
    let xCopy = x;

    x = Math.abs(x);

    let rev = 0;

    while(x > 0){
        
        let lastDig = x % 10;

        rev = (rev * 10) + lastDig;

        x = Math.floor(x/10);

    }
 
    // if (xcopy < 0){
    //     return -rev;
    // }else{
    //     return rev;
    // }

    let limit = Math.pow(2, 31);

    if (rev < -limit || rev > limit)  return 0;

    return xcopy < 0 ? -rev : rev;

}

// Signed 32 bit intreger range is from -2147483648 to 2147483647. So we need to check if the reversed integer is within this range. 
// If it exceeds this range, we should return 0.
// rev <  -2147483648
// rev > 2147483647

let num = 57897;
// let result = reverseInteger(num);
// console.log(result);


// find second largest number in an array

let arrFindSecondLarge = [90,4,2,65,75,23,6,8,3];

