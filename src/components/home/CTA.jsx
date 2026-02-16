import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { AnimatedTitle, AnimatedText, AnimatedButton } from '../animations/GlobalAnimated';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedTitle className="text-3xl md:text-4xl font-bold mb-4">
            Ready to build technology with soul?
          </AnimatedTitle>
          <AnimatedText className="text-xl text-gray-200 mb-8">
            Join us in transforming technology into legacy.
          </AnimatedText>
          <Link
            to="/contact"
            className="bg-secondary text-dark px-8 py-4 rounded-lg font-semibold hover:bg-secondary-light transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 text-lg"
          >
            <AnimatedButton>Contact Us Today</AnimatedButton>
            <Send className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;