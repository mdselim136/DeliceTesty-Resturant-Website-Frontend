import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Menu from "../Menu/Menu";
import Reservation from "../Reservation/Reservation";
import Features from "./Features/Features";
import LittleAbout from "./LittleAbout/LittleAbout";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner />
      <LittleAbout />
      <Menu />
      <Reservation />
      <Features />
      <Subscribe />
    </div>
  );
};

export default Home;
