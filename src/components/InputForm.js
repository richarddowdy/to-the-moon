import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  principal: Yup.number().required(),
  duration: Yup.number().required(),
  contribution: Yup.number(),
  expectedInterest: Yup.number().required(),
  frequency: Yup.string(),
});

export default function InputForm({ setInvestmentData }) {
  return (
    <>
      <h2>Form here</h2>
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setInvestmentData(values);
        }}
        initialValues={{
          principal: "",
          duration: "",
          contribution: "",
          expectedInterest: "",
          frequency: "",
        }}
      >
        {({ values, touched, isValid, errors, handleSubmit, handleChange, handleBlur }) => (
          <Form noValidate className="mb-5" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik01">
                <Form.Label>Starting Investment</Form.Label>
                <Form.Control
                  type="number"
                  name="principal"
                  value={values.principal}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.principal && !!errors.principal}
                />
                <Form.Control.Feedback type="invalid">{errors.principal}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik02">
                <Form.Label>How Long do you plan on holding?</Form.Label>
                <Form.Control
                  type="number"
                  name="duration"
                  value={values.duration}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.duration && !!errors.duration}
                />
                <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik04">
                <Form.Label>How often do you plan on contributing?</Form.Label>
                <Form.Control
                  as="select"
                  name="frequency"
                  defaultValue={values.frequency || null}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.frequency && !!errors.frequency}
                >
                  <option value={null}>None</option>
                  <option value={26}>Every two weeks.</option>
                  <option value={24}>Twice per month.</option>
                  <option value={12}>Once a month.</option>
                  <option value={4}>Once per quarter.</option>
                  <option value={2}>Twice a year.</option>
                  <option value={1}>Once a year.</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">{errors.frequency}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik03">
                <Form.Label>How much do you plan on contributing?</Form.Label>
                <Form.Control
                  type="number"
                  name="contribution"
                  value={values.contribution}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.contribution && !!errors.contribution}
                />
                <Form.Control.Feedback type="invalid">{errors.contribution}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik03">
                <Form.Label>Expected Anual Interest?</Form.Label>
                <Form.Control
                  type="number"
                  name="expectedInterest"
                  value={values.expectedInterest}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.expectedInterest && !!errors.expectedInterest}
                />
                <Form.Control.Feedback type="invalid">{errors.expectedInterest}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
            <Row>
              <pre style={{ margin: "0 auto" }}>{JSON.stringify({ ...values, errors, isValid, touched }, null, 2)}</pre>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}
