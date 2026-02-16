import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import { teamMembers } from '../../data/teamData';
import { AnimatedTitle, AnimatedSubtitle } from '../animations/GlobalAnimated';

const TeamGrid = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <AnimatedTitle className="section-title">Meet Our Team</AnimatedTitle>
          <AnimatedSubtitle className="section-subtitle mx-auto">
            Six dedicated individuals united by a shared mission: building technology with souls and emotions.
          </AnimatedSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="hover-lift"
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;