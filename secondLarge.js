
let findSecondLargest = function (x) {

    let large = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < x.length; i++) {
        if (x[i] > large) {
            secondLargest = large;
            large = x[i];
        }
        else if (x[i] > secondLargest) {
            secondLargest = x[i];
        }
    }
    return secondLargest;
}

let arrSecondLarge = [40, 50, 3, 34, 67, 24, 679, 232, 533, 644];
let result = findSecondLargest(arrSecondLarge);
// 
console.log(result);
