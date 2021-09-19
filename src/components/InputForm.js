import React from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  principal: yup.number().required(),
  duration: yup.number().required(),
  contribution: yup.number(),
  frequency: yup.number(),
});

export default function InputForm() {
  return (
    <>
      <h2>Form here</h2>
      <Formik
        validationSchema={schema}
        initialValues={{
          principal: "",
          duration: "",
          contribution: "",
          expectedIntrest: "",
          frequency: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
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
                  isValid={touched.principal && !errors.principal}
                />
                <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik02">
                <Form.Label>How Long do you plan on holding?</Form.Label>
                <Form.Control
                  type="number"
                  name="duration"
                  value={values.duration}
                  onChange={handleChange}
                  isValid={touched.duration && !errors.duration}
                />
                <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik04">
                <Form.Label>How often do you plan on contributing?</Form.Label>
                <Form.Control
                  as="select"
                  name="frequency"
                  defaultValue={values.frequency || null}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.contribution && !errors.contribution}
                >
                  <option value={null}>None</option>
                  <option value={1}>Once a year.</option>
                  <option value={2}>Twice a year.</option>
                  <option value={3}>Three times a year.</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik03">
                <Form.Label>How much do you plan on contributing?</Form.Label>
                <Form.Control
                  type="number"
                  name="contribution"
                  value={values.contribution}
                  onChange={handleChange}
                  isValid={touched.contribution && !errors.contribution}
                />
                <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" md="4" as={Col} controlId="validationFormik03">
                <Form.Label>Expected Anual Interest?</Form.Label>
                <Form.Control
                  type="number"
                  name="expectedIntrest"
                  value={values.expectedIntrest}
                  onChange={handleChange}
                  isValid={touched.expectedIntrest && !errors.expectedIntrest}
                />
                <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
