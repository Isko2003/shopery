// import React from 'react'
// import PageContainer from '../Components/Common/PageContainer';
import ProductCard from './Common/ProductCard';
import { FaArrowRightLong } from "react-icons/fa6";
import { productData } from '../Data/productData';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/swiper.css';
import { Autoplay } from 'swiper/modules';

const FeaturedProducts = () => {
  return (
    <div className='w-[80%] mx-auto p-6 pb-20'>
        <div className='flex justify-between pt-3 pb-4 items-center'>
            <h1 className='text-2xl font-medium'>Featured Products</h1>
            <div className='flex gap-3 items-center justify-center cursor-pointer view-all'>
                <span className='text-[#00b207]'>View All</span>
                <span className='text-[#00b207]'><FaArrowRightLong /></span>
            </div>
        </div>
        <div className='flex justify-center'>
            <Swiper
            spaceBetween={20}
            centeredSlides={true}
            slidesPerView={5}
            loop={true}
            breakpoints={{
                320: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                }
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            modules={[Autoplay]}
            className='mySwiper'
            >
            {
                productData.map((item,index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={item} key={index}/>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    </div>
  )
}

export default FeaturedProducts