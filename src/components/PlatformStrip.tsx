import React from 'react';

const PlatformStrip = () => {
  const platforms = [
    { name: 'Xero', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Xero_software_logo.svg' },
    { name: 'QuickBooks', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/QuickBooks_Logo.svg' },
    { name: 'Sage', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Sage_Group_logo.svg' },
    { name: 'SortMyBooks', logo: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }, // Placeholder image since actual logo is not available
    { name: 'FreshBooks', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/83/FreshBooks_logo.svg' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-gray-500 text-lg mb-10">
          Built to integrate with your favourite platforms
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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
      </div>
    </section>
  );
};

export default PlatformStrip;