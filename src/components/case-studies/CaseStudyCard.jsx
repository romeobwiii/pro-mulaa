import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

const CaseStudyCard = ({ study }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
        <p className="text-secondary font-semibold">{study.business}</p>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-bold text-primary mb-2">Challenge:</h3>
          <p className="text-gray-700">{study.challenge}</p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-bold text-primary mb-2">Solution:</h3>
          <p className="text-gray-700">{study.solution}</p>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-secondary font-semibold mb-4"
        >
          {isExpanded ? 'Show less' : 'Show results'}
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>
        
        {isExpanded && (
          <div className="border-t pt-4">
            <h3 className="font-bold text-primary mb-3">Results:</h3>
            <ul className="space-y-2 mb-4">
              {study.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-cream p-4 rounded-lg italic">
              <p className="text-gray-700 mb-2">"{study.quote}"</p>
              <p className="text-primary font-semibold">— {study.quoteAuthor}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyCard;