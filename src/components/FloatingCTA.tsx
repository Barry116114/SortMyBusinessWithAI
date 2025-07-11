import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import DemoModal from './DemoModal';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleTalkToHuman = () => {
    setIsDemoModalOpen(true);
    setIsMinimized(true); // Minimize the floating CTA when modal opens
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isMinimized ? (
          <button
            onClick={handleExpand}
            className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm animate-bounce">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">AI Expert Available</span>
              </div>
              <button
                onClick={handleMinimize}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Ready to discover how AI can transform your business? Talk to a human expert now.
            </p>
            <button
              onClick={handleTalkToHuman}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to a Human
            </button>
          </div>
        )}
      </div>

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};

export default FloatingCTA;