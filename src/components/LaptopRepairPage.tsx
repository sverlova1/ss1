import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Laptop, PenTool as Tool, Shield, Clock, CheckCircle, Cpu } from 'lucide-react';
import LocalBusinessSchema from '../components/LocalBusinessSchema';   
import ServiceSchema from '../components/ServiceSchema';  
import { Link } from './Navigation';

const LaptopRepairPage: React.FC = () => {
  const businessDetails = {
    name: "Агентство IT Услуг",
    serviceType: "Ремонт ноутбуков",
    image: "https://shop.it-pc.ru/images/logos/site_logo_01.png",
    address: {
      streetAddress: "179 квартал дом 15",
      addressLocality: "Ангарск",
      addressRegion: "Иркутская Область",
      postalCode: "665816",
      addressCountry: "RU",
    },
    telephone: "+79501225537",
    url: "https://data-ang.ru/laptop-repair",
    areaServed: "Ангарск",
  };

  const serviceDetails = {
    serviceType: "Ремонт ноутбуков",
    description: "Профессиональный ремонт ноутбуков всех марок, включая диагностику, замену комплектующих и улучшение производительности.",
    providerName: "Агентство IT Услуг",
    providerUrl: "https://data-ang.ru/laptop-repair",
  };

  const commonServices = [
    { name: "Замена матрицы", price: "от 1500₽", description: "Замена разбитого или неисправного экрана", time: "2-3 часа" },
    { name: "Замена клавиатуры", price: "от 1000₽", description: "Установка новой клавиатуры", time: "2-3 часа" },
    { name: "Чистка от пыли", price: "от 1500₽", description: "Профилактическая чистка системы охлаждения", time: "от 1 час" },
    { name: "Замена жесткого диска", price: "от 800₽", description: "Установка HDD/SSD с переносом данных", time: "1-2 часа" },
    { name: "Замена батареи", price: "от 800₽", description: "Установка новой батареи", time: "1-2 часа" },
    { name: "Апгрейд RAM", price: "от 1000₽", description: "Увеличение оперативной памяти", time: "от 1 часа" }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://data-ang.ru/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ремонт ноутбуков",
        item: "https://data-ang.ru/laptop-repair"
      }
    ]
  };

  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };


  // Схема FAQPage с вопросами и ответами
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько времени занимает ремонт ноутбука?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Время ремонта зависит от сложности. Например, замена матрицы занимает 2-3 часа, а чистка системы охлаждения — около часа."
        }
      },
      {
        "@type": "Question",
        "name": "Даёте ли вы гарантию на ремонт?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, мы предоставляем гарантию на все виды ремонтных работ сроком до 30 дней."
        }
      },
      {
        "@type": "Question",
        "name": "Какие бренды ноутбуков вы ремонтируете?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ремонтируем ноутбуки всех популярных брендов: Apple, Dell, HP, Lenovo, ASUS и др."
        }
      },
      {
        "@type": "Question",
        "name": "Можно ли получить консультацию онлайн?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, вы можете написать нам в Telegram для консультации и предварительной оценки."
        }
      }
    ]
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb UI */}
      <nav className="container mx-auto px-4 mt-4 mb-6" aria-label="breadcrumb">
        <ol className="flex items-center text-sm text-gray-600 space-x-2">
          <li>
            <Link href="/" className="hover:underline">Главная</Link>
          </li>
          <li>/</li>
          <li aria-current="page" className="text-gray-800 font-medium">Ремонт ноутбуков</li>
        </ol>
      </nav>

      {/* Schema.org разметка */}
      <LocalBusinessSchema {...businessDetails} />
      <ServiceSchema {...serviceDetails} />

      <Helmet>
        <title>Ремонт ноутбуков в Ангарске — профессиональный сервис | Агентство IT Услуг</title>
        <meta name="description" content="Профессиональный ремонт ноутбуков всех марок в Ангарске. Замена экрана, клавиатуры, жесткого диска. Чистка от пыли, апгрейд комплектующих. Гарантия на все работы." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="ремонт ноутбуков, замена матрицы, Ангарск, ноутбук ремонт" />
        <meta property="og:title" content="Ремонт ноутбуков в Ангарске — профессиональный сервис | Агентство IT Услуг" />
        <meta property="og:description" content="Срочный ремонт ноутбуков любой сложности. Диагностика неисправностей, замена комплектующих, чистка от пыли. Гарантия качества до 30 дней." />
        <meta property="og:url" content="https://data-ang.ru/laptop-repair" />
        <meta property="og:image" content="https://shop.it-pc.ru/images/disassembled-laptop-computer-workshop-cooling-system-screwdriver_131301-413.jpg" />
        <meta property="og:image:alt" content="Мастер ремонтирует ноутбук в Ангарске" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://data-ang.ru/laptop-repair" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
                <Clock size={20} className="mr-2" />
                Ремонт от 3-5 часов
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Профессиональный ремонт ноутбуков
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Ремонтируем ноутбуки любых производителей: Apple, Dell, HP, Lenovo, ASUS и другие. Используем только оригинальные запчасти и предоставляем гарантию на все работы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  aria-label="Связаться через Telegram"
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
                src="https://shop.it-pc.ru/images/disassembled-laptop-computer-workshop-cooling-system-screwdriver_131301-413.jpg"
                alt="Мастер ремонтирует ноутбук в Ангарске"
                title="Профессиональный ремонт ноутбуков в Ангарске"
                className="rounded-xl shadow-lg"
                width="1260"
                height="750"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
   		
