import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Brain, Target, TrendingUp, CheckCircle } from 'lucide-react';
import CustomBookingCalendar from './CustomBookingCalendar';

interface QuizQuestion {
  id: number;
  question: string;
  options: { value: string; label: string; points: number }[];
}

const AIQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What's your biggest operational challenge?",
      options: [
        { value: "manual-tasks", label: "Too many manual, repetitive tasks", points: 3 },
        { value: "data-silos", label: "Data scattered across different systems", points: 4 },
        { value: "inventory", label: "Inventory management and forecasting", points: 3 },
        { value: "customer-service", label: "Customer service and communication", points: 2 }
      ]
    },
    {
      id: 2,
      question: "How much time do you spend on administrative tasks weekly?",
      options: [
        { value: "5-10", label: "5-10 hours", points: 2 },
        { value: "10-20", label: "10-20 hours", points: 3 },
        { value: "20-30", label: "20-30 hours", points: 4 },
        { value: "30+", label: "30+ hours", points: 5 }
      ]
    },
    {
      id: 3,
      question: "Which best describes your current tech setup?",
      options: [
        { value: "basic", label: "Basic tools (spreadsheets, email)", points: 5 },
        { value: "some-software", label: "Some specialized software", points: 3 },
        { value: "integrated", label: "Mostly integrated systems", points: 2 },
        { value: "advanced", label: "Advanced, well-integrated setup", points: 1 }
      ]
    },
    {
      id: 4,
      question: "What's your primary business focus?",
      options: [
        { value: "retail", label: "Retail & E-commerce", points: 3 },
        { value: "distribution", label: "Distribution & Logistics", points: 4 },
        { value: "services", label: "Professional Services", points: 2 },
        { value: "manufacturing", label: "Manufacturing & Production", points: 4 }
      ]
    }
  ];

  const handleAnswer = (value: string, points: number) => {
    // Create updated answers object immediately to ensure accurate calculation
    const updatedAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(updatedAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate final score using the updated answers including current question
      const totalPoints = Object.entries(updatedAnswers).reduce((total, [questionIndex, answer]) => {
        const questionNum = parseInt(questionIndex);
        const question = questions[questionNum];
        const option = question.options.find(opt => opt.value === answer);
        return total + (option?.points || 0);
      }, 0);
      
      setScore(totalPoints);
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    if (score >= 15) {
      return {
        level: "High AI Potential",
        message: "Your business has significant opportunities for AI automation. You could save 15-25 hours per week with the right AI solutions.",
        color: "text-green-600",
        bgColor: "bg-green-50",
        recommendation: "Immediate AI implementation recommended"
      };
    } else if (score >= 10) {
      return {
        level: "Moderate AI Potential",
        message: "There are several areas where AI could streamline your operations and save 8-15 hours per week.",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        recommendation: "Strategic AI adoption would benefit your business"
      };
    } else {
      return {
        level: "Some AI Potential",
        message: "While your setup is good, AI could still optimize specific processes and save 5-10 hours per week.",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        recommendation: "Targeted AI solutions for specific workflows"
      };
    }
  };

  const handleBookingSubmit = (bookingData: any) => {
    // In a real application, this would send data to your backend
    console.log('AI Quiz Booking submitted:', bookingData);
    
    // Log the comprehensive booking data including quiz results
    console.log('Complete Booking Details:', {
      date: bookingData.date.toISOString(),
      time: bookingData.time,
      name: bookingData.name,
      email: bookingData.email,
      message: bookingData.message,
      quizResults: {
        score: score,
        level: getScoreMessage().level,
        answers: answers,
        recommendation: getScoreMessage().recommendation
      },
      source: 'AI Quiz Results',
      utmContent: bookingData.utmContent
    });
  };

  if (showResults) {
    const result = getScoreMessage();
    
    // Prepare prefill data based on quiz results
    const prefillData = {
      name: '',
      email: '',
      'AI Assessment Score': `${score}/20`,
      'AI Potential Level': result.level,
      'Recommendation': result.recommendation,
      'Primary Challenge': answers[0] ? questions[0].options.find(opt => opt.value === answers[0])?.label : 'Not specified',
      'Business Focus': answers[3] ? questions[3].options.find(opt => opt.value === answers[3])?.label : 'Not specified'
    };
    
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 ${result.bgColor} rounded-full mb-4`}>
            <Brain className={`w-8 h-8 ${result.color}`} />
          </div>
          <h3 className="text-2xl font-bold mb-2">Your AI Potential Assessment</h3>
          <div className={`inline-block px-4 py-2 ${result.bgColor} ${result.color} rounded-full font-semibold`}>
            {result.level} (Score: {score}/20)
          </div>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg mb-6">{result.message}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold">Personalized</div>
              <div className="text-sm text-gray-600">AI recommendations</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold">Efficiency Gains</div>
              <div className="text-sm text-gray-600">Measurable improvements</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold">Expert Support</div>
              <div className="text-sm text-gray-600">Human-guided setup</div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-xl font-bold text-center mb-4">Book Your Personalized AI Consultation</h4>
          <p className="text-gray-600 text-center mb-6">
            Your assessment results have been pre-filled below. Schedule a call with our experts to discuss your specific AI opportunities and get a customized implementation plan.
          </p>
          
          {/* Custom Booking Calendar */}
          <CustomBookingCalendar
            prefillData={prefillData}
            onSubmit={handleBookingSubmit}
            utmContent={`ai-quiz-score-${score}-${result.level.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
        
        <div className="text-center mt-8">
          <button
            onClick={resetQuiz}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Discover Your AI Potential</h3>
          <span className="text-sm text-gray-500">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold mb-6 animate-fade-in-up">
          {questions[currentQuestion].question}
        </h4>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value, option.points)}
              className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span>{option.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {currentQuestion > 0 && (
        <button
          onClick={goBack}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous Question
        </button>
      )}
    </div>
  );
};

export default AIQuiz;