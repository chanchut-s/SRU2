import Link from 'next/link'
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import LocaleSwitcher from './Locale-Switcher'
import { useState } from 'react';



function Navbar() {
    const locale = useLocale()
    const t = useTranslations('navbar')

    return (
        <div className="navbar bg-white sticky top-0 z-50 shadow-md">
            <div className="navbar-start">
                <div className='flex justify-start'>
                    <div className="drawer lg:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content relative z-10">
                            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side fixed inset-0 z-20">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                <li><a href={`/${locale}`}>{t("home")}</a></li>
                                <li>
                                    <details className="dropdown">
                                        <summary>{t("about")}</summary>
                                        <ul className="p-2 ">
                                            <li>
                                                <details className="dropdown">
                                                    <summary>{t("personnel")}</summary>
                                                    <ul className="p-2 ">
                                                        <li><a href={`/${locale}/personnel/lecturer`}>{t("lecturer")}</a></li>
                                                        <li><a href={`/${locale}/personnel/lecturer`}>{t("staff")}</a></li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <details className="dropdown">
                                        <summary>{t("news")}</summary>
                                        <ul className="p-2 ">
                                            <li><a href={`/${locale}/event`}>{t("event")}</a></li>
                                            <li><a href={`/${locale}/news`}>{t("news1")}</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li><a href={`/${locale}/contact`}>{t("contact")}</a></li>
                            </ul>
                        </div>
                    </div>
                    <a href={`/${locale}`} className="btn btn-ghost text-xl">InnoSci</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal px-1">
                    <a role="button" className="btn btn-ghost font-normal" href={`/${locale}`}>{t("home")}</a>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost font-normal">{t("about")}</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mt-5 shadow">
                            <li>
                                <details className="dropdown">
                                    <summary>{t("personnel")}</summary>
                                    <ul className="p-2 ">
                                        <li><a href={`/${locale}/personnel/lecturer`}>{t("lecturer")}</a></li>
                                        <li><a href={`/${locale}/personnel/staff`}>{t("staff")}</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>Submenu 2</a></li>
                        </ul>

                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost font-normal">{t("news")}</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mt-5 shadow">
                            <li><a href={`/${locale}/event`}>{t("event")}</a></li>
                            <li><a href={`/${locale}/news`}>{t("news1")}</a></li>
                        </ul>
                    </div>
                    <a role="button" className="btn btn-ghost font-normal" href={`/${locale}/contact`}>{t("contact")}</a>
                </div>
            </div>
            <div className="navbar-end">
                <LocaleSwitcher />
            </div>
        </div>
    )
}

export default Navbar