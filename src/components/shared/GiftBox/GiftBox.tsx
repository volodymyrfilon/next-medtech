'use client';

import ClientOnlyPortal from '@/utils/ClientOnlyPortal';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export const GiftBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const isGiftBoxShown = localStorage.getItem('giftBoxShown');
    if (!isGiftBoxShown) {
      setIsVisible(true);
    }
    localStorage.removeItem('giftBoxShown');
  }, []);

  useEffect(() => {
    if (isClicked) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-y-hidden');
    };
  }, [isClicked]);

  const handleBoxClick = () => {
    setIsClicked(true);
    localStorage.setItem('giftBoxShown', 'true');
  };

  const handleClose = () => {
    setIsVisible(false);
    setIsClicked(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className={clsx(
          'fixed bottom-4 left-4 z-50 flex select-none items-center justify-center transition-transform duration-500 ease-in-out',
          { hidden: isClicked }
        )}
        onClick={handleBoxClick}
      >
        <button className="animate-bounce rounded-full bg-red-500 px-4 py-2 text-[50px] text-white shadow-lg transition-transform duration-500 ease-in-out hover:scale-110">
          🎁
        </button>
      </div>

      {isClicked && (
        <ClientOnlyPortal selector="#modal">
          <div
            className="fixed inset-0 z-50 flex select-none items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out"
            onClick={handleClose}
          >
            <div
              className="relative flex transform flex-col items-center gap-y-4 rounded-lg bg-white p-8 text-center shadow-lg transition-transform duration-500 ease-in-out"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="animate-bounce text-2xl font-bold">Вітаємо!</h2>
              <p>
                Ви отримали знижку 10%! <br /> Додайте цей код у полі опису запиту чи проблеми!
              </p>
              <p>
                Ваш код: <strong>SUMMER24</strong>
              </p>
              <p className="text-red-500">Увага! Код дійсний до кінця червня!</p>
              <button
                onClick={handleClose}
                className="mt-4 w-32 rounded bg-red-500 px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-red-700"
              >
                Закрити
              </button>
            </div>
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
};

export default GiftBox;