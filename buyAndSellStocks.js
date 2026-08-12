
// let arr = [7,6,4,3,1];
// for(let i = 0; i < arr.length; i++){

//     for(let j = i+1; j<arr.length; j++){
//         console.log("i= ", arr[i] + "j= ", arr[j]); 
//     }

// }

let arr = [11,3,7,3,5,7,6,1,4];
let buyAndSellStock = function(arr){

    let min = arr[0];
    let maxProfit = 0;   
    for(let i = 0; i < arr.length; i++){
            
        if(arr[i]-min > maxProfit){
            maxProfit = arr[i]-min;
        }
        
        if(arr[i] < min){
            min = arr[i];
        }

    }
    return maxProfit;
  }

  buyAndSellStock();













