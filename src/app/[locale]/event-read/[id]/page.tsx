import CardEvent from '@/app/components/CardEvent'
import Heading from '@/app/components/Heading'
import { useLocale } from 'next-intl'
import React from 'react'

function EventRead() {
  const locale = useLocale()

  return (
    <div className='bg-gray-100'>
      <div className="flex justify-center items-center  absolute bg-black w-full bg-opacity-60">
        <div className="w-full max-w-screen-xl mx-3 sm:mx-10 lg:mx-[4rem]">
          <div className="breadcrumbs text-sm text-white">
            <ul>
              <li><a href={`/${locale}`}>Home</a></li>
              <li><a href={`/${locale}/event`}>Event</a></li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, quia.</li>
            </ul>
          </div>
        </div>
      </div>
      <Heading imgUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className='grid justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] pb-5'>
        <div className='bg-white relative w-full max-w-screen-xl p-5 md:p-10 shadow-xl'>
          <div className=''>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, quia.</h1>
            <p className='mt-1 text-center font-light'>xx/xx/2024</p>
            <div className='my-4 mx-auto h-auto max-w-screen-lg object-cover'>
              <img src="https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, accusantium harum minus consequatur totam non ut quis, voluptas exercitationem suscipit tempore sit tenetur tempora saepe, voluptatem molestias quae deleniti. Omnis accusantium officiis qui blanditiis autem dolorem atque reprehenderit repellat reiciendis quidem, quis et delectus eos minus ad, dolores obcaecati laboriosam?</p>
          </div>
        </div>
        <div className='mt-5 w-full max-w-screen-xl'>
          <h1 className='text-3xl sm:text-4xl text-blue-900'>ข่าวกิจกรรมใหม่</h1>
          <div className='p-5 grid justify-items-center'>
            <div className='grid grid-cols-1 gap-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
              <CardEvent />
              <CardEvent />
              <CardEvent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventRead