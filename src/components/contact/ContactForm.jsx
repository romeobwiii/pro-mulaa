import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will respond within 24 hours.');
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-primary font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>
                
                <div>
                  <label className="block text-primary font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-primary font-semibold mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                />
              </div>
              
              <div>
                <label className="block text-primary font-semibold mb-2">Interest *</label>
                <select
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                >
                  <option value="">Select an option</option>
                  <option value="Mulaa Sigil XMD">Mulaa Sigil XMD</option>
                  <option value="Mulaa Sigil AI">Mulaa Sigil AI</option>
                  <option value="Learn with Mulaa">Learn with Mulaa</option>
                  <option value="MulaaStream">MulaaStream</option>
                  <option value="Consulting">Mythic Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-primary font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                Send Message
                <Send className="h-5 w-5 ml-2" />
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                We typically respond within 24 hours. For urgent inquiries, please indicate in your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;