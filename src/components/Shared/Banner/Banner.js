import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerOne from "../image/banner-1.jpg";
import BannerTwo from "../image/banner-2.jpg";
import BannerThree from "../image/banner-3.jpg";
import BannerLogo from "../image/banner-logo.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel_item_style">
          <img className="d-block w-100" src={BannerOne} alt="First slide" />
          <Carousel.Caption>
            <img src={BannerLogo} alt="" />
            <h1>We are FoodTesty</h1>
            <p>
              Customar Satisficed is ourt first priority. We are not only testy
              and we are also very careful to our customer.
            </p>
            <Link className="see_menu_btn" to="/menu">
              See Our Menu
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel_item_style">
          <img className="d-block w-100" src={BannerTwo} alt="Second slide" />

          <Carousel.Caption>
            <img src={BannerLogo} alt="" />
            <h1>We are DeliceTesty</h1>
            <p>
              Customar Satisficed is ourt first priority. We are not only testy
              and we are also very careful to our customer.
            </p>
            <Link className="see_menu_btn" to="/menu">
              See Our Menu
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel_item_style">
          <img className="d-block w-100" src={BannerThree} alt="Third slide" />

          <Carousel.Caption>
            <img src={BannerLogo} alt="" />
            <h1>We are DeliceTesty</h1>
            <p>
              Customar Satisficed is ourt first priority. We are not only testy
              and we are also very careful to our customer.
            </p>
            <Link className="see_menu_btn" to="/menu">
              See Our Menu
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
