import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-content-box">
          <Row>
            <Col md={4}>
              <h4 className="head-foot">About Us</h4>
              <p>
                We give you catering service or whole monthly basis food
                delivery service . If you need this type of delivery firstly you
                have to contact our manager. He give you permission for this We
                will give you food.
              </p>
            </Col>
            <Col md={4}>
              <h4 className="head-foot">Recent Post</h4>
            </Col>
            <Col md={4}>
              <h4 className="head-foot">Reach Us</h4>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
