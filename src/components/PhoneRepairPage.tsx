import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Smartphone,
  Shield,
  Clock,
  PenTool as ToolIcon,
  Zap,
  CheckCircle,
  CreditCard
} from 'lucide-react';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import ServiceSchema from '../components/ServiceSchema';

const PhoneRepairPage: React.FC = () => {
  const [businessDetails] = useState({
    name: "Агентство IT Услуг",
    serviceType: "Ремонт телефонов",
    image: "https://shop.it-pc.ru/images/logos/site_logo_01.png",
    address: {
      streetAddress: "179 квартал дом 15",
      addressLocality: "Ангарск",
      addressRegion: "Иркутская Область",
      postalCode: "665816",
      addressCountry: "RU",
    },
    telephone: "+79501225537",
    url: "https://data-ang.ru/phone-repair",
    areaServed: "Ангарск",
  });

  const [serviceDetails] = useState({
    serviceType: "Ремонт телефонов",
    description: "Профессиональный ремонт телефонов всех марок",
    providerName: "Агентство IT Услуг",
    providerUrl: "https://data-ang.ru/phone-repair",
  });

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const commonServices = [
    { name: "Замена экрана iPhone", price: "от 2000₽", description: "Замена дисплея", time: "3-4 часа" },
    { name: "Замена батареи", price: "от 1000₽", description: "Установка новой батареи", time: "1-2 часа" },
    { name: "Замена задней крышки", price: "от 800₽", description: "Замена разбитой задней крышки", time: "1-2 часа" },
    { name: "Ремонт после воды", price: "от 1500₽", description: "Восстановление после попадания влаги", time: "2-3 дня" },
    { name: "Замена камеры", price: "от 800₽", description: "Ремонт или замена основной/фронтальной камеры", time: "2-3 часа" },
    { name: "Замена разъема зарядки", price: "от 1500₽", description: "Восстановление разъема питания", time: "2-3 часа" }
  ];

  const brands = [
    { name: "iPhone", models: "iPhone 15, 14, 13, 12, 11, XS, XR, X, 8, 7, 6" },
    { name: "Samsung", models: "Galaxy S24/S23/S22/S21/S20, A54/A53/A52/A51, M/F серии" },
    { name: "Google", models: "Pixel 8, 7, 6, 5, 4a" },
    { name: "OnePlus", models: "12, 11, 10, Nord" },
    { name: "Xiaomi", models: "Redmi Note 12/11/10/9, POCO F/X серии, Mi серии" },
    { name: "Huawei", models: "P40/P30/P20, Mate серии, Nova серии" },
    { name: "OPPO/Realme", models: "Find X/Reno/A серии, Realme GT/Number серии" }
  ];

  // JSON-LD для FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько времени занимает ремонт телефона?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Время ремонта зависит от услуги. Например, замена экрана занимает от 3 до 4 часов, а замена батареи — 1-2 часа."
        }
      },
      {
        "@type": "Question",
        "name": "Даёте ли вы гарантию на ремонт?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, на все выполненные работы предоставляется гарантия сроком до 30 дней."
        }
      },
      {
        "@type": "Question",
        "name": "Какие бренды телефонов вы ремонтируете?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Мы ремонтируем телефоны всех популярных брендов: iPhone, Samsung, Xiaomi, Google, OnePlus, Huawei и других."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли обратиться за консультацией онлайн?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, вы можете написать нам в Telegram по ссылке на странице для получения консультации."
        }
      }
    ]
  };

  // JSON-LD для BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": "https://data-ang.ru/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ремонт телефонов",
        "item": "https://data-ang.ru/phone-repair"
      }
    ]
  };

  return (
    <div className="pt-20">
      <nav className="container mx-auto px-4 mt-4 mb-6" aria-label="breadcrumb">
        <ol className="flex items-center text-sm text-gray-600 space-x-2">
          <li><RouterLink to="/" className="hover:underline">Главная</RouterLink></li>
          <li>/</li>
          <li aria-current="page" className="text-gray-800 font-medium">Ремонт телефонов</li>
        </ol>
      </nav>

      <LocalBusinessSchema {...businessDetails} />
      <ServiceSchema {...serviceDetails} />

      <Helmet>
        <title>Ремонт телефонов в Ангарске | Агентство IT Услуг</title>
        <meta name="description" content="Профессиональный ремонт смартфонов всех марок в Ангарске. Замена экрана, батареи, ремонт после воды. Оригинальные запчасти и гарантия до 30 дней." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ремонт телефонов, замена экрана, батареи, Ангарск" />
        <meta property="og:title" content="Ремонт телефонов в Ангарске | Агентство IT Услуг" />
        <meta property="og:description" content="Профессиональный ремонт телефонов всех марок в Ангарске. Быстрый ремонт, гарантия на работы." />
        <meta property="og:image" content="https://shop.it-pc.ru/images/top-view-broken-phone-with-electronic-tools_23-2148419103.jpg" />
        <meta property="og:image:alt" content="Ремонт смартфона в Ангарске" />
        <meta property="og:url" content="https://data-ang.ru/phone-repair" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ремонт телефонов в Ангарске | Агентство IT Услуг" />
        <meta name="twitter:description" content="Профессиональный ремонт телефонов всех марок с гарантией на работы." />
        <meta name="twitter:image" content="https://shop.it-pc.ru/images/top-view-broken-phone-with-electronic-tools_23-2148419103.jpg" />
        <link rel="canonical" href="https://data-ang.ru/phone-repair" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Вставка FAQPage schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        {/* Вставка BreadcrumbList schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Clock size={20} className="mr-2" />
                Ремонт от 2-3 часов
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Профессиональный ремонт смартфонов</h1>
              <p className="text-lg text-gray-600 mb-8">
                Быстрый и качественный ремонт телефонов любой сложности. Оригинальные запчасти, профессиональные мастера и гарантия на все работы.
              </p>
              <a
                href="https://t.me/remont138"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center"
                aria-label="Написать в Telegram для получения консультации"
              >
                Написать в Telegram
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://shop.it-pc.ru/images/top-view-broken-phone-with-electronic-tools_23-2148419103.jpg"
                alt="Ремонт телефона с инструментами"
                className="rounded-xl shadow-lg"
                width="1260"
                height="750"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Аккордеон с текстом */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ремонт телефонов в Ангарске</h2>
          <button
            onClick={() => toggleAccordion(0)}
            className="w-full text-left bg-gray-200 p-4 rounded-lg hover:bg-gray-300 mb-4"
          >
            <h3 className="text-xl font-semibold">Ремонт телефонов в Ангарске | Агентство IT Услуг</h3>
          </button>
          {activeAccordion === 0 && (
            <div className="bg-gray-50 p-4 mt-2 rounded-lg">
              <p>
                <strong>Агентство IT Услуг</strong> выполняет ремонт телефонов в Ангарске всех марок, предлагая качественные и быстрые услуги по конкурентоспособным ценам.
                Мы работаем с крупнейшими поставщиками комплектующих и имеем собственный склад в Китае, что позволяет нам быстро выполнять ремонты любой сложности.
              </p>
              <h3 className="font-semibold mt-4">Наши услуги:</h3>
              <ul>
                <li><strong>Замена экрана смартфона:</strong> Быстрая и качественная замена экрана для iPhone, Samsung, Xiaomi и других марок.</li>
                <li><strong>Ремонт после попадания воды:</strong> Восстановление устройства после контакта с водой, включая чистку и замену поврежденных частей.</li>
                <li><strong>Перепайка и замена чипов:</strong> Выполнение сложных работ по перепайке микросхем и чипов.</li>
                <li><strong>Замена батареи смартфона:</strong> Установка новой батареи, продлевающей срок службы вашего устройства.</li>
                <li><strong>Ремонт разъемов и SIM-коннекторов:</strong> Восстановление работоспособности зарядных портов и SIM-слотов.</li>
                <li><strong>Сброс паролей и отвязка от аккаунтов:</strong> Восстановление доступа к устройствам, сброс паролей, отвязка от Google и других аккаунтов.</li>
              </ul>
              <h3 className="font-semibold mt-4">Почему выбирают нас:</h3>
              <ul>
                <li><strong>Оригинальные комплектующие:</strong> Только качественные и оригинальные запчасти.</li>
                <li><strong>Быстрый ремонт:</strong> Многие услуги, такие как замена экрана или батареи, выполняются за 1-2 часа.</li>
                <li><strong>Гарантия на все работы:</strong> На все произведенные работы предоставляется гарантия.</li>
                <li><strong>Большой выбор аксессуаров:</strong> Чехлы, защитные стекла, зарядные устройства и кабели.</li>
              </ul>
              <h3 className="font-semibold mt-4">Контакты:</h3>
              <p>Адрес: 179 квартал, дом 15, Ангарск, Иркутская область.</p>
              <p>Телефон: +79501225537</p>
              <p>Время работы: Пн-Пт с 9:00 до 18:00, Сб с 10:00 до 14:00.</p>

              <p>Обратитесь к нам для быстрого и качественного ремонта телефонов в Ангарске! Мы всегда рады помочь вам вернуть ваше устройство в идеальное состояние.</p>
            </div>
          )}
        </div>
      </section>

      {/* Услуги и цены */}
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

      {/* Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Поддерживаемые модели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map(brand => (
              <div key={brand.name} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{brand.name}</h3>
                <p className="text-gray-600">{brand.models}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoneRepairPage;
