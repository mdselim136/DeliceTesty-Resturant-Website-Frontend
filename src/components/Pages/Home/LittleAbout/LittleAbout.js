import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LittleAbout.css";
import KababFive from "../../../Shared/image/kabab-5.jpg";
import KababFour from "../../../Shared/image/kabab-4.jpg";
import KababOne from "../../../Shared/image/kabab-1.jpg";

const LittleAbout = () => {
  return (
    <div className="littleabout_maindiv">
      <Container>
        <h1 className="littleabout_title">THE RESTAURANT</h1>
        <h4 className="littleabout_para">
          A little about us and a breif history of how we started.
        </h4>
        <div className="bar_div_main mb-5">
          <div className="bar_div_inner"></div>
        </div>
        <div className="little_text_gallery">
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="little_gallery">
                <img
                  src={KababFive}
                  alt=""
                  className="w-100 mb-3 litt-full-img"
                />
                <Row>
                  <Col lg={6}>
                    <img
                      src={KababFour}
                      alt=""
                      className="w-100 litt-half-img"
                    />
                  </Col>
                  <Col lg={6}>
                    <img
                      src={KababOne}
                      alt=""
                      className="w-100 litt-half-img"
                    />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={8}>
              <div className="little-gallery">
                <p>
                  When I was Ten My father started this kabab business. It a
                  traditional kabab Resturant. It's more than 20 years old kabab
                  place . Recently , We started our online delivery and booking
                  system. We give you our best food to made you happy.
                </p>

                <p>
                  If you need kabab you can order our kabab resturant in online
                  , you can choose different kind of kabab which you need .
                  Sometimes we give you discount for our food , in a special
                  day.
                </p>

                <p>
                  We have online booking system for your occasion , ceremony ,
                  we give you home delivery system in our resturant near place .
                </p>
                <p>
                  We give you catering service or whole monthly basis food
                  delivery service . If you need this type of delivery firstly
                  you have to contact our manager. He give you permission for
                  this We will give you food.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LittleAbout;
