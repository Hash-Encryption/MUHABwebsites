import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Wifi, Battery, Signal } from "lucide-react";

export interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  videoSrc?: string;
  type?: "image" | "video";
}

interface PhoneCarouselProps {
  images: ImageItem[];
  autoPlayInterval?: number;
  className?: string;
}

export function PhoneCarousel({
  images,
  autoPlayInterval = 5000,
  className = "",
}: PhoneCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState("9:41");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Auto slide interval
  useEffect(() => {
    if (!isPlaying || images.length <= 1) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide, autoPlayInterval, images.length]);

  const currentItem = images[currentIndex] || images[0];
  const isCurrentVideo = currentItem.type === "video" || Boolean(currentItem.videoSrc);

  return (
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {/* Device Outer Shell */}
      <div className="relative mx-auto w-[280px] sm:w-[320px] h-[570px] sm:h-[640px] transform-gpu">
        {/* Hardware Side Buttons */}
        <div className="absolute -left-[11px] top-24 h-7 w-[4px] rounded-l-sm bg-slate-700 shadow-sm" />
        <div className="absolute -left-[11px] top-36 h-12 w-[4px] rounded-l-sm bg-slate-700 shadow-sm" />
        <div className="absolute -left-[11px] top-52 h-12 w-[4px] rounded-l-sm bg-slate-700 shadow-sm" />
        <div className="absolute -right-[11px] top-40 h-16 w-[4px] rounded-r-sm bg-slate-700 shadow-sm" />

        {/* iPhone Chassis */}
        <div className="relative h-full w-full overflow-hidden rounded-[48px] bg-slate-950 p-3 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] ring-1 ring-slate-800/80">
          
          {/* Screen Display Container */}
          <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-slate-900 select-none">
            
            {/* Status Bar */}
            <div className="absolute top-0 inset-x-0 z-30 flex h-9 items-center justify-between px-6 pt-1 text-white text-xs font-semibold tracking-tight">
              <span>{currentTime}</span>
              <div className="flex items-center gap-1.5 opacity-90">
                <Signal className="h-3 w-3 text-[#A6FF2E]" />
                <span className="text-[10px] font-bold text-[#A6FF2E]">5G</span>
                <Wifi className="h-3 w-3" />
                <Battery className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Dynamic Island Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-40 flex h-6 w-28 items-center justify-between rounded-full bg-black px-2.5 shadow-md ring-1 ring-white/10">
              <div className="h-2.5 w-2.5 rounded-full bg-slate-900 ring-1 ring-slate-800 flex items-center justify-center">
                <div className="h-1 w-1 rounded-full bg-blue-900/60" />
              </div>
              <div className="h-2 w-2 rounded-full bg-[#A6FF2E]/80 animate-pulse" />
            </div>

            {/* Media Container: Only render active slide's video to eliminate GPU decoding lag */}
            <div className="relative h-full w-full bg-slate-950">
              {isCurrentVideo ? (
                <video
                  key={currentItem.videoSrc || currentItem.src}
                  ref={videoRef}
                  src={currentItem.videoSrc || currentItem.src}
                  poster={currentItem.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover object-top transform-gpu transition-opacity duration-300"
                />
              ) : (
                <img
                  key={currentItem.src}
                  src={currentItem.src}
                  alt={currentItem.alt || `Slide ${currentIndex + 1}`}
                  className="h-full w-full object-cover object-top transform-gpu transition-opacity duration-300"
                />
              )}
              {/* Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
            </div>

            {/* Information Overlay Badge on Phone Screen */}
            {(currentItem?.title || currentItem?.category) && (
              <div className="absolute bottom-6 inset-x-4 z-20 transition-all duration-300 transform">
                <div className="rounded-2xl bg-black/80 backdrop-blur-sm border border-[#A6FF2E]/30 p-3 text-white shadow-xl">
                  {currentItem.category && (
                    <span className="inline-block rounded-full bg-[#A6FF2E] px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider text-[#09110D] uppercase mb-1">
                      {currentItem.category}
                    </span>
                  )}
                  {currentItem.title && (
                    <p className="text-xs font-semibold line-clamp-1 text-slate-100">
                      {currentItem.title}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Glassmorphism reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-transparent pointer-events-none z-30" />
            
            {/* Home Bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-40 h-1 w-32 rounded-full bg-white/70" />
          </div>
        </div>
      </div>

      {/* External Controls & Indicators */}
      <div className="flex items-center gap-4 bg-[#0B2F23]/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#A6FF2E]/20 shadow-lg text-white">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-7 bg-[#A6FF2E] shadow-md"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="ml-2 p-1.5 rounded-full bg-[#A6FF2E]/20 text-[#A6FF2E] hover:bg-[#A6FF2E]/30 transition-colors cursor-pointer"
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
