import React from 'react';
import { Mail, Github, Target } from 'lucide-react';

const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
        {/* Placeholder for team member image - you can replace with actual images later */}
        <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-secondary">
            {member.name.charAt(0)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
        <p className="text-secondary font-semibold mb-3">{member.title}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-4 w-4 text-accent" />
          <span className="text-sm text-gray-600">Focus: {member.focus}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {member.bio}
        </p>
        
        <div className="flex gap-4 pt-4 border-t border-gray-100">
          {member.email && (
            <a 
              href={`mailto:${member.email}`}
              className="text-primary hover:text-secondary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          )}
          {member.github && (
            <a 
              href={`https://github.com/${member.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;