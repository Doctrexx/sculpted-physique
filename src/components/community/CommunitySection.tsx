import React from 'react';
import { Crown, Users, Star } from 'lucide-react';
import { BenefitCard } from './BenefitCard';
import { JoinForm } from './JoinForm';

const benefits = [
  {
    icon: Crown,
    title: "VIP Access",
    description: "Early access to limited edition releases and exclusive collections"
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Invitation to members-only gatherings and fashion showcases"
  },
  {
    icon: Star,
    title: "Concierge Service",
    description: "Personal styling sessions and priority customer support"
  }
];

export const CommunitySection = () => {
  return (
    <section className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-light tracking-wider mb-4">JOIN THE ELITE</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Become part of an exclusive community that appreciates the finest in athletic luxury wear.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <JoinForm />
      </div>
    </section>
  );
};