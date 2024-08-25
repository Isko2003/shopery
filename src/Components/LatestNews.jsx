import React from 'react'
import { latestNewsData } from '../Data/latestNewsData'
import LatestNewsCard from './Common/LatestNewsCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/swiper.css';
import { Autoplay } from 'swiper/modules';

const LatestNews = () => {
  return (
    <div className='w-[80%] mx-auto p-6 pb-20'>
        <div className='flex justify-center pt-3 pb-4 items-center'>
            <h1 className='text-3xl font-bold'>Latest News</h1>
        </div>
        <div className='flex justify-around w-[100%]'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            onLoopFix={true}
            lazyPreloadPrevNext={false}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1280: {
                    slidesPerView: 3,
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
                    latestNewsData.map((item,index) => (
                        <SwiperSlide key={index}>
                          <LatestNewsCard news={item} key={index} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default LatestNews