import React from "react";
import Banner from "./Banner";
import Galllery from "./Galllery";
import CategoryTabs from "./categoryTabs/CategoryTabs";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./Testimonials";
import BlogSection from "./blogsection/BlogSection";
// ..
AOS.init();

const Home = () => {
  return (
    <div>
      <div data-aos="fade-in">
        <Banner></Banner>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000">
        <Galllery></Galllery>
      </div>
      <div data-aos="fade-right">
        <CategoryTabs></CategoryTabs>
      </div>
      <div data-aos="fade-left" data-aos-duration="1500">
        <Testimonial></Testimonial>
      </div>
      <div data-aos="fade-out" data-aos-duration="1500">
        <BlogSection></BlogSection>
      </div>
    </div>
  );
};

export default Home;
