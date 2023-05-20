import React, { useEffect, useState } from "react";
import Testimony from "./Testimony";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/testimony")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-3">
        <div className="w-full bg-white px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl text-primary md:text-7xl font-bold mb-5">
                What people <br />
                are saying.
              </h1>
              <h3 className="text-xl mb-5 font-light">
                Don't take our word <br />Take theirs..
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-primary ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-primary"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-primary ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-primary ml-1"></span>
              </div>
            </div>
            <div className="-mx-3  items-start">
              <Swiper
                slidesPerView={1}
                spaceBetween={5}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {testimonials.map((testimony) => (
                  <SwiperSlide key={testimony._id}>
                    <Testimony data={testimony} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
