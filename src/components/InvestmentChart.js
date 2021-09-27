import React, { useState, useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar } from "recharts";

export default function InvestmentChart({ chartData }) {
  // console.log("From chart", chartData);
  const principal = chartData[0].principal;

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
            <Bar dataKey="principal" name="Principal" stackId="a" fill="#0088FE" />
            <Bar dataKey="totalContribution" name="Total Contribution" stackId="a" fill="#00C49F" />
            <Bar dataKey="totalInterestEarned" name="Total Interest Earned" stackId="a" fill="#FFBB28" />
          </BarChart>
        </>
      )}
    </>
  );
}
