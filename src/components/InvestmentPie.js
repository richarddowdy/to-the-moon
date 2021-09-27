import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function InvestmentPie({ chartData }) {
  const [pieChartData, setPieChartData] = useState(null);

  console.log("Pie Chart received: ", chartData);
  useEffect(() => {
    if (chartData) {
      const { principal, totalContribution, totalInterestEarned } = chartData;
      setPieChartData([
        { name: "Principal", value: principal },
        { name: "Contributions", value: totalContribution },
        { name: "Interest Earned", value: totalInterestEarned },
      ]);
    }
  }, [chartData]);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <>
      {pieChartData && (
        <PieChart width={400} height={250}>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#82ca9d"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </>
  );
}
