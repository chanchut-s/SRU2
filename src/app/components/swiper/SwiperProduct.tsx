'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperProductStyles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

interface ServicesPorp {
  rewards: any[];
}

export default function SwiperProduct({ rewards }: ServicesPorp) {
  return (
    <>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          },
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        speed={2000}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {rewards.map((rewards: any) => (
          <SwiperSlide key={rewards.id} className='p-3'>
            <a href={rewards.attributes.url} target="_blank">
              <img
                className="w-full h-full object-cover object-center hover:scale-110 duration-500"
                src={`http://localhost:1337${rewards.attributes.image.data.attributes.url}`}
                alt={"Slider image"}
                loading="lazy"
              />
            </a>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
