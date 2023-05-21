import React from "react";
import Banner from "./Banner";
import Galllery from "./Galllery";
import CategoryTabs from "./categoryTabs/CategoryTabs";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./Testimonials";
import BlogSection from "./blogsection/BlogSection";
import setTitle from "../../titleHook/TitleHook";
// ..
AOS.init();

const Home = () => {
  setTitle("Home");
  return (
    <div>
      <div data-aos="fade-in">
        <Banner></Banner>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000">
        <Galllery></Galllery>
      </div>
      <div data-aos="fade-right" data-aos-duration="2000">
        <CategoryTabs></CategoryTabs>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000">
        <Testimonial></Testimonial>
      </div>
      <div data-aos="flip-right" data-aos-duration="2000">
        <BlogSection></BlogSection>
      </div>
    </div>
  );
};

export default Home;
