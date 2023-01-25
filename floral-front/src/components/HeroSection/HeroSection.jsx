import React from 'react'
import "./hero.scss"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
const HeroSection = () => {
  return (
    <>
    <div className='hero-article'>
      <p><i>Floral</i></p>
      <h1>Excellent bouquets for you</h1>
    </div>
    <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img  src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" alt="" /></SwiperSlide>

    
      </Swiper>
    </>
  )
}

export default HeroSection