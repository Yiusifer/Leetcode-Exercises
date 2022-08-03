const maxProfit = function(prices) {
  let profit1 = 0;

  for (let i = 0; i < prices.length - 1 ; i++) {
    for (let y = i + 1; y < prices.length; y++) {
      let profit2 = prices[y] - prices[i];

      if (profit2 > profit1) {
        profit1 = profit2;
      }
    }
  }

  return profit1

};

console.log(maxProfit([7,1,5,3,6,4]))