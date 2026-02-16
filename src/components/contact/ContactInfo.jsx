import React from 'react';
import { Mail, MapPin, Github, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Ready to build technology with soul? Let's start a conversation.
        </p>
      </div>
    </section>
  );
};

export default ContactInfo;