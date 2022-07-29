import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Menu from "../Menu/Menu";
import Reservation from "../Reservation/Reservation";
import Features from "./Features/Features";
import LittleAbout from "./LittleAbout/LittleAbout";

const Home = () => {
  return (
    <div>
      <Banner />
      <LittleAbout />
      <Menu />
      <Reservation />
      <Features />
    </div>
  );
};

export default Home;
