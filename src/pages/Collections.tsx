import React from 'react';
import { motion } from 'framer-motion';
import { CollectionsList } from '../components/collections/CollectionsList';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/footer/Footer';

export const Collections = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-24"
          >
            <h1 className="text-white text-4xl md:text-5xl font-light tracking-[0.2em] mb-6">
              THE COLLECTION
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Curated excellence for the distinguished athlete
            </p>
          </motion.div>
          <CollectionsList />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};