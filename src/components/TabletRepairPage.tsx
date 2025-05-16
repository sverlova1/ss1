import React from 'react';
import { Tablet, Shield, Clock, PenTool as Tool, Zap, CheckCircle } from 'lucide-react';
import { Link } from './Navigation';

const TabletRepairPage: React.FC = () => {
  React.useEffect(() => {
    // Update title and meta description
    document.title = 'Ремонт планшетов в Ангарске | Агентство IT Услуг';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональный ремонт планшетов всех марок в Ангарске. iPad, Samsung Galaxy Tab, Huawei MatePad. Замена экрана, батареи, ремонт после падения. Гарантия на все работы.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Ремонт планшетов в Ангарске | Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Срочный ремонт планшетов любой сложности. Оригинальные запчасти, опытные мастера, гарантия качества. Ремонт iPad, Samsung, Huawei и других марок.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/tablet-repair');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/tablet-repair-og.jpg');
  }, []);

  const services = [
    {
      name: "Замена экрана",
      price: "от 2500₽",
      description: "Замена матрицы на планшетах",
      time: "от 3-6 часов"
    },
    {
      name: "Замена батареи",
      price: "от 1500₽",
      description: "Установка новой батареи",
      time: "3-4 часа"
    },
    {
      name: "Замена разъема",
      price: "от 1500₽",
      description: "Ремонт разъема зарядки",
      time: "3-4 часа"
    },
    {
      name: "Ремонт после воды",
      price: "от 1500₽",
      description: "Восстановление после попадания влаги",
      time: "24-48 часов"
    },
    {
      name: "Замена кнопок",
      price: "от 800₽",
      description: "Ремонт кнопок громкости и питания",
      time: "от 1 часа"
    },
    {
      name: "Диагностика",
      price: "500₽",
      description: "В случае отказа от ремонта",
      time: "от 3-6 часов"
    }
  ];

  const supportedDevices = [
    {
      brand: "Apple iPad",
      models: "iPad Pro, iPad Air, iPad mini, iPad"
    },
    {
      brand: "Samsung",
      models: "Galaxy Tab S9/S8/S7, Tab A Series"
    },
    {
      brand: "Huawei",
      models: "MatePad Pro, MatePad T Series"
    },
    {
      brand: "Lenovo",
      models: "Tab P12 Pro, Tab P11 Pro, Tab M10"
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
                Ремонт от 2-3 часов
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Профессиональный ремонт планшетов
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Качественный ремонт планшетов всех марок: Apple iPad, Samsung Galaxy Tab, Huawei MatePad и других. 
                Оригинальные запчасти и гарантия на все виды работ.
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
                src="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
                alt="Ремонт планшетов"
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

      {/* Supported Devices Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Поддерживаемые модели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportedDevices.map((device, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{device.brand}</h3>
                <p className="text-gray-600">{device.models}</p>
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
                title: "Опытные мастера",
                description: "специалисты с опытом от 5 лет"
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Гарантия до 30 дней",
                description: "Письменная гарантия на все работы"
              },
              {
                icon: <Zap className="text-blue-600" size={24} />,
                title: "Быстрый ремонт",
                description: "Большинство ремонтов в тот же день"
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
          <h2 className="text-3xl font-bold text-center mb-12">Процесс ремонта</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Tablet className="text-blue-600" size={24} />,
                title: "Диагностика",
                description: "в случае отказа от ремонта - 500₽"
              },
              {
                icon: <Tool className="text-blue-600" size={24} />,
                title: "Оценка",
                description: "Точная стоимость ремонта"
              },
              {
                icon: <CheckCircle className="text-blue-600" size={24} />,
                title: "Ремонт",
                description: "Выполнение работ"
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Проверка",
                description: "Тестирование и выдача"
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
          <h2 className="text-3xl font-bold text-white mb-6">Нужен ремонт планшета?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Оставьте заявку прямо сейчас и получите скидку 10% на ремонт
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

export default TabletRepairPage;