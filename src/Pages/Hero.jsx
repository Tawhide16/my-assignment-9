import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';

const Hero = () => {
  const data = useLoaderData();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = data.length;

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
      setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNextSlide = () => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
      <div className="relative w-full max-w-7xl mx-auto px-7">
          {/* Slides container with fixed height */}
          <div className="carousel w-full rounded-box relative" style={{ height: '500px' }}>
              {data.map((event, index) => (
                  <div 
                      key={event.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                      <img 
                          src={event.thumbnail} 
                          className="w-full h-full object-cover"
                          alt={event.title || "Event Image"} 
                      />
                      <div className={`absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4 rounded-lg transition-all duration-500 ${currentSlide === index ? 'translate-x-0' : '-translate-x-10'}`}>
                          <h2 className="text-2xl font-bold">{event.title || "Slide Title"}</h2>
                          <p>{event.description || "Event description"}</p>
                      </div>
                  </div>
              ))}

              {/* Navigation arrows */}
              <button 
                  onClick={goToPrevSlide}
                  className="absolute left-5 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost hover:btn-primary text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-20"
              >
                  ❮
              </button>
              <button 
                  onClick={goToNextSlide}
                  className="absolute right-5 top-1/2 -translate-y-1/2 btn btn-circle btn-ghost hover:btn-primary text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition-all z-20"
              >
                  ❯
              </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center w-full py-4 gap-2">
              {data.map((_, index) => (
                  <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-primary w-6' : 'bg-gray-400'}`}
                  />
              ))}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden">
              <div 
                  className="bg-primary h-full transition-all duration-5000 ease-linear"
                  style={{ width: `${(currentSlide + 1) * (100 / totalSlides)}%` }}
              />
          </div>
      </div>
  );
};


export default Hero;