import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Menu from "../Menu/Menu";
import LittleAbout from "./LittleAbout/LittleAbout";

const Home = () => {
  return (
    <div>
      <Banner />
      <LittleAbout />
      <Menu />
    </div>
  );
};

export default Home;
