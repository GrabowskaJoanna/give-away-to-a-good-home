import React from "react";
import HomeHeader from "./HomeHeader";
import Information from "./Information";
import AboutUs from "./AboutUs";
import Organisations from "./Organisations";
import Contact from "./Contact";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Element name="startSection">
        <h1>Start Section</h1>
      </Element>
      <Information />
      <AboutUs />
      <Organisations />
      <Contact />
    </>
  );
};

export default Home;
