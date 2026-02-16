import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Github } from 'lucide-react';
import { navLinks, footerProducts } from '../../data/navData';
import { AnimatedFooterText, AnimatedTitle, AnimatedText } from '../animations/GlobalAnimated';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 stagger-children">
          {/* Company Info */}
          <motion.div whileHover={{ x: 5 }} className="hover-lift">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-secondary animate-gentle-pulse" />
              <span className="font-serif text-xl font-bold">
                Mulaa<span className="text-secondary">Company</span>
              </span>
            </div>
            <AnimatedFooterText className="text-gray-300 mb-4">
              Technology with Souls and Emotions — Building emotionally intelligent systems infused with African cultural context.
            </AnimatedFooterText>
            <AnimatedText type="footer" className="text-secondary font-semibold">
              Building legacies, not just software
            </AnimatedText>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ x: 5 }} className="hover-lift">
            <AnimatedTitle type="footer" className="font-serif text-xl font-bold mb-4 text-secondary">
              Quick Links
            </AnimatedTitle>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-secondary transition-colors inline-block hover:translate-x-2 transform duration-300"
                  >
                    <AnimatedFooterText>{link.name}</AnimatedFooterText>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div whileHover={{ x: 5 }} className="hover-lift">
            <AnimatedTitle type="footer" className="font-serif text-xl font-bold mb-4 text-secondary">
              Products
            </AnimatedTitle>
            <ul className="space-y-2">
              {footerProducts.map((product, i) => (
                <motion.li 
                  key={product.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    to={product.path} 
                    className="text-gray-300 hover:text-secondary transition-colors inline-block hover:translate-x-2 transform duration-300"
                  >
                    <AnimatedFooterText>{product.name}</AnimatedFooterText>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div whileHover={{ x: 5 }} className="hover-lift">
            <AnimatedTitle type="footer" className="font-serif text-xl font-bold mb-4 text-secondary">
              Contact
            </AnimatedTitle>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-5 w-5 text-secondary animate-float" />
                <a href="mailto:amantlempaekae@gmail.com" className="text-gray-300 hover:text-secondary transition-colors">
                  <AnimatedFooterText>amantlempaekae@gmail.com</AnimatedFooterText>
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-5 w-5 text-secondary animate-float-delay-1" />
                <AnimatedFooterText>Gaborone, Botswana</AnimatedFooterText>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <Github className="h-5 w-5 text-secondary animate-float-delay-2" />
                <a 
                  href="https://github.com/romeobwiii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  <AnimatedFooterText>GitHub</AnimatedFooterText>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-primary-light pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <AnimatedText type="footer">
            © {new Date().getFullYear()} Mulaa Company. All Rights Reserved.
          </AnimatedText>
          <AnimatedText type="footer" className="text-sm mt-2">
            Tech with Souls and Emotions
          </AnimatedText>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;