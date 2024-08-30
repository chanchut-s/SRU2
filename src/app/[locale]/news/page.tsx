import CardNew from '@/app/components/CardNews'
import Heading from '@/app/components/Heading'
import React from 'react'

function News() {
  return (
    <div className='bg-gray-100'>
      <Heading imgUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className='grid justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] shadow-xl'>
        <div className='bg-white relative w-full max-w-screen-xl p-5 '>
          <div className='grid justify-center items-center p-[1rem] md:p-[2rem] space-y-8 '>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900'>ข่าวประชาสัมพันธ์</h1>
            <div className='grid grid-cols-1 gap-8 md:gap-14 md:grid-cols-2 lg:grid-cols-3'>
              <CardNew />
              <CardNew />
              <CardNew />
              <CardNew />
              <CardNew />
              <CardNew />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News