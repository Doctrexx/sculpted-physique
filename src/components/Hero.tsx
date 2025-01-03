import React from 'react';

export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80"
          alt="Luxury Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-6">
        <h2 className="text-5xl md:text-7xl font-light tracking-wider mb-6 opacity-0 animate-fade-in">
          ELEVATE YOUR ESSENCE
        </h2>
        <p className="text-lg md:text-xl tracking-wide max-w-2xl text-center font-light opacity-0 animate-fade-in-delay">
          Where power meets elegance in every thread
        </p>
      </div>
    </div>
  );
};