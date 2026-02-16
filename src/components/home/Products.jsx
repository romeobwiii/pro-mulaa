import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, BookOpen, Film, Users, ChevronRight } from 'lucide-react';
import { 
  AnimatedTitle, 
  AnimatedSubtitle, 
  AnimatedCardText, 
  AnimatedText  // This was missing!
} from '../animations/GlobalAnimated';
import { motion } from 'framer-motion';

const products = [
  { icon: MessageCircle, name: 'Mulaa Sigil XMD', description: 'AI-powered WhatsApp business with emotional intelligence', color: 'text-primary' },
  { icon: Brain, name: 'Mulaa Sigil AI', description: 'Custom neural assistants with cultural context', color: 'text-secondary' },
  { icon: BookOpen, name: 'Learn with Mulaa', description: 'Cinematic education with narrative learning', color: 'text-accent' },
  { icon: Film, name: 'MulaaStream', description: 'Emotionally-curated streaming with cultural context', color: 'text-primary' },
  { icon: Users, name: 'Mythic Consulting', description: 'Strategic technology design with emotional architecture', color: 'text-secondary' }
];

const Products = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <AnimatedTitle className="section-title">Our Products</AnimatedTitle>
          <AnimatedSubtitle className="section-subtitle mx-auto">
            Each product addresses a distinct market need while sharing our foundational philosophy of emotional intelligence and cultural context.
          </AnimatedSubtitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="card hover-lift"
            >
              <div className={`${product.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 animate-float`}
                   style={{ animationDelay: `${index * 0.2}s` }}>
                <product.icon className={`h-8 w-8 ${product.color}`} />
              </div>
              <AnimatedCardText className="text-xl font-bold text-primary mb-2">
                {product.name}
              </AnimatedCardText>
              <AnimatedText className="text-gray-600 mb-4">
                {product.description}
              </AnimatedText>
              <Link to="/products" className="text-secondary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;