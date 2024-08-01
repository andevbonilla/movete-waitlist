import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Link for all your social networks, to show all your sport and gym achievements | Movete',
    description: 'Join the movete waiting list and get early access to the best social network for athletes. In movete you will be able to show in one link all your achievements in the gym or in other sports. '
};

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {

    const messages = await getMessages();
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
}