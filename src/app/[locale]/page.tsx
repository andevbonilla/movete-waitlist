import { ChangeLanguage } from '@/components/ChangeLanguage';
import { useTranslations } from 'next-intl';
import { Dela_Gothic_One } from '@next/font/google';
import { SendEmail } from '@/components/SendEmail';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export default function HomePage() {

    const homePage = useTranslations('HomePage');

    return (
        <>
            <nav className='bg-black text-white 2x:px-[30%] lg:px-[25%] px-[10%] flex justify-end items-center pt-10 w-full pb-20'>
                <ChangeLanguage
                    title={homePage("changeLanguage")}
                />
            </nav>

            <main className='bg-black text-white 2x:px-[30%] lg:px-[25%] px-[10%] flex flex-col items-center justify-center pb-[9rem]'>
                <h1 className={`${delaGothic.className} text-center font-bold text-xl mb-10`}>MOVETE</h1>
                <h2
                    className={`font-bold text-[2.1rem] mb-4 text-center ${delaGothic.className}`}
                >
                    {homePage("title")}</h2>
                <p
                    className='text-opacity-85 mb-10 text-center px-[2rem]'
                >
                    {homePage("text")}</p>

                <SendEmail
                    placeholderText={homePage("placeholderText")}
                    buttonText={homePage("buttonText")}
                    errorInvalid={homePage("errorEmailInvalid")}
                    errorLong={homePage("errorEmailShort")}
                    errorShort={homePage("errorEmailLong")}
                />


            </main>
            <footer className='bg-black text-white 2x:px-[30%] lg:px-[25%] px-[10%] w-full flex items-center justify-center py-10'>
                <p className='text-opacity-80'>{homePage("copyright")}</p>
            </footer>
        </>
    );
}