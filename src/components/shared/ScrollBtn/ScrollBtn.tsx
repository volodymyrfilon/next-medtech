'use client';

import useScrollProgress from '@/hooks/useScrollProgress';
import { CircleArrowUp } from 'lucide-react';
import { Link as Scroll } from 'react-scroll';

export const ScrollBtn = ({ link = 'hero' }: { link?: string }) => {
  const isVisible = useScrollProgress() > 20;
  return (
    <Scroll
      to={link}
      href={link}
      smooth={true}
      duration={300}
      className={`${isVisible ? 'visible' : 'invisible'} fixed bottom-5 right-5 z-30`}
    >
      <CircleArrowUp className="h-10 w-10 stroke-accent-primary" aria-label="Повернутися на гору" />
    </Scroll>
  );
};
