// Problem Statement:
// You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit 
// by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// let arr = [7,6,4,3,1];
// for(let i = 0; i < arr.length; i++){

//     for(let j = i+1; j<arr.length; j++){
//         console.log("i= ", arr[i] + "j= ", arr[j]); 
//     }
// }

let prices = [11,3,7,3,5,7,6,1,4];
let buyAndSellStock = function(prices){

    let min = prices[0];
    let maxProfit = 0;   
    for(let i = 1; i < prices.length; i++){
            
        if(prices[i]-min > maxProfit){
            maxProfit = prices[i]-min;
        }
        if(prices[i] < min){
            min = prices[i];
        }
    }
    return maxProfit;
  }

  let result = buyAndSellStock(prices);
  console.log(result);













