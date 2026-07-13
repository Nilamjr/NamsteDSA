let CheckPalindrome = function (x){

    if(x < 0){
        return false;
    }

    let xCopy = x;
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = (10*rev) + rem;
        x = Math.floor(x / 10);
    }

    if (xCopy === rev) {
        return true;
    } else {
        return false;
    }

    // return rev === xCopy;
}

let res = CheckPalindrome(1221);

console.log(res);