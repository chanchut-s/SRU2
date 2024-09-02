import React from 'react'
import { useLocale } from 'next-intl';

function PersonnelCV() {
    const locale = useLocale()

    return (
        <div className=''>
            <div className='pt-16 mx-3 md:mx-20 flex justify-center items-center'>
                <div className='flex flex-col gap-[1rem] md:flex-row w-auto md:max-w-screen-xl pb-5'>
                    <div className='md:mix-w-[420px] w-full px-4'>
                        <img
                            src="https://images.unsplash.com/photo-1668302785920-00972ac2b266?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className='w-full h-auto object-cover' />
                    </div>
                    <div className='w-full space-y-2'>
                        <h1 className='text-3xl'>ชาญชัช สว่างพันธุ์</h1>
                        <p className='text-2xl'>ตำแหน่งงาน</p>
                        <div className='flex flex-col md-custom:flex-row md-custom:gap-12'>
                            <div className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5 text-blue-900'>
                                    <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                                <p className='text-lg whitespace-nowrap'>08-2995-5480</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-5 h-5 text-blue-900'>
                                    <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                                <p className='text-lg'>xxxxxxxxxxxx@gmail.com</p>
                            </div>
                        </div>
                        <hr className='mt-4 border-b-4 border-gray-300 max-w-screen' />
                        <h1>ระดับการศึกษา</h1>
                        <div className='flex w-full'>
                            <div className="divider divider-horizontal"></div>
                            <ul className="list-disc list-inside">
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, porro.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus.</li>
                            </ul>
                        </div>
                        <h1>วิชาที่ถนัด</h1>
                        <div className='flex w-full'>
                            <div className="divider divider-horizontal"></div>
                            <div>
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonnelCV