import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
const Banner = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    fade: true,
  };
  return (
    <div className="w-[90%] mx-auto my-10">
      <Slider {...settings}>
        <div className=" bg-base-100 shadow-xl">
          <div className=" flex lg:flex-row flex-col-reverse p-8">
            <div className="lg:w-1/2 flex flex-col justify-center gap-8 ">
              <h1 className="text-5xl font-bold text-center">
                Welcome to Lego <span className="text-primary">Palace</span>
              </h1>
              <p className="text-center">
                Lego<span className="text-primary">Palace</span> is one of the best market place to
                sell all kind of lego toy. So what are you waiting for!!!!
              </p>
              <button className="text-2xl md:w-1/2 font-bold btn-primary btn mx-auto">
                Start Selling
              </button>
            </div>
            <div className="h-96  lg:w-1/2">
              <img src={banner1} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
        <div className=" bg-base-100 shadow-xl">
          <div className="md:h-full flex lg:flex-row flex-col-reverse p-8">
            <div className="lg:w-1/2 flex flex-col justify-center gap-4 ">
              <h1 className="text-5xl font-bold text-center">
                Get 50% <span className="text-primary"> Extra</span>
              </h1>
              <p>
                Lego<span className="text-primary">Palace</span> is giving 50% extra on this
                product.Don't miss the chance.
              </p>
              <button className="text-2xl md:w-1/2 font-bold btn-primary btn">sell now</button>
            </div>
            <div className=" h-96  lg:w-1/2">
              <img src={banner2} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
