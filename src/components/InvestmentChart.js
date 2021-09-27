import React, { useState, useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar } from "recharts";
import { calculateCompoundedInterestReturns } from "../utils/investmentHelpers";

export default function InvestmentChart({ investmentData }) {
  console.log("From chart", investmentData);
  const [chartData, setChartData] = useState(null);
  const { principal, duration, contribution, expectedInterest, frequency } = investmentData;
  // const data = calculateCompoundedInterestReturns(principal, duration, expectedInterest);

  useEffect(() => {
    setChartData(calculateCompoundedInterestReturns(principal, duration, expectedInterest, contribution, frequency));
  }, [investmentData]);

  return (
    <>
      {chartData && (
        <>
          <p>{`Your original investment of $${principal} has turned into $${
            chartData[chartData.length - 1].yearEndTotal
          }`}</p>
          <BarChart width={650} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" xAxisId={0} />
            <XAxis dataKey="year" xAxisId={1} hide />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="yearEndTotal" name="Total" xAxisId={1} fill="black" fillOpacity={0} />
            <Bar dataKey="principal" name="Principal" stackId="a" fill="#8884d8" />
            <Bar dataKey="totalContribution" name="Total Contribution" stackId="a" fill="#ff0000" />
            <Bar dataKey="totalInterestEarned" name="Total Interest Earned" stackId="a" fill="#82ca9d" />
          </BarChart>
        </>
      )}
    </>
  );
}

// const data = [
//   {
//     name: "Page A",
//     uv: 0,
//     pv: 4000,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//   },
// ];
