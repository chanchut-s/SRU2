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
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface SwiperHeroProps {
  BannerUrl: any[];
}

function SwiperHero({ BannerUrl }: SwiperHeroProps) {

  const locale = useLocale()
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
        {BannerUrl.map((news: any) => (
          <SwiperSlide key={news.id} className="relative">
            <Link href={`/${locale}/news-read/${news.id}`}>
            <div className="relative w-full aspect-[21/9] overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={`http://localhost:1337${news.attributes.thumbnail.data.attributes.url}`}
                alt={news.attributes.thumbnail.data.attributes.alternativeText || "Slider image"}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 md:h-1/3  bg-black bg-opacity-50 flex justify-center text-white text-lg font-semibold p-1">
                <p className='text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-ุ6xl line-clamp-2'>{news.attributes.title}</p>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperHero