import { notFound } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import BlockRendererClient from '@/app/components/custom/BlockRendererClient';
import Heading from '@/app/components/custom/Heading';
import ServiceTitleSwiper from '@/app/components/swiper/ServiceTitleSwiper';
import { getTranslations } from 'next-intl/server';
import { getServicesData } from '@/app/api/strapi';

// async function getServicesData(slug: string) {
//     const res = await fetch(`http://localhost:1337/api/services?filters[slug]=${slug}&populate=title.Add_Item.image`, { cache: 'no-store' });
//     if (!res.ok) {
//         throw new Error('Failed to fetch service data');
//     }
//     const data = await res.json();
//     return data.data[0].attributes;
// }

function renderAddItemContent(addItem: any, locale: string) {
    if (!addItem || addItem.length === 0) return null;

    return addItem.map((item: any, index: number) => (
        <div key={index} className="flex flex-col md:flex-row gap-4 mt-6 border-b-[1px] pb-6">
            {item.image && item.image.data && (
                <div className="md:w-2/3">
                    <img
                        src={`http://localhost:1337${item.image.data.attributes.url}`}
                        className="rounded-lg object-cover"
                    />
                </div>
            )}
            <div className='flex flex-col gap-1 w-full'>
                <p className='text-xl '>{item.name}</p>
                <div className={item.image ? "md:w-2/3" : "w-full"}>
                    <BlockRendererClient content={item.detail} />
                </div>
            </div>
        </div>
    ));
}

export default async function ServiceDetail({ params: { locale, slug, id } }: { params: { locale: string, slug: string, id: string } }) {
    const t = await getTranslations('navbar');

    const service = await getServicesData(slug);
    if (!service || service.length === 0) {
        return notFound();
    }

    const mainTitle = locale === 'th' ? service.text_th : service.text;
    const selectedTitle = service.title.find((item: any) => item.id.toString() === id);

    if (!selectedTitle) {
        return notFound();
    }

    const titleText = locale === 'th' ? selectedTitle.text_th : selectedTitle.text;

    return (
        <div className='bg-gray-100'>
            <div className="flex justify-center items-center absolute bg-black w-full bg-opacity-60">
                <div className="w-full max-w-screen-xl mx-3 sm:mx-10 lg:mx-[4rem]">
                    <div className="breadcrumbs text-sm text-white">
                        <ul>
                            <li><a href={`/${locale}`}>{t('home')}</a></li>
                            <li>{titleText}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Heading imgUrl='https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

            <div className="flex justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[4rem] lg:-mt-[7rem] pb-5">
                <div className='bg-white relative p-[1rem] md:p-[2rem] shadow-xl w-full max-w-screen-xl min-h-screen'>
                    <div className='space-y-4'>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl text-blue-900 text-center'>{mainTitle}</h1>
                        <div className='border-b-[1px] pb-6'></div>
                        <ServiceTitleSwiper titles={service.title} locale={locale} slug={slug} selectedId={id}/>
                        <div className='border-b-[1px]'></div>
                        {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
                            {service.title.map((item: any) => (
                                <Link key={item.id} href={`/${locale}/services/${slug}/${item.id}`}
                                    className={`text-2xl ${item.id.toString() === id ? 'text-blue-900 font-bold' : 'text-blue-600'} hover:underline`}>
                                    {locale === 'th' ? item.text_th : item.text}
                                </Link>
                            ))}
                        </div> */}
                        <div className='mt-8'>
                            <h2 className='text-2xl text-blue-700'>{titleText}</h2>
                            <div className='mt-6'>
                                <BlockRendererClient content={selectedTitle.detail} />
                                <div className='border-b-[1px] pb-6'></div>
                                {renderAddItemContent(selectedTitle.Add_Item, locale)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}