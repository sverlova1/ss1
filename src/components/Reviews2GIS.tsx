import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews2GIS: React.FC = () => {
  // This would normally be fetched from 2GIS API
  const reviews = [
    {
      author: "Анна С.",
      rating: 5,
      date: "2 дня назад",
      text: "Отличный сервис! Починили iPhone за час, цена адекватная. Мастер всё подробно объяснил и дал рекомендации по эксплуатации.",
      verified: true
    },
    {
      author: "Михаил К.",
      rating: 5,
      date: "неделю назад",
      text: "Обращался с разбитым экраном MacBook Pro. Сделали быстро и качественно, даже дешевле чем в других местах. Рекомендую!",
      verified: true
    },
    {
      author: "Елена В.",
      rating: 4,
      date: "2 недели назад",
      text: "Меняли батарею на Samsung. Всё сделали при мне за 40 минут. Сервис хороший, но немного пришлось подождать.",
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/2gis_logo.svg" 
            alt="2GIS Logo" 
            className="h-8 mr-4"
          />
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2">4.9</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className="w-5 h-5 text-yellow-400 fill-yellow-400" 
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">
              На основе 127 отзывов
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-6 relative"
            >
              <Quote 
                className="absolute top-4 right-4 text-blue-100" 
                size={32} 
              />
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <div className="flex items-center">
                <span className="font-medium">{review.author}</span>
                {review.verified && (
                  <span className="ml-2 text-sm text-green-600 flex items-center">
                    <svg 
                      className="w-4 h-4 mr-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Проверенный отзыв
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://2gis.ru/businesslink/firm/70000001019367627"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            Все отзывы на 2GIS
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews2GIS;