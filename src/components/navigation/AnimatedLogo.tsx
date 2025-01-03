import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedLogo = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <Link to="/" className="flex flex-col items-center">
      <div className="text-lg md:text-2xl font-light tracking-[0.15em] md:tracking-[0.2em] text-white whitespace-nowrap">
        <AnimatePresence mode="wait">
          {isMobile ? (
            <motion.div
              key="mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.span className="block">SP</motion.span>
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[0.6rem] tracking-[0.2em] text-gray-400 mt-1"
              >
                SCULPTED PHYSIQUE
              </motion.span>
            </motion.div>
          ) : (
            <motion.span
              key="desktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="block"
            >
              SCULPTED PHYSIQUE
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </Link>
  );
};