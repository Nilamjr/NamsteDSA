
let arr = [25, 6, 8, 4, 5];

let findSmall = function (arr) {

    let smallest = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

let result = findSmall(arr);
console.log(result);