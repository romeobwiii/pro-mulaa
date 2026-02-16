import React from 'react';
import { Target, Eye, Heart, Globe, Award, BookOpen, Sparkles } from 'lucide-react';

const MissionVision = () => {
  const values = [
    {
      icon: BookOpen,
      title: 'Technology with Narrative',
      description: 'Every system tells a story worth remembering'
    },
    {
      icon: Heart,
      title: 'Intelligence with Emotion',
      description: 'AI that understands context beyond data'
    },
    {
      icon: Sparkles,
      title: 'Design with Soul',
      description: 'Interfaces that resonate on human frequencies'
    },
    {
      icon: Award,
      title: 'Architecture with Legacy',
      description: 'Systems built to endure and inspire'
    },
    {
      icon: Globe,
      title: 'Innovation with Culture',
      description: 'Technology that honors heritage while creating future'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Mission */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            <Target className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Transforming technology into legacy—designing mythic, cinematic systems that empower people, 
            honor culture, and inspire the future.
          </p>
        </div>

        {/* Vision */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            <Eye className="h-12 w-12 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Vision</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To establish Mulaa Company as Africa's premier technology firm specializing in emotionally 
            intelligent systems, proving that technology from the continent can set global standards 
            for meaningful, culturally-resonant innovation.
          </p>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4 p-6 bg-cream rounded-lg">
                <div className="flex-shrink-0">
                  <value.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;