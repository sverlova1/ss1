import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggle}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`mt-2 text-gray-600 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How long do most repairs take?",
      answer: "Most smartphone and tablet repairs are completed within 1-3 hours. Laptop repairs typically take 1-2 business days, depending on the issue and parts availability. We'll give you a specific timeframe when you drop off your device."
    },
    {
      question: "Do you offer a warranty on repairs?",
      answer: "Yes, we provide a 90-day warranty on all our repairs. If you experience any issues related to the repair within this period, we'll fix it free of charge. This warranty covers parts and labor."
    },
    {
      question: "What brands do you repair?",
      answer: "We repair most major brands including Apple (iPhone, iPad, MacBook), Samsung, Google, Huawei, Xiaomi, Dell, HP, Lenovo, Asus, and many more. If you don't see your brand listed, please contact us and we'll let you know if we can help."
    },
    {
      question: "Do I need an appointment?",
      answer: "Walk-ins are welcome, but we recommend scheduling an appointment to ensure prompt service. You can request an appointment through our website, by phone, or in person at our location."
    },
    {
      question: "Can you recover data from my broken device?",
      answer: "In many cases, yes. We can often recover data from devices with screen damage, water damage, or other issues. However, data recovery success rates depend on the extent of the damage. We'll assess your device and provide you with options."
    },
    {
      question: "Do you offer pick-up and delivery services?",
      answer: "Yes, we offer convenient pick-up and delivery within a 10-mile radius of our store for a small fee. For larger orders or business clients, we may waive this fee."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our repair services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              toggle={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            Contact our support team
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;