import React from 'react';
import { Smartphone, Laptop, Tablet, Headphones, Watch, Speaker, Coffee, Zap, Tv, Gamepad, Cpu, Lock, Search, Wrench } from 'lucide-react';
import { Link } from './Navigation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  onNavigate: (page: string) => void;
  page: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, href, onNavigate, page }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100 group">
      <div className="bg-blue-50 p-4 rounded-full inline-block mb-4 group-hover:bg-blue-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={href}
        onClick={() => onNavigate(page)}
        className="text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors"
      >
        Подробнее
        <svg
          className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Wrench className="text-blue-600" size={24} />,
      title: 'Все услуги',
      description: 'Полный список услуг по ремонту электроники. От смартфонов до игровых консолей.',
      page: 'all-services',
      highlight: true
    },
    {
      icon: <Smartphone className="text-blue-600" size={24} />,
      title: 'Ремонт телефонов',
      description: 'Замена экрана, батареи и другой ремонт смартфонов с использованием премиальных запчастей.',
      page: 'phone-repair'
    },
    {
      icon: <Laptop className="text-blue-600" size={24} />,
      title: 'Ремонт ноутбуков',
      description: 'Диагностика оборудования, замена компонентов и оптимизация производительности.',
      page: 'laptop-repair'
    },
    {
      icon: <Tablet className="text-blue-600" size={24} />,
      title: 'Ремонт планшетов',
      description: 'Ремонт экранов, разъемов зарядки и решение других проблем с планшетами.',
      page: 'tablet-repair'
    },
    {
      icon: <Tv className="text-blue-600" size={24} />,
      title: 'Ремонт ТВ',
      description: 'Профессиональный ремонт телевизоров всех марок.',
      page: 'tv-repair'
    },
    {
      icon: <Gamepad className="text-blue-600" size={24} />,
      title: 'Ремонт Nintendo Switch',
      description: 'Ремонт консолей Nintendo Switch и аксессуаров.',
      page: 'nintendo-switch'
    },
    {
      icon: <Speaker className="text-blue-600" size={24} />,
      title: 'Ремонт колонок JBL',
      description: 'Профессиональный ремонт колонок JBL всех моделей.',
      page: 'jbl-repair'
    },
    {
      icon: <Cpu className="text-blue-600" size={24} />,
      title: 'Сложный ремонт и BGA',
      description: 'Ремонт материнских плат и замена BGA компонентов.',
      page: 'complex-repair'
    },
    {
      icon: <Lock className="text-blue-600" size={24} />,
      title: 'Разблокировка FRP',
      description: 'Удаление Google Account и разблокировка устройств.',
      page: 'frp-unlock'
    },
    {
      icon: <Search className="text-blue-600" size={24} />,
      title: 'Мобильная криминалистика',
      description: 'Восстановление данных и разблокировка устройств.',
      page: 'mobile-forensics'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги по ремонту</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы предлагаем широкий спектр услуг по ремонту всех ваших электронных устройств. 
            Наши опытные мастера используют премиальные запчасти для обеспечения качества и долговечности.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={`/${service.page}`}
              onNavigate={onNavigate}
              page={service.page}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Связаться с нами
            <svg
              className="w-5 h-5 ml-2"
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;