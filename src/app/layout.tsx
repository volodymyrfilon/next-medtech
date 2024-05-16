import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Suspense } from 'react';

import { PrivacyPolicyPopup } from '@/components/shared/PrivacyPolicyPopup';
import './global.css';
import Loading from './loading';

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = process.env.NEXT_PUBLIC_URL;
  return {
    title: {
      template: '%s | Терапія Душі',
      default: 'Терапія Душі',
    },
    description:
      'Відкрийте світ духовних практик зі мною, Юлією Логвиненко (Julia Lohvynenko). Пропоную консультації з Матриці Долі, роботи з тілом та емоційного балансу. Використовую дошку Садху та метафоричні карти для трансформації та роботи зі страхами. Досліджую методи самопізнання та цвяхостояння.',
    metadataBase: new URL(BASE_URL || 'https://julisadhu-matrix.vercel.app'),
    alternates: {
      canonical: process.env.NEXT_PUBLIC_URL,
    },
    keywords: [
      'Юлія Логвиненко',
      'Yulia Lohvynenko',
      'Цвяхотерапія Садху',
      'Дошка Садху',
      'Медитація та цвяхостояння',
      'Практика медитації',
      'Консультація психологічна',
      'Нумерологія Матриці Долі',
      'Метафоричні карти і підсвідомість',
      "Психосоматичне здоров'я",
      'Емоційний баланс',
      'Робота з тілом',
      'Робота зі страхам',
      'Таро і Аркани',
    ],
    twitter: {
      title: {
        template: '%s | Терапія Душі',
        default: 'Терапія Душі',
      },
      card: 'summary_large_image',
      images: {
        url: `${process.env.NEXT_PUBLIC_URL}"/favicon/otg-img.png",`,
        width: 638,
        height: 579,
        alt: 'Cвіт духовних практик з Юлією Логвиненко',
      },
      description:
        'Відкрийте світ духовних практик зі мною, Юлією Логвиненко (Julia Lohvynenko). Пропоную консультації з Матриці Долі, роботи з тілом та емоційного балансу. Використовую дошку Садху та метафоричні карти для трансформації та роботи зі страхами. Досліджую методи самопізнання та цвяхостояння.',
    },
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}"/favicon/otg-img.png",`,
          width: 638,
          height: 579,
          alt: 'Cвіт духовних практик з Юлією Логвиненко',
        },
      ],
      description:
        'Відкрийте світ духовних практик зі мною, Юлією Логвиненко (Julia Lohvynenko). Пропоную консультації з Матриці Долі, роботи з тілом та емоційного балансу. Використовую дошку Садху та метафоричні карти для трансформації та роботи зі страхами. Досліджую методи самопізнання та цвяхостояння.',
      type: 'website',
      title: {
        template: '%s | Терапія Душі',
        default: 'Терапія Душі',
      },
      url: process.env.NEXT_PUBLIC_URL,
    },
    icons: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: `${process.env.NEXT_PUBLIC_URL}/favicon/favicon-32x32.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: `${process.env.NEXT_PUBLIC_URL}/favicon/favicon-16x16.png`,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: `${process.env.NEXT_PUBLIC_URL}/favicon/apple-touch-icon.png`,
      },
    ],
  };
}

const eUkraine = localFont({
  variable: '--font-eUkraine',
  src: [
    {
      path: '../../public/fonts/e-Ukraine-Bold.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/e-Ukraine-Light.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/e-Ukraine-Medium.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/e-Ukraine-Regular.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/e-Ukraine-Thin.otf',
      weight: '100',
    },
    {
      path: '../../public/fonts/e-Ukraine-UltraLight.otf',
      weight: '200',
    },
  ],
});

const eUkraineHead = localFont({
  src: [
    {
      path: '../../public/fonts/e-UkraineHead-Bold.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/e-UkraineHead-Light.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/e-UkraineHead-Medium.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/e-UkraineHead-Regular.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/e-UkraineHead-Thin.otf',
      weight: '100',
    },
    {
      path: '../../public/fonts/e-UkraineHead-UltraLight.otf',
      weight: '200',
    },
  ],
  variable: '--font-eUkraineHead',
});

const didactGothic = localFont({
  src: [
    {
      path: '../../public/fonts/DidactGothic-Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-didactGothic',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uk"
      className={`${eUkraineHead.variable} ${eUkraine.variable} ${didactGothic.variable} font-sans  selection:bg-accent-primary/50`}
    >
      <body className="relative flex flex-col">
        <Suspense fallback={<Loading />}>
          {children}
          {/* POPUP COOCKIE + GTAG */}
          <PrivacyPolicyPopup />
        </Suspense>
      </body>
    </html>
  );
}
