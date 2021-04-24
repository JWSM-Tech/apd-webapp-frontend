import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

const espRoute = "http://apdwifimodule.local/";

function AddPill() {
  const [pillName, setPillName] = useState("");
  const [pillQuantity, setPillQuantity] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(espRoute, { pillName: pillName, pillQuantity: pillQuantity })
      .then(() => {
        setSubmitted(true);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <h1 className="title">Add Pill</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="add-pill-form">
                <Form.Group controlId="formPillName">
                  <Form.Label>Pill Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pill name"
                    value={pillName}
                    onChange={(e) => setPillName(e.target.value)}
                  />
                  <Form.Text className="text-muted">Enter pill name</Form.Text>
                </Form.Group>
                <Form.Group controlId="formPillQuantites">
                  <Form.Label>Pill Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Q1"
                    value={pillQuantity}
                    onChange={(e) => setPillQuantity(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Enter pill quantity
                  </Form.Text>
                </Form.Group>
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Add
                  </Button>
                </div>
                {submitted && <span></span>}
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AddPill;
