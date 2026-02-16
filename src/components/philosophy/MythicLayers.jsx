import React from 'react';
import { Layers, Star, Users, Shield, Map, Award, Heart } from 'lucide-react';

const layers = [
  { icon: Star, title: 'The Origin', desc: 'Why this system exists and what problem it solves' },
  { icon: Users, title: 'The Characters', desc: 'Users as heroes of their own journey' },
  { icon: Shield, title: 'The Conflict', desc: 'Challenges the system helps users overcome' },
  { icon: Map, title: 'The Journey', desc: 'User experience as narrative progression' },
  { icon: Award, title: 'The Resolution', desc: 'Successful outcomes as story endings' },
  { icon: Layers, title: 'The Legacy', desc: 'What the system leaves behind for future users' },
  { icon: Heart, title: 'The Soul', desc: 'The emotional resonance throughout' }
];

const MythicLayers = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          The Seven Layers of Mythic Design
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {layers.map((layer, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-secondary/30">
              <layer.icon className="h-8 w-8 text-secondary mb-3" />
              <h3 className="text-xl font-bold mb-2">{layer.title}</h3>
              <p className="text-gray-200 text-sm">{layer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MythicLayers;