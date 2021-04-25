import { React, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import PropTypes from "prop-types";

const espRoute = "http://apdwifimodule.local/submit_refill_data";

function Refill(props) {
  const [pillQuantities, setRefillQuantities] = useState([]);
  const [pillPick, setPillPick] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(espRoute, {
        pillQuantities: pillQuantities,
      })
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setSubmitted(true);
      });
  };

  const getNoneZeroVal = () => {
    return pillQuantities.filter((number) => {
      return number !== 0;
    })[0];
  };

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col>
              <h1 className="title">Refill</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col>
                  <h2 className="mt-3">Current pills</h2>
                </Col>
              </Row>
              {!props.loading && (
                <>
                  <Row>
                    <Col>
                      <span className="pill-names-list">
                        {!props.loading && props.pillNames.map((name, i) => {
                          if (i == props.pillNames.length - 1) return name;

                          return name + ", ";
                        })}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span className="pill-quantities-list">
                        {props.pillQuantities.map((quantity, i) => {
                          if (i == props.pillQuantities.length - 1)
                            return quantity;
                          return quantity + ", ";
                        })}
                      </span>
                    </Col>
                  </Row>
                </>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="refill-form">
                <fieldset>
                  <Form.Group className="mt-3" as={Row}>
                    <Form.Label className="mr-3">
                      <b>Select pill to refill</b>
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
                                setPillPick(e.target.id);
                                setRefillQuantities(
                                  props.pillNames.map((name) => {
                                    if (name === e.target.id) {
                                      return getNoneZeroVal();
                                    }
                                    return 0;
                                  })
                                );
                              }}
                            />
                          </div>
                        );
                      })}
                  </Form.Group>
                </fieldset>{" "}
                <Form.Group controlId="formQuantity">
                  <Form.Label>Pill Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Q1"
                    onChange={(e) => {
                      setRefillQuantities(
                        props.pillNames.map((name) => {
                          if (name === pillPick) {
                            if (e.target.value === "") return 0;
                            return parseInt(e.target.value);
                          }
                          return 0;
                        })
                      );
                    }}
                  />
                  <Form.Text className="text-muted">
                    Enter 1 pill quantity
                  </Form.Text>
                </Form.Group>
                {
                  <div className="text-center">
                    <Button
                      className=""
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Start refill
                    </Button>
                  </div>
                }
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

Refill.propTypes = {
  loading: PropTypes.bool,
  pillNames: PropTypes.array,
  pillQuantities: PropTypes.array,
};

export default Refill;
