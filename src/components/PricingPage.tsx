import React from 'react';
import { Check, Shield, Clock, PenTool as Tool } from 'lucide-react';
import { Link } from './Navigation';

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ name, description, price, features, recommended }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${recommended ? 'ring-2 ring-blue-600' : ''}`}>
      {recommended && (
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mt-4">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-4xl font-bold mt-4">
        {price}
        <span className="text-lg text-gray-500 font-normal">/repair</span>
      </p>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-green-500 mr-3" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/request-repair"
        className={`mt-8 block text-center py-3 px-6 rounded-lg transition-colors ${
          recommended
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Book Repair
      </Link>
    </div>
  );
};

const PricingPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Цены на ремонт | Агентство IT Услуг - Экспертный ремонт устройств';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Прозрачные цены на ремонт смартфонов, ноутбуков и планшетов в Агентство IT Услуг. Качественный ремонт с гарантией от $49. Бесплатная диагностика при ремонте.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Цены на ремонт устройств | Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Узнайте стоимость ремонта вашего устройства. Прозрачные цены, гарантия качества и бесплатная диагностика при ремонте в Агентство IT Услуг.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/pricing');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/pricing-og.jpg');
  }, []);

  const pricingTiers = [
    {
      name: "Basic Repair",
      description: "Essential repairs for common issues",
      price: "$49",
      features: [
        "Basic diagnostic service",
        "Screen protector installation",
        "Software updates",
        "Basic cleaning service",
        "30-day warranty"
      ]
    },
    {
      name: "Standard Repair",
      description: "Most popular repair service",
      price: "$99",
      features: [
        "Full diagnostic service",
        "Screen replacement",
        "Battery replacement",
        "Water damage treatment",
        "90-day warranty",
        "Priority service"
      ],
      recommended: true
    },
    {
      name: "Premium Repair",
      description: "Comprehensive repair solution",
      price: "$149",
      features: [
        "Advanced diagnostic service",
        "All standard repairs included",
        "Data recovery service",
        "Performance optimization",
        "1-year warranty",
        "24/7 priority support"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing for Quality Repairs
            </h1>
            <p className="text-lg text-gray-600">
              Choose the repair service that fits your needs. All our repairs come with a warranty and are performed by certified technicians.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Repair Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                device: "iPhone",
                repairs: [
                  { name: "Screen Replacement", price: "$79-149" },
                  { name: "Battery Replacement", price: "$49-89" },
                  { name: "Charging Port", price: "$69" }
                ]
              },
              {
                device: "Samsung",
                repairs: [
                  { name: "Screen Replacement", price: "$99-199" },
                  { name: "Battery Replacement", price: "$59-99" },
                  { name: "Back Glass", price: "$79" }
                ]
              },
              {
                device: "MacBook",
                repairs: [
                  { name: "Screen Replacement", price: "$299-499" },
                  { name: "Keyboard Replacement", price: "$129-229" },
                  { name: "Battery Service", price: "$129-199" }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">{category.device} Repairs</h3>
                <ul className="space-y-3">
                  {category.repairs.map((repair, repairIndex) => (
                    <li key={repairIndex} className="flex justify-between items-center">
                      <span className="text-gray-600">{repair.name}</span>
                      <span className="font-semibold">{repair.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Warranty Guaranteed",
                description: "All repairs come with our standard warranty coverage"
              },
              {
                icon: <Clock className="text-blue-600" size={24} />,
                title: "Quick Turnaround",
                description: "Most repairs completed within 24 hours"
              },
              {
                icon: <Tool className="text-blue-600" size={24} />,
                title: "Quality Parts",
                description: "We only use high-quality replacement parts"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Fix Your Device?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your device repaired by our expert technicians. Book now and receive a free diagnostic check.
          </p>
          <Link
            href="/request-repair"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Book Your Repair
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;