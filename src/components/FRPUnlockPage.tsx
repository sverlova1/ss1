import React from 'react';
import { Lock, Shield, Clock, CheckCircle, Smartphone, PenTool as Tool } from 'lucide-react';
import { Link } from './Navigation';

const FRPUnlockPage: React.FC = () => {
  React.useEffect(() => {
    // Update title and meta description
    document.title = 'Разблокировка FRP Google Account | Агентство IT Услуг';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональная разблокировка FRP (Factory Reset Protection) на Android устройствах в Ангарске. Быстрое удаление Google Account после сброса. Гарантия результата.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Разблокировка FRP Google Account | Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Профессиональное удаление Google Account и разблокировка FRP на Android устройствах. Поддержка всех моделей Samsung, Xiaomi, Huawei. Гарантия результата.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/frp-unlock');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/frp-unlock-og.jpg');
  }, []);

  const services = [
    {
      name: "Разблокировка Samsung FRP",
      price: "от $49",
      description: "Удаление Google Account на Samsung",
      time: "1-2 часа"
    },
    {
      name: "Разблокировка Xiaomi FRP",
      price: "от $45",
      description: "Удаление Mi Account и FRP",
      time: "1-2 часа"
    },
    {
      name: "Разблокировка Huawei FRP",
      price: "от $49",
      description: "Удаление Google Account и HiSuite",
      time: "1-3 часа"
    },
    {
      name: "Разблокировка Oppo/Realme",
      price: "от $45",
      description: "Удаление Google Account после сброса",
      time: "1-2 часа"
    },
    {
      name: "Разблокировка OnePlus",
      price: "от $49",
      description: "Удаление FRP и сброс аккаунта",
      time: "1-2 часа"
    },
    {
      name: "Консультация",
      price: "Бесплатно",
      description: "Проверка возможности разблокировки",
      time: "15-30 минут"
    }
  ];

  const supportedDevices = [
    {
      brand: "Samsung",
      models: "Galaxy S24/S23/S22/S21/S20, A54/A53/A52/A51, M/F серии"
    },
    {
      brand: "Xiaomi",
      models: "Redmi Note 12/11/10/9, POCO F/X серии, Mi серии"
    },
    {
      brand: "Huawei",
      models: "P40/P30/P20, Mate серии, Nova серии"
    },
    {
      brand: "OPPO/Realme",
      models: "Find X/Reno/A серии, Realme GT/Number серии"
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
                <Lock size={20} className="mr-2" />
                Гарантированная разблокировка FRP
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Разблокировка Google Account (FRP)
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Профессиональное удаление Google Account после сброса настроек. Поддержка всех современных Android устройств. Сохранение гарантии и данных.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-service"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Заказать разблокировку
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
                src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg"
                alt="Разблокировка FRP на смартфоне"
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
                icon: <Tool className="text-blue-600" size={24} />,
                title: "Профессиональный подход",
                description: "Используем официальные методы разблокировки"
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Гарантия результата",
                description: "100% успешная разблокировка или возврат средств"
              },
              {
                icon: <Smartphone className="text-blue-600" size={24} />,
                title: "Сохранение данных",
                description: "Разблокировка без потери информации"
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
          <h2 className="text-3xl font-bold text-center mb-12">Процесс разблокировки</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Smartphone className="text-blue-600" size={24} />,
                title: "Диагностика",
                description: "Проверка возможности разблокировки"
              },
              {
                icon: <Tool className="text-blue-600" size={24} />,
                title: "Подготовка",
                description: "Выбор метода разблокировки"
              },
              {
                icon: <Lock className="text-blue-600" size={24} />,
                title: "Разблокировка",
                description: "Удаление FRP защиты"
              },
              {
                icon: <CheckCircle className="text-blue-600" size={24} />,
                title: "Проверка",
                description: "Тестирование устройства"
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
          <h2 className="text-3xl font-bold text-white mb-6">Нужна разблокировка FRP?</h2>
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

export default FRPUnlockPage;