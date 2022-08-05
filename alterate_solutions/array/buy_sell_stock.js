

const maxProfit = function (prices) {

  let buyPrice = Math.min(...prices);
  let buyDay = prices.indexOf(buyPrice);

  // Store values to look for best buy day
  let buyArray = [];

  // Store values to look for best sell day
  let sellArray = [];

  // In case best buy day is last index
  if (prices[prices.length - 1] === buyPrice) {
    // Find second best buy day
    for (let i = 0; i < prices.length - 1; i++) {
      buyArray.push(prices[i]);
      buyPrice = Math.min(...buyArray);
      buyDay = prices.indexOf(buyPrice);
    }

    // Store all values after buy day in sellArray to check for best sell day
    for (let i = buyDay + 1; i < prices.length; i++) {
      sellArray.push(prices[i]);
    }

    let sellPrice = Math.max(...sellArray);
    let profit = sellPrice - buyPrice;

    if (profit <= 0) {
      return 0;
    }
    return profit;
  }

  if (prices[prices.length - 1] !== buyPrice) {
    // Add all values after buy day to sellArray to check for best sell day
    for (let i = buyDay + 1; i < prices.length; i++) {
      sellArray.push(prices[i]);
    }

    let sellPrice = Math.max(...sellArray);
    let profit = sellPrice - buyPrice;

    if (profit <= 0) {
      return 0;
    }
    return profit;
  }


}

// Input: prices = [7,1,5,3,6,4]
// Output: 5

console.log(maxProfit([3,2,6,5,0,3]))

