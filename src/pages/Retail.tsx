import React, { useState } from 'react';
import { ShoppingBag, CheckCircle } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import DemoModal from '../components/DemoModal';

const Retail = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const painPoints = [
    { title: 'Manual Updates', description: 'AI eliminates tedious cross-system data entry' },
    { title: 'Stock Errors', description: 'Prevent inventory emergencies with smart alerts' },
    { title: 'Vendor Issues', description: 'Keep suppliers and inventory perfectly aligned with AI' },
  ];

  const features = [
    { title: 'AI Supplier Updates', description: 'Supplier feeds sync automatically with intelligent validation' },
    { title: 'Smart POS Integration', description: 'Connect Shopify, Square, and other platforms with AI optimization' },
    { title: 'Error-proof Data', description: 'AI-powered validation prevents costly mistakes before they happen' },
    { title: 'Predictive Forecasting', description: 'AI analyzes patterns to predict inventory needs and trends' },
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
            <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-blue-300 animate-bounce-in" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              AI-Powered Retail Operations
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-fade-in-up mobile-text-spacing">
              Sync stock, suppliers, and product updates with intelligent automation
            </p>
            <button 
              onClick={handleConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 button-hover"
            >
              Book a Guided Walkthrough
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">
              AI Solutions for Retail Challenges
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

      {/* Video Section */}
      <section className="py-16 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 animate-fade-in">See AI Retail Optimization in Action</h2>
              <p className="text-gray-600 text-lg mobile-text-spacing">
                Watch how SortMyBusinessWithAI transforms retail operations with intelligent automation
              </p>
            </div>
            <VideoPlayer
              thumbnailUrl="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              videoUrl="https://www.youtube.com/embed/C1gWBpa41M4"
              title="SortMyBusinessWithAI Retail Demo"
              description="Discover how AI transforms inventory management, supplier relationships, and retail operations"
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
              AI-Enhanced Retail Features
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

      {/* Testimonial */}
      <section className="py-16 bg-blue-50 mobile-section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center animate-fade-in">
              <p className="text-xl md:text-2xl font-medium text-gray-700 mb-4 mobile-text-spacing">
                "The AI recommendations saved us from three potential stockouts this month. I finally feel in control of our inventory."
              </p>
              <footer className="text-gray-500">
                — Maria, Retail Operations Manager
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
              Ready to Transform Your Retail Operations with AI?
            </h2>
            <p className="text-gray-600 mb-8 mobile-text-spacing">
              Book a consultation with our experts and discover how AI can streamline your retail business with the human touch you need.
            </p>
            <button
              onClick={handleConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 button-hover"
            >
              Book a Guided Walkthrough
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
          a1: 'Interest: Retail AI Optimization',
          a2: 'Source: Retail page',
          a3: 'Focus: Inventory management, supplier sync, retail automation',
          a4: 'Industry: Retail & E-commerce'
        }}
        utmContent="retail-page"
      />
    </div>
  );
};

export default Retail;