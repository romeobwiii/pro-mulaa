import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { caseStudies } from '../../data/caseStudiesData';

const CaseStudiesGrid = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="section-title">Case Studies</h1>
          <p className="section-subtitle mx-auto">
            Real results from businesses using Mulaa technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesGrid;