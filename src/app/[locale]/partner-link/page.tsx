import Heading from '@/app/components/Heading'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function PartnerLink() {
    const locale = useLocale()
    return (
        <div className='bg-gray-100'>
            <div className="flex justify-center items-center absolute bg-black w-full bg-opacity-60">
                <div className="w-full max-w-screen-xl mx-3 sm:mx-10 lg:mx-[4rem]">
                    <div className="breadcrumbs text-sm text-white">
                        <ul>
                            <li><a href={`/${locale}`}>Home</a></li>
                            <li>Partner</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Heading imgUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <div className="flex justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] pb-5">
                <div className='bg-white relative p-[1rem] md:p-[2rem] shadow-xl w-full max-w-screen-xl'>
                    <div className='space-y-4'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900'>หน่วยงานที่เกี่ยวข้อง</h1>
                        <div className='grid justify-items-center gap-4'>
                            <Link href="">
                                <img
                                    src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Shoes"
                                    className="h-auto max-h-[10rem] object-cover duration-500 group-hover:scale-110" />
                            </Link>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, doloribus.</p>
                        </div>

                        <div className='grid justify-items-center gap-4'>
                            <Link href="">
                                <img
                                    src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Shoes"
                                    className="h-auto max-h-[10rem] object-cover duration-500 group-hover:scale-110" />
                            </Link>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, doloribus.</p>
                        </div>

                        <div className='grid justify-items-center gap-4'>
                            <Link href="">
                                <img
                                    src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Shoes"
                                    className="h-auto max-h-[10rem] object-cover duration-500 group-hover:scale-110" />
                            </Link>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, doloribus.</p>
                        </div>
                        
                        <div className='grid justify-items-center gap-4'>
                            <Link href="">
                                <img
                                    src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Shoes"
                                    className="h-auto max-h-[10rem] object-cover duration-500 group-hover:scale-110" />
                            </Link>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, doloribus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerLink