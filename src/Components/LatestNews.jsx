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
    <div className='section'>
        <div className='flex justify-center pt-3 pb-4 items-center'>
            <h1 className='text-3xl font-bold'>Latest News</h1>
        </div>
        <div className='flex justify-between'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={3}
            slidesPerGroup={1}
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
                    latestNewsData.map((item,index) => (
                        <SwiperSlide key={index}>
                          <LatestNewsCard news={item} key={index}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default LatestNews