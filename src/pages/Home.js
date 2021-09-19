import React from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import { Col, Container, Row } from "react-bootstrap";
import InvestmentChart from "../components/InvestmentChart";

export default function Home() {
  return (
    <>
      <h1>This is the home page</h1>

      <p>
        Let's get started. Click <Link to="/test">Here</Link> to get started.
      </p>
      <Row>
        <Col>
          <InputForm />
          {/* </Col>
        <Col> */}
          <InvestmentChart />
        </Col>
      </Row>
    </>
  );
}
