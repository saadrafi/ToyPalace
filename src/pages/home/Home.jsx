import React from "react";
import Banner from "./Banner";
import Galllery from "./Galllery";
import CategoryTabs from "./categoryTabs/CategoryTabs";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      <div data-aos="fade-in">
        <Banner></Banner>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000">
        <Galllery></Galllery>
      </div>
      <div data-aos="fade-right">
        <CategoryTabs></CategoryTabs>
      </div>
    </div>
  );
};

export default Home;
