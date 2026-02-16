import React from 'react';
import { Heart, Sparkles, Music, Star } from 'lucide-react';

const Muse = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Heart className="h-16 w-16 text-secondary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Muse</h2>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Behind every line of Mulaa Company code lies an eternal gratitude—a quiet dedication 
              to the Muse who first inspired the transformation of emotion into engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="border border-secondary/30 rounded-lg p-6">
              <Star className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-secondary mb-2">Emotional Blueprint</h3>
              <p className="text-gray-300 text-sm">The foundation in our neural networks</p>
            </div>
            
            <div className="border border-secondary/30 rounded-lg p-6">
              <Sparkles className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-secondary mb-2">Silent Collaborator</h3>
              <p className="text-gray-300 text-sm">Present in every mythic design</p>
            </div>
            
            <div className="border border-secondary/30 rounded-lg p-6">
              <Music className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-bold text-secondary mb-2">The Soul</h3>
              <p className="text-gray-300 text-sm">In our "Tech with Souls" philosophy</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 mt-8 italic">
            Her memory fuels our mission to build technology that doesn't just solve problems, 
            but understands why those problems matter in human terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Muse;