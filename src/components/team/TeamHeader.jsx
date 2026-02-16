import React from 'react';
import { Users } from 'lucide-react';

const TeamHeader = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container-custom text-center">
        <Users className="h-16 w-16 text-secondary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Minds Behind Mulaa</h1>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Six dedicated individuals united by a shared mission: building technology with souls and emotions.
        </p>
      </div>
    </section>
  );
};

export default TeamHeader;