'use client';

import { CirclePause, CirclePlay } from 'lucide-react';
import { RefObject, useRef, useState } from 'react';

interface FeedbackVideoProps {
  className?: string;
}

const FeedbackVideo = ({ className }: FeedbackVideoProps) => {
  const videoRef: RefObject<HTMLVideoElement> = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className={`relative z-10 flex items-center justify-center rounded-[30px] bg-gray-500  ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handlePlayPause}
    >
      <video
        ref={videoRef}
        className="h-full w-full rounded-[30px] object-cover"
        controls={false}
        poster="/assets/preview.jpg"
      >
        <source src="/assets/video.mov" type="video/mp4" />
        Your browser does not support this video component.
      </video>
      <button
        aria-label="Play/Pause video"
        className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-primary p-2 text-white transition-opacity duration-300
         ${isPlaying && !isHovered ? 'lg:opacity-0 lg:hover:opacity-100' : 'lg:opacity-100'}`}
      >
        {isPlaying ? <CirclePause className="h-8 w-8" /> : <CirclePlay className="h-8 w-8" />}
      </button>
    </div>
  );
};

export default FeedbackVideo;
