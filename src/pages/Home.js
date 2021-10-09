// React
import React, { useState, useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import InputForm from "../components/InputForm";
import InvestmentChart from "../components/InvestmentChart";
import InvestmentPie from "../components/InvestmentPie";
import InvestmentTable from "../components/InvestmentTable";

// Helpers
import { calculateCompoundedInterestReturns } from "../utils/investmentHelpers";

export default function Home() {
  const [investmentData, setInvestmentData] = useState(null);
  const [formattedData, setFormattedData] = useState(null);

  useEffect(() => {
    if (investmentData) {
      const { principal, duration, contribution, expectedInterest, frequency } = investmentData;

      const fData = calculateCompoundedInterestReturns(principal, duration, expectedInterest, contribution, frequency);
      // console.log("Formatted data", fData);
      setFormattedData(fData);
    }
  }, [investmentData]);

  return (
    <>
      <h1>This is the home page</h1>

      <p>
        Let's get started. Click <Link to="/test">Here</Link> to get started.
      </p>
      <Container fluid>
        <Row className="mb-5">
          <InputForm setInvestmentData={setInvestmentData} />
        </Row>
        <Row className="mb-5">
          <Col className="mx-auto" xs={12} lg={8}>
            {formattedData && <InvestmentChart chartData={formattedData} />}
          </Col>
          <Col className="mx-auto" xs={12} lg={4}>
            {formattedData && (
              <InvestmentPie
                chartData={formattedData[formattedData.length - 1]} /* only need the last year of data for pie chart */
              />
            )}
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="mx-auto" xs={12} md={8}>
            {formattedData && <InvestmentTable chartData={formattedData} />}
          </Col>
        </Row>
      </Container>
    </>
  );
}
