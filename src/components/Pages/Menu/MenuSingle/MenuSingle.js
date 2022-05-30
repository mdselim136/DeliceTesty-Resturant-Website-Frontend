import React from "react";
import { Col } from "react-bootstrap";
import { BsCartPlusFill } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./MenuSingle.css";

const MenuSingle = ({ data }) => {
  console.log(data);
  return (
    <Col md={4}>
      <div className="main_item_div mb-5">
        <img src={data.image} className="img-fluid menu_img" alt="" />
        <h2 className="text-capitalize mt-3 item_foodname fw-bold">
          {data.foodname}
        </h2>
        <h4 className="mt-3 main_item_menu_price">{data.price} $</h4>
        <Link to="/menu">
          <button className="border-0 mt-3 item_button">
            Add to Cart {BsCartPlusFill}
          </button>
        </Link>
      </div>
    </Col>
  );
};

export default MenuSingle;
