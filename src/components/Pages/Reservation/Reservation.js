import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Reservation.css";
const Reservation = () => {
  const [startDate, setStartDate] = useState(null);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="reservation-main py-5">
        <Container>
          <h1 style={{ color: "#4b4741" }} className="littleabout_title">
            MAKE A RESERVATION
          </h1>
          <h4 className="littleabout_para">
            Book a table online. Leads will reach in your email.
          </h4>
          <div className="bar_div_main mb-5">
            <div className="bar_div_inner"></div>
          </div>
          <div className="border p-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={4}>
                  <label htmlFor="datepicker" className="mb-2">
                    Date
                  </label>
                  <DatePicker
                    id="datepicker"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 10)}
                    placeholderText="Pick a date for your order"
                    className="w-100 py-2 px-3"
                  />
                </Col>
                <Col md={4}>
                  <label htmlFor="name" className="mb-2">
                    Name
                  </label>
                  <input
                    className="w-100 py-2 px-3"
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Enter your full name"
                  />
                </Col>
              </Row>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Reservation;
