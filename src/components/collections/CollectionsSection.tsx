import React from 'react';
import { CollectionGrid } from './CollectionGrid';
import { motion } from 'framer-motion';

export const CollectionsSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-wider mb-4">LATEST COLLECTION</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our curated selection of premium athletic wear
          </p>
        </motion.div>
        <CollectionGrid />
      </div>
    </section>
  );
};