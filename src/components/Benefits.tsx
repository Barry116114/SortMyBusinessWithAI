import React from 'react';
import { TrendingUp, Users, HeartHandshake, Megaphone } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Recurring Revenue Opportunities',
      description: 'Generate stable income streams through our competitive commission structure and renewal bonuses.',
      icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Client Retention & Value Add',
      description: 'Keep clients engaged with a solution that delivers measurable business impact and growth.',
      icon: <Users className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Sales & Onboarding Support',
      description: 'Access dedicated partner support, training resources, and a collaborative onboarding team.',
      icon: <HeartHandshake className="w-10 h-10 text-blue-500" />,
    },
    {
      title: 'Marketing Assets and Co-branding',
      description: 'Leverage ready-made marketing materials and co-branding options to promote your partnership.',
      icon: <Megaphone className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <section className="py-20 bg-white mobile-section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Partner Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mobile-text-spacing">
            Join the SortMyBusiness partner program and unlock value for both your business and clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 card-hover mobile-card-padding group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-5 icon-hover">{benefit.icon}</div>
              <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
              <p className="text-gray-600 mobile-text-spacing">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;