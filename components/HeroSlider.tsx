import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideData } from '../types';
import { Button } from './ui/Button';

interface HeroSliderProps {
  slides: SlideData[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-dark-900" id="home">
      <AnimatePresence initial={false}>
        <motion.div
          key={slides[currentIndex].id}
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(8px)", zIndex: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative h-full w-full">
            {/* Background Image */}
            <img 
              src={slides[currentIndex].image} 
              alt={slides[currentIndex].title}
              className="h-full w-full object-cover opacity-80"
            />
            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent" />
            
            {/* Content centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <motion.h1 
                className="mb-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {slides[currentIndex].title}
              </motion.h1>
              <motion.p 
                className="mb-8 max-w-2xl text-lg font-medium text-gray-200 md:text-2xl drop-shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {slides[currentIndex].subtitle}
              </motion.p>
              <motion.div
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.9, duration: 0.8 }}
              >
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="shadow-xl"
                  onClick={slides[currentIndex].ctaAction}
                >
                  {slides[currentIndex].ctaText}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-sand-500" : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
