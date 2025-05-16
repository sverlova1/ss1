import React from 'react';
import { Cpu, PenTool as Tool, Shield, Clock, Zap, CheckCircle, Smartphone, Laptop } from 'lucide-react';
import { Link } from './Navigation';

const ComplexRepairPage: React.FC = () => {
  React.useEffect(() => {
    // Update title and meta description
    document.title = 'Сложный ремонт электроники и BGA пайка | Агентство IT Услуг';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональный ремонт сложной электроники и BGA пайка в Ангарске. Замена BGA чипов, ремонт материнских плат, восстановление после залития. Гарантия на все работы.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Сложный ремонт электроники и BGA пайка | Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Профессиональный ремонт материнских плат, видеокарт и других сложных компонентов. BGA пайка с гарантией. Современное оборудование и опытные мастера.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/complex-repair');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/complex-repair-og.jpg');
  }, []);

  const services = [
    {
      name: "BGA пайка чипов",
      price: "от $149",
      description: "Замена и реболлинг BGA микросхем",
      time: "2-3 дня"
    },
    {
      name: "Ремонт материнских плат",
      price: "от $199",
      description: "Диагностика и ремонт любой сложности",
      time: "2-5 дней"
    },
    {
      name: "Ремонт видеокарт",
      price: "от $129",
      description: "Замена GPU, памяти, компонентов питания",
      time: "2-4 дня"
    },
    {
      name: "Восстановление после залития",
      price: "от $149",
      description: "Ультразвуковая очистка и замена компонентов",
      time: "3-5 дней"
    },
    {
      name: "Замена микросхем",
      price: "от $99",
      description: "Замена микросхем питания, памяти, контроллеров",
      time: "1-3 дня"
    },
    {
      name: "Диагностика платы",
      price: "от $49",
      description: "Полная диагностика с поиском неисправности",
      time: "1-2 дня"
    }
  ];

  const equipment = [
    {
      name: "Инфракрасная паяльная станция",
      description: "Профессиональная BGA-пайка"
    },
    {
      name: "Ультразвуковая ванна",
      description: "Очистка плат после залития"
    },
    {
      name: "Микроскоп с камерой",
      description: "Точная диагностика и пайка"
    },
    {
      name: "Программатор микросхем",
      description: "Восстановление и прошивка"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Clock size={20} className="mr-2" />
                Профессиональный ремонт любой сложности
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Сложный ремонт электроники и BGA пайка
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Выполняем ремонт любой сложности: от замены BGA микросхем до восстановления после залития. 
                Современное оборудование и опытные мастера с более чем 10-летним стажем.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/techfix_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center"
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg"
                alt="Ремонт электроники"
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
      <section className="py-16 bg-white" id="prices">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Услуги и цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <span className="text-blue-600 font-bold">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-gray-500">
                  <Clock size={16} className="mr-2" />
                  <span>{service.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наше оборудование</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Tool className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Tool className="text-blue-600" size={24} />,
                title: "Профессиональное оборудование",
                description: "Используем современное оборудование для точной диагностики и ремонта"
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Гарантия до 1 года",
                description: "Предоставляем гарантию на все виды работ"
              },
              {
                icon: <Zap className="text-blue-600" size={24} />,
                title: "Опытные мастеры",
                description: "Специалисты с опытом более 10 лет"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Этапы ремонта</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Tool className="text-blue-600" size={24} />,
                title: "Диагностика",
                description: "Детальная проверка устройства"
              },
              {
                icon: <Cpu className="text-blue-600" size={24} />,
                title: "Определение неисправности",
                description: "Точное определение проблемы"
              },
              {
                icon: <Zap className="text-blue-600" size={24} />,
                title: "Ремонт",
                description: "Профессиональный ремонт"
              },
              {
                icon: <CheckCircle className="text-blue-600" size={24} />,
                title: "Тестирование",
                description: "Полная проверка работы"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Нужен сложный ремонт?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Оставьте заявку прямо сейчас и получите бесплатную диагностику
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-block"
          >
            Оставить заявку
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComplexRepairPage;