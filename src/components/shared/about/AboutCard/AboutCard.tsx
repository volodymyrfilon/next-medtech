'use client';

import { Button } from '@/components/ui/button';
import { AboutCardProps } from '@/sections/About';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { replaceText } from '../../../../../utils/formatText';

export const AboutCard = ({ data }: { data: AboutCardProps[] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex flex-1 flex-col gap-y-8 ">
          <h2 className="text_32px font-bold text-white">{item.title}</h2>
          <p
            className={`overflow-hidden font-didactGothic text-white/70 duration-500 ${expanded ? 'max-h-[100vh]' : 'max-h-24'}`}
            onClick={() => setExpanded(true)}
          >
            {replaceText(item.text)}
          </p>
          <Button
            variant="white"
            className="mt-auto flex w-[152px] gap-x-1"
            aria-label={`Докладніше ${item.title}`}
            onClick={() => setExpanded(true)}
            disabled={expanded ?? false}
          >
            Докладніше
            <ChevronRight className="h-5 w-5 " />
          </Button>
        </div>
      ))}
    </>
  );
};
