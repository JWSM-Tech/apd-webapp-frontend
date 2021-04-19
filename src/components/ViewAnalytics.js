import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function ViewAnalytics(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="title">Analytics</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {!props.loading &&
            props.analytics.map((analytic, i) => {
              return (
                <div key={i} className="analytic-item">
                  <Row>
                    <Col>
                      <h2 className="taken-date">
                        {"Analytic date: " + analytic.taken_date}
                      </h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>
                        <b>Original date: </b>
                        {analytic.original_date}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>
                        <b>Pill Names: </b>
                        {analytic.pill_names.map((pillName, i) => {
                          if (pillName === "") return;

                          if (i === analytic.pill_names.length - 1) {
                            return pillName;
                          }
                          return pillName + ", ";
                        })}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>
                        <b>Pill Quantites: </b>
                        {analytic.pill_quantities.map((pillQuantity, i) => {
                          if (pillQuantity === 0) return;
                          if (i === analytic.pill_quantities.length - 1) {
                            return pillQuantity;
                          }
                          return pillQuantity + ", ";
                        })}
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <span>
                        <b>Completed? </b>
                        {(analytic.completed && "Yes") || "No"}
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

ViewAnalytics.propTypes = {
  loading: PropTypes.bool,
  analytics: PropTypes.array,
};

export default ViewAnalytics;
