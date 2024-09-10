import CardProfile from '@/app/components/ui/CardProfile';
import Heading from '@/app/components/custom/Heading';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react'

function Lecturer() {
  const locale = useLocale()
  const t = useTranslations('Lecturer')
  const imgUrl = "https://plus.unsplash.com/premium_photo-1661306465544-cc55151ab336?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className='bg-gray-100'>
      <div className="flex justify-center items-center  absolute bg-black w-full bg-opacity-60">
        <div className="w-full max-w-screen-xl mx-3 sm:mx-10 lg:mx-[4rem]">
          <div className="breadcrumbs text-sm text-white">
            <ul>
              <li><a href={`/${locale}`}>Home</a></li>
              <li>lecturer</li>
            </ul>
          </div>
        </div>
      </div>
      <Heading imgUrl={imgUrl} />
      <div className='flex justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] pb-5'>
        <div className='bg-white relative w-full max-w-screen-xl shadow-xl'>
          <div className="p-[1rem] md:p-[2rem]  space-y-4 md:space-y-8 ">
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900'>{t("title")}</h1>
            <div className="grid grid-cols-1 gap-8 sm:gap-7 sm:grid-cols-2 lg:grid-cols-4">
              <CardProfile />
              <CardProfile />
              <CardProfile />
              <CardProfile />
              <CardProfile />
              <CardProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lecturer