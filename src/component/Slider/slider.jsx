import React from "react";
import "./slider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        a11y={{}}
        loop={true}
        effect={"coverflow"}
        initialSlide={4}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={7}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: -10,
          modifier: 1,
          scale: 0.8,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="first">
            <img
              className="first-img"
              src="../../../public/Ellipse 15.svg"
              alt="json"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="second">
            <img
              className="second-img"
              src="../../../public/Ellipse 16.svg"
              alt="json"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="third">
            <img
              className="third"
              src="../../../public/Ellipse 17.svg"
              alt="json"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="4">
            <img
              className="fourth-img"
              src="../../../public/Ellipse 18.svg"
              alt="json"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="5">
            <img
              className="fifth"
              src="../../../public/Ellipse 19.svg"
              alt="json"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="6">
            <img
              className="sixth-img"
              src="../../../public/Ellipse 20.svg"
              alt="json"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="7">
            <img
              className="seventh-img"
              src="../../../public/Ellipse 21.svg"
              alt="json"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
