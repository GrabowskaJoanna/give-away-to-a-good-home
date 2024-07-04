import React from "react";
import HomeHeader from "./HomeHeader";
import Information from "./Information";
import AboutUs from "./AboutUs";
import Organisations from "./Organisations";
import Contact from "./Contact";
import Start from "./Start";
import Activity from "./Activity";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Start />
      <Activity />
      <Information />
      <AboutUs />
      <Organisations />
      <Contact />
    </>
  );
};

export default Home;
