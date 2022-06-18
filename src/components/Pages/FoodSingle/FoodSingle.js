import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Content from "../../Shared/Content/Content";
import "./FoodSingle.css";

const FoodSingle = () => {
  const [foodSingle, setFoodSingle] = useState({});
  const [cart, setCart] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  let { menuItem } = useParams();

  const { food } = Content();

  useEffect(() => {
    const singleFood = food.find(
      (fo) => parseFloat(menuItem) === fo.product_id
    );
    setFoodSingle(singleFood);
  }, [menuItem, food]);

  const plusCart = (price) => {
    const addPro = 1;
    setCart(cart + addPro);
    const product = price * cart;
    setTotalPrice(product);
  };

  const minusCart = (price) => {
    if (cart === 0) {
      return;
    }
    setCart(cart - 1);
    const product = price * cart;
    setTotalPrice(product);
  };

  return (
    <div className="py-5 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="p-5 shadow-lg rounded">
              <img
                src={foodSingle?.image}
                className="img-fluid"
                alt="foodImage"
              />
              <h2 className="text-capitalize pt-3">{foodSingle?.foodname}</h2>
              <h4>Price : {foodSingle?.price} $</h4>
              <h5 className="text-capitalize">
                Category : {foodSingle?.category}
              </h5>
            </div>
          </Col>
          <Col md={6}>
            <div className="quantity-box p-5 shadow-lg rounded">
              <div>
                <button
                  className="border-0 cartItem-Btn ms-0"
                  onClick={() => minusCart(foodSingle.price)}
                >
                  -
                </button>
                <span className="cartItem">{cart}</span>
                <button
                  className="border-0 cartItem-Btn"
                  onClick={() => plusCart(foodSingle.price)}
                >
                  +
                </button>
              </div>
              <div>
                <h3 className="mt-5">Total Price : {totalPrice}</h3>
                <button type="submit" className="item_button border-0 mt-5">
                  Submit Order
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FoodSingle;
