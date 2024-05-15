'use client';
import { FeedbackCard } from '@/components/shared/feedback/FeedbackCard';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export const FeedbackSlider = ({
  data,
  className,
  isAutoplay = false,
}: {
  isAutoplay?: boolean;
  className?: string;
  data: {
    category?: string;
    feedback: string;
  }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides = data.length;
  const handleSlideChange = (swiper: any) => {
    if (swiper && swiper.activeIndex !== undefined) {
      setCurrentIndex(swiper.activeIndex);
    }
  };

  return (
    <div className={`relative mt-[72px] md:mt-0 ${className}`}>
      <div className="absolute -top-[62px] left-1/2 z-10 -translate-x-1/2 font-didactGothic text-lg md:hidden">
        {currentIndex + 1}
        <span className="opacity-70">/{totalSlides}</span>
      </div>
      <Swiper
        id="feedbackSlider"
        className="feedbackSlider"
        slidesPerView={1}
        spaceBetween={48}
        modules={[Autoplay, Navigation]}
        allowTouchMove={true}
        grabCursor={true}
        navigation={true}
        speed={1000}
        autoplay={isAutoplay ? { delay: 2000, disableOnInteraction: true } : false}
        // autoplay={ false}
        lazyPreloadPrevNext={1}
        onSlideChange={handleSlideChange}
        style={{ overflow: 'hidden' }}
      >
        {/* slides */}
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <FeedbackCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
