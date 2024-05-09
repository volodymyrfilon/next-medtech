'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Autoplay, EffectFade, Grid, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SliderProps } from './Sliper.props';

import useBreakpoints from '@/hooks/useBreakpoints';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider: React.FC<SliderProps> = ({
  id,
  data = [],
  cardData = [],
  element: Element,
  isInteractive = false,
  isFadeEffect = false,
  isLoop = false,
  isAutoplay = false,
  isFinished = false,
  isArchive = false,
  isGrid = 1,
  isPagination = false,
  isNumberPagination = false,
  isNavigation = false,
  slidesPerViewDef = 1,
  slidesPerView,
  className,
  lang,
  navigationBreakpoints = {
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  },
}) => {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);

  // hide navigation buttons on certain breakpoints
  useEffect(() => {
    if (isFirstRender) setIsFirstRender(false);
    if (!isFirstRender) {
      const navButtonsClasses = classNames({
        'smOnly:!hidden': !navigationBreakpoints.isMobile,
        'mdOnly:!hidden': !navigationBreakpoints.isTablet,
        'xl:!hidden': !navigationBreakpoints.isDesktop,
      });
      const slider = document.querySelector(`#${id}`);
      const swiper = slider?.querySelector(`.swiper`);
      const buttonPrev = swiper?.querySelector('.swiper-button-prev');
      const buttonNext = swiper?.querySelector('.swiper-button-next');

      if (navButtonsClasses) {
        const parsedClasses = navButtonsClasses.split(' ');

        if (buttonPrev) buttonPrev.classList.add(...parsedClasses);
        if (buttonNext) buttonNext.classList.add(...parsedClasses);
      }
    }
  }, [isFirstRender, navigationBreakpoints, id]);

  const isDeviceLess768px = useBreakpoints().less768px;
  const archiveProjectsGridRows = isArchive && isDeviceLess768px ? 1 : isGrid;

  return isFirstRender ? null : (
    <Swiper
      id={id}
      modules={[Autoplay, Pagination, EffectFade, Navigation, Grid]}
      allowTouchMove={isInteractive}
      grabCursor={isInteractive}
      speed={1000}
      effect={isFadeEffect ? 'fade' : ''}
      autoplay={isAutoplay ? { delay: 2000, disableOnInteraction: false } : false}
      loop={isLoop}
      loopAddBlankSlides={true}
      className={className}
      navigation={isNavigation}
      slidesPerView={slidesPerViewDef}
      style={{ zIndex: 'auto' }}
      grid={{
        rows: archiveProjectsGridRows,
        fill: 'column',
      }}
      breakpoints={{
        360: {
          spaceBetween: 20,
          slidesPerView: slidesPerView?.mobile || slidesPerViewDef,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: slidesPerView?.tablet || slidesPerViewDef,
        },
        1280: {
          spaceBetween: 32,
          slidesPerView: slidesPerView?.desktop || slidesPerViewDef,
        },
        1920: {
          spaceBetween: 32,
          slidesPerView: slidesPerView?.desktop3xl || slidesPerViewDef,
        },
      }}
      pagination={{
        enabled: isPagination,
        clickable: true,

        renderBullet: function (index, className) {
          if (!isNumberPagination) {
            return '<span class="' + className + '"></span>';
          }
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      }}
      lazyPreloadPrevNext={1}
    >
      {data.map((props, index) => (
        <SwiperSlide key={index} className="!h-auto">
          <Element {...props} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
