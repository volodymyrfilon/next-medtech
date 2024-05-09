import { Locale } from '@/i18n.config';

export interface SliderProps {
  id: string;
  data: {}[];
  cardData?: {};
  element: React.FC<any>;
  isInteractive?: boolean;
  isFadeEffect?: boolean;
  isLoop?: boolean;
  isAutoplay?: boolean;
  isGrid?: number;
  isFinished?: boolean;
  isArchive?: boolean;
  isPagination?: boolean;
  isNumberPagination?: boolean;
  isNavigation?: boolean;
  lang?: Locale;
  className?: string;
  slidesPerView?: { mobile: number; tablet: number; desktop: number; desktop3xl?: number };
  slidesPerViewDef?: number;
  navigationBreakpoints?: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
}
