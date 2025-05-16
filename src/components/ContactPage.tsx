import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, GitBranch as BrandTelegram } from 'lucide-react';

declare global {
  interface Window {
    ymaps: typeof ymaps;
  }
}

const ContactPage: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInitialized, setMapInitialized] = useState(false);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    // Update title and meta description
    document.title = 'Контакты | Агентство IT Услуг - Экспертный ремонт устройств в Ангарске';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Свяжитесь с нами для ремонта вашего устройства. Наша команда экспертов готова помочь вам. Доступны различные способы связи - телефон, email, мессенджеры.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Свяжитесь с Агентство IT Услуг | Ремонт электроники в Ангарске');
    if (ogDescription) ogDescription.setAttribute('content', 'Нужен ремонт устройства? Свяжитесь с нами любым удобным способом. Быстрая связь, профессиональная консультация и оперативный ремонт.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/contact');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/contact-og.jpg');

    // Initialize Yandex Maps
    const initializeMap = () => {
      if (!mapRef.current || mapInitialized) return;
      
      const map = new window.ymaps.Map(mapRef.current, {
        center: [52.510954, 103.837476], // San Francisco coordinates
        zoom: 15,
        controls: ['zoomControl', 'fullscreenControl']
      });

      const placemark = new window.ymaps.Placemark([52.510954, 103.837476], {
        balloonContent: `
          <div class="p-3">
            <h3 class="font-bold mb-2">TechFix</h3>
            <p class="text-sm">179-й квартал, Ангарск, Иркутская область, 665816</p>
          </div>
        `
      }, {
        preset: 'islands#blueRepairIcon'
      });

      map.geoObjects.add(placemark);
      setMapInitialized(true);
    };

    // Check if Yandex Maps API is already loaded
    if (window.ymaps) {
      window.ymaps.ready(initializeMap);
    } else if (!scriptRef.current) {
      // Only create script if it hasn't been created before
      scriptRef.current = document.createElement('script');
      scriptRef.current.src = 'https://api-maps.yandex.ru/2.1/?apikey=7f3adc80-5cab-483f-9033-0da6635cf3d7&lang=ru_RU';
      scriptRef.current.async = true;
      scriptRef.current.onload = () => {
        if (window.ymaps) {
          window.ymaps.ready(initializeMap);
        }
      };
      document.head.appendChild(scriptRef.current);
    }

    // Cleanup function
    return () => {
      if (scriptRef.current && document.head.contains(scriptRef.current)) {
        document.head.removeChild(scriptRef.current);
      }
    };
  }, [mapInitialized]); // Add mapInitialized to dependencies

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
            </h1>
            <p className="text-lg text-gray-600">
            У вас есть вопросы о наших услугах по ремонту? Наша команда готова помочь вам с любыми вопросами или проблемами.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <a
                  href="https://t.me/techfix_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Написать
                </a>
              </form>
            </div>

            {/* Map and Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Наше местоположение</h2>
              <div className="bg-white rounded-xl shadow-lg p-4 mb-8">
                <div ref={mapRef} className="w-full h-[400px] rounded-lg"></div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Посетите нас</h3>
                    <p className="text-gray-600">
                      179-й квартал, 15<br />
                      г. Ангарск, 665816<br />
                      Иркутская Область
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Позвоните нам</h3>
                    <p className="text-gray-600">
                      <a href="tel:+79041225537" className="hover:text-blue-600 transition-colors">
                       +7 (904) 122-55-37
                      </a><hr />
                      <a href="tel:83955635605" className="hover:text-blue-600 transition-colors">
                       8 (3955) 635-605
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:it-pc@bk.ru" className="hover:text-blue-600 transition-colors">
                        it-pc@bk.ru
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Часы работы</h3>
                    <p className="text-gray-600">
                    Понедельник - Пятница: 10:00 - 19:00<br />
                    Суббота, Воскресенье: 10:00 - 16:00<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BrandTelegram className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Telegram</h3>
                    <p className="text-gray-600">
                      <a 
                        href="https://t.me/remont138" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-blue-600 transition-colors flex items-center"
                      >
                        @remont138
                        <span className="ml-2 text-sm text-blue-600">(Быстрый ответ)</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Chat */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center mb-4">
                  <MessageSquare className="text-blue-600 mr-3" size={24} />
                  <h3 className="font-semibold text-lg">Live Chat</h3>
                </div>
                <p className="text-gray-600 mb-4">
                 Нужна срочная помощь? Свяжитесь с нами прямо сейчас.
                </p>
                <a
                  href="https://t.me/agentstvo_it_uslug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors border border-blue-200 inline-flex items-center justify-center"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;