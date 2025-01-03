import React from 'react';

const links = ['Collections', 'Community', 'About', 'Contact'];

export const NavLinks = () => {
  return (
    <div className="hidden md:flex gap-8">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-white text-sm tracking-wider hover:opacity-75 transition-opacity"
        >
          {link.toUpperCase()}
        </a>
      ))}
    </div>
  );
};