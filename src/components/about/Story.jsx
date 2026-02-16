import React from 'react';
import { Calendar, Heart, MapPin } from 'lucide-react';
import DecryptedText from '../animations/DecryptedText';
import AnimatedTitle from '../shared/AnimatedTitle';

const Story = () => {
  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Animated Title */}
          <AnimatedTitle className="text-center mb-8">
            Our Story
          </AnimatedTitle>
          
          <div className="prose prose-lg max-w-none">
            {/* First paragraph - animate on view */}
            <DecryptedText
              text="Mulaa Company began with a simple observation: technology was flooding into Africa, but none of it truly understood the people using it. Generic chatbots gave robotic responses. AI systems failed to grasp cultural context. Streaming services recommended content with no emotional resonance. Something was missing."
              animateOn="view"
              sequential={true}
              revealDirection="start"
              speed={30}
              className="text-primary font-medium"
              encryptedClassName="text-secondary opacity-30"
              parentClassName="text-lg text-gray-700 mb-6 leading-relaxed block"
            />
            
            {/* Second paragraph - animate with center reveal */}
            <DecryptedText
              text="In 2026, at just 18 years old, Amantle Mpaekae founded Mulaa Company in Gaborone, Botswana to fill that gap. The vision was clear: build technology that doesn't just function, but feels. Systems that understand emotion. Interfaces that honor culture. Code that carries soul."
              animateOn="view"
              sequential={true}
              revealDirection="center"
              speed={35}
              className="text-primary"
              encryptedClassName="text-accent opacity-30"
              parentClassName="text-lg text-gray-700 mb-6 leading-relaxed block"
            />
            
            {/* Third paragraph - animate from end */}
            <DecryptedText
              text="What began as a solo vision quickly grew into a team of six, each bringing essential expertise to the mission. Together, we are building Mulaa Company to prove that African technological innovation can lead global conversations about what technology should be—not just efficient, but meaningful; not just intelligent, but wise; not just functional, but soulful."
              animateOn="view"
              sequential={true}
              revealDirection="end"
              speed={40}
              className="text-primary"
              encryptedClassName="text-secondary opacity-30"
              parentClassName="text-lg text-gray-700 mb-8 leading-relaxed block"
            />
          </div>

          {/* Stats Cards with hover animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Founded Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Calendar className="h-8 w-8 text-secondary mx-auto mb-3 animate-float" />
              <DecryptedText
                text="2026"
                animateOn="hover"
                sequential={true}
                revealDirection="start"
                speed={50}
                className="text-2xl font-bold text-primary"
                encryptedClassName="text-secondary"
                parentClassName="block"
              />
              <div className="text-gray-600 mt-1">Founded</div>
            </div>
            
            {/* Age Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <Heart className="h-8 w-8 text-secondary mx-auto mb-3 animate-float delay-200" />
              <DecryptedText
                text="18"
                animateOn="hover"
                sequential={true}
                revealDirection="center"
                speed={50}
                className="text-2xl font-bold text-primary"
                encryptedClassName="text-accent"
                parentClassName="block"
              />
              <div className="text-gray-600 mt-1">Founder's Age</div>
            </div>
            
            {/* Location Card */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <MapPin className="h-8 w-8 text-secondary mx-auto mb-3 animate-float delay-500" />
              <DecryptedText
                text="Gaborone"
                animateOn="hover"
                sequential={true}
                revealDirection="end"
                speed={50}
                className="text-2xl font-bold text-primary"
                encryptedClassName="text-secondary"
                parentClassName="block"
              />
              <div className="text-gray-600 mt-1">Botswana</div>
            </div>
          </div>

          {/* Additional animated quote at the bottom */}
          <div className="mt-16 text-center">
            <DecryptedText
              text="Building legacies, not just software"
              animateOn="view"
              sequential={true}
              revealDirection="center"
              speed={45}
              className="text-secondary font-semibold text-xl"
              encryptedClassName="text-primary opacity-30"
              parentClassName="block italic"
            />
          </div>
        </div>
      </div>

      {/* Add animation keyframes to your index.css if not already present */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Story;