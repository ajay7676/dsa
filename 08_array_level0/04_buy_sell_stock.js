 let prices=[7,1,5,3,6,4]
 function buySellAndStock(prices){
     let minPrice = prices[0];
    let maxProfit = 0;

     for(let  i = 1 ; i < prices.length; i++){
        if(prices[i] - minPrice > maxProfit ){
            maxProfit = prices[i] - minPrice;
        }
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }
    }

    return maxProfit;

 }

 console.log(buySellAndStock(prices))