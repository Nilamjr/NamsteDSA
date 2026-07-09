// Star patterns

// for (let i = 0; i < 2; i++) {
//     let row = " "
//     for (let j = 0; j < 4; j++) {
//         row = row + "*";
//     }
//     console.log(row);
// }


// for (let i = 1; i <= 4; i++) {
//     console.log("* ".repeat(i));
// }

for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + "*";
    }
    // console.log(row);
}

let n = 4;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1);
    }
    // console.log(row);
}

// let k = 5;
// for (let i = 0; i < k; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//         row = row + (i + 1);
//     }
//     // console.log(row);
// }


let p = 7;
for (let i = 0; i < p; i++) {
    let row = "";
    for (let j = 0; j < p - i; j++) {
        row = row + (j + 1);
    }
    // console.log(row);
}

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5 - i; j++) {
        row = row + "*";
    }
    // console.log(row);
}

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5 - (i + 1); j++) {
        row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
        row = row + "*";
    }
    console.log(row);
}



// 1
// 1 0
// 1 0 1
// 1 0 1 0


// for (let i = 0; i < n; i++){

//     let row = "";
//     let switchVar = 1;

//     for(let j = 0; j < i + 1; j++){

//         row = row + switchVar;

//         if (switchVar == 1) {
//             switchVar = 0;
//         } else {
//             switchVar = 1;
//         }
//     }

//     // console.log(row);

// }


// New Pattern

// 1

// 0 1

// 0 1 0

// 1 0 1 0

// 1 0 1 0 1

let n = 10;

let switchVar = 1;
for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + switchVar;
        if (switchVar == 1) {
            switchVar = 0;
        } else {
            switchVar = 1;
        }
    }
    console.log(row);
}
