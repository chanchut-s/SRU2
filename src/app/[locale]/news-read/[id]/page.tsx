import React from 'react'
import Heading from '@/app/components/custom/Heading'
import Link from 'next/link'
import BlockRendererClient from '@/app/components/custom/BlockRendererClient'
import CardBlogNews from '@/app/components/ui/CardBlogNews'

interface NewsData {
  id: number;
  attributes: {
    title: string;
    detail: {
      type: string;
      children: { type: string; text: string }[];
    }[];
    updatedAt: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}

async function getNewsData(id: string) {
  const res = await fetch(`http://localhost:1337/api/blog-publicities/${id}?populate=*`, { next: { revalidate: 60 } })
  if (!res.ok) {
    throw new Error('Failed to fetch event data')
  }
  return res.json()
}

async function getRelatedNews() {
  const res = await fetch('http://localhost:1337/api/blog-publicities?populate=*', { next: { revalidate: 60 } })
  if (!res.ok) {
    throw new Error('Failed to fetch related events')
  }

  const data = await res.json()

  // Sorting related events by updated date in descending order
  data.data.sort((a: NewsData, b: NewsData) => {
    return new Date(b.attributes.updatedAt).getTime() - new Date(a.attributes.updatedAt).getTime()
  })

  return data
}


export default async function NewsRead({ params: { locale, id } }: { params: { locale: string, id: string } }) {
  const newsData = await getNewsData(id)
  const relatedNews = await getRelatedNews()

  const news = newsData.data
  const formattedDate = new Date(news.attributes.updatedAt).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className='bg-gray-100'>
      <div className="flex justify-center items-center absolute bg-black w-full bg-opacity-60">
        <div className="w-full max-w-screen-xl mx-3 sm:mx-10 lg:mx-[4rem]">
          <div className="breadcrumbs text-sm text-white">
            <ul>
              <li><Link href={`/${locale}`}>หน้าหลัก</Link></li>
              <li><Link href={`/${locale}/event`}>ประชาสัมพันธ์</Link></li>
              <li>{news.attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>
      <Heading imgUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className='mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] pb-5'>
        <div className='bg-white relative w-full max-w-screen-xl p-5 md:p-10 shadow-xl'>
          <div className=''>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900 text-center'>{news.attributes.title}</h1>
            <p className='mt-1 text-center font-light'>{formattedDate}</p>
            <div className='my-4 flex justify-center max-w-full object-cover'>
              <img src={`http://localhost:1337${news.attributes.thumbnail.data.attributes.url}`} alt={news.attributes.title} />
            </div>
            <div className='prose max-w-none'>
              <BlockRendererClient content={news.attributes.detail} />
            </div>
          </div>
        </div>
        <div className='mt-5 w-full max-w-screen-xl'>
          <h1 className='text-3xl sm:text-4xl text-blue-900'>ข่าวกิจกรรมใหม่</h1>
          <div className='p-5 grid justify-items-center'>
            <div className='grid grid-cols-1 gap-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {relatedNews.data.slice(0, 3).map((relatedNewsItem: NewsData) => (
                <CardBlogNews
                  key={relatedNewsItem.id}
                  id={relatedNewsItem.id}
                  title={relatedNewsItem.attributes.title}
                  thumbnailUrl={relatedNewsItem.attributes.thumbnail.data.attributes.url}
                  updatedAt={relatedNewsItem.attributes.updatedAt}
                  pageType="news"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}