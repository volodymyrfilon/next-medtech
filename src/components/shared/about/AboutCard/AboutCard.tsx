'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { replaceText } from '../../../../../utils/formatText';

interface AboutCardProps {
  title: string;
  text: string;
}

export const AboutCard = ({ data }: { data: AboutCardProps[] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="flex flex-1 flex-col gap-y-8 ">
          <h2 className="text_32px font-bold text-white">{item.title}</h2>
          <p className="font-didactGothic text-white/70">{replaceText(item.text)}</p>
          <Button
            variant="white"
            className="flex w-[152px] gap-x-1"
            aria-label={`Докладніше ${item.title}`}
          >
            Докладніше
            <ChevronRight className="h-5 w-5 text-accent-dark" />
          </Button>
        </div>
      ))}
    </>
  );
};
