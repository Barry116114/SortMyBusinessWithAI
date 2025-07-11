import React, { useState } from 'react';
import { Truck, CheckCircle, BarChart } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import DemoModal from '../components/DemoModal';

const Distribution = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const painPoints = [
    { title: 'Lost Deliveries', description: 'AI-powered tracking with predictive alerts' },
    { title: 'Siloed Teams', description: 'Intelligent data integration across departments' },
    { title: 'Manual Tracking', description: 'Automated monitoring with smart notifications' },
  ];

  const features = [
    { title: 'AI Order Dashboard', description: 'Intelligent visibility with predictive insights for orders and quotes' },
    { title: 'Smart Delivery Tracking', description: 'AI-enhanced GPS tracking with proactive notifications' },
    { title: 'Predictive Analytics', description: 'AI-powered performance reports and KPI forecasting' },
    { title: 'Intelligent Route Optimization', description: 'Machine learning-powered delivery route planning and optimization' },
  ];

  const handleConsultation = () => {
    const prefillData = {
      name: '',
      email: '',
      a1: 'Interest: Distribution & Logistics AI Solutions',
      a2: 'Source: Distribution page',
      a3: 'Focus: Order tracking, delivery optimization, logistics automation',
      a4: 'Industry: Distribution & Logistics'
    };
    setIsDemoModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="w-16 h-16 mx-auto mb-6 text-blue-300 animate-bounce-in" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              AI-Powered Distribution Intelligence
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up mobile-text-spacing">
              Track orders, quotes & customers with intelligent automation and human expertise
            </p>
            <button 
              onClick={handleConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 button-hover"
            >
              Speak to Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
              AI Solutions for Distribution Challenges
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
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">See AI Distribution Optimization</h2>
              <p className="text-gray-600 text-lg mobile-text-spacing">
                Discover how our AI-powered solutions transform distribution operations
              </p>
            </div>
            <VideoPlayer
              thumbnailUrl="https://images.pexels.com/photos/4481140/pexels-photo-4481140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="AI Distribution Optimization Demo"
              description="See how intelligent automation transforms logistics, tracking, and delivery management"
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
              AI-Enhanced Distribution Features
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

      {/* Analytics Preview */}
      <section className="py-16 bg-blue-50 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <BarChart className="w-16 h-16 text-blue-600 mx-auto mb-6 animate-pulse-gentle" />
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">
              AI-Powered Performance Analytics
            </h2>
            <p className="text-gray-600 mb-8 mobile-text-spacing">
              Track KPIs, monitor delivery performance, and optimize routes with our intelligent analytics dashboard powered by machine learning.
            </p>
            <blockquote className="text-xl italic text-gray-700 mb-4 animate-fade-in-up">
              "The AI predictions helped us avoid three major delivery delays this month. Finally — quotes, orders, and client info all intelligently connected."
              <footer className="text-gray-500 text-base mt-2">
                — Alex, Distribution Manager
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
              Ready to Optimize Your Distribution with AI?
            </h2>
            <p className="text-gray-600 mb-8 mobile-text-spacing">
              Schedule a consultation with our experts to see how SortMyBusinessWithAI can transform your distribution operations with intelligent automation and human insight.
            </p>
            <button 
              onClick={handleConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 button-hover"
            >
              Speak to Our Experts
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
          a1: 'Interest: Distribution & Logistics AI Solutions',
          a2: 'Source: Distribution page',
          a3: 'Focus: Order tracking, delivery optimization, logistics automation',
          a4: 'Industry: Distribution & Logistics'
        }}
        utmContent="distribution-page"
      />
    </div>
  );
};

export default Distribution;