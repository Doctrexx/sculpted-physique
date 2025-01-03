import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { FullscreenMenu } from './FullscreenMenu';
import { AnimatedLogo } from './AnimatedLogo';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between md:justify-between">
            {/* Left section */}
            <div className="w-12 md:w-24">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-white hover:opacity-75 transition-opacity"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Center/Left section - moves left on mobile */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
              <AnimatedLogo />
            </div>

            {/* Right section (empty, for balance) */}
            <div className="w-12 md:w-24" />
          </div>
        </div>
      </nav>
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};