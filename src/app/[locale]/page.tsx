import { getTranslations } from "next-intl/server";
import CardEventHome from "../components/ui/CardBlogNewsHome";
import CardAboutInno from "../components/ui/CardAboutInno";
import SwiperProduct from "../components/swiper/SwiperProduct";
import SwiperHero from "../components/swiper/SwiperHero";
import SwiperPartner from "../components/swiper/SwiperPartner";
import CardBlogNewsHome from "../components/ui/CardBlogNewsHome";

export interface BlogNews {
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

async function getBlogData() {
  const res = await fetch('http://localhost:1337/api/blog-news-home?populate=blog_events.thumbnail,blog_publicities.thumbnail', { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error('Failed to fetch blog data');
  }
  return res.json();
}

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations('HomePage');
  const blogData = await getBlogData();
  const events = blogData.data.attributes.blog_events.data;
  const publicities = blogData.data.attributes.blog_publicities.data;
  const imageUrl = "https://plus.unsplash.com/premium_photo-1725400826922-39ffcf68f736?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  return (
    <div className="bg-gray-100">
      <div className="relative z-0">
        <SwiperHero />
      </div>
      <div className="flex justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[2rem] md:-mt-[4rem] pb-5">
        <div className='bg-white relative p-[1rem] md:p-[2rem] shadow-xl w-full max-w-screen-xl'>
          <h1 className="text-2xl sm:text-4xl text-blue-900 font-bold text-center pt-[1rem]">{t('aboutInno')}</h1>

          <div className="mt-5 sm:mt-8 mx-auto grid grid-cols-2 lg:grid-cols-3 justify-items-center">
            <a href={`/${locale}/vision`}>
              <CardAboutInno
                image1={"https://plus.unsplash.com/premium_photo-1725400826922-39ffcf68f736?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                image2={"https://plus.unsplash.com/premium_photo-1725408006810-53ae337c6efd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                text={t('vision')} /></a>
            <CardAboutInno
              image1={"https://plus.unsplash.com/premium_photo-1681505604092-80fa7e4d02f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              image2={"https://plus.unsplash.com/premium_photo-1681505563521-614dba8e7657?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              text={t('history')} />
            <div className="col-span-2 lg:col-span-1">
              <CardAboutInno
                image1={"https://plus.unsplash.com/premium_photo-1663089973327-84d7cdcf8c4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                image2={"https://plus.unsplash.com/premium_photo-1663076135600-00211f1d3787?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                text={t('goals')} /></div>
          </div>

          <h1 className="text-2xl sm:text-4xl text-blue-900 font-bold text-center pt-[2rem]">{t('ourServices')}</h1>
          <div className="md:mt-5">
            <SwiperProduct />
          </div>

          <div className="grid grid-cols-1 md-custom:grid-cols-2 gap-7 pt-4">
            <div className="flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-4xl font-bold text-blue-900">{t('news')}</h1>
                <a href={`/${locale}/news`}><button className="btn bg-orange-600 text-white text-xs px-1.5 py-0.5 font-normal hover:text-gray-900">{t('viewAll')}</button></a>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-7">
                {publicities.slice(0, 3).map((publicitie: BlogNews) => (
                  <CardBlogNewsHome
                    key={publicitie.id}
                    id={publicitie.id}
                    updatedAt={publicitie.attributes.publishedAt}
                    title={publicitie.attributes.title}
                    thumbnailUrl={`http://localhost:1337${publicitie.attributes.thumbnail.data.attributes.url}`}
                    pageType="news"
                  />
                ))}
              </div>
            </div>
            <div className="flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-4xl font-bold text-blue-900">{t('events')}</h1>
                <a href={`/${locale}/event`}><button className="btn bg-orange-600 text-white text-xs px-1.5 py-0.5 font-normal hover:text-gray-900">{t('viewAll')}</button></a>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-7">
                {events.slice(0, 3).map((event: BlogNews) => (
                  <CardBlogNewsHome
                    key={event.id}
                    id={event.id}
                    updatedAt={event.attributes.publishedAt}
                    title={event.attributes.title}
                    thumbnailUrl={`http://localhost:1337${event.attributes.thumbnail.data.attributes.url}`}
                    pageType="event"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-col pt-5">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl sm:text-4xl font-bold text-blue-900">{t('partner')}</h1>
              <a href={`/${locale}/partner-link`}><button className="btn bg-orange-600 text-white text-xs px-1.5 py-0.5 font-normal hover:text-gray-900">{t('viewAll')}</button></a>
            </div>
            <div className="">
              <SwiperPartner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}