import React from 'react'
import Heading from '@/app/components/custom/Heading'
import CardBlogNews from '@/app/components/ui/CardBlogNews';
import { PaginationComponent } from '@/app/components/custom/Pagination';
import { getTranslations } from 'next-intl/server';
import SearchComponent from '@/app/components/custom/Search';

interface NewsData {
  id: number;
  attributes: {
    title: string;
    publishedAt: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        }
      }
    }
  }
}

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

async function getNewsData(query: string, page: number, pageSize: number) {
  const res = await fetch(`http://localhost:1337/api/blog-events?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&filters[title][$contains]=${query}&sort=publishedAt:desc`, { next: { revalidate: 60 } })
  if (!res.ok) {
    throw new Error('Failed to fetch event data')
  }
  const data = await res.json()

  return data
}

export default async function NewsPage({
  params: { locale },
  searchParams
}: {
  params: { locale: string };
  searchParams: SearchParamsProps['searchParams'];
}) {
  const t = await getTranslations('Event');
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = 9;

  const { data, meta } = await getNewsData(query, currentPage, pageSize);
  const pageCount = meta.pagination.pageCount;

  if (!data) return null;

  return (
    <div className='bg-gray-100'>
      <div className="flex justify-center items-center absolute bg-black w-full bg-opacity-60">
        <div className="w-full max-w-screen-xl mx-3 sm:mx-10 lg:mx-[4rem]">
          <div className="breadcrumbs text-sm text-white">
            <ul>
              <li><a href={`/${locale}`}>{t("home")}</a></li>
              <li>{t("event")}</li>
            </ul>
          </div>
        </div>
      </div>

      <Heading imgUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <div className='flex justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] pb-5'>
        <div className='bg-white relative w-full max-w-screen-xl shadow-xl'>
          <div className='p-[1rem] md:p-[2rem] space-y-4 md:space-y-8'>
            <div className='flex flex-col md:flex-row gap-4 justify-between'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900'>{t("event")}</h1>
              <SearchComponent initialQuery={query} placeholder={t("placeholder")}/>
            </div>


            <div className='grid grid-cols-1 gap-8 md:gap-14 md:grid-cols-2 lg:grid-cols-3'>
              {data.map((news: NewsData) => (
                <CardBlogNews
                  key={news.id}
                  id={news.id}
                  title={news.attributes.title}
                  thumbnailUrl={news.attributes.thumbnail.data.attributes.url}
                  updatedAt={news.attributes.publishedAt}
                  pageType="event"
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <PaginationComponent pageCount={pageCount} />
          </div>
        </div>
      </div>
    </div>
  )
}