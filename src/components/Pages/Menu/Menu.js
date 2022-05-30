import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Menu.css";
import MenuSingle from "./MenuSingle/MenuSingle";

const Menu = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("/allfood.json")
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(food);

  return (
    <div className="menu_maindiv">
      <Container>
        <h1 style={{ color: "#ffffff" }} className="littleabout_title">
          OUR MENUS
        </h1>
        <h4 className="littleabout_para">
          Our Food Always Delicious And Healthy
        </h4>
        <div className="bar_div_main mb-5">
          <div className="bar_div_inner"></div>
        </div>
        <div className="pt-5">
          <Row>
            {food.slice(4, 10).map((foodData) => (
              <MenuSingle data={foodData} key={foodData.foodname} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
