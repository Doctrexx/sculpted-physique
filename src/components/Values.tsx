import React from 'react';
import { Crown, Shield, Users } from 'lucide-react';

const values = [
  {
    icon: Crown,
    title: "Unmatched Excellence",
    description: "Crafted for those who demand nothing but the finest in athletic luxury wear."
  },
  {
    icon: Shield,
    title: "Timeless Quality",
    description: "Premium materials and meticulous attention to detail in every piece."
  },
  {
    icon: Users,
    title: "Exclusive Community",
    description: "Join an elite circle of individuals who understand true sophistication."
  }
];

export const Values = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-light text-center mb-16 tracking-wider">OUR PRINCIPLES</h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-transform duration-300"
            >
              <value.icon className="w-12 h-12 mb-6 opacity-75 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-xl mb-4 tracking-wide">{value.title}</h4>
              <p className="text-gray-400 font-light">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};