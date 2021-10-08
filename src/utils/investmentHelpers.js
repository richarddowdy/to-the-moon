/* 
function that takes principal investment, timeline, expected interest returned and returns an array of objects

calculateCompoundedInterestReturns($1000, 3years, 1 contribution/month, $50/contribution, 10%) = [
    { "year": "Year 0", "principal": 1000, "totalContribution": 0, "totalInterestEarned": 0, "yearEndTotal": 1000 },
    { "year": "Year 1", "principal": 1000, "totalContribution": 600, "totalInterestEarned": 100, "interestEarned": 100, "yearEndTotal": 1700 },
    { "year": "Year 2", "principal": 1000, "totalContribution": 1200, "totalInterestEarned": 270, "interestEarned": 170, "yearEndTotal": 2470 },
    { "year": "Year 3", "principal": 1000, "totalContribution": 1800, "totalInterestEarned": 517, "interestEarned": 247, "yearEndTotal": 3317 }
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
  // console.log("Investment Helper result:", result);
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
