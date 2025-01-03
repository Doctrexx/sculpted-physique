import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const EnquireButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-8 py-3 bg-white text-black font-light tracking-wider relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence>
        {isHovered ? (
          <motion.span
            key="enquire-now"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="block"
          >
            ENQUIRE NOW
          </motion.span>
        ) : (
          <motion.span
            key="enquire"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="block"
          >
            ENQUIRE
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};