import React, { useState } from 'react';
import { Users, CheckCircle, PlayCircle } from 'lucide-react';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import DemoModal from '../components/DemoModal';

const Partners = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const painPoints = [
    { title: 'Limited AI Solutions', description: 'No intelligent operational add-ons for clients' },
    { title: 'Market Competition', description: 'Hard to differentiate with AI-powered offerings' },
    { title: 'Client Demands', description: 'Growing need for smart, automated tools' },
  ];

  const features = [
    { title: 'AI Platform Compatibility', description: 'Intelligent integration with Xero, Sage, SortMyBooks' },
    { title: 'White Label AI Options', description: 'Custom branding with AI-powered co-support' },
    { title: 'Revenue Share', description: 'Competitive commission structure for AI solutions' },
    { title: 'Expert Partner Support', description: 'Dedicated AI consultation and partner success team' },
  ];

  const handlePartnerProgram = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Partner With SortMyBusinessWithAI
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Add AI-powered value, build trust, and grow your client portfolio with intelligent business solutions
            </p>
            <button 
              onClick={handlePartnerProgram}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Join Our AI Partner Program
            </button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              AI-Powered Solutions for Partner Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <CheckCircle className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="font-bold text-xl mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">See Our AI Partner Program</h2>
              <p className="text-gray-600 text-lg">
                Discover how partners are growing their business with AI-powered solutions
              </p>
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={handlePartnerProgram}
                  className="bg-white rounded-full p-4 shadow-lg transform transition-transform hover:scale-110"
                >
                  <PlayCircle className="w-12 h-12 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              AI-Enhanced Partner Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Benefits />
      <Testimonials />

      {/* Quote Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "SortMyBusinessWithAI helped me go from accountant to AI-powered growth partner. My clients love the intelligent automation."
              <footer className="text-gray-500 text-base mt-2">
                — Raj, Advisory Firm Principal
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <ContactForm />

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        prefillData={{
          name: '',
          email: '',
          a1: 'Interest: Partner Program',
          a2: 'Source: Partners page',
          a3: 'Focus: Reseller partnership, AI solutions for clients',
          a4: 'Type: Business partnership inquiry'
        }}
        utmContent="partners-page"
      />
    </div>
  );
};

export default Partners;