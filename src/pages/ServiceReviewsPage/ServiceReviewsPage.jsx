import React from 'react';
import './ServiceReviewsPage.scss';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
];

const ServiceReviewsPage = () => {
    return (
        <div className='center serviceReviewsPage'>
            <div className='serviceReviewsPageTitle'>
                다양한 고객들의 소중한 이용 후기를 확인해보세요.
            </div>
            <div className='reviewsSection'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    className="mySwiper"
                >
                    {slide_img.map((img, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={img} alt="reviews" />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className='bgBox'>
                <div className='bgLineGold1'></div>
                <div className='bgLineNavy1'></div>
                <div className='bgLineGold2'></div>
                <div className='bgLineNavy2'></div>
                <div className='bgLineGold3'></div>
                <div className='bgLineNavy3'></div>




            </div>
        </div>
    )
}

export default ServiceReviewsPage;