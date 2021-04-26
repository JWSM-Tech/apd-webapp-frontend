import { React, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const espRoute = "http://apdwifimodule.local/remove_reminder";

function RemoveReminder(props) {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(espRoute, {
        hour: hour,
        minute: minute,
      })
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
              <h1 className="title">Remove Reminder</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="remove-pill-form">
                <fieldset>
                  <Form.Group className="mt-3" as={Row}>
                    <Form.Label className="mr-3">
                      <b>Select reminder to remove</b>
                    </Form.Label>
                    {!props.loading &&
                      props.reminders.map((reminder) => {
                        return (
                          <div
                            key={`inline-${
                              reminder.hour + ":" + reminder.minute
                            }`}
                            className="mb-3"
                          >
                            <Form.Check
                              inline
                              label={
                                reminder.hour +
                                ":" +
                                reminder.minute +
                                " " +
                                reminder.pillNames.map((name) => {
                                  return name + " ";
                                })
                              }
                              type="radio"
                              id={reminder.hour + ":" + reminder.minute}
                              name="pickReminder"
                              onChange={(e) => {
                                setHour(
                                  e.target.id.substr(
                                    0,
                                    e.target.id.lastIndexOf(":")
                                  )
                                );
                                setMinute(
                                  e.target.id.substr(
                                    e.target.id.lastIndexOf(":") + 1
                                  )
                                );
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

RemoveReminder.propTypes = {
  loading: PropTypes.bool,
  reminders: PropTypes.array,
};

export default RemoveReminder;