<section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ремонт телефонов в Ангарске</h2>
          <button
            onClick={() => toggleAccordion(0)}
            className="w-full text-left bg-gray-200 p-4 rounded-lg hover:bg-gray-300 mb-4"
          >
            <h3 className="text-xl font-semibold">Ремонт ноутбуков в Ангарске | Агентство IT Услуг</h3>
          </button>
          {activeAccordion === 0 && (
            <div className="bg-gray-50 p-4 mt-2 rounded-lg">
              <p>
             Мы профессионально выполняем ремонт ноутбуков в Ангарске любой сложности. Если вам требуется срочный и качественный ремонт ноутбука в г. Ангарск — вы обратились по адресу. Наши специалисты выполняют быстрый, надежный и доступный по цене ремонт ноутбуков и нетбуков.
           </p>
         <p>
           Мы проводим полную диагностику, ремонт и профилактическую чистку перегревшегося ноутбука в кратчайшие сроки. При необходимости замены деталей у нас большой склад оригинальных запчастей и собственный магазин комплектующих.
        </p>              
    	  <h2 className="font-semibold mt-4">Наше Агентство IT Услуг решит любые сложные проблемы с ноутбуками, в том числе:</h2>
		<ul>
      <li>Повреждение разъема питания или USB</li>
      <li>Ноутбук не включается</li>
      <li>Разбит экран ноутбука</li>
      <li>Пропал звук</li>
      <li>Не читаются диски</li>
      <li>Попадание жидкости (ремонт после влаги)</li>
      <li>Не загружается операционная система</li>
      <li>Залита клавиатура</li>
      <li>Вирусы, блокировка устройства</li>
      <li>Забытый пароль</li>
      <li>Повреждение корпуса</li>
    </ul>
    <p>Если нужен профессиональный ремонт ноутбука в Ангарске — мы всегда готовы помочь!</p>

    <p>Мы гарантируем качество и даём гарантию на выполненный ремонт от 30 до 90 дней.</p>		
            
              <h3 className="font-semibold mt-4">Особенности ремонта:</h3>
    <p>
      Мы выполняем монтаж и перепайку BGA чипов на профессиональном оборудовании Jovy Systems: BGA чипы, мосты, GPU чипы — всегда в наличии и под заказ. Если необходимо перепаять видео-чип, южный или северный мост — вы попали по адресу.
    </p>
		 <h3 className="font-semibold mt-4">В наличии широкий выбор запчастей:</h3>
    <ul>
      <li>Матрицы от 7 до 18,5 дюймов</li>
      <li>Клавиатуры и аккумуляторы</li>
      <li>Оригинальные зарядные устройства</li>
      <li>Различные разъемы для ноутбуков</li>
    </ul>

    <h3 className="font-semibold mt-4">Наши услуги по ремонту ноутбуков:</h3>
    <ul>
      <li>Купить и заменить экран (матрицу) ноутбука — замена за 20 минут</li>
      <li>Замена и ремонт разъемов ноутбука — быстро и качественно</li>
      <li>Восстановление после попадания влаги или пролитой жидкости</li>
      <li>Ремонт зарядных устройств и блоков питания</li>
      <li>Ремонт и замена видеокарт ноутбука</li>
      <li>Ремонт системных плат и материнских плат</li>
      <li>Замена DVD/CD-приводов</li>
      <li>Ремонт и замена клавиатур</li>
      <li>Снятие пароля с ноутбука</li>
      <li>Замена и ремонт аккумуляторных батарей</li>
      <li>Восстановление данных с жестких дисков (винчестеров)</li>
      <li>Установка и настройка программного обеспечения и драйверов</li>
      <li>Установка и настройка антивирусных программ</li>
      <li>Поиск, удаление и лечение вирусов</li>
      <li>Удаление SMS-блокеров и других вредоносных программ</li>
    </ul>
	<br />
    <p>
      Обратитесь к нам, если нужен быстрый, качественный и доступный ремонт ноутбуков в Ангарске с гарантией и оригинальными запчастями!
    </p>

              <h3 className="font-semibold mt-4">Контакты:</h3>
              <p>Адрес: 179 квартал, дом 15, Ангарск, Иркутская область.</p>
              <p>Телефон: +79501225537</p>
              <p>Время работы: Пн-Пт с 9:00 до 18:00, Сб с 10:00 до 14:00.</p>

              <p>Обратитесь к нам для быстрого и качественного ремонта ноутбуков в Ангарске! Мы всегда рады помочь вам вернуть ваше устройство в идеальное состояние.</p>
            </div>
          )}
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
              { icon: <Tool className="text-blue-600" size={24} />, title: "Опытные мастера", description: "с опытом от 5 лет" },
              { icon: <Shield className="text-blue-600" size={24} />, title: "Гарантия 30 дней", description: "Письменная гарантия на все виды работ" },
              { icon: <Cpu className="text-blue-600" size={24} />, title: "Оригинальные запчасти", description: "Только качественные комплектующие" }
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Диагностика", description: "в случае отказа от ремонта - 500₽" },
              { step: "2", title: "Оценка", description: "Точная стоимость и сроки ремонта" },
              { step: "3", title: "Ремонт", description: "Выполнение работ в согласованные сроки" },
              { step: "4", title: "Проверка", description: "Тестирование и выдача гарантии" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
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
          <h2 className="text-3xl font-bold text-white mb-6">Нужен ремонт ноутбука?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Оставьте заявку прямо сейчас и получите скидку 10% на диагностику
          </p>
          <Link
            aria-label="Оставить заявку"
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

export default LaptopRepairPage;
