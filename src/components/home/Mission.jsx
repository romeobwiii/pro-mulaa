import React from 'react';
import { Target, Heart, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 30%, #4A2C5F 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle mx-auto">
            Transforming technology into legacy—designing mythic, cinematic systems that empower people, 
            honor culture, and inspire the future.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { icon: Heart, title: 'Emotional Intelligence', desc: 'Systems that understand how you feel', color: 'text-primary' },
            { icon: Globe, title: 'African Context', desc: 'Technology that honors culture', color: 'text-secondary' },
            { icon: Target, title: 'Legacy Building', desc: 'Systems designed to endure', color: 'text-accent' },
            { icon: Sparkles, title: 'Mythic Architecture', desc: 'Every system tells a story', color: 'text-primary' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform perspective-1000"
            >
              <motion.div 
                className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-opacity-10`}
                style={{ backgroundColor: `currentColor` }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <item.icon className={`h-10 w-10 ${item.color}`} />
              </motion.div>
              <h3 className="text-xl font-bold text-primary mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;