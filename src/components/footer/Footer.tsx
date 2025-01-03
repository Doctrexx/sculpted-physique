import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { FooterSection } from './FooterSection';

const socialIcons = [
  { Icon: Instagram, href: '#instagram', id: 'instagram' },
  { Icon: Twitter, href: '#twitter', id: 'twitter' },
  { Icon: Facebook, href: '#facebook', id: 'facebook' },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <FooterSection
            title="SHOP"
            links={['New Arrivals', 'Collections', 'Limited Edition', 'Accessories']}
          />
          <FooterSection
            title="ABOUT"
            links={['Our Story', 'Craftsmanship', 'Sustainability', 'Press']}
          />
          <FooterSection
            title="SUPPORT"
            links={['Contact', 'Shipping', 'Returns', 'Size Guide']}
          />
          <div>
            <h4 className="text-white text-sm font-medium mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href, id }) => (
                <a
                  key={id}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Sculpted Physique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};