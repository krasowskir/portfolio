import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const Features = props => (
  <Container>
    <Row>
      <Col sm="4" className="feature">
        <h2>Welcome!</h2>
        <p>Suspendisse et arcu felis ...</p>
        <p>
          <Button color="primary" className="float-right">
            See our portfolio
          </Button>
        </p>
      </Col>
      <Col sm="4" className="feature">
        <h2>Recent Updates</h2>
        <p>Suspendisse et arcu felis ...</p>
        <p>
          <Button color="primary" className="float-right">
            See whats new
          </Button>
        </p>
      </Col>
      <Col sm="4" className="feature">
        <h2>Out team</h2>
        <p>Suspendisse et arcu felis ...</p>
        <p>
          <Button color="primary" className="float-right">
            Meet the Team
          </Button>
        </p>
      </Col>
    </Row>
  </Container>
);

export default Features;
