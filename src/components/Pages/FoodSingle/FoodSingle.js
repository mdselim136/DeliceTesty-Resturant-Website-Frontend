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
    console.log(cart);
    const productPrice = price * (cart + 1);
    setTotalPrice(productPrice);
  };

  const minusCart = (price) => {
    if (cart <= 0) {
      return;
    }
    const cutPro = 1;
    setCart(cart - cutPro);
    const product = price * (cart - 1);
    setTotalPrice(product);
  };

  return (
    <div className="py-5 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="p-5 shadow-lg rounded left-food-site">
              <img
                src={foodSingle?.image}
                height="400px"
                className="img-fluid rounded"
                alt="foodImage"
              />
              <h2 className="text-capitalize pt-3 text-white">
                {foodSingle?.foodname}
              </h2>
              <h4 className="text-white">Price : {foodSingle?.price} $</h4>
              <h5 className="text-capitalize text-white">
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
                <h3 className="mt-5">Total Price : {totalPrice} $</h3>
                <div className="coupon-code">
                  <input type="text" />
                  <button>apply</button>
                </div>
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
