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
    description: 'Практичний психолог, психотерапевт. Онлайн‑консультації, сертифікати, напрямки роботи, відповіді на поширені запитання.',
    icons: '/favicon.ico'
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="uk" prefix="og: http://ogp.me/ns#">
        <head>
            {/* OG Tags for Telegram */}
            <meta property="og:title" content="Гаврилюк Тетяна — Психолог онлайн" />
            <meta property="og:description" content="Практичний психолог, психотерапевт. Онлайн‑консультації, сертифікати, напрямки роботи, відповіді на поширені запитання." />
            <meta property="og:image" content="https://psiholog-online.com.ua/og-image.png" />
            <meta property="og:url" content="https://psiholog-online.com.ua" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Психолог Онлайн" />

            {/* Twitter Card (optional) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Гаврилюк Тетяна — Психолог онлайн" />
            <meta name="twitter:description" content="Практичний психолог, психотерапевт. Онлайн‑консультації, сертифікати, напрямки роботи, відповіді на поширені запитання." />
            <meta name="twitter:image" content="https://psiholog-online.com.ua/og-image.png" />

            <link rel="icon" href="/favicon.ico" />
            <title>Гаврилюк Тетяна — Психолог онлайн</title>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
