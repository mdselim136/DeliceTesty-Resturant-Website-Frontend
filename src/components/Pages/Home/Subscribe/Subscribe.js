import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Subscribe = () => {
  return (
    <>
      <Container>
        <div className="py-5 my-5">
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="text-uppercase">Subscribe</h1>
            </Col>
            <Col md={6}>
              <h3 className="mb-3">
                Get updates about new dishes and upcoming discount
              </h3>
              <form action="#">
                <div className="d-flex">
                  <input
                    type="email"
                    className="w-100 p-2"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="px-5 py-2 border-0 ms-2">
                    Subscribe
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Subscribe;
