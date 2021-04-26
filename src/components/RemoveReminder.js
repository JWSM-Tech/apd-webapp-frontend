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

  const parseMinute = (minute) => {
    console.log(minute);
    if (minute < 10) {
      return "0" + minute.toString();
    }

    return minute.toString();
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
                        if (reminder.hour === 0 && reminder.minute === 0)
                          return;
                        return (
                          <div
                            key={`inline-${
                              reminder.hour + ":" + parseMinute(reminder.minute)
                            }`}
                            className="mb-3"
                          >
                            <Form.Check
                              inline
                              label={
                                reminder.hour +
                                ":" +
                                parseMinute(reminder.minute)
                              }
                              type="radio"
                              id={
                                reminder.hour +
                                ":" +
                                parseMinute(reminder.minute)
                              }
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
