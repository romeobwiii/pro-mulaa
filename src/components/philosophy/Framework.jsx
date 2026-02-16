import React from 'react';
import { Search, PenTool, Code, CheckCircle, Rocket, Heart } from 'lucide-react';

const phases = [
  {
    icon: Search,
    title: 'Phase One: Discovery',
    description: 'Understand emotional context, cultural needs, and technical requirements.',
    color: 'text-primary'
  },
  {
    icon: PenTool,
    title: 'Phase Two: Mythic Design',
    description: 'Create system narrative, emotional architecture, and user journey.',
    color: 'text-secondary'
  },
  {
    icon: Code,
    title: 'Phase Three: Soulful Development',
    description: 'Build with emotional testing, cultural validation, and legacy thinking.',
    color: 'text-accent'
  },
  {
    icon: CheckCircle,
    title: 'Phase Four: Legacy Testing',
    description: 'Evaluate for resonance, endurance, and meaning.',
    color: 'text-primary'
  },
  {
    icon: Rocket,
    title: 'Phase Five: Ceremonial Launch',
    description: 'Deploy with intention, documentation, and celebration.',
    color: 'text-secondary'
  },
  {
    icon: Heart,
    title: 'Phase Six: Eternal Maintenance',
    description: 'Ongoing support with context awareness and continuous improvement.',
    color: 'text-accent'
  }
];

const Framework = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          The Mulaa Development Framework
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-secondary/30">
              <div className="absolute -left-3 top-0">
                <div className={`bg-white p-2 rounded-full border-2 border-secondary`}>
                  <phase.icon className={`h-5 w-5 ${phase.color}`} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{phase.title}</h3>
              <p className="text-gray-600 text-sm">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Framework;