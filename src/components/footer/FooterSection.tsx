import React from 'react';

type FooterSectionProps = {
  title: string;
  links: string[];
};

export const FooterSection = ({ title, links }: FooterSectionProps) => {
  return (
    <div>
      <h4 className="text-white text-sm font-medium mb-4 tracking-wider">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};