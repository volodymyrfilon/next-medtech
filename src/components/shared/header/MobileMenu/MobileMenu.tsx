'use client';

import { Logo } from '@/layout/Logo';
import { useEffect, useState } from 'react';
import { Navigation } from '../Navigation';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  });

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-accent-dark/40 transition-opacity ${
          isOpen ? 'flex' : 'hidden'
        }`}
        onClick={closeMenu}
      />

      {/* Menu */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 flex w-[80%] transform flex-col gap-y-8 bg-accent-dark/80 px-8 py-2.5 transition-transform duration-500 ${
          isOpen ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        {/* Close Menu Button */}
        <div className="flex items-center justify-between">
          <Logo white />
          <div
            className="flex h-0.5 w-7 cursor-pointer flex-col justify-between"
            onClick={() => closeMenu()}
          >
            <span className="h-0.5 w-full rotate-45 bg-white"></span>
            <span className="-mt-1 h-0.5 w-full -rotate-45 bg-white"></span>
          </div>
        </div>
        {/* Nav */}
        <Navigation className="text-white last:border-b [&>*]:border-t [&>*]:border-white [&>*]:py-5 [&>*]:pl-5" />
      </div>

      {/* Open Menu Button */}
      <div
        className={`h-5 w-6 cursor-pointer flex-col justify-between lg:hidden ${!isOpen ? 'flex' : 'hidden'}`}
        onClick={openMenu}
      >
        <span className="h-0.5 w-full bg-gray-800"></span>
        <span className="h-0.5 w-full bg-gray-800"></span>
        <span className="h-0.5 w-full bg-gray-800"></span>
      </div>
    </>
  );
};
