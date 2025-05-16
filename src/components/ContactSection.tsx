import React from 'react';
import { MapPin, Phone, Mail, Clock, GitBranch as BrandTelegram } from 'lucide-react';

const ContactInfo: React.FC<{ icon: React.ReactNode; title: string; details: string | React.ReactNode }> = ({ 
  icon, 
  title, 
  details 
}) => {
  return (
    <div className="flex items-start mb-8">
      <div className="bg-blue-100 p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="text-gray-600">{details}</div>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your email"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="device" className="block text-sm font-medium text-gray-700 mb-1">
          Device Type
        </label>
        <select
          id="device"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select your device</option>
          <option value="iphone">iPhone</option>
          <option value="samsung">Samsung</option>
          <option value="macbook">MacBook</option>
          <option value="laptop">Windows Laptop</option>
          <option value="ipad">iPad</option>
          <option value="tablet">Other Tablet</option>
          <option value="other">Other Device</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
          Describe the Issue
        </label>
        <textarea
          id="issue"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          placeholder="Please describe the problem with your device"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors w-full"
      >
        Submit Request
      </button>
    </form>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need to schedule a repair? Reach out to our friendly team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
            <ContactForm />
          </div>
          
          <div className="order-1 lg:order-2">
            <ContactInfo
              icon={<MapPin className="text-blue-600" size={20} />}
              title="Our Location"
              details={
                <>
                  <p>123 Tech Street</p>
                  <p>San Francisco, CA 94103</p>
                </>
              }
            />
            
            <ContactInfo
              icon={<Phone className="text-blue-600" size={20} />}
              title="Phone"
              details={
                <a href="tel:+14155551234" className="hover:text-blue-600 transition-colors">
                  (415) 555-1234
                </a>
              }
            />
            
            <ContactInfo
              icon={<Mail className="text-blue-600" size={20} />}
              title="Email"
              details={
                <a href="mailto:support@techfix.com" className="hover:text-blue-600 transition-colors">
                  support@techfix.com
                </a>
              }
            />
            
            <ContactInfo
              icon={<Clock className="text-blue-600" size={20} />}
              title="Business Hours"
              details={
                <>
                  <p>Monday - Friday: 9am - 7pm</p>
                  <p>Saturday: 10am - 5pm</p>
                  <p>Sunday: Closed</p>
                </>
              }
            />

            <ContactInfo
              icon={<BrandTelegram className="text-blue-600" size={20} />}
              title="Telegram"
              details={
                <a 
                  href="https://t.me/techfix_support" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 transition-colors flex items-center"
                >
                  @techfix_support
                  <span className="ml-2 text-sm text-blue-600">(Fast Response)</span>
                </a>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;