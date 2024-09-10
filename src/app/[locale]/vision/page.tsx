import Heading from '@/app/components/custom/Heading'
import { useLocale } from 'next-intl'
import React from 'react'

function Vision() {
    const locale = useLocale()
    return (
        <div className='bg-gray-100'>
            <div className="flex justify-center items-center absolute bg-black w-full bg-opacity-60">
                <div className="w-full max-w-screen-xl mx-3 sm:mx-10 lg:mx-[4rem]">
                    <div className="breadcrumbs text-sm text-white">
                        <ul>
                            <li><a href={`/${locale}`}>Home</a></li>
                            <li>Vision</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Heading imgUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <div className="flex justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] pb-5">
                <div className='bg-white relative p-[1rem] md:p-[2rem] shadow-xl w-full max-w-screen-xl'>
                    <div className='space-y-4'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900'>วิสัยทัศ</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti, autem quas magni neque officia assumenda excepturi accusantium totam quam nesciunt fugit quaerat soluta ut ratione, ipsa earum eligendi nisi dolores animi dolor aperiam. Velit in quam, omnis temporibus consectetur ipsum doloremque atque quibusdam eveniet praesentium quasi rem, vero iste.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision