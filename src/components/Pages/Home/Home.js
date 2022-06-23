import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Menu from "../Menu/Menu";
import Reservation from "../Reservation/Reservation";
import LittleAbout from "./LittleAbout/LittleAbout";

const Home = () => {
  return (
    <div>
      <Banner />
      <LittleAbout />
      <Menu />
      <Reservation />
    </div>
  );
};

export default Home;
