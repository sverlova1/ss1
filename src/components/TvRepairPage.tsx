import React from 'react';
import { Tv, PenTool as Tool, Clock, Shield, Zap, CheckCircle } from 'lucide-react';
import { Link } from './Navigation';

const TvRepairPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Ремонт телевизоров в Ангарске | Агентство IT Услуг';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Профессиональный ремонт телевизоров в Ангарске. Выезд мастера на дом, диагностика, ремонт Smart TV, замена матрицы. Гарантия на все работы до 1 года.');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'Ремонт телевизоров в Ангарске | Сервисный центр Агентство IT Услуг');
    if (ogDescription) ogDescription.setAttribute('content', 'Срочный ремонт телевизоров всех марок в Ангарске. Выезд мастера, диагностика неисправностей, замена комплектующих. Гарантия качества.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/tv-repair-angarsk');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/tv-repair-og.jpg');
  }, []);

  const commonServices = [
    {
      name: "Диагностика телевизора",
      price: "500₽",
      description: "Полная проверка всех систем телевизора",
      time: "2-3 часа"
    },
    {
      name: "Ремонт блока питания",
      price: "от 1500₽",
      description: "Замена компонентов блока питания",
      time: "3-4 часа"
    },
    {
      name: "Замена матрицы",
      price: "от 8000₽",
      description: "Замена поврежденной матрицы экрана",
      time: "5-7 часов"
    },
    {
      name: "Ремонт подсветки",
      price: "от 3500₽",
      description: "Замена светодиодов подсветки",
      time: "2-4 часа"
    },
    {
      name: "Настройка Smart TV",
      price: "800₽",
      description: "Настройка смарт-функций и приложений",
      time: "1 час"
    },
    {
      name: "Обновление прошивки",
      price: "1000₽",
      description: "Обновление программного обеспечения",
      time: "1-2 часа"
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
                Ремонт от 2-4 дней
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ремонт телевизоров в Ангарске
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Профессиональный ремонт телевизоров всех марок с гарантией до 30 дней. Диагностика и ремонт в кратчайшие сроки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/remont138"
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
                src="https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg"
                alt="Ремонт телевизора специалистом"
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

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Tool className="text-blue-600" size={24} />,
                title: "Опытные мастера",
                description: "Более 5 лет опыта ремонта телевизоров"
              },
              {
                icon: <Shield className="text-blue-600" size={24} />,
                title: "Гарантия до 30 дней",
                description: "Письменная гарантия на все виды работ"
              },
              {
                icon: <Zap className="text-blue-600" size={24} />,
                title: "Быстрый ремонт",
                description: "Большинство ремонтов от 3-5 дней"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ремонтируем все марки</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Samsung", "LG", "Sony", "Philips", "TCL", "Hisense", "Xiaomi", "BBK"].map((brand, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-xl font-medium">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Нужен ремонт телевизора?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Оставьте заявку прямо сейчас и получите скидку 10% на диагностику
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

export default TvRepairPage;