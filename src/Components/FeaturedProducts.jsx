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
    <div className='section'>
        <div className='flex justify-between pt-3 pb-4 items-center'>
            <h1 className='text-2xl font-medium'>Featured Products</h1>
            <div className='flex gap-3 items-center justify-center cursor-pointer view-all'>
                <span className='text-[#00b207]'>View All</span>
                <span className='text-[#00b207]'><FaArrowRightLong /></span>
            </div>
        </div>
        <div className='flex justify-center'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={4}
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
                        <ProductCard product={item} key={item.id}/>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    </div>
  )
}

export default FeaturedProducts