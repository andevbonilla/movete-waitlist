"use client"
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';


export const ChangeLanguage = ({ title }: { title: any }) => {

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
                openLanguageMenu && <div className='z-[997] text-black fixed w-full top-0 bottom-0 left-0 bg-black bg-opacity-45 flex justify-center items-center'>
                    <div onClick={() => { setopenLanguageMenu(false) }} className='cursor-pointer z-[998] fixed w-full top-0 bottom-0 left-0 bg-transparent'></div>
                    <div className='bg-white p-10 rounded z-[999] overflow-y-scroll lg:overflow-hidden max-h-[80vh]'>
                        <h3 className='font-bold mb-8 text-xl bg-white'>{title}</h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-white'>
                            <Link
                                href={currentUrl.replace(params.locale, "en")}
                                className={`${(params.locale.startsWith("en")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded bg-white`}
                            >
                                English
                            </Link>
                            <Link
                                href={currentUrl.replace(params.locale, "es")}
                                className={`${(params.locale.startsWith("es")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded bg-white`}
                            >
                                Español
                            </Link>
                            <Link
                                href={currentUrl.replace(params.locale, "fr")}
                                className={`${(params.locale.startsWith("fr")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded bg-white`}
                            >
                                Français
                            </Link>
                            <Link
                                href={currentUrl.replace(params.locale, "zh")}
                                className={`${(params.locale.startsWith("zh")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded bg-white`}
                            >
                                中文繁體
                            </Link>
                            <Link
                                href={currentUrl.replace(params.locale, "ja")}
                                className={`${(params.locale.startsWith("ja")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded bg-white`}
                            >
                                日本語
                            </Link>
                            <Link
                                href={currentUrl.replace(params.locale, "pt")}
                                className={`${(params.locale.startsWith("pt")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded bg-white`}
                            >
                                Português
                            </Link>
                            <Link
                                href={currentUrl.replace(params.locale, "hi")}
                                className={`${(params.locale.startsWith("hi")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded bg-white`}
                            >
                                हिंदी
                            </Link>
                            <Link
                                href={currentUrl.replace(params.locale, "ru")}
                                className={`${(params.locale.startsWith("ru")) ? "bg-slate-300" : ""} hover:bg-slate-300 transition-all p-4 rounded bg-white`}
                            >
                                Русский
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
