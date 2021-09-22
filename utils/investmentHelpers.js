/*

*/

/* 
function that takes principal investment, timeline, expected interest returned and returns an array of objects

calculateCompoundedInterestReturns($1000, 3years, 10%) = [  
  {start:number, interestEarned:number, start+interestEarned:number}, $1000,   0, 1000  0th year (now)
  {start:number, interestEarned:number, start+interestEarned:number}, $1000, 100, 1100  1st year
  {start:number, interestEarned:number, start+interestEarned:number}, $1100, 110, 1210  2nd year
  {start:number, interestEarned:number, start+interestEarned:number}, $1210, 121, 1331  3rd year
]

*/

export const calculateCompoundedInterestReturns = (startingAmount, yearsHolding, annualReturnPercentage) => {
  let result = [];
  let yearStartAmount = startingAmount;
  let yearEndTotal = startingAmount;
  let interestEarned;

  for (let i = 0; i <= yearsHolding; i++) {
    result.push({ start: yearStartAmount, interestEarned, yearEndTotal });
    if (i === yearsHolding) break;
    yearStartAmount = yearEndTotal;
    yearEndTotal = calculateAnnualSimpleInterest(yearStartAmount, annualReturnPercentage);
    interestEarned = +(yearEndTotal - yearStartAmount).toFixed(2);
  }
  return result;
};

/*
  Calculates annual simple interest - takes pricipal and percent interest

  calculateAnnualSimpleInterest($100, 10%) = 110.00
  calculateAnnualSimpleInterest(1000, 10) = 1100.00
  calculateAnnualSimpleInterest(1500, 4.5) = 1567.50
*/
export const calculateAnnualSimpleInterest = (initial, interestPercentage) => {
  const principalCents = initial / 100;
  return +(principalCents * (1 + interestPercentage / 100) * 100).toFixed(2);
};
