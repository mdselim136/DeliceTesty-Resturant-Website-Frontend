import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../../../Shared/image/features/thumb5.png";
import img2 from "../../../Shared/image/features/thumb6.png";
import img3 from "../../../Shared/image/features/thumb7.png";
import "./Features.css";

const Features = () => {
  const menuImage = { height: "400px" };
  return (
    <div className="features-main-div py-5">
      <Container>
        <h1 style={{ color: "#ffffff" }} className="littleabout_title pt-5">
          OUR FEATURES
        </h1>
        <h4 className="littleabout_para">Little things make us best in town</h4>
        <div className="bar_div_main mb-5">
          <div className="bar_div_inner"></div>
        </div>
        <Row className="py-5">
          <Col md={4} className="features-card-box">
            <Card>
              <div className="img-box">
                <Card.Img
                  variant="top"
                  className="features-image"
                  style={menuImage}
                  src={img1}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-uppercase">
                  SERVING WITH LOVE
                </Card.Title>
                <Card.Text className="fw-bold fs-5">
                  Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo
                  nisi. Nam urna arcu, maximus eget ex nec, consequat
                  pellentesque enim. Aliquam tempor fringilla odio, vel
                  ullamcorper turpis varius eu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="features-card-box">
            <Card>
              <div className="img-box">
                <Card.Img
                  variant="top"
                  className="features-image"
                  style={menuImage}
                  src={img2}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-uppercase">
                  SERVING WITH LOVE
                </Card.Title>
                <Card.Text className="fw-bold fs-5">
                  Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo
                  nisi. Nam urna arcu, maximus eget ex nec, consequat
                  pellentesque enim. Aliquam tempor fringilla odio, vel
                  ullamcorper turpis varius eu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="features-card-box">
            <Card>
              <div className="img-box">
                <Card.Img
                  variant="top"
                  className="features-image"
                  style={menuImage}
                  src={img3}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-uppercase">
                  SERVING WITH LOVE
                </Card.Title>
                <Card.Text className="fw-bold fs-5">
                  Aenean suscipit vehicula purus quis iaculis. Aliquam nec leo
                  nisi. Nam urna arcu, maximus eget ex nec, consequat
                  pellentesque enim. Aliquam tempor fringilla odio, vel
                  ullamcorper turpis varius eu.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
