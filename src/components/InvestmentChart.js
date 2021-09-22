import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar } from "recharts";
import { calculateCompoundedInterestReturns } from "../utils/investmentHelpers";

export default function InvestmentChart({ investmentData }) {
  console.log("From chart", investmentData);
  const { principal, duration, contribution, expectedInterest, frequency } = investmentData;
  const data = calculateCompoundedInterestReturns(principal, duration, expectedInterest);

  return (
    <>
      <BarChart width={1200} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="start" stackId="a" fill="#8884d8" />
        <Bar dataKey="interestEarned" stackId="a" fill="#82ca9d" />
      </BarChart>
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
