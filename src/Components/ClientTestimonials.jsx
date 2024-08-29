import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Styles/swiper.css';
import { Autoplay } from 'swiper/modules';
import { clientData } from '../Data/clientTestimonials';
import ClientCard from './clientCard';

const ClientTestimonials = () => {
  return (
    <div className='w-[80%] mx-auto p-6 pb-20'>
        <div className='flex justify-between pt-3 pb-4 items-center'>
            <h2>Client Testimonials</h2>
            <div>
                <span><FaArrowLeft /></span>
                <span><FaArrowRight /></span>
            </div>
        </div>
        <div className='flex justify-center'>
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
                    clientData.map((item,index) => {
                        <SwiperSlide key={index}>
                            <ClientCard client={item} key={index} />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    </div>
  )
}

export default ClientTestimonials