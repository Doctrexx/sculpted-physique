import React from 'react';
import { motion } from 'framer-motion';
import { collections } from './collectionsData';
import { LuxuryCollectionItem } from './LuxuryCollectionItem';

export const CollectionsList = () => {
  return (
    <div className="space-y-32">
      {collections.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <LuxuryCollectionItem {...item} reverse={index % 2 !== 0} />
        </motion.div>
      ))}
    </div>
  );
};