// React
import React, { useState, useEffect } from "react";

// Components
import { Col, Container, Row } from "react-bootstrap";
import InputForm from "../components/InputForm";
import InvestmentChart from "../components/InvestmentChart";
import InvestmentPie from "../components/InvestmentPie";
import InvestmentTable from "../components/InvestmentTable";

// Styles
import "./Home.css";

// Helpers
import { calculateCompoundedInterestReturns } from "../utils/investmentHelpers";

export default function Home() {
  const [investmentData, setInvestmentData] = useState(null);
  const [formattedData, setFormattedData] = useState(null);

  useEffect(() => {
    if (investmentData) {
      const { principal, duration, contribution, expectedInterest, frequency } =
        investmentData;

      const fData = calculateCompoundedInterestReturns(
        principal,
        duration,
        expectedInterest,
        contribution,
        frequency
      );
      // console.log("Formatted data", fData);
      setFormattedData(fData);
    }
  }, [investmentData]);

  return (
    <>
      <h1 className="mx-auto my-5 title">
        &#128640; Build Your Rocket Ship &#128640;
      </h1>
      {/* prettier-ignore */}
      <h4 style={{ margin: "10px" }}>
        Github Link Found Here -{">"}{"  "}
        <a
          href="https://github.com/richarddowdy/to-the-moon"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          To-The-Moon Repo
        </a>
      </h4>

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
                chartData={
                  formattedData[formattedData.length - 1]
                } /* only need the last year of data for pie chart */
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
