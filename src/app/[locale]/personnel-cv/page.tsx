import React from 'react'

function PersonnelCV() {
  return (
    <div className=''>
        <div className='mt-10 mx-4'>
            <div className=' container flex flex-col gap-[1rem] md:flex-row md:gap-[4rem] justify-center '>
                <div className='max-w-[370px] mx-auto md:mx-0'>
                    <img 
                    src="https://images.unsplash.com/photo-1668302785920-00972ac2b266?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="" 
                    className='w-full h-auto object-cover'/>
                </div>
                <div className='md:w-1/2 space-y-2'>
                    <h1 className='text-3xl'>ชาญชัช สว่างพันธุ์</h1>
                    <p className='text-2xl'>ตำแหน่งงาน</p>
                    <div className='flex flex-col md:flex-row md:gap-12'>
                        <div>
                            <p className='text-lg'>08-255480</p>
                        </div>
                        <div>
                            <p className='text-lg'>xxxxxx@gmail.com</p>
                        </div>
                    </div>
                    <hr className='mt-4 border-b-4 border-gray-300 max-w-screen' />
                    <h1>ระดับการศึกษา</h1>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonnelCV