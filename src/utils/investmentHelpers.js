/*

*/

/* 
function that takes principal investment, timeline, expected interest returned and returns an array of objects

calculateCompoundedInterestReturns($1000, 3years, 10%) = [  
  { year: 'Year 0', start:number, interestEarned:number, start+interestEarned:number}, $1000,   0, 1000  0th year (now)
  { year: 'Year 1', start:number, interestEarned:number, start+interestEarned:number}, $1000, 100, 1100  1st year
  { year: 'Year 2', start:number, interestEarned:number, start+interestEarned:number}, $1100, 110, 1210  2nd year
  { year: 'Year 3', start:number, interestEarned:number, start+interestEarned:number}, $1210, 121, 1331  3rd year
]

*/

export const calculateCompoundedInterestReturns = (
  startingAmount,
  yearsHolding,
  annualReturnPercentage,
  contribution,
  frequency
) => {
  let result = [];
  let yearStartAmount = startingAmount;
  let yearEndTotal = startingAmount;
  let totalContribution = 0;
  let interestEarned;
  let totalInterestEarned = 0;
  let annualContribution = Number(contribution) * frequency;
  let annualTotalAfterInterest;

  // console.log(startingAmount, yearsHolding, annualReturnPercentage);

  for (let i = 0; i <= yearsHolding; i++) {
    result.push({
      year: `Year ${i}`,
      principal: startingAmount,
      totalContribution,
      totalInterestEarned,
      interestEarned,
      yearEndTotal,
    });
    if (i === yearsHolding) break;
    yearStartAmount = yearEndTotal;
    totalContribution += annualContribution; // running total
    annualTotalAfterInterest = calculateAnnualSimpleInterest(yearStartAmount, annualReturnPercentage);
    yearEndTotal = +(annualTotalAfterInterest + annualContribution).toFixed(2);
    interestEarned = +(annualTotalAfterInterest - yearStartAmount).toFixed(2);
    totalInterestEarned = +(totalInterestEarned + interestEarned).toFixed(2);
  }
  console.log(result);
  return result;
};

// p = 1000 , c = 100@2xyearlycompounding , interest = 10% anually
// {year: "Year 0", principal: 1000, contribution: 0, interestEarned: 0}
// {year: "Year 1", principal: 1000, contribution: 200, interestEarned: 120, yearEndTotal: 1320}
// {year: "Year 2", principal: 1000, contribution: 400, interestEarned: 152, yearEndTotal: 1672}

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
