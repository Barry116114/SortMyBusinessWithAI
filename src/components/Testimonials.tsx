import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SortMyBusiness gave us a smart, scalable product we could confidently recommend to clients. Our retention has increased by 32% since partnership.",
      name: "Sarah Johnson",
      position: "Managing Partner",
      company: "Clarity Accounting",
      location: "UK"
    },
    {
      quote: "The integration with our existing systems was seamless. Our clients love the added value, and we've seen a significant boost in recurring revenue.",
      name: "David Chen",
      position: "Director",
      company: "FinanceFlow Advisory",
      location: "Canada"
    },
    {
      quote: "As a boutique firm, partnering with SortMyBusiness allowed us to compete with larger players by offering enterprise-grade solutions to our SME clients.",
      name: "Emma Rodriguez",
      position: "Founder",
      company: "Numeric Solutions",
      location: "Australia"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from resellers who've grown their business with SortMyBusiness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md relative"
            >
              <Quote className="absolute text-blue-100 w-20 h-20 -top-4 -left-4 -z-10" />
              <p className="text-gray-700 mb-6 italic relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;