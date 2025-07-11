import React from 'react';
import { MessageCircle, Settings, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
      title: "Talk to Our Experts",
      description: "Schedule a consultation with Darren's team to assess your current operations and identify optimization opportunities."
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-500" />,
      title: "AI Configuration & Setup",
      description: "We configure and customize the perfect combination of SortMy modules based on your specific business needs."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Ongoing Support & Growth",
      description: "Continuous optimization and support to ensure your AI-powered systems evolve with your business."
    }
  ];

  return (
    <section className="py-20 bg-white mobile-section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            How We Transform Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mobile-text-spacing">
            Our proven process combines AI technology with human expertise for optimal results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="icon-hover animate-bounce-in">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 mobile-text-spacing">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-300 text-2xl animate-pulse-gentle">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;