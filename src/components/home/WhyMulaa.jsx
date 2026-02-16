import React from 'react';
import { Heart, Globe, Award, BookOpen } from 'lucide-react';
import { AnimatedTitle, AnimatedText, AnimatedCardText } from '../animations/GlobalAnimated';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: Heart,
    title: 'Emotional Intelligence',
    description: 'We build AI that understands how you feel, not just what you say.',
    color: 'text-primary'
  },
  {
    icon: Globe,
    title: 'African Cultural Context',
    description: 'Our systems honor where you come from while building where you\'re going.',
    color: 'text-secondary'
  },
  {
    icon: Award,
    title: 'Legacy Building',
    description: 'We create technology designed to endure and inspire future generations.',
    color: 'text-accent'
  },
  {
    icon: BookOpen,
    title: 'Mythic Architecture',
    description: 'Every system tells a story worth remembering.',
    color: 'text-primary'
  }
];

const WhyMulaa = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <AnimatedTitle className="section-title">Why Mulaa?</AnimatedTitle>
          <AnimatedText className="section-subtitle mx-auto">
            We're not just building software—we're building technology with soul.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="flex gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              whileHover={{ x: 10 }}
            >
              <div className="flex-shrink-0">
                <reason.icon className={`h-8 w-8 ${reason.color} animate-float`} 
                             style={{ animationDelay: `${index * 0.2}s` }} />
              </div>
              <div>
                <AnimatedCardText className="text-xl font-bold text-primary mb-2">
                  {reason.title}
                </AnimatedCardText>
                <AnimatedText className="text-gray-600">
                  {reason.description}
                </AnimatedText>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMulaa;