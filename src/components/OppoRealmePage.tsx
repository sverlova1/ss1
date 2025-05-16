import React from 'react';
import { Smartphone, Award, Clock, PenTool as Tools, Shield, CheckCircle } from 'lucide-react';
import { Link } from './Navigation';

const OppoRealmePage: React.FC = () => {
  React.useEffect(() => {
    // Update title and meta description
    document.title = 'Официальный сервисный центр OPPO & Realme | Агентство IT Услуг';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Авторизованный сервисный центр OPPO и Realme в Ангарске. Ремонт с использованием оригинальных запчастей, сертифицированные мастера и гарантия производителя.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Официальный сервис OPPO & Realme | Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Авторизованный сервисный центр OPPO и Realme. Оригинальные запчасти, сертифицированные мастера и сохранение гарантии производителя.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/oppo-realme');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/oppo-realme-og.jpg');
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Award size={20} className="mr-2" />
                Authorized Service Center
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Official OPPO & Realme Service Center
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Factory-trained technicians, genuine parts, and manufacturer warranty support for all OPPO and Realme devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-repair"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Book a Repair
                </Link>
                <Link
                  href="/warranty-check"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  Check Warranty Status
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional OPPO and Realme device repair service"
                className="rounded-xl shadow-lg"
                width="1260"
                height="750"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Authorized Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Tools className="text-blue-600" size={24} />,
                title: "Hardware Repairs",
                description: "Screen replacement, battery service, camera repairs, and more with genuine parts"
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Warranty Service",
                description: "Free repairs and replacements under manufacturer warranty"
              },
              {
                icon: <Smartphone className="text-blue-600" size={24} />,
                title: "Software Support",
                description: "ColorOS/RealmeUI updates, data recovery, and system optimization"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Authorized Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <CheckCircle className="text-green-500" size={20} />,
                title: "Genuine Parts",
                description: "Only original OPPO and Realme parts used"
              },
              {
                icon: <CheckCircle className="text-green-500" size={20} />,
                title: "Certified Technicians",
                description: "Factory-trained and certified repair experts"
              },
              {
                icon: <CheckCircle className="text-green-500" size={20} />,
                title: "Warranty Safe",
                description: "Maintain your device warranty"
              },
              {
                icon: <CheckCircle className="text-green-500" size={20} />,
                title: "Quick Service",
                description: "Most repairs completed same day"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Your OPPO or Realme Device Repaired?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get professional support from authorized technicians with genuine parts and warranty coverage.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OppoRealmePage;