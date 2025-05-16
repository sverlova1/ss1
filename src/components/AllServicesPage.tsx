import React from 'react';
import { 
  Smartphone, 
  Laptop, 
  Tablet, 
  Headphones, 
  Tv, 
  Gamepad, 
  Speaker, 
  Cpu, 
  Lock, 
  Search, 
  ArrowRight 
} from 'lucide-react';
import { Link } from './Navigation';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  link: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price, link, onClick }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
      <div className="bg-blue-50 p-4 rounded-full inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-semibold">{price}</span>
        <Link
          href={link}
          onClick={onClick}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          Подробнее
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const AllServicesPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  React.useEffect(() => {
    // Update title and meta description
    document.title = 'Все услуги по ремонту | Агентство IT Услуг';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Полный список услуг по ремонту электроники в Агентство IT Услуг. Ремонт телефонов, ноутбуков, планшетов, игровых консолей и другой техники. Профессиональный сервис с гарантией.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Все услуги по ремонту электроники | Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Комплексный ремонт электроники в Ангарске. От смартфонов до игровых консолей. Оригинальные запчасти, опытные мастера, гарантия качества.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/services');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/services-og.jpg');
  }, []);

  const serviceCategories = [
    {
      title: "Ремонт мобильных устройств",
      services: [
        {
          icon: <Smartphone className="text-blue-600" size={24} />,
          title: "Ремонт телефонов",
          description: "Ремонт iPhone, Samsung, Google Pixel и других смартфонов. Замена экрана, батареи, компонентов.",
          price: "от $49",
          link: "/phone-repair",
          page: "phone-repair"
        },
        {
          icon: <Tablet className="text-blue-600" size={24} />,
          title: "Ремонт планшетов",
          description: "Профессиональный ремонт iPad, Samsung Tab и других планшетов. Замена экрана, батареи.",
          price: "от $69",
          link: "/tablet-repair",
          page: "tablet-repair"
        }
      ]
    },
    {
      title: "Ремонт компьютерной техники",
      services: [
        {
          icon: <Laptop className="text-blue-600" size={24} />,
          title: "Ремонт ноутбуков",
          description: "Ремонт ноутбуков всех марок. Замена экрана, клавиатуры, апгрейд компонентов.",
          price: "от $79",
          link: "/laptop-repair",
          page: "laptop-repair"
        },
        {
          icon: <Cpu className="text-blue-600" size={24} />,
          title: "Сложный ремонт и BGA",
          description: "Ремонт материнских плат, замена BGA чипов, восстановление после залития.",
          price: "от $149",
          link: "/complex-repair",
          page: "complex-repair"
        }
      ]
    },
    {
      title: "Ремонт бытовой электроники",
      services: [
        {
          icon: <Tv className="text-blue-600" size={24} />,
          title: "Ремонт телевизоров",
          description: "Ремонт LED и OLED телевизоров. Замена матрицы, ремонт подсветки.",
          price: "от $89",
          link: "/tv-repair",
          page: "tv-repair"
        },
        {
          icon: <Speaker className="text-blue-600" size={24} />,
          title: "Ремонт колонок JBL",
          description: "Ремонт портативных колонок JBL. Замена динамиков, батареи, восстановление после воды.",
          price: "от $49",
          link: "/jbl-repair",
          page: "jbl-repair"
        }
      ]
    },
    {
      title: "Игровые приставки",
      services: [
        {
          icon: <Gamepad className="text-blue-600" size={24} />,
          title: "Ремонт Nintendo Switch",
          description: "Ремонт консолей Nintendo Switch. Замена экрана, джойстиков, батареи.",
          price: "от $69",
          link: "/nintendo-switch",
          page: "nintendo-switch"
        }
      ]
    },
    {
      title: "Специализированные услуги",
      services: [
        {
          icon: <Lock className="text-blue-600" size={24} />,
          title: "Разблокировка FRP",
          description: "Удаление Google Account и FRP защиты на Android устройствах.",
          price: "от $49",
          link: "/frp-unlock",
          page: "frp-unlock"
        },
        {
          icon: <Search className="text-blue-600" size={24} />,
          title: "Мобильная криминалистика",
          description: "Разблокировка устройств, восстановление данных, снятие паролей.",
          price: "от $79",
          link: "/mobile-forensics",
          page: "mobile-forensics"
        }
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
              Все услуги по ремонту
            </h1>
            <p className="text-lg text-gray-600">
              Профессиональный ремонт электроники любой сложности. 
              От смартфонов до игровых консолей. Оригинальные запчасти и гарантия на все работы.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, index) => (
        <section key={index} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <ServiceCard
                  key={serviceIndex}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  link={service.link}
                  onClick={() => onNavigate(service.page)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Нужна помощь с выбором услуги?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Наши специалисты помогут определить проблему и подберут оптимальное решение
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Получить консультацию
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AllServicesPage;