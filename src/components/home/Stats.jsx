import React from 'react';
import { Calendar, Users, MapPin, Package } from 'lucide-react';
import { AnimatedStat } from '../animations/GlobalAnimated';
import { motion } from 'framer-motion';

const stats = [
  { icon: Calendar, value: '2026', label: 'Founded', color: 'text-primary' },
  { icon: Users, value: '6', label: 'Dedicated Members', color: 'text-secondary' },
  { icon: MapPin, value: 'Gaborone', label: 'Botswana', color: 'text-accent' },
  { icon: Package, value: '5', label: 'Core Offerings', color: 'text-primary' }
];

const Stats = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-children">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center mb-3">
                <stat.icon className={`h-8 w-8 ${stat.color} animate-float`} 
                           style={{ animationDelay: `${index * 0.3}s` }} />
              </div>
              <AnimatedStat className="text-3xl md:text-4xl font-bold mb-1">
                {stat.value}
              </AnimatedStat>
              <div className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;