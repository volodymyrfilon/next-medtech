'use client';

import useScrollProgress from '@/hooks/useScrollProgress';
import { CircleArrowUp } from 'lucide-react';
import { Link as Scroll } from 'react-scroll';

export const ScrollBtn = ({ link = undefined }: { link?: string }) => {
  const isVisible = useScrollProgress() > 20;
  return (
    <Scroll
      to={`${link || 'hero'}`}
      href={`${link || 'hero'}`}
      smooth={true}
      duration={300}
      aria-label="Повернутися на гору"
      className={`${isVisible ? 'visible' : 'invisible'} fixed bottom-4 right-2 z-10`}
    >
      <CircleArrowUp className="h-9 w-9 stroke-accent-primary" />
    </Scroll>
  );
};
