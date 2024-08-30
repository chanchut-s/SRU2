import { useLocale, useTranslations } from "next-intl";
import Hero from "../components/Hero";
import CardNewsHome from "../components/CardNewsHome";
import CardAboutInno from "../components/CardAboutInno";
import SwiperProduct from "../components/SwiperProduct";
import SwiperHero from "../components/SwiperHero";


export default function Home() {
  const locale = useLocale()
  const t = useTranslations('HomePage')
  const imageUrl = "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className="bg-gray-100">
      <div className="relative z-0">
        <SwiperHero/>
      </div>
      <div className="flex justify-center items-center mx-3 sm:mx-10 lg:mx-[4rem] -mt-[2rem] md:-mt-[4rem]">
        <div className='bg-white relative px-5 shadow-xl w-full max-w-screen-xl'>
          <h1 className="text-2xl sm:text-4xl text-blue-900 font-bold text-center pt-[3rem]">ข้อมูลเกี่ยวกับ InnoSci</h1>

          <div className=" mt-5 sm:mt-8 mx-auto grid grid-cols-2 lg:grid-cols-3 justify-items-center">
            <CardAboutInno image={imageUrl} text={"วิสัยทัศ"} />
            <CardAboutInno image={imageUrl} text={"ความเป็นมา"} />
            <div className="col-span-2 lg:col-span-1"><CardAboutInno image={imageUrl} text={"เป่าหมาย"} /></div>
          </div>

          <h1 className="text-2xl sm:text-4xl text-blue-900 font-bold text-center pt-[3rem]">บริการของเรา</h1>
          <div className="md:mt-5">
            <SwiperProduct />
          </div>

          <div className="grid grid-cols-1 md-custom:grid-cols-2 gap-7 pt-4">
            <div className="flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-4xl font-bold text-blue-900">ประชาสัมพันธ์</h1>
                <button className="btn bg-orange-600 text-white text-xs px-1.5 py-0.5 font-normal hover:text-gray-900 "><a href={`/${locale}/news`}>ดูทั้งหมด</a></button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-7">
                <CardNewsHome />
                <CardNewsHome />
              </div>

            </div>
            <div className="flex-col">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-4xl font-bold text-blue-900">กิจกรรม</h1>
                <button className="btn bg-orange-600 text-white text-xs px-1.5 py-0.5 font-normal hover:text-gray-900"><a href={`/${locale}/event`}>ดูทั้งหมด</a></button>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-7">
                <CardNewsHome />
                <CardNewsHome />
                <CardNewsHome />
              </div>
            </div>
          </div>
          
          <div className="flex-col">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl sm:text-4xl font-bold text-blue-900">หน่วยงานที่เกี่ยวข้อง</h1>
              <button className="btn bg-orange-600 text-white text-xs px-1.5 py-0.5 font-normal hover:text-gray-900">ดูทั้งหมด</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 
