'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ServiceTitleSwiperStyles.css';
import { Navigation, Pagination } from 'swiper/modules';

interface ServiceTitleSwiperProps {
    titles: any[];
    locale: string;
    slug: string;
    selectedId: string;
}

const ServiceTitleSwiper: React.FC<ServiceTitleSwiperProps> = ({ titles, locale, slug, selectedId }) => {
    const router = useRouter();

    const handleTitleClick = (itemId: string) => {
        router.replace(`/${locale}/services/${slug}/${itemId}`);
    };

    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            loop={true}
            modules={[Navigation]}
            className='mt-4 service-title-swiper-container'
            breakpoints={{
                640: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                },
            }}
        >
            {titles.map((item: any) => (
                <SwiperSlide key={item.id}>
                    <div
                        onClick={() => handleTitleClick(item.id)}
                        className={`cursor-pointer flex justify-center items-center h-[50px] text-center text-2xl
                            ${item.id.toString() === selectedId
                                ? 'text-gray-900 bg-gray-300 '
                                : 'text-gray-400'
                            }`}
                    >
                        {locale === 'th' ? item.text_th : item.text}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ServiceTitleSwiper;