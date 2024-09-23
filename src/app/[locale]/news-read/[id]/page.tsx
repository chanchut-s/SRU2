import React from 'react'
import Heading from '@/app/components/custom/Heading'
import Link from 'next/link'
import BlockRendererClient from '@/app/components/custom/BlockRendererClient'
import CardBlogNews from '@/app/components/ui/CardBlogNews'
import { notFound } from 'next/navigation'
import { getNewsIdData, getRelatedNews } from '@/app/api/strapi'

interface NewsData {
  id: number;
  attributes: {
    title: string;
    detail: {
      type: string;
      children: { type: string; text: string }[];
    }[];
    start: string;
    publishedAt: string;
    slug: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}
// async function getNewsIdData(id: string) {
//   const res = await fetch(`http://localhost:1337/api/blog-publicities/${id}?populate=*`, { next: { revalidate: 60 } })
//   if (!res.ok) {
//     throw new Error('Failed to fetch event data')
//   }
//   const data = await res.json();
//   return data.data;
// }

// async function getRelatedNews() {
//   const res = await fetch('http://localhost:1337/api/blog-publicities?populate=thumbnail&sort=start:desc', { next: { revalidate: 60 } })
//   if (!res.ok) {
//     throw new Error('Failed to fetch related events')
//   }

//   const data = await res.json()

//   return data
// }


export default async function NewsRead({ params: { locale, id } }: { params: { locale: string, id: string } }) {
  const newsData = await getNewsIdData(id)
  const relatedNews = await getRelatedNews()

  if (!newsData) {
    // จัดการเมื่อไม่พบข้อมูล เช่นแสดงหน้า 404 หรือข้อความแจ้งเตือน
    return notFound();
    }

  const formattedDate = new Date(newsData.attributes.start).toLocaleDateString('th-TH', {
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
              <li><a href={`/${locale}`}>หน้าหลัก</a></li>
              <li><a href={`/${locale}/event`}>ประชาสัมพันธ์</a></li>
              <li>{newsData.attributes.title}</li>
            </ul>
          </div>
        </div>
      </div>
      <Heading imgUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className='flex flex-col justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] pb-5'>
        <div className='bg-white relative w-full max-w-screen-xl p-5 md:p-10 shadow-xl'>
          <div className=''>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900 text-center'>{newsData.attributes.title}</h1>
            <p className='mt-1 text-center font-light'>{formattedDate}</p>
            <div className='my-4 flex justify-center max-w-full object-cover'>
              <img src={`http://localhost:1337${newsData.attributes.thumbnail.data.attributes.url}`} alt={newsData.attributes.title} />
            </div>
            <div className='prose max-w-none'>
              <BlockRendererClient content={newsData.attributes.detail} />
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
                  start={relatedNewsItem.attributes.start}
                  pageType="news"
                  slug={relatedNewsItem.attributes.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}