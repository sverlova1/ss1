import React from 'react';
import { Speaker, Shield, Clock, PenTool as Tool, Zap, CheckCircle, Music } from 'lucide-react';
import { Link } from './Navigation';

const JBLRepairPage: React.FC = () => {
  React.useEffect(() => {
    // Update title and meta description
    document.title = 'Ремонт колонок JBL в Ангарске | Агентство IT Услуг';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональный ремонт колонок JBL в Ангарске. Ремонт Bluetooth-модуля, замена динамиков, восстановление после воды. Гарантия на все работы до 30 дней.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Ремонт колонок JBL в Ангарске | Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Срочный ремонт колонок JBL любой сложности. Оригинальные запчасти, опытные мастера, гарантия качества. Ремонт всех моделей: Flip, Charge, Xtreme, Pulse.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/jbl-repair');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/jbl-repair-og.jpg');
  }, []);

  const commonServices = [
    {
      name: "Замена динамиков",
      price: "от $49",
      description: "Замена поврежденных динамиков",
      time: "2-3 часа"
    },
    {
      name: "Ремонт Bluetooth",
      price: "от $39",
      description: "Восстановление беспроводного подключения",
      time: "1-2 часа"
    },
    {
      name: "Замена батареи",
      price: "от $45",
      description: "Установка новой батареи",
      time: "1-2 часа"
    },
    {
      name: "Ремонт после воды",
      price: "от $69",
      description: "Восстановление после попадания влаги",
      time: "24-48 часов"
    },
    {
      name: "Замена разъема",
      price: "от $35",
      description: "Ремонт разъема зарядки/AUX",
      time: "1-2 часа"
    },
    {
      name: "Замена корпуса",
      price: "от $59",
      description: "Замена поврежденного корпуса",
      time: "2-3 часа"
    }
  ];

  const models = [
    {
      name: "JBL Flip серия",
      models: "Flip 3, 4, 5, 6"
    },
    {
      name: "JBL Charge серия",
      models: "Charge 3, 4, 5"
    },
    {
      name: "JBL Xtreme серия",
      models: "Xtreme, Xtreme 2, 3"
    },
    {
      name: "JBL Pulse серия",
      models: "Pulse 3, 4, 5"
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
                Ремонт в день обращения
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ремонт колонок JBL
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Профессиональный ремонт всех моделей колонок JBL. Устраняем любые неисправности: от проблем со звуком до замены батареи. Гарантия на все работы до 90 дней.
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
                src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg"
                alt="Ремонт колонок JBL"
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
            {commonServices.map((service, index) => (
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

      {/* Models Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Поддерживаемые модели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {models.map((model, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                <p className="text-gray-600">Модели: {model.models}</p>
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
                description: "Специализируемся на ремонте аудиотехники"
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Гарантия 90 дней",
                description: "Письменная гарантия на все работы"
              },
              {
                icon: <Music className="text-blue-600" size={24} />,
                title: "Тестирование звука",
                description: "Проверка качества после ремонта"
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
                icon: <Speaker className="text-blue-600" size={24} />,
                title: "Диагностика",
                description: "Бесплатная диагностика при ремонте"
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
                icon: <Music className="text-blue-600" size={24} />,
                title: "Тестирование",
                description: "Проверка качества звука"
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
          <h2 className="text-3xl font-bold text-white mb-6">Нужен ремонт колонки JBL?</h2>
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

export default JBLRepairPage;