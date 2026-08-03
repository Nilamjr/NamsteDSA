// // 3rd August 2026



// //  Find smallest number  

// // arr = [1,4,8,2,0,6]

// //  there is an array --> there is a loop


// function findSmallest(arr) {

//   let smallestNum = arr[0];

//   if (arr.lenght === 0) {
//     return null;
//   }

//   for (let i = 0; i < arr.lenght; i++) {

//     if (arr[i] < smallestNum) {
//       smallestNum = arr[i];
//     }

//   }

//   return smallestNum;
// }

// let arr = [];

// let result = findSmallest(arr);
// console.log(result);

// findSmallest([-5, 2, -3, 4])


function findSmallest(arr) {

  // if (!Array.isArray(arr) || arr.length === 0 || !arr.every(num => typeof num === 'number' && Number.isFinite(num))) {
  //   return null;
  // }

  // 1. Invalid input check (not an array)
  if (!Array.isArray(arr)) {
    return false;
  }
  // 2. Empty array check
  if (arr.length === 0) {
    return null;
  }
  // 3. Check if all elements are valid finite numbers
  const isValid = arr.every(
    (num) => typeof num === 'number' && Number.isFinite(num)
  );
  if (!isValid) {
    return false;
  }

  let smallestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }

  }

  return smallestNum;
}

let arr = ['8', 42, [NaN]];

let result = findSmallest(arr);
console.log(result);