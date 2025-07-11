import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const TrustSignals = () => {
  const platforms = [
    { name: 'Xero', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Xero_software_logo.svg' },
    { name: 'QuickBooks', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/QuickBooks_Logo.svg' },
    { name: 'Sage', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Sage_Group_logo.svg' },
    { name: 'SortMyBooks', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];

  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      text: "ISO 27001 Certified"
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Real People Ready to Help"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "99.9% Uptime Guarantee"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join thousands of businesses using SortMyBusinessWithAI to streamline their operations with AI and human expertise
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              {platform.name === 'SortMyBooks' ? (
                <div className="text-gray-500 font-semibold">SortMyBooks</div>
              ) : (
                <img 
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center justify-center gap-3 bg-white p-6 rounded-lg shadow-sm"
            >
              <span className="text-blue-500">{badge.icon}</span>
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;