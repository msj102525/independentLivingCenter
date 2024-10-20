"use client";

import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  src: string;
  alt: string;
  text: string; // 추가된 텍스트 속성
}

interface SliderProps {
  slides: Slide[];
  autoPlayDelay?: number;
}

const Slider: React.FC<SliderProps> = ({ slides, autoPlayDelay = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayDelay);
    return () => clearInterval(interval);
  }, [autoPlayDelay]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative flex-shrink-0 w-full">
            <div className="w-full h-auto">
              <img src={slide.src} alt={slide.alt} className="block w-full h-[580px] object-cover" />
            </div>
            {/* 텍스트를 가운데에 배치 */}
            <div className="absolute inset-0 flex items-start justify-center">
              <p className="text-white text-5xl font-bold pt-20 cursor-default">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-white p-2 rounded"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-white p-2 rounded"
      >
        &gt;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-700' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
