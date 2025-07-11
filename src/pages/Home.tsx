import React from 'react';
import Hero from '../components/Hero';
import SortMySuite from '../components/SortMySuite';
import HowItWorks from '../components/HowItWorks';
import TrustSignals from '../components/TrustSignals';
import DemoSection from '../components/DemoSection';
import AIQuiz from '../components/AIQuiz';

const Home = () => {
  return (
    <div>
      <Hero />
      <SortMySuite />
      <HowItWorks />
      
      {/* AI Quiz Section */}
      <section className="py-20 bg-blue-50 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Discover Your AI Potential
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mobile-text-spacing">
              Take our quick assessment to see how AI could transform your business operations
            </p>
          </div>
          <AIQuiz />
        </div>
      </section>
      
      <TrustSignals />
      <DemoSection />
    </div>
  );
};

export default Home;