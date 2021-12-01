// React
import React, { useState, useEffect } from "react";

// Components
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Bar,
} from "recharts";

// Helpers
import { insertCommasHelper } from "../utils/insertCommasHelper";

export default function InvestmentChart({ chartData }) {
  // console.log("From chart", chartData);
  const principal = chartData[0].principal;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (chartData) setData(chartData);
  }, [chartData]);

  return (
    <>
      {data && (
        <>
          {/* prettier-ignore */}
          <h3 className="mb-4 mx-auto" style={{ fontSize: "1.25rem" }}>
            {`Your original investment of $${insertCommasHelper(principal)} has turned into $${insertCommasHelper(data[data.length - 1].yearEndTotal)} after ${data.length - 1} years.`}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart className="ml-2" data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" xAxisId={0} />
              <XAxis dataKey="year" xAxisId={1} hide />
              <YAxis />
              <Tooltip formatter={(value) => `$${insertCommasHelper(value)}`} />
              <Legend wrapperStyle={{ position: "relative" }} />
              <Bar
                dataKey="yearEndTotal"
                name="Total"
                xAxisId={1}
                fill="black"
                fillOpacity={0}
              />
              <Bar
                dataKey="principal"
                name="Principal"
                stackId="a"
                fill="#0088FE"
              />
              <Bar
                dataKey="totalContribution"
                name="Total Contribution"
                stackId="a"
                fill="#00C49F"
              />
              <Bar
                dataKey="totalInterestEarned"
                name="Total Interest Earned"
                stackId="a"
                fill="#FFBB28"
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
}
