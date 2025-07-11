import React, { useState } from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import DemoModal from './DemoModal';

const DemoSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discover Your AI Potential?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Book a consultation with our experts and discover how AI automation can transform your business operations with the human touch you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to a Human
            </button>
            
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Guided Walkthrough
            </button>
          </div>
          
          <p className="mt-8 text-blue-100 text-sm">
            No pressure sales tactics. Just helpful humans ready to understand your business and recommend the right AI solutions.
          </p>
        </div>
      </div>

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
};

export default DemoSection;