// var maxProfit = function (prices) {
//     let profit = 0;
//     let minStockPurchasePrice = prices[0] || 0;
//     for (let i = 1; i < prices.length; i++) {

//         if (prices[i] < minStockPurchasePrice) {
//             minStockPurchasePrice = prices[i];
//         }
//         profit = Math.max(profit, prices[i]- minStockPurchasePrice);

//     }
//     return profit;
// };


var maxProfit = function (prices) {
    let profit = 0;
    let min = prices[0] || 0;
    for (let i = 1; i < prices.length; i++) {

        if (prices[i] < min) min = prices[i];

        if (profit < prices[i] - min) profit = prices[i] - min
    }
    return profit;
};

console.log(maxprofit([7, 1, 5, 3, 6, 4]))
console.log(maxprofit([7, 6, 4, 3, 1]))