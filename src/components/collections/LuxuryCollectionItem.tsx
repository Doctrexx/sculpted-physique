import React from 'react';
import { motion } from 'framer-motion';
import { Collection } from './types';
import { EnquireButton } from './EnquireButton';

interface LuxuryCollectionItemProps extends Collection {
  reverse?: boolean;
}

export const LuxuryCollectionItem = ({ name, description, price, image, reverse }: LuxuryCollectionItemProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
      <div className="w-full md:w-7/12">
        <motion.div 
          className="relative aspect-[4/5] overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="w-full md:w-5/12 text-center md:text-left space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-2xl tracking-[0.2em] mb-4">{name}</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
          <p className="text-white text-xl mb-8">${price}</p>
          <EnquireButton />
        </motion.div>
      </div>
    </div>
  );
};