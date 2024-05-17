'use client';

import { CertificateType } from '@/sections/Certificates';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ClientOnlyPortal from '../../../../../utils/ClientOnlyPortal';

export const CertificatesList = ({
  className,
  certificates,
}: {
  className?: string;
  certificates: CertificateType[];
}) => {
  const [selectedImage, setSelectedImage] = useState<CertificateType | null>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.body.classList.remove('overflow-y-hidden');
    }
  });

  return (
    <>
      <div className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="relative transform cursor-pointer overflow-hidden rounded-[20px] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.image}
              alt={item.title}
              priority
              width={item.width}
              height={item.height}
              className="w-auto rounded-[20px] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center text-white">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ClientOnlyPortal selector="#modal">
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/70"
            onClick={handleOverlayClick}
          >
            <X
              className="absolute right-4 top-4 h-8 w-8 text-accent-dark"
              onClick={() => setSelectedImage(null)}
              aria-label="Закрити вікно"
            />
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={selectedImage.width}
              height={selectedImage.height}
              className="w-auto object-contain"
            />
          </div>
        </ClientOnlyPortal>
      )}
    </>
  );
};
