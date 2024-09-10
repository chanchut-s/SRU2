'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiperHeroStyles.css';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

function SwiperHero() {
  return (
    <div className=''>
      <Swiper
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="myUniqueSwiper"
      >
        <SwiperSlide><img className='h-auto max-h-[30rem] w-full object-contain' src="https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-auto max-h-[30rem] w-full object-contain' src="https://images.unsplash.com/photo-1719937051124-91c677bc58fc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-auto max-h-[30rem] w-full object-contain' src="https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperHero