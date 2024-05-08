'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Link as Scroll } from 'react-scroll';
import { ICONS } from '../icons';

export const ScrollBtn = () => {
  const isVisible = useScrollProgress() > 20;
  return (
    <Scroll
      to="hero"
      href="hero"
      smooth={true}
      duration={300}
      aria-label="Повернутися на гору"
      className={`${isVisible ? 'visible' : 'invisible'} fixed bottom-4 right-2 z-10`}
    >
      <ICONS.ARROW_CIRCLE_UP className="h-12 w-12 fill-accent-primary" />
    </Scroll>
  );
};
