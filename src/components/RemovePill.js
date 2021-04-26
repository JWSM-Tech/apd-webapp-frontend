import { React, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";

const espRoute = "http://apdwifimodule.local/remove_pill";

function RemovePill(props) {
  const [pillName, setPillName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(espRoute, { pillName: pillName }).then(() => {
      setSubmitted(true);
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <h1 className="title">Remove Pill</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="remove-pill-form">
                <fieldset>
                  <Form.Group className="mt-3" as={Row}>
                    <Form.Label className="mr-3">
                      <b>Select pill to remove</b>
                    </Form.Label>
                    {!props.loading &&
                      props.pillNames.map((name) => {
                        return (
                          <div key={`inline-${name}`} className="mb-3">
                            <Form.Check
                              inline
                              label={name}
                              type="radio"
                              id={name}
                              name="pickPill"
                              onChange={(e) => {
                                setPillName(e.target.id);
                              }}
                            />
                          </div>
                        );
                      })}
                  </Form.Group>
                </fieldset>{" "}
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Remove
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

RemovePill.propTypes = {
  loading: PropTypes.bool,
  pillNames: PropTypes.array,
};

export default RemovePill;
