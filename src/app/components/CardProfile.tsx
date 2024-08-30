import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

function CardProfile() {
    const locale = useLocale()
    const t = useTranslations("cardProfile")
    return (
        <Link href={`/${locale}/personnel-cv`}>
            <div className='group relative block overflow-hidden w-auto max-w-full'>
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                    className="h-auto max-h-[30rem] w-full object-cover duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-[90px] bg-blue-900 bg-opacity-0 lg:bg-opacity-100  lg:translate-y-20 transform group-hover:translate-y-0 lg:group-hover:bg-opacity-100  lg:transition-all  lg:duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-[4rem] m-4">
                    <div className="opacity-0 lg:opacity-100">
                        <p className="text-sm text-white">{t('name')}</p>
                        <p className="text-sm text-white">email</p>
                        <p className="text-sm text-white">082299480</p>
                    </div>
                </div>
                
            </div>
            <div className=" lg:hidden block pt-2 relative bg-white">
                <div className='mx-4'>
                    <p className="text-sm">{t('name')}</p>
                    <p className="text-sm">email</p>
                    <p className="text-sm">082299480</p>
                </div>
                <div className='w-full h-[7px] mt-1 bg-blue-900'></div>
            </div>
        </Link>
    )
}

export default CardProfile
