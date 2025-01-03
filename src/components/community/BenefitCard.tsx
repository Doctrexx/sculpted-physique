import React from 'react';
import { LucideIcon } from 'lucide-react';

type BenefitCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-50 rounded-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
      <Icon className="w-12 h-12 mb-6 opacity-75" />
      <h4 className="text-xl mb-4 tracking-wide">{title}</h4>
      <p className="text-gray-400 font-light">{description}</p>
    </div>
  );
};