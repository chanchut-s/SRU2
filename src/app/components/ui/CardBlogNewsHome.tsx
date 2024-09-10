import { useLocale } from 'next-intl'
import Link from 'next/link'
import React from 'react'

interface CardBlogNewsHomeProps {
    id: number;
    title: string;
    thumbnailUrl: string;
    updatedAt: string;
    pageType: 'news' | 'event';
}

function CardBlogNewsHome({ id, title, thumbnailUrl, updatedAt, pageType }: CardBlogNewsHomeProps) {
    const locale = useLocale()

    const formattedDate = new Date(updatedAt).toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const href = pageType === 'news' ? `/${locale}/news-read/${id}` : `/${locale}/event-read/${id}`

    return (
        <Link href={href}>
            <div className='group relative block'>
                <div className="bg-base-100 relative transform transition-transform group-hover:-translate-y-2 duration-500 flex flex-col md:flex-row gap-2 md:gap-6">
                    <figure className="flex justify-center items-center md:justify-start overflow-hidden flex-shrink-0 group-hover:shadow-gray-700 group-hover:shadow-md duration-1000 bg-gray-200">
                        <img
                            src={thumbnailUrl}
                            alt={title}
                            className="h-[15rem] sm:h-[30rem] md:h-[9rem] w-[33rem] sm:w-[40rem] md:w-[14rem] object-scale-down duration-500 group-hover:scale-110"
                        />
                    </figure>
                    <div className='flex-grow p-4'>
                        <p className="text-sm text-gray-600">{formattedDate}</p>
                        <h3 className="text-lg font-medium text-gray-900 sm:text-xl text-start line-clamp-4">{title}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardBlogNewsHome;
