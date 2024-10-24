'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiperHeroStyles.css';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import HeroBanner from '../custom/HeroBanner';
import { flightRouterStateSchema } from 'next/dist/server/app-render/types';

interface SwiperHeroProps {
  BannerUrl: any[];
}

function SwiperHero({ BannerUrl }: SwiperHeroProps) {
  return (
    <div className=''>
      <Swiper
        navigation={false}
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
        {BannerUrl.map((banner: any) => (
          <SwiperSlide key={banner.id} className="relative">
            <div className="relative w-full aspect-[21/9] overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={`http://localhost:1337${banner.attributes.image.data.attributes.url}`}
                alt={banner.attributes.image.data.attributes.alternativeText || "Slider image"}
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperHero