import React from 'react'

interface CardAboutInnoProps {
    text: string;
    image1: string;
    image2?: string;
}

function CardAboutInno(a: CardAboutInnoProps) {
    return (
        <div className="group relative block">
  <div className="relative flex h-full transform items-end bg-white transition-transform group-hover:-translate-y-2 duration-500 group-hover:shadow-md group-hover:shadow-gray-700">
    <div className="transition-opacity group-hover:absolute group-hover:opacity-0">
      {/* Add a dark overlay to the first image */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <img
        src={a.image1}
        alt=""
        className="w-screen h-[100px] object-cover"
      />
    </div>
    <div className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 duration-500">
      {/* Add a dark overlay to the second image */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <img
        src={a.image2}
        alt=""
        className="w-screen h-[100px] object-cover"
      />
    </div>
    <div className="absolute inset-0 p-4 flex items-center justify-center text-xl font-medium sm:text-2xl text-center text-gray-100">
      {a.text}
    </div>
  </div>
</div>


    )
}

export default CardAboutInno