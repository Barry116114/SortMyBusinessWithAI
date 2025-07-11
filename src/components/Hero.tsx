import React from 'react';
import { ArrowDown, PhoneCall } from 'lucide-react';

const Hero = () => {
  const scrollToSuite = () => {
    const suiteSection = document.getElementById('sortmy-suite');
    if (suiteSection) {
      suiteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
      
      <div className="relative container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            AI with a Human Touch
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-blue-100 leading-relaxed">
            We Help Businesses Work Smarter
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-blue-200 leading-relaxed max-w-3xl mx-auto">
            Talk to a Human. Discover how AI + Expertise can transform your operations. Darren Costello and his team assess, configure, and recommend AI automation tailored to your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToSuite}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Explore AI Solutions
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => window.open("https://calendly.com/gettingsb/30min", "_blank")}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Talk to a Human
              <PhoneCall className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;