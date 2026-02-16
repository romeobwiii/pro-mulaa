import React from 'react';
import { Heart, Globe, Award, Zap, Clock, Users, Sparkles } from 'lucide-react';

const beliefs = [
  {
    icon: Heart,
    text: 'Technology should have soul — Not just algorithms, but understanding'
  },
  {
    icon: Globe,
    text: 'Culture matters in code — Systems must honor where users come from'
  },
  {
    icon: Award,
    text: 'Africa can lead — Our perspective is not a limitation, but a gift'
  },
  {
    icon: Zap,
    text: 'Emotion is data — How users feel is as important as what they do'
  },
  {
    icon: Clock,
    text: 'Legacy over speed — Build for tomorrow, not just today'
  },
  {
    icon: Users,
    text: 'Community over competition — Rising together lifts everyone'
  },
  {
    icon: Sparkles,
    text: 'Heritage and innovation — The old and new can dance together'
  }
];

const Manifesto = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            African Tech Manifesto
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl text-primary font-semibold mb-6 text-center">We believe that:</p>
            
            <div className="space-y-4">
              {beliefs.map((belief, index) => (
                <div key={index} className="flex items-start gap-4">
                  <belief.icon className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{belief.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;