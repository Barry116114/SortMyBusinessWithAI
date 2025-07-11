import React, { useState } from 'react';
import { 
  BookOpen, 
  ShoppingCart, 
  Store, 
  Package, 
  BarChart3, 
  Users, 
  Truck, 
  Headphones, 
  Clock, 
  Shield, 
  Cog, 
  MessageSquare, 
  GraduationCap, 
  FileText, 
  Wrench, 
  Target,
  X,
  ArrowRight
} from 'lucide-react';
import DemoModal from './DemoModal';

const SortMySuite = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalPrefillData, setModalPrefillData] = useState({});

  const modules = [
    {
      name: 'SortMyBooks',
      description: 'Invoicing, expenses, payments, and accounting integration.',
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      details: 'Streamline your financial operations with AI-powered invoicing, automated expense tracking, and seamless integration with Xero, QuickBooks, and Sage.',
      benefits: ['Automated invoice generation', 'Smart expense categorization', 'Real-time financial insights']
    },
    {
      name: 'SortMyPurchasing',
      description: 'Predictive purchasing and purchase order automation.',
      icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
      details: 'Leverage AI to predict demand, automate purchase orders, and optimize supplier relationships for better cash flow management.',
      benefits: ['Demand forecasting', 'Automated reordering', 'Supplier performance tracking']
    },
    {
      name: 'SortMyEcommerce',
      description: 'Online sales, marketplace sync, customer orders.',
      icon: <Store className="w-8 h-8 text-blue-500" />,
      details: 'Connect all your sales channels with intelligent inventory sync, automated order processing, and customer behavior analytics.',
      benefits: ['Multi-channel sync', 'Order automation', 'Customer insights']
    },
    {
      name: 'SortMyStock',
      description: 'Inventory tracking, stocktakes, reorder alerts.',
      icon: <Package className="w-8 h-8 text-blue-500" />,
      details: 'AI-powered inventory management with predictive analytics, automated stocktakes, and intelligent reorder points.',
      benefits: ['Real-time tracking', 'Predictive alerts', 'Automated stocktakes']
    },
    {
      name: 'SortMyReporting',
      description: 'Dashboards, KPIs, financial and performance insights.',
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      details: 'Transform your data into actionable insights with AI-generated reports, customizable dashboards, and predictive analytics.',
      benefits: ['Custom dashboards', 'Predictive analytics', 'Automated reporting']
    },
    {
      name: 'SortMySales',
      description: 'CRM, lead tracking, quoting, follow-ups.',
      icon: <Users className="w-8 h-8 text-blue-500" />,
      details: 'Intelligent CRM with AI-powered lead scoring, automated follow-ups, and smart quote generation to boost conversion rates.',
      benefits: ['Lead scoring', 'Automated follow-ups', 'Smart quoting']
    },
    {
      name: 'SortMyLogistics',
      description: 'Delivery scheduling, courier integration, route planning.',
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      details: 'Optimize delivery operations with AI route planning, real-time tracking, and automated courier selection.',
      benefits: ['Route optimization', 'Real-time tracking', 'Courier integration']
    },
    {
      name: 'SortMySupport',
      description: 'Helpdesk, SLA tracking, communication logs.',
      icon: <Headphones className="w-8 h-8 text-blue-500" />,
      details: 'Enhance customer support with AI ticket routing, automated responses, and intelligent SLA monitoring.',
      benefits: ['Smart ticket routing', 'Automated responses', 'SLA monitoring']
    },
    {
      name: 'SortMyHR',
      description: 'Timesheets, leave, staff records, compliance.',
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      details: 'Streamline HR processes with automated timesheets, intelligent leave management, and compliance tracking.',
      benefits: ['Automated timesheets', 'Leave management', 'Compliance tracking']
    },
    {
      name: 'SortMyCompliance',
      description: 'Health & safety, audit logs, regulatory files.',
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      details: 'Stay compliant with AI-powered audit trails, automated regulatory reporting, and intelligent risk assessment.',
      benefits: ['Automated audits', 'Risk assessment', 'Regulatory reporting']
    },
    {
      name: 'SortMyProduction',
      description: 'Production workflows, BOM, planning.',
      icon: <Cog className="w-8 h-8 text-blue-500" />,
      details: 'Optimize manufacturing with AI-driven production planning, intelligent BOM management, and workflow automation.',
      benefits: ['Production planning', 'BOM optimization', 'Workflow automation']
    },
    {
      name: 'SortMyProjects',
      description: 'Tasks, milestones, Gantt views, collaboration.',
      icon: <Target className="w-8 h-8 text-blue-500" />,
      details: 'Manage projects efficiently with AI task prioritization, automated milestone tracking, and intelligent resource allocation.',
      benefits: ['Task prioritization', 'Milestone tracking', 'Resource allocation']
    },
    {
      name: 'SortMyAssets',
      description: 'Equipment tracking, depreciation, maintenance.',
      icon: <Wrench className="w-8 h-8 text-blue-500" />,
      details: 'Track and maintain assets with AI-powered maintenance scheduling, depreciation calculations, and lifecycle management.',
      benefits: ['Maintenance scheduling', 'Depreciation tracking', 'Lifecycle management']
    },
    {
      name: 'SortMyComms',
      description: 'Internal messaging, alerts, client communication.',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      details: 'Enhance communication with AI-powered message routing, intelligent alerts, and automated client updates.',
      benefits: ['Message routing', 'Smart alerts', 'Client automation']
    },
    {
      name: 'SortMyTraining',
      description: 'Staff onboarding, training, certification.',
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      details: 'Accelerate learning with AI-personalized training paths, automated certification tracking, and intelligent skill assessment.',
      benefits: ['Personalized training', 'Certification tracking', 'Skill assessment']
    },
    {
      name: 'SortMyDocuments',
      description: 'Secure document storage, sharing, versioning.',
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      details: 'Manage documents intelligently with AI-powered organization, automated versioning, and secure sharing protocols.',
      benefits: ['AI organization', 'Version control', 'Secure sharing']
    }
  ];

  const handleModuleClick = (index: number) => {
    setSelectedModule(index);
  };

  const closeModal = () => {
    setSelectedModule(null);
  };

  const handleDiscussModule = (moduleName: string) => {
    const prefillData = {
      name: '',
      email: '',
      a1: `Interested in: ${moduleName}`,
      a2: 'Source: SortMy Suite Module',
      a3: `Module Details: ${modules.find(m => m.name === moduleName)?.description || ''}`,
      a4: 'Request: Module-specific consultation'
    };
    
    setModalPrefillData(prefillData);
    setIsDemoModalOpen(true);
    closeModal();
  };

  const handleGeneralWalkthrough = () => {
    const prefillData = {
      name: '',
      email: '',
      a1: 'Request: General SortMy Suite walkthrough',
      a2: 'Source: SortMy Suite section',
      a3: 'Interest: Multiple modules overview',
      a4: 'Type: Guided product demonstration'
    };
    
    setModalPrefillData(prefillData);
    setIsDemoModalOpen(true);
  };

  return (
    <section id="sortmy-suite" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Explore the SortMy Suite
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mobile-text-spacing">
            AI-Optimized Business Modules – activated with human insight and expertise. 
            Each module is configured specifically for your business after our consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              onClick={() => handleModuleClick(index)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer card-hover mobile-card-padding group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="mb-4 icon-hover">{module.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                {module.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3 mobile-text-spacing">
                {module.description}
              </p>
              <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto mobile-text-spacing">
            Not sure which modules your business needs? Our experts will assess your operations and recommend the perfect combination.
          </p>
          <button 
            onClick={handleGeneralWalkthrough}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 button-hover"
          >
            Book a Guided Walkthrough
          </button>
        </div>
      </div>

      {/* Module Details Modal */}
      {selectedModule !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8 relative animate-fade-in-up">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="mr-4">{modules[selectedModule].icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {modules[selectedModule].name}
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-6 mobile-text-spacing">
                {modules[selectedModule].details}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {modules[selectedModule].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleDiscussModule(modules[selectedModule].name)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 button-hover"
              >
                Discuss This Module
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Explore More Modules
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        prefillData={modalPrefillData}
        utmContent="sortmy-suite"
      />
    </section>
  );
};

export default SortMySuite;