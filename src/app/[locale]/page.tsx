import { ChangeLanguage } from '@/components/ChangeLanguage';
import { useTranslations } from 'next-intl';

export default function HomePage() {

    const t = useTranslations('HomePage');

    return (
        <>
            <nav>
                <ChangeLanguage />
            </nav>

            <main>

            </main>
            <footer>

            </footer>
        </>
    );
}