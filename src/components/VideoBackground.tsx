import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { cn } from '@/src/lib/utils';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  desaturated?: boolean;
}

export function VideoBackground({ src, poster, className, desaturated }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
      }
    } else {
      video.src = src;
    }
  }, [src]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <video
        ref={videoRef}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        className={cn(
          "h-full w-full object-cover",
          desaturated && "grayscale opacity-50 contrast-125"
        )}
      />
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
