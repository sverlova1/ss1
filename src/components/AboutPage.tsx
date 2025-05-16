import React from 'react';
import { Award, Users, MapPin, Clock, Star, Building } from 'lucide-react';
import { Link } from './Navigation';

const AboutPage: React.FC = () => {
  React.useEffect(() => {
    // Update title and meta description
    document.title = 'О нас | Агентство IT Услуг - Экспертный ремонт устройств в Ангарске';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Узнайте больше о вашем надежном партнере по ремонту электроники в Ангарске. Сертифицированные специалисты, качественные запчасти и гарантия на все работы.');
    }

    // Update Open Graph metadata
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute('content', 'О компании Агентство IT Услуг | Экспертный ремонт устройств');
    if (ogDescription) ogDescription.setAttribute('content', 'Познакомьтесь с ведущим сервисным центром по ремонту электроники в Ангарске. Более 15000 успешных ремонтов и 98% довольных клиентов.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://techfix.com/about');
    if (ogImage) ogImage.setAttribute('content', 'https://techfix.com/images/about-og.jpg');
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Агентство IT Услуг надежный сервис по ремонту устройств в городе Ангарске.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
              С 2015 года мы занимаемся ремонтом смартфонов, ноутбуков и электроники. Наша приверженность качеству и удовлетворенности клиентов сделала нас предпочтительным выбором для ремонта устройств.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">12000+</div>
                  <div className="text-gray-600">Завершенных ремонтов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600">Удовлетворенность клиентов</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="team working on device repairs"
                className="rounded-xl shadow-lg"
                width="1260"
                height="750"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">О нас</h2>
            <p className="text-gray-600 mb-8">
            Наш спектр услуг разнообразен. Начиная от обслуживания компьютерных станций и заканчивая сложными электронными ремонтами компьютерного оборудования. Основной деятельностью компании является сложный электронный ремонт ноутбуков, электронных книг, планшетов, GPS навигаторов и техники Apple. Замена BGA чипов, матриц, восстановление материнских плат. Диагностика и устранение неполадок в работе Ваших устройств, установка драйверов, различных программ, удаление вирусов, настройка сетей Wi-Fi и многое другое.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему стоит выбрать нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-blue-600" size={24} />,
                title: "Опытные мастера",
                description: "Специалисты с опытом от 5 лет"
              },
              {
                icon: <Clock className="text-blue-600" size={24} />,
                title: "Быстрое выполнение",
                description: "Большинство ремонтов завершаются в течение рабочего дня"
              },
              {
                icon: <Star className="text-blue-600" size={24} />,
                title: "Гарантия качества",
                description: "30-дневная гарантия на все виды ремонта"
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

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Chen",
                role: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Sarah Johnson",
                role: "Head of Operations",
                image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "David Rodriguez",
                role: "Lead Technician",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Посетите нас</h2>
              <div className="flex items-start mb-4">
                <MapPin className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">179-й квартал, 15</h3>
                  <p className="text-gray-600">г. Ангарск, 665816<br />Иркутская Область</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <Clock className="text-blue-600 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Часы работы</h3>
                  <p className="text-gray-600">
                    Понедельник - Пятница: 10:00 - 19:00<br />
                    Суббота, Воскресенье: 10:00 - 16:00<br />
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4"
              >
                Get Directions
              </Link>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://shop.it-pc.ru/images/companies/1/5.JPG?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Расположение сервисного центра Агентство IT Услуг"
                className="rounded-xl shadow-lg"
                width="1260"
                height="750"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience our professional repair service firsthand. Book a repair or contact us for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-repair"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Book a Repair
            </Link>
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;