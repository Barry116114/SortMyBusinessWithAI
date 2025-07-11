import React from 'react';
import { Store, TruckIcon, Wallet, Users } from 'lucide-react';

const PersonaSection = () => {
  const personas = [
    {
      icon: <Store className="w-12 h-12 text-blue-500" />,
      title: "For Retail Ops",
      headline: "Sync Stock and Supplier Feeds",
      description: "Streamline inventory management, automate purchase orders, and get real-time stock insights across all locations.",
      cta: "Explore Retail Use Case",
      link: "/retail"
    },
    {
      icon: <TruckIcon className="w-12 h-12 text-blue-500" />,
      title: "For Distribution",
      headline: "Connect Supply Chain Data",
      description: "Track shipments, manage warehouses, and optimize delivery routes with integrated logistics tools.",
      cta: "See Distribution Solutions",
      link: "/distribution"
    },
    {
      icon: <Wallet className="w-12 h-12 text-blue-500" />,
      title: "For Finance/Admin",
      headline: "Automate Financial Workflows",
      description: "Streamline approvals, reconcile accounts, and generate reports automatically with smart automation.",
      cta: "View Finance Features",
      link: "/finance"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "For Software Resellers",
      headline: "Grow Your Service Offering",
      description: "Add value to your client relationships with our integrated business management platform.",
      cta: "Join Partner Program",
      link: "/partners"
    }
  ];

  return (
    <section id="personas" className="py-20 bg-gray-50 mobile-section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Find Your Perfect Fit
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mobile-text-spacing">
            Select your role to discover how SortMyBusiness can transform your workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 card-hover mobile-card-padding group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 icon-hover">{persona.icon}</div>
              <h3 className="text-blue-600 font-semibold mb-2">{persona.title}</h3>
              <h4 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{persona.headline}</h4>
              <p className="text-gray-600 mb-6 mobile-text-spacing">{persona.description}</p>
              <a 
                href={persona.link}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                {persona.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;