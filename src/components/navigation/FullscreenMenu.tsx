import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { path: '/', label: 'HOME' },
  { path: '/collections', label: 'COLLECTIONS' },
  { path: '/#community', label: 'COMMUNITY' },
  { path: '/#about', label: 'ABOUT' },
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.5,
      when: 'afterChildren',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 },
};

export const FullscreenMenu = ({ isOpen, onClose }: FullscreenMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg z-50 flex items-center justify-center"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white hover:opacity-75 transition-opacity"
          >
            <X size={32} />
          </button>
          
          <nav className="text-center">
            {menuItems.map((item) => (
              <motion.div
                key={item.path}
                variants={itemVariants}
                className="mb-8"
              >
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `text-3xl font-light tracking-[0.2em] ${
                      isActive ? 'text-white' : 'text-gray-400'
                    } hover:text-white transition-colors`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};