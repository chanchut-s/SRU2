import React from 'react'

interface CardAboutInnoProps {
    text: string;
    image: string;
}

function CardAboutInno(a: CardAboutInnoProps) {
    return (
        <div className="group relative block">
            <div className="relative flex h-full transform items-end bg-white transition-transform group-hover:-translate-y-2 duration-500 group-hover:shadow-md group-hover:shadow-gray-700">
                <div className="transition-opacity group-hover:absolute group-hover:opacity-0">
                    <img
                        src={a.image} alt=""
                        className="w-screen h-[100px] object-cover" />
                </div>
                <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 duration-500">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661434779070-cf8fc0e253ab?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                        className="w-screen h-[100px] object-cover" />
                </div>
                <div className="absolute inset-0 p-4 flex items-center justify-center text-xl font-medium sm:text-2xl text-center">{a.text}</div>
            </div>
        </div>
    )
}

export default CardAboutInno