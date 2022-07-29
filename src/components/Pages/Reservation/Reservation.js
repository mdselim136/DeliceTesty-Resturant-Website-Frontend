import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { addDays } from "date-fns";
import { useState } from "react";
import TimeInput from "react-time-picker-input";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import "./Reservation.css";

const Reservation = () => {
  const [startDate, setStartDate] = useState(null);
  const { register, handleSubmit } = useForm();
  const [timeInput, setTimeInput] = useState("10:12");

  const onSubmit = (data) => {
    console.log(data, startDate, timeInput);
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
          <div className="border p-5 rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="py-5">
                <Col md={4} className="mb-5">
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
                    required
                  />
                </Col>
                <Col md={4} className="mb-5">
                  <label htmlFor="name" className="mb-2">
                    Name
                  </label>
                  <input
                    className="w-100 py-2 px-3"
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Enter your full name"
                    required
                  />
                </Col>
                <Col md={4} className="mb-5" style={{ zIndex: 3 }}>
                  <label htmlFor="time" className="mb-2">
                    Time
                  </label>
                  <TimeInput
                    value={timeInput}
                    hour12Format
                    manuallyDisplayDropdown
                    eachInputDropdown
                    onChange={(dateString) => setTimeInput(dateString)}
                  />
                </Col>
                <Col md={4}>
                  <label htmlFor="email" className="mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter your email here"
                    className="w-100 py-2 px-3"
                  />
                </Col>
                <Col md={4}>
                  <label htmlFor="guest" className="mb-2">
                    Guest
                  </label>
                  <input
                    type="number"
                    className="w-100 py-2 px-3"
                    id="guest"
                    required
                    placeholder="How many people enter number "
                  />
                </Col>
                <Col md={4}>
                  <label htmlFor="numbermobile" className="mb-2">
                    {" "}
                    Mobile number
                  </label>
                  <input
                    type="number"
                    className="w-100 py-2 px-3"
                    placeholder="Enter your mobile number"
                    required
                    id="numbermobile"
                  />
                </Col>
                <div className="text-center mt-5">
                  <button type="submit" className="w-auto item_button">
                    Make Reservation
                  </button>
                </div>
              </Row>
            </form>
          </div>
          <div
            className="text-center pt-4 pb-3"
            style={{ background: "#FAFAFA" }}
          >
            <p className="fs-4">
              You can also call : <b>+880555654665</b> to make a reservation.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Reservation;
