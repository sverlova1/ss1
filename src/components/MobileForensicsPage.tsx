import React from 'react';
import { Search, Shield, Clock, Lock, Smartphone, FileSearch, Key, CheckCircle } from 'lucide-react';
import { Link } from './Navigation';

const MobileForensicsPage: React.FC = () => {
  React.useEffect(() => {
    // Update title and meta description
    document.title = 'Мобильная криминалистика и разблокировка устройств | Агентство IT Услуг';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональные услуги мобильной криминалистики и разблокировки устройств в Сан-Франциско. Восстановление данных, снятие блокировки экрана, разблокировка паролей. Конфиденциальность гарантирована.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Мобильная криминалистика и разблокировка устройств | Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Профессиональные услуги по разблокировке устройств и восстановлению данных. Поддержка всех моделей iOS и Android. Строгая конфиденциальность.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/mobile-forensics');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/mobile-forensics-og.jpg');
  }, []);

  const services = [
    {
      name: "Разблокировка паттерна",
      price: "от $79",
      description: "Снятие графического ключа Android",
      time: "1-3 часа"
    },
    {
      name: "Разблокировка пароля",
      price: "от $89",
      description: "Снятие цифрового пароля",
      time: "2-4 часа"
    },
    {
      name: "Восстановление данных",
      price: "от $129",
      description: "Извлечение удаленных данных",
      time: "24-48 часов"
    },
    {
      name: "Снятие блокировки iCloud",
      price: "от $149",
      description: "Официальная разблокировка Apple ID",
      time: "1-3 дня"
    },
    {
      name: "Криминалистический анализ",
      price: "от $199",
      description: "Полный анализ устройства",
      time: "2-5 дней"
    },
    {
      name: "Консультация",
      price: "Бесплатно",
      description: "Оценка возможности разблокировки",
      time: "30 минут"
    }
  ];

  const supportedDevices = [
    {
      brand: "Apple",
      models: "iPhone (все модели), iPad, iPod Touch"
    },
    {
      brand: "Samsung",
      models: "Galaxy S/A/M серии, планшеты Galaxy Tab"
    },
    {
      brand: "Другие Android",
      models: "Xiaomi, Huawei, OnePlus, Google Pixel"
    },
    {
      brand: "Планшеты",
      models: "Все модели iPad и Android планшетов"
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
                <Search size={20} className="mr-2" />
                Профессиональная мобильная криминалистика
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Разблокировка устройств и восстановление данных
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Профессиональные услуги по разблокировке мобильных устройств и восстановлению данных. 
                Гарантированный результат и полная конфиденциальность.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-service"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Заказать услугу
                </Link>
                <Link
                  href="#prices"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors text-center"
                >
                  Прайс-лист
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg"
                alt="Мобильная криминалистика и разблокировка устройств"
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
          <h2 className="text-3xl font-bold text-center mb-12">Поддерживаемые устройства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Конфиденциальность",
                description: "Гарантируем полную безопасность данных"
              },
              {
                icon: <FileSearch className="text-blue-600" size={24} />,
                title: "Профессиональный подход",
                description: "Используем специализированное оборудование"
              },
              {
                icon: <Key className="text-blue-600" size={24} />,
                title: "Гарантия результата",
                description: "Оплата только за успешную разблокировку"
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
          <h2 className="text-3xl font-bold text-center mb-12">Процесс работы</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Smartphone className="text-blue-600" size={24} />,
                title: "Диагностика",
                description: "Анализ устройства и оценка возможностей"
              },
              {
                icon: <Lock className="text-blue-600" size={24} />,
                title: "Подготовка",
                description: "Выбор метода разблокировки"
              },
              {
                icon: <Key className="text-blue-600" size={24} />,
                title: "Разблокировка",
                description: "Выполнение работ"
              },
              {
                icon: <CheckCircle className="text-blue-600" size={24} />,
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
          <h2 className="text-3xl font-bold text-white mb-6">Нужна помощь с устройством?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Оставьте заявку прямо сейчас и получите бесплатную консультацию
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

export default MobileForensicsPage;