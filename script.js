//Write a function that return second largest number in an array
// Corner cases 
// what if array is empty
// what if array has duplictes
// what if array has negative numbers



// let arr = [2, 6, 9, 10, 40, 30, 22, 28, 17, 18];


// let arr = [2, 1, 9, 10];
let arr = [2, 2, 2];

let largest = -Infinity;
let secondLargest;

function searchLargest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two numbers";
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }

    }
    
    if (secondLargest == -Infinity){
        return "No second largest found";
    }
    return secondLargest;
}

let result = searchLargest(arr)
console.log(result);
// console.log("Largest value", largest);
// console.log("Second Largest value", secondLargest);
