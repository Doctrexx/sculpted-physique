import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Hero } from '../components/Hero';
import { Values } from '../components/Values';
import { CommunitySection } from '../components/community/CommunitySection';
import { Footer } from '../components/footer/Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Values />
      <CommunitySection />
      <Footer />
    </div>
  );
};