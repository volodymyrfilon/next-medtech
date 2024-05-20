'use client';

import { ServiceProps } from '@/sections/Services';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { replaceText } from '../../../../../utils/formatText';

export const Accordion = ({
  className,
  services,
}: {
  className?: string;
  services: ServiceProps[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {services.map((service, index) => (
        <div key={index} className="mb-3 border-b">
          <button
            className="flex w-full items-center justify-between py-3 text-left focus:outline-none"
            onClick={() => toggle(index)}
          >
            <h3 className="w-4/5 text-2xl md:text-3xl">{service.title}</h3>
            <ChevronDown
              className={`h-8 w-8 duration-500 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            className={`overflow-hidden duration-500 ${
              openIndex === index ? 'max-h-[300vh]' : 'max-h-0'
            }`}
          >
            <p className="py-2 pr-2 font-didactGothic text-base md:pr-40 lg:pr-56 lg:text-lg">
              {replaceText(service.content)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
