import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function InvestmentTable({ chartData }) {
  const [displayData, setDisplayData] = useState(null);

  useEffect(() => {
    if (chartData) setDisplayData(chartData);
  }, [chartData]);
  return (
    <>
      {displayData && (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Year</th>
              <th>Principal</th>
              <th>Total Contribution</th>
              <th>Total Interest Earned</th>
              <th>Year End Total</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((data) => (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{data.principal}</td>
                <td>{data.totalContribution}</td>
                <td>{data.totalInterestEarned}</td>
                <td>{data.yearEndTotal}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
