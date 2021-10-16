//React
import React, { useState, useEffect } from "react";

// Components
import { Table } from "react-bootstrap";

// Helpers
import { insertCommasHelper } from "../utils/insertCommasHelper";

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
              <th>Total Contribution</th>
              <th>Total Interest Earned</th>
              <th>Year End Total</th>
            </tr>
          </thead>
          <tbody>
            {displayData.map((data) => (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{`$${insertCommasHelper(data.totalContribution)}`}</td>
                <td>{`$${insertCommasHelper(data.totalInterestEarned)}`}</td>
                <td>{`$${insertCommasHelper(data.yearEndTotal)}`}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
