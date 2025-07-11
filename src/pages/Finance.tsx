import React, { useState } from 'react';
import { LineChart, CheckCircle, Clock } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import DemoModal from '../components/DemoModal';

const Finance = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const painPoints = [
    { title: 'Manual Approvals', description: 'AI-powered automated approval workflows' },
    { title: 'Reconciliation Delays', description: 'Intelligent real-time account matching' },
    { title: 'Reporting Bottlenecks', description: 'AI-generated instant financial insights' },
  ];

  const features = [
    { title: 'Intelligent Approvals', description: 'AI-driven automated routing and smart approval flows' },
    { title: 'AI Reconciliation', description: 'Machine learning-powered real-time transaction matching' },
    { title: 'Smart Reporting', description: 'AI-generated customizable dashboards and predictive reports' },
    { title: 'Compliance Intelligence', description: 'AI-monitored audit trails and automated compliance controls' },
  ];

  const handleConsultation = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <LineChart className="w-16 h-16 mx-auto mb-6 text-blue-300 animate-bounce-in" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              AI-Powered Financial Workflows
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up mobile-text-spacing">
              From intelligent approvals to automated reconciliation — AI eliminates spreadsheet chaos
            </p>
            <button 
              onClick={handleConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 button-hover"
            >
              Explore AI Finance Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
              AI Solutions for Financial Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md card-hover mobile-card-padding"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CheckCircle className="w-10 h-10 text-green-500 mb-4 icon-hover" />
                  <h3 className="font-bold text-xl mb-2">{point.title}</h3>
                  <p className="text-gray-600 mobile-text-spacing">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">See AI Financial Automation</h2>
              <p className="text-gray-600 text-lg mobile-text-spacing">
                Watch how intelligent automation transforms financial operations
              </p>
            </div>
            <VideoPlayer
              thumbnailUrl="https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="AI Financial Automation Demo"
              description="Discover how AI streamlines approvals, reconciliation, and financial reporting"
              className="animate-fade-in-up"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
              AI-Enhanced Financial Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-xl card-hover mobile-card-padding"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mobile-text-spacing">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Time Savings Section */}
      <section className="py-16 bg-blue-50 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-16 h-16 text-blue-600 mx-auto mb-6 animate-pulse-gentle" />
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              AI Saves Hours Every Week
            </h2>
            <p className="text-gray-600 mb-8 mobile-text-spacing">
              Intelligent automation handles routine tasks so you can focus on strategic financial decisions and business growth.
            </p>
            <blockquote className="text-xl italic text-gray-700 mb-4 animate-fade-in-up">
              "The AI recommendations help me review our finances daily instead of monthly. I catch issues before they become problems."
              <footer className="text-gray-500 text-base mt-2">
                — John, Finance Manager
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              Ready to Transform Your Financial Operations with AI?
            </h2>
            <p className="text-gray-600 mb-8 mobile-text-spacing">
              See how SortMyBusinessWithAI can streamline your financial workflows and reporting with intelligent automation and expert guidance.
            </p>
            <button 
              onClick={handleConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 button-hover"
            >
              Explore AI Finance Solutions
            </button>
          </div>
        </div>
      </section>

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        prefillData={{
          name: '',
          email: '',
          a1: 'Interest: Financial AI Automation',
          a2: 'Source: Finance page',
          a3: 'Focus: Approvals, reconciliation, financial reporting',
          a4: 'Industry: Finance & Administration'
        }}
        utmContent="finance-page"
      />
    </div>
  );
};

export default Finance;