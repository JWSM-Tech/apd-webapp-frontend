import { React, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

function ViewReminders(props) {
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
          <h1 className="title">Reminders</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {!props.loading &&
            props.reminders.map((reminder, i) => {
              if (reminder.hour === 0 && reminder.minute === 0) return;
              return (
                <div key={i} className="analytic-item">
                  <Row>
                    <Col>
                      <h2 className="taken-date">
                        {"Reminder time: " +
                          reminder.hour +
                          ":" +
                          parseMinute(reminder.minute)}
                      </h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>
                        <b>Pill Quantities: </b>
                        {reminder.pillQuantities.map((quantity) => {
                          return quantity + " ";
                        })}
                      </span>
                    </Col>
                  </Row>
                </div>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
}

ViewReminders.propTypes = {
  loading: PropTypes.bool,
  reminders: PropTypes.array,
};

export default ViewReminders;
