import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface CardBlogNewsProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  updatedAt: string;
  pageType: 'news' | 'event';
}

const CardBlogNews: React.FC<CardBlogNewsProps> = ({ id, title, thumbnailUrl, updatedAt, pageType }) => {
  const locale = useLocale()

  // แปลงวันที่เป็นรูปแบบที่อ่านง่ายขึ้น
  const formattedDate = new Date(updatedAt).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const href = pageType === 'news' ? `/${locale}/news-read/${id}` : `/${locale}/event-read/${id}`

  return (
    <Link href={href}>
      <div className='group relative block'>
        <div className="relative transform transition-transform group-hover:-translate-y-2 duration-500 flex flex-col">
          <figure className="flex justify-center overflow-hidden flex-shrink-0 group-hover:shadow-gray-700 group-hover:shadow-md duration-1000 bg-gray-200 ">
            <img
              src={`http://localhost:1337${thumbnailUrl}`}
              alt={title}
              className="h-[16rem] sm:h-[18rem] md:h-[14rem] w-full object-scale-down duration-500 group-hover:scale-110"
            />
          </figure>
          <div className='mt-2'>
            <p className="text-sm text-gray-500">{formattedDate}</p>
            <h3 className="text-lg font-medium text-gray-900 sm:text-xl text-start line-clamp-3">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardBlogNews