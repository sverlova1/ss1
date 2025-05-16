import React from 'react';
import { Link } from './Navigation';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to repair your device?</h2>
            <p className="text-blue-100 max-w-xl">
              Our team of certified technicians is ready to bring your device back to life. 
              Fast service, quality parts, and affordable prices guaranteed.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/request-repair" 
              className="bg-white text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors text-center flex-1"
            >
              Request Repair
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors text-center flex-1 flex items-center justify-center"
            >
              Contact Us <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;