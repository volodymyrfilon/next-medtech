'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export const PrivacyPolicyPopup = () => {
  const [visibleClassname, setVisibleClassname] = useState('hidden');

  useEffect(() => {
    const localStorageValue = localStorage.getItem('privacyPolicyPopupVisible');
    if (localStorageValue !== 'hidden') {
      setVisibleClassname('flex');
    }
  }, []);

  const hidePopup = () => {
    setVisibleClassname('hidden');
    localStorage.setItem('privacyPolicyPopupVisible', 'hidden');
  };

  return (
    <div
      className={`fixed bottom-0 z-[99] min-h-[48px] w-full bg-accent-dark px-8 py-1.5 ${visibleClassname}`}
    >
      <div className="flex items-center justify-between gap-x-3 text-[12px] font-light text-white">
        <div className="w-5/6">
          Ми використовуємо файли cookie щоб зробити ваше користування веб-сайтом зручнішим.
          Продовжуючи користуватися цим сайтом, ви погоджуєтесь із використанням файлів cookies.
          Дізнатись більше про файли cookie можна в&nbsp;
          <Link href="/privacy-policy" className="underline">
            Політиці Конфіденційності
          </Link>
        </div>
        <button
          className="rounded border p-1.5 text-xs font-normal uppercase"
          onClick={hidePopup}
          aria-label="Прийняти політику конфіденційності"
        >
          Приймаю
        </button>
      </div>
    </div>
  );
};
