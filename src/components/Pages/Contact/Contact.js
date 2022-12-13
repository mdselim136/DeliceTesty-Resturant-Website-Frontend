import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container>
        <h1 className="littleabout_title pt-5">Contact Us</h1>
        <h4 className="littleabout_para text-lowercase">
          For any query , Get in touch
        </h4>
        <div className="bar_div_main mb-5">
          <div className="bar_div_inner"></div>
        </div>
        <div className="contact-main-div">
          <Row className="align-items-center">
            <Col lg={6}>
              <h2 className="littleabout_title mb-5">Address</h2>
              <h3>
                <b>Email:</b> mdselimdev@gmail.com
              </h3>
              <h3>
                <b>Phone/Whatsapp :</b> +880193000000
              </h3>
              <h3>
                <b>Address :</b> Mirpur Dosh , Dhaka - 1210.
              </h3>
            </Col>
            <Col lg={6}>
              <h2 className="littleabout_title mb-5">Get in touch</h2>
              <form action="#">
                <input
                  type="text"
                  className="w-100 p-2 my-2"
                  placeholder="Enter your full name"
                />
                <input
                  type="email"
                  className="w-100 p-2 my-2"
                  placeholder="Enter your email"
                />
                <textarea
                  name="textbox"
                  id="textbox"
                  cols="30"
                  rows="5"
                  className="w-100 p-2 my-2"
                  placeholder="Enter your message"
                ></textarea>
                <button type="submit" className="see_menu_btn w-100 border-0">
                  Send Message
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
