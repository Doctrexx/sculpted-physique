import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Collections', 'Community', 'About', 'Contact'];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        {isOpen ? <X /> : <Menu />}
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm">
          <div className="flex flex-col items-center py-8 gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white text-sm tracking-wider hover:opacity-75 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {link.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};