/**
* Extract the decimal value from the price string, removed $ sign and floating points
* @param prices an array of strings (e.g. [$50.00, $45.00])
* @returns total sum 
*/
const getTotalSum = (prices: string[]): number => {
  const arrToNum = prices.map((str) => {
    const noFloat = str.split(",")[0];
    const noDollar = noFloat.replace("$", "");
    return parseInt(noDollar, 10);
  });
  const sum = arrToNum.reduce((a, b) => {
    return a + b;
  });
  return sum;
};

/**
* Gets random integer from 1 to max
* @param max number of items listed
* @returns random number from the range
*/
const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * (max - 1) + 1);
};
export { getTotalSum, getRandomInt };
