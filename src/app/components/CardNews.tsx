import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

function CardNew() {
    const locale = useLocale()

    return (
        <Link href={`/${locale}/news-read/1`}>
            <div className='group relative block w-auto max-w-full'>
                <div className="relative transform transition-transform group-hover:-translate-y-2 duration-500 flex flex-col">
                    <figure className="flex justify-center overflow-hidden flex-shrink-0 group-hover:shadow-gray-700 group-hover:shadow-md duration-1000 bg-gray-300">
                        <img
                            src="https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Shoes"
                            className="h-auto max-h-[25rem] w-full object-cover duration-500 group-hover:scale-110" />
                    </figure>
                    <div className='mt-2'>
                        <p>xx/xx/xxxx</p>
                        <h3 className="text-lg font-medium text-gray-900 sm:text-xl text-start line-clamp-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, aliquam!</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardNew