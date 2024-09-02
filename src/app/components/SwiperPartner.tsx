'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CardPartner from './CardPartner';

function SwiperPartner() {
    return (
        <div className='relative'>
            <Swiper
                loop={true}
                
                breakpoints={{
                    600: {
                        slidesPerView: 2
                    },
                    740: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                speed={2000}
                modules={[Autoplay, Pagination, Navigation]}
                className="cardpartner-swiper-container"
            >
                <SwiperSlide className='p-2'><CardPartner /></SwiperSlide>
                <SwiperSlide className='p-2'><CardPartner /></SwiperSlide>
                <SwiperSlide className='p-2'><CardPartner /></SwiperSlide>
                <SwiperSlide className='p-2'><CardPartner /></SwiperSlide>
                <SwiperSlide className='p-2'><CardPartner /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperPartner