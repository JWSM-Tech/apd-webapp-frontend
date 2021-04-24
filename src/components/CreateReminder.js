import { React, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const espRoute = "http://apdwifimodule.local/submit_reminder_data";

function CreateReminder() {
  const [reminderTime, setReminderTimer] = useState(new Date());
  const [pillNames, setPillNames] = useState("");
  const [pillQuantities, setPillQuantites] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let time = reminderTime.toTimeString();
    time = time.substr(0, time.lastIndexOf(":"));

    let hour = time.substr(0, time.lastIndexOf(":"));
    let minute = time.substr(time.lastIndexOf(":") + 1);

    let pillNamesArr = pillNames.trim().split(",");
    let pillQuantitiesArr = pillQuantities.trim().split(",").map(Number);

    axios
      .post(espRoute, {
        hour: hour,
        minute: minute,
        pillNames: pillNamesArr,
        pillQuantities: pillQuantitiesArr,
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
              <h1 className="title">Create Reminder</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form className="create-reminder-form">
                <Form.Group controlId="formTimePicker">
                  <Form.Label>Reminder Time</Form.Label>
                  <DatePicker
                    selected={reminderTime}
                    onChange={(time) => setReminderTimer(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={1}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="time-picker"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formPillNames">
                  <Form.Label>Pill Names</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pill1, Pill2, ..."
                    value={pillNames}
                    onChange={(e) => setPillNames(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Enter 8 pill names separated by commas (empty if no pill on
                    that position)
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formPillQuantites">
                  <Form.Label>Pill Quantities</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Q1, Q2, ..."
                    value={pillQuantities}
                    onChange={(e) => setPillQuantites(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Enter 8 pill quantities separated by commas (0 if no pill on
                    that position)
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Create
                </Button>
                {submitted && <span></span>}
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateReminder;
