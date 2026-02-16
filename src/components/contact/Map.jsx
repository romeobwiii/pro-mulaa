import React from 'react';
import { MapPin, Mail, Github, Clock } from 'lucide-react';

const Map = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Email</p>
                  <a href="mailto:amantlempaekae@gmail.com" className="text-gray-600 hover:text-secondary">
                    amantlempaekae@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Location</p>
                  <p className="text-gray-600">Gaborone, Botswana</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Github className="h-6 w-6 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">GitHub</p>
                  <a 
                    href="https://github.com/romeobwiii" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-secondary"
                  >
                    github.com/romeobwiii
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-primary">Response Time</p>
                  <p className="text-gray-600">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-primary font-semibold">Gaborone, Botswana</p>
              <p className="text-gray-600 text-sm">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;