// /var/www/data-ang.ru/ss/src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Используем Link из react-router-dom
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Laptop,
  Tv,
  Gamepad,
  Speaker,
  Cpu,
  Lock,
  Search,
  Tablet,
  Wrench, // Предполагая, что все эти иконки все еще нужны
} from 'lucide-react';

// Данные для выпадающего списка услуг (из вашего оригинального кода)
const servicesArray = [
  { title: 'Все услуги', icon: <Wrench size={16} />, page: 'all-services', highlight: true },
  { title: 'Ремонт телефонов', icon: <Smartphone size={16} />, page: 'phone-repair' },
  { title: 'Ремонт ноутбуков', icon: <Laptop size={16} />, page: 'laptop-repair' },
  { title: 'Ремонт планшетов', icon: <Tablet size={16} />, page: 'tablet-repair' },
  { title: 'Ремонт ТВ', icon: <Tv size={16} />, page: 'tv-repair' },
  { title: 'Ремонт Nintendo Switch', icon: <Gamepad size={16} />, page: 'nintendo-switch' },
  { title: 'Ремонт колонок JBL', icon: <Speaker size={16} />, page: 'jbl-repair' },
  { title: 'Сложный ремонт и BGA', icon: <Cpu size={16} />, page: 'complex-repair' },
  { title: 'Разблокировка FRP', icon: <Lock size={16} />, page: 'frp-unlock' },
  { title: 'Мобильная криминалистика', icon: <Search size={16} />, page: 'mobile-forensics' },
  { title: 'Центр OPPO & Realme', icon: <Smartphone size={16} />, page: 'oppo-realme' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setServicesOpen(false); // Закрываем и выпадающий список услуг
  };

  const toggleServicesDropdown = () => {
    setServicesOpen(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(prev => !prev);
    if (!isMenuOpen) { // Если открываем мобильное меню, закрываем дропдаун услуг
        setServicesOpen(false);
    }
  };

  return (
    // Убедитесь, что здесь ваш правильный className
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center" onClick={closeAllMenus}>
              <div className="mr-2 w-12 h-12">
                <img
                  src="https://shop.it-pc.ru/images/blog/02.png"
                  alt="Логотип"
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">Агентство</span>
                <span className="text-2xl font-bold text-blue-600">IT</span>
                <span className="text-2xl font-bold text-gray-900">Услуг</span>
                <span className="block text-xs text-gray-600 -mt-1">Сервисный центр</span>
              </div>
            </RouterLink>
          </div>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <RouterLink to="/" className="nav-link" onClick={closeAllMenus}>
              Главная
            </RouterLink>
            <div className="relative group">
              <button
                className="nav-link flex items-center"
                onClick={toggleServicesDropdown}
                aria-expanded={servicesOpen}
              >
                Услуги <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden z-10"> {/* Добавлен z-10 */}
                  <div className="py-2">
                    {servicesArray.map((service) => (
                      <RouterLink
                        key={service.page}
                        to={`/${service.page}`}
                        className={`block px-4 py-2 hover:bg-gray-100 transition-colors flex items-center ${
                          service.highlight ? 'font-medium text-blue-600' : ''
                        }`}
                        onClick={closeAllMenus}
                      >
                        <span className="mr-2">{service.icon}</span>
                        {service.title}
                      </RouterLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <RouterLink to="/about" className="nav-link" onClick={closeAllMenus}>
              О нас
            </RouterLink>
            <RouterLink to="/contact" className="nav-link" onClick={closeAllMenus}>
              Контакты
            </RouterLink>
            <a
              href="https://t.me/remont138"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Написать в Telegram
            </a>
          </nav>

          {/* Переключатель мобильного меню */}
          <button
            className="md:hidden p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Мобильное навигационное меню */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 h-full overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center mb-6">
              {/* Логотип в мобильном меню */}
              <RouterLink to="/" className="flex items-center" onClick={closeAllMenus}>
                 {/* ... ваш код логотипа ... */}
              </RouterLink>
              <button
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                onClick={toggleMobileMenu} // Используем toggle для закрытия
                aria-label="Закрыть меню"
              >
                <X size={24} />
              </button>
            </div>

            <RouterLink
              to="/"
              className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-100"
              onClick={closeAllMenus}
            >
              Главная
            </RouterLink>
            <button
              className="flex items-center justify-between w-full py-3 text-lg font-medium text-gray-800 border-b border-gray-100"
              onClick={toggleServicesDropdown}
              aria-expanded={servicesOpen}
            >
              <span>Услуги</span>
              <ChevronDown size={20} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="pl-4 space-y-3">
                {servicesArray.map((service) => (
                  <RouterLink
                    key={service.page}
                    to={`/${service.page}`}
                    className={`flex items-center py-2 ${
                      service.highlight ? 'text-blue-600 font-medium' : 'text-gray-600'
                    }`}
                    onClick={closeAllMenus}
                  >
                    <span className="mr-3">{service.icon}</span>
                    {service.title}
                  </RouterLink>
                ))}
              </div>
            )}

            <RouterLink
              to="/about"
              className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-100"
              onClick={closeAllMenus}
            >
              О нас
            </RouterLink>
            <RouterLink
              to="/contact"
              className="block py-3 text-lg font-medium text-gray-800 border-b border-gray-100"
              onClick={closeAllMenus}
            >
              Контакты
            </RouterLink>

            <a
              href="https://t.me/remont138"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;