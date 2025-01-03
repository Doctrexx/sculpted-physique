import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-[0.2em] text-white">SCULPTED PHYSIQUE</h1>
          <Menu className="text-white cursor-pointer hover:opacity-75 transition-opacity" />
        </div>
      </div>
    </nav>
  );
};