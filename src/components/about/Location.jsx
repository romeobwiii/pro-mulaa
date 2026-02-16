import React from 'react';
import { MapPin, Globe } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Location</h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Map Placeholder - You can replace with actual Google Maps embed */}
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-primary font-semibold">Gaborone, Botswana</p>
                <p className="text-gray-600 text-sm">Interactive map coming soon</p>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Based in Gaborone, Botswana with global vision. Specializing in transforming complex 
                requirements into elegant technical solutions that balance innovation with cultural 
                resonance and human connection.
              </p>
              
              <div className="flex items-center gap-4 text-primary">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Gaborone, Botswana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;