import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Clock, User, Mail, MessageSquare, CheckCircle, Calendar as CalendarIcon } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

interface PrefillData {
  name?: string;
  email?: string;
  [key: string]: any;
}

interface CustomBookingCalendarProps {
  prefillData?: PrefillData;
  onSubmit: (bookingData: BookingData) => void;
  utmContent?: string;
}

interface BookingData {
  date: Date;
  time: string;
  name: string;
  email: string;
  message: string;
  prefillData?: PrefillData;
  utmContent?: string;
}

const CustomBookingCalendar: React.FC<CustomBookingCalendarProps> = ({
  prefillData = {},
  onSubmit,
  utmContent = 'custom-calendar'
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState<string>(prefillData.name || '');
  const [email, setEmail] = useState<string>(prefillData.email || '');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available time slots (in a real app, this would come from backend)
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  // Disable past dates and weekends
  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Disable past dates
      if (date < today) return true;
      
      // Disable weekends (Saturday = 6, Sunday = 0)
      const day = date.getDay();
      return day === 0 || day === 6;
    }
    return false;
  };

  // Auto-populate message with prefill data context
  useEffect(() => {
    if (prefillData && Object.keys(prefillData).length > 0) {
      const contextInfo = Object.entries(prefillData)
        .filter(([key, value]) => key !== 'name' && key !== 'email' && value)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
      
      if (contextInfo) {
        setMessage(`Additional Context:\n${contextInfo}\n\nPlease let me know how I can help with your AI business optimization needs.`);
      }
    }
  }, [prefillData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !name || !email) {
      alert('Please fill in all required fields.');
      return;
    }

    const bookingData: BookingData = {
      date: selectedDate,
      time: selectedTime,
      name,
      email,
      message,
      prefillData,
      utmContent
    };

    onSubmit(bookingData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedTime('');
      setMessage('');
      if (!prefillData.name) setName('');
      if (!prefillData.email) setEmail('');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-gray-800">Booking Request Submitted!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you for your interest in our AI business optimization services. We'll be in touch within 24 hours to confirm your appointment.
        </p>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Requested:</strong> {selectedDate.toLocaleDateString()} at {selectedTime}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-blue-600" />
            Select Date & Time
          </h3>
          
          <div className="mb-6">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              tileDisabled={tileDisabled}
              className="w-full border rounded-lg shadow-sm"
              minDate={new Date()}
              maxDate={new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)} // 60 days from now
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-1" />
              Available Times
            </label>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                    selectedTime === time
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <User className="w-5 h-5 mr-2 text-blue-600" />
            Your Information
          </h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Message (Optional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell us about your business and AI automation goals..."
              />
            </div>

            {selectedDate && selectedTime && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Appointment Summary</h4>
                <p className="text-sm text-blue-700">
                  <strong>Date:</strong> {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-sm text-blue-700">
                  <strong>Time:</strong> {selectedTime}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={!selectedDate || !selectedTime || !name || !email}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Book AI Consultation
            </button>

            <p className="text-xs text-gray-500 text-center">
              By booking this consultation, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomBookingCalendar;