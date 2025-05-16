import React from 'react';
import { Check } from 'lucide-react';
import { Link } from './Navigation';

interface RepairItemProps {
  device: string;
  repair: string;
  price: string;
  timeEstimate: string;
}

const RepairItem: React.FC<RepairItemProps> = ({ device, repair, price, timeEstimate }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-200">
      <div className="mb-2 md:mb-0">
        <span className="font-medium text-gray-900">{device}</span>
        <span className="mx-2 text-gray-400">•</span>
        <span className="text-gray-700">{repair}</span>
      </div>
      <div className="flex items-center justify-between md:justify-end">
        <span className="text-lg font-semibold text-blue-600 mr-4 md:mr-8">{price}</span>
        <span className="text-sm text-gray-500">{timeEstimate}</span>
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const popularRepairs = [
    { device: 'iPhone', repair: 'Screen Replacement', price: '$79-149', timeEstimate: '1-2 hours' },
    { device: 'Samsung', repair: 'Battery Replacement', price: '$49-89', timeEstimate: '1 hour' },
    { device: 'MacBook', repair: 'Keyboard Replacement', price: '$129-229', timeEstimate: '1-2 days' },
    { device: 'iPad', repair: 'Glass Digitizer', price: '$99-199', timeEstimate: '2-3 hours' },
    { device: 'Dell/HP', repair: 'Hard Drive Upgrade', price: '$89-149', timeEstimate: '1 day' },
  ];

  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We believe in fair, upfront pricing with no hidden fees. 
            Popular repairs are listed below, but contact us for a precise quote for your specific device.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Popular Repairs</h3>
            
            <div className="space-y-2">
              {popularRepairs.map((item, index) => (
                <RepairItem
                  key={index}
                  device={item.device}
                  repair={item.repair}
                  price={item.price}
                  timeEstimate={item.timeEstimate}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <p className="text-gray-600 mb-4">All repairs include:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-2" size={16} />
                  Free diagnostic service
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-2" size={16} />
                  90-day warranty
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-2" size={16} />
                  Premium quality parts
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="text-green-500 mr-2" size={16} />
                  Data backup assistance
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-100">
            <p className="text-gray-600 mb-4">
              Need a repair not listed above? Get a custom quote for your device.
            </p>
            <Link
              href="/request-quote"
              className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;