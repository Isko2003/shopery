// import React from 'react'
// import PageContainer from '../Components/Common/PageContainer';
import ProductCard from "../../Components/Common/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { productData } from "../../Data/productData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../Styles/swiper.css";
import { Autoplay } from "swiper/modules";

const RelatedProducts = () => {
  return (
    <div className="section">
      <div className="flex justify-center pt-3 pb-4 items-center">
        <h1 className="text-3xl font-bold py-1">Related Products</h1>
      </div>
      <div className="flex justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={5}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {productData.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={item} key={item.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
