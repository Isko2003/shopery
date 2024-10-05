import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Styles/swiper.css";
import { Autoplay } from "swiper/modules";
import { clientData } from "../Data/clientTestimonials";
import ClientCard from "./ClientCard";

const ClientTestimonials = () => {
  return (
    <div className="w-[100%] mx-auto pb-20 bg-[#f2f2f2] py-6">
      <div className="flex justify-between pt-3 pb-4 items-center px-0 sm:px-24 ">
        <h1 className="text-3xl font-bold">Client Testimonials</h1>
        <div className="flex gap-5">
          <span className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <FaArrowLeft className="cursor-pointer" />
          </span>
          <span className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center">
            <FaArrowRight className="cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="flex justify-between mx-auto w-[85%]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {clientData.map((item, index) => (
            <SwiperSlide key={index}>
              <ClientCard client={item} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientTestimonials;
