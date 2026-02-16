import React from 'react';
import { Heart, Shield, Clock, BookOpen, Users } from 'lucide-react';

const pillars = [
  {
    icon: Heart,
    title: 'Emotional Testing',
    description: 'Systems must be evaluated for human resonance alongside functionality. We ask not just "Does this work?" but "How does this make users feel?"',
    color: 'text-primary'
  },
  {
    icon: Shield,
    title: 'Cultural Security',
    description: 'Protection of heritage, context, and meaningful data is non-negotiable. Our systems respect and protect the cultural contexts in which they operate.',
    color: 'text-secondary'
  },
  {
    icon: Clock,
    title: 'Legacy Performance',
    description: 'Optimization for endurance, not just speed. We build systems designed to evolve over years and decades, not to be replaced in months.',
    color: 'text-accent'
  },
  {
    icon: BookOpen,
    title: 'Narrative Documentation',
    description: 'Technical specs that tell the system\'s story. Every Mulaa system includes documentation explaining not just how, but why.',
    color: 'text-primary'
  },
  {
    icon: Users,
    title: 'Soulful Maintenance',
    description: 'Support that understands user context. Maintenance is an opportunity to learn, improve, and deepen connections.',
    color: 'text-secondary'
  }
];

const Pillars = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">The Five Pillars of Mulaa Engineering</h1>
          <p className="section-subtitle mx-auto">
            Our engineering philosophy is built on these foundational principles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <pillar.icon className={`h-12 w-12 ${pillar.color} mb-4`} />
              <h3 className="text-xl font-bold text-primary mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;