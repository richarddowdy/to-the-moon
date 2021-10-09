// React
import React, { useState, useEffect } from "react";

// Components
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar } from "recharts";

export default function InvestmentChart({ chartData }) {
  // console.log("From chart", chartData);
  const principal = chartData[0].principal;
  const [data, setData] = useState(null);

  useEffect(() => {
    // console.log("bar render");
    if (chartData) setData(chartData);
  }, [chartData]);

  return (
    <>
      {data && (
        <>
          <h3 className="mb-4 mx-auto" style={{fontSize: "1.25rem"}}>{`Your original investment of $${principal} has turned into $${
            data[data.length - 1].yearEndTotal
          }`}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart className="ml-2" data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" xAxisId={0} />
              <XAxis dataKey="year" xAxisId={1} hide />
              <YAxis />
              <Tooltip />
              <Legend wrapperStyle={{ position: "relative" }} />
              <Bar dataKey="yearEndTotal" name="Total" xAxisId={1} fill="black" fillOpacity={0} />
              <Bar dataKey="principal" name="Principal" stackId="a" fill="#0088FE" />
              <Bar dataKey="totalContribution" name="Total Contribution" stackId="a" fill="#00C49F" />
              <Bar dataKey="totalInterestEarned" name="Total Interest Earned" stackId="a" fill="#FFBB28" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
}
