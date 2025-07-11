import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DemoModal from './DemoModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Retail', path: '/retail' },
    { name: 'Distribution', path: '/distribution' },
    { name: 'Finance', path: '/finance' },
    { name: 'Partners', path: '/partners' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            SortMyBusinessWithAI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Speak to a Consultant
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600'
                } block py-2`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsDemoModalOpen(true);
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg mt-4 transition-colors duration-200"
            >
              Speak to a Consultant
            </button>
          </div>
        )}
      </div>

      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation;