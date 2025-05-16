import React from 'react';
import { Smartphone, Clock, Shield, Phone } from 'lucide-react';
import { Link } from './Navigation';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24" aria-label="Hero section">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Phone size={20} className="mr-2" />
              <a href="tel:+74951234567" className="font-medium hover:text-blue-700 transition-colors">
                +7 (495) 123-45-67
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Экспертный ремонт устройств в <span className="text-blue-600">Ангарске</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Профессиональный ремонт смартфонов, ноутбуков и электроники. Квалифицированные мастера и гарантия качества.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/request-repair" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                aria-label="Заказать ремонт устройства"
              >
                Заказать ремонт
              </Link>
              <Link 
                href="/services" 
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                aria-label="Посмотреть услуги"
              >
                Наши услуги
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4" aria-hidden="true">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <div>
                  <h2 className="font-medium text-gray-900">Быстрый ремонт</h2>
                  <p className="text-sm text-gray-600">Большинство ремонтов в тот же день</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4" aria-hidden="true">
                  <Shield className="text-blue-600" size={20} />
                </div>
                <div>
                  <h2 className="font-medium text-gray-900">Гарантия 30 дней</h2>
                  <p className="text-sm text-gray-600">На все виды ремонта</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1294886/pexels-photo-1294886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Профессиональный ремонт устройств"
                className="w-full h-auto object-cover"
                width="1260"
                height="750"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Экспертный ремонт
                  </span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-yellow-400 w-24 h-24 rounded-full opacity-20" aria-hidden="true"></div>
            <div className="absolute -bottom-10 -left-10 bg-blue-600 w-32 h-32 rounded-full opacity-10" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;