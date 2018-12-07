import React from "react";
import { Container, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Features = props => (
  <Container>
    <Row>
      <Col>
        <h2>Welcome!</h2>
        <p>Suspendisse et arcu felis ...</p>
        <p>
          <a href="#">See our portfolio</a>
        </p>
      </Col>
      <Col>
        <h2>Recent Updates</h2>
        <p>Suspendisse et arcu felis ...</p>
        <p>
          <a href="#">See whats new</a>
        </p>
      </Col>
      <Col>
        <h2>Out team</h2>
        <p>Suspendisse et arcu felis ...</p>
        <p>
          <a href="#">Meet the Team</a>
        </p>
      </Col>
    </Row>
  </Container>
);

export default Features;
