"use client"
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


export const ChangeLanguage = () => {

    const params: { locale: string } = useParams();
    const [openLanguageMenu, setopenLanguageMenu] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("en");

    useEffect(() => {
        setCurrentUrl(location.href);
    }, []);


    return (
        <>
            <div className='flex items-center'>
                <button type='button' title='change language' onClick={() => { setopenLanguageMenu(true) }}>
                    <FontAwesomeIcon icon={faLanguage} size='2x' className='cursor-pointer text-white mr-6' />
                </button>
            </div>
            {
                openLanguageMenu && <div className='z-[997] fixed w-full top-0 bottom-0 left-0 bg-black bg-opacity-25 flex justify-center items-center'>
                    <div onClick={() => { setopenLanguageMenu(false) }} className='cursor-pointer z-[998] fixed w-full top-0 bottom-0 left-0'></div>
                    <div className='bg-white p-10 rounded z-[999] overflow-y-scroll lg:overflow-hidden max-h-[80vh]'>
                        <h3 className='font-bold mb-8 text-xl'>Change language</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                            <Link href={currentUrl.replace(params.locale, "en")} className={`${(location.pathname.startsWith("/en")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                English
                            </Link>
                            <Link href={currentUrl.replace(params.locale, "es")} className={`${(location.pathname.startsWith("/es")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                Español
                            </Link>
                            <Link href={currentUrl.replace(params.locale, "fr")} className={`${(location.pathname.startsWith("/fr")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                Français
                            </Link>
                            <Link href={currentUrl.replace(params.locale, "zh")} className={`${(location.pathname.startsWith("/zh")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                中文繁體
                            </Link>
                            <Link href={currentUrl.replace(params.locale, "ja")} className={`${(location.pathname.startsWith("/ja")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                日本語
                            </Link>
                            <Link href={currentUrl.replace(params.locale, "pt")} className={`${(location.pathname.startsWith("/pt")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                Português
                            </Link>
                            <Link href={currentUrl.replace(params.locale, "hi")} className={`${(location.pathname.startsWith("/hi")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                हिंदी
                            </Link>
                            <Link href={currentUrl.replace(params.locale, "ru")} className={`${(location.pathname.startsWith("/ru")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded`}>
                                Русский
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
