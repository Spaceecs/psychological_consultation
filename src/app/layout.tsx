import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Гаврилюк Тетяна — Психолог онлайн',
    description:
        'Практичний психолог, психотерапевт. Онлайн‑консультації, сертифікати, напрямки роботи, відповіді на поширені запитання.',
    openGraph: {
        title: 'Гаврилюк Тетяна — Психолог онлайн',
        description:
            'Практичний психолог, психотерапевт. Онлайн‑консультації, сертифікати, напрямки роботи, відповіді на поширені запитання.',
        url: 'https://psiholog-online.com.ua',
        siteName: 'Психолог Онлайн',
        images: [
            {
                url: 'https://psiholog-online.com.ua/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Гаврилюк Тетяна — Онлайн психолог'
            }
        ],
        locale: 'uk_UA',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Гаврилюк Тетяна — Психолог онлайн',
        description:
            'Практичний психолог, психотерапевт. Онлайн‑консультації, сертифікати, напрямки роботи, відповіді на поширені запитання.',
        images: ['https://psiholog-online.com.ua/og-image.png']
    },
    icons: '/favicon.ico'
}



export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
