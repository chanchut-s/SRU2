import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function CardNewsHome() {
    const locale = useLocale()

    return (
        <Link href={`/${locale}/news-read/1`}>
            <div className='group relative block w-auto max-w-full'>
                <div className="bg-base-100 relative transform transition-transform group-hover:-translate-y-2 duration-500 flex flex-col md:flex-row gap-2 md:gap-6">
                    <figure className="flex justify-center md:justify-start overflow-hidden flex-shrink-0 group-hover:shadow-gray-700 group-hover:shadow-md duration-1000">
                        <img
                            src="https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Shoes"
                            className="h-[15rem] sm:h-[30rem] md:h-[9rem] w-[33rem] sm:w-[40rem] md:w-[14rem] object-cover duration-500 group-hover:scale-110" />
                    </figure>
                    <div className='flex-grow'>
                        <p>xx/xx/xxxx</p>
                        <h3 className="text-lg font-medium text-gray-900 sm:text-xl text-start line-clamp-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, aliquam!</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardNewsHome