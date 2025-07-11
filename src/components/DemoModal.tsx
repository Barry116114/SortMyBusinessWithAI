import React from 'react';
import { X } from 'lucide-react';
import CustomBookingCalendar from './CustomBookingCalendar';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: {
    name?: string;
    email?: string;
    [key: string]: any;
  };
  utmContent?: string;
}

const DemoModal: React.FC<DemoModalProps> = ({ 
  isOpen, 
  onClose, 
  prefillData = {},
  utmContent = 'general-demo'
}) => {
  const handleBookingSubmit = (bookingData: any) => {
    // In a real application, this would send data to your backend
    console.log('Booking submitted:', bookingData);
    
    // You could integrate with your CRM, email service, or booking system here
    // For example:
    // - Send to your API endpoint
    // - Integrate with Google Calendar
    // - Send confirmation emails
    // - Store in your database
    
    // For now, we'll just log the data
    console.log('Booking Details:', {
      date: bookingData.date.toISOString(),
      time: bookingData.time,
      name: bookingData.name,
      email: bookingData.email,
      message: bookingData.message,
      context: bookingData.prefillData,
      source: bookingData.utmContent
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Book Your AI Consultation</h2>
              <p className="text-gray-600 mt-1">
                Schedule a personalized consultation with our AI business optimization experts.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 120px)' }}>
          <CustomBookingCalendar
            prefillData={prefillData}
            onSubmit={handleBookingSubmit}
            utmContent={utmContent}
          />
        </div>
      </div>
    </div>
  );
};

export default DemoModal;