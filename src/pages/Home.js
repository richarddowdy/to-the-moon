import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import { Col, Container, Row } from "react-bootstrap";
import InvestmentChart from "../components/InvestmentChart";
import InvestmentPie from "../components/InvestmentPie";
import { calculateCompoundedInterestReturns } from "../utils/investmentHelpers";

export default function Home() {
  const [investmentData, setInvestmentData] = useState(null);
  const [formattedData, setFormattedData] = useState(null);

  useEffect(() => {
    if (investmentData) {
      console.log("First", investmentData);
      const { principal, duration, contribution, expectedInterest, frequency } = investmentData;

      const fData = calculateCompoundedInterestReturns(principal, duration, expectedInterest, contribution, frequency);
      console.log("what is this", fData);
      setFormattedData(fData);
    }
  }, [investmentData]);

  return (
    <>
      <h1>This is the home page</h1>

      <p>
        Let's get started. Click <Link to="/test">Here</Link> to get started.
      </p>
      <Row>
        <Col>
          <InputForm setInvestmentData={setInvestmentData} />
          {/* </Col>
        <Col> */}
          {formattedData && <InvestmentChart chartData={formattedData} />}
          {formattedData && (
            <InvestmentPie
              chartData={formattedData[formattedData.length - 1]} /* only need the last year of data for pie chart */
            />
          )}
        </Col>
      </Row>
    </>
  );
}
