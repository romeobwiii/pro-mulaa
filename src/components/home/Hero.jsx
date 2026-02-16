import React from 'react';
import { ChevronRight, Users, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedTitle, AnimatedSubtitle, AnimatedText, AnimatedButton } from '../animations/GlobalAnimated';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 bg-secondary rounded-full filter blur-3xl animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedTitle className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Technology with Souls and Emotions
          </AnimatedTitle>
          
          <AnimatedSubtitle className="text-xl md:text-2xl mb-8 text-gray-200">
            Mulaa Company builds emotionally intelligent systems infused with African cultural context. We transform technology into legacy.
          </AnimatedSubtitle>
          
          <AnimatedText className="text-lg mb-12 text-secondary font-semibold" type="subtitle">
            Building legacies, not just software
          </AnimatedText>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="bg-secondary text-dark px-8 py-4 rounded-lg font-semibold hover:bg-secondary-light transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg">
              <AnimatedButton>Explore Our Products</AnimatedButton>
              <ChevronRight className="h-5 w-5" />
            </Link>
            <Link to="/team" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg">
              <Users className="h-5 w-5" />
              <AnimatedButton>Meet the Team</AnimatedButton>
            </Link>
            <Link to="/contact" className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-light transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg">
              <Phone className="h-5 w-5" />
              <AnimatedButton>Contact Us</AnimatedButton>
            </Link>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <AnimatedText 
            type="footer" 
            className="text-lg italic text-gray-300 border-l-4 border-secondary pl-4"
          >
            "Behind every line of Mulaa code lies a dedication to the Muse who inspired the transformation of emotion into engineering."
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default Hero;