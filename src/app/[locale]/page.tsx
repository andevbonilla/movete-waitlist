import { ChangeLanguage } from '@/components/ChangeLanguage';
import { useTranslations } from 'next-intl';
import { Dela_Gothic_One } from '@next/font/google';

const delaGothic = Dela_Gothic_One({
    weight: ["400"], // bold de la fuente
    style: ["normal"],
    subsets: ["latin"]
});

export default function HomePage() {

    const homePage = useTranslations('HomePage');

    return (
        <>
            <nav className='bg-black text-white 2x:px-[30%] lg:px-[25%] px-[10%] flex justify-end items-center py-10 fixed top-0 right-0 w-full'>
                <ChangeLanguage
                    title={homePage("changeLanguage")}
                />
            </nav>

            <main className='bg-black text-white 2x:px-[30%] lg:px-[25%] px-[10%] min-h-[100vh] flex flex-col items-center justify-center'>
                <h1 className={`${delaGothic.className} text-center font-bold text-xl mb-10`}>MOVETE</h1>
                <h2
                    className={`font-bold text-[2.1rem] mb-4 text-center ${delaGothic.className}`}
                >
                    {homePage("title")}</h2>
                <p
                    className='text-opacity-85 mb-10 text-center px-[2rem]'
                >
                    {homePage("text")}</p>
                <div className='flex items-center justify-center'>
                    <input
                        className='py-3 px-5 rounded text-black text-opacity-90 mr-2'
                        name='email'
                        type="email"
                        placeholder={homePage("placeholderText")}
                    />
                    <button
                        type='button'
                        className='hover:bg-[#00CE74] duration-200 bg-[#00FF8F] rounded py-3 px-5 font-bold'
                    >
                        {homePage("buttonText")}
                    </button>
                </div>


            </main>
            <footer className='bg-black text-white 2x:px-[30%] lg:px-[25%] px-[10%] fixed bottom-0 left-0 w-full flex items-center justify-center py-10'>
                <p className='text-opacity-80'>{homePage("copyright")}</p>
            </footer>
        </>
    );
}