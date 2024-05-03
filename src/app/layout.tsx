import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Suspense } from 'react';

import './global.css';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${eUkraine.variable} ${eUkraineHead.variable} font-sans`}>
      <body className="relative flex h-screen flex-col">
        <Suspense fallback={<Loading />}>
          {children}
          {/* POPUP COOCKIE + GTAG */}
        </Suspense>
      </body>
    </html>
  );
}