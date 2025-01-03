import React from 'react';
import { motion } from 'framer-motion';
import { EnquireButton } from './EnquireButton';
import { Collection } from './types';

interface CollectionItemProps extends Collection {
  index: number;
}

export const CollectionItem = ({ name, price, image, index }: CollectionItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          <EnquireButton />
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg tracking-wider">{name}</h3>
        <p className="text-gray-400 mt-1">${price}</p>
      </div>
    </motion.div>
  );
};