import React, { useState } from 'react';

export const JoinForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted email:', email);
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <h4 className="text-xl mb-6 tracking-wide">Request an Invitation</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-800 rounded-lg focus:outline-none focus:border-white transition-colors"
          required
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-white text-black font-medium tracking-wider hover:bg-opacity-90 transition-opacity rounded-lg"
        >
          JOIN WAITLIST
        </button>
      </form>
    </div>
  );
};