import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Компоненты макета
import Header from './components/Header'; // Потребует изменений
import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop'; // Мы реализуем его ниже

// Компоненты для домашней страницы
import Hero from './components/Hero';
import Services from './components/Services'; // Потребует изменений
import ProcessSteps from './components/ProcessSteps';
import Reviews2GIS from './components/Reviews2GIS';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';

// Компоненты отдельных страниц
import OppoRealmePage from './components/OppoRealmePage';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import ContactPage from './components/ContactPage';
import TvRepairPage from './components/TvRepairPage';
import LaptopRepairPage from './components/LaptopRepairPage';
import PhoneRepairPage from './components/PhoneRepairPage';
import NintendoSwitchPage from './components/NintendoSwitchPage';
import JBLRepairPage from './components/JBLRepairPage';
import ComplexRepairPage from './components/ComplexRepairPage';
import FRPUnlockPage from './components/FRPUnlockPage';
import MobileForensicsPage from './components/MobileForensicsPage';
import TabletRepairPage from './components/TabletRepairPage';
import AllServicesPage from './components/AllServicesPage'; // Потребует изменений

// Компонент для прокрутки вверх при смене маршрута
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Этот компонент ничего не рендерит
}

// Основной контент приложения, чтобы использовать хуки react-router-dom
function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header /> {/* Уберем prop onNavigate */}
      <ScrollToTopOnNavigate /> {/* Добавляем компонент для прокрутки */}
      <main>
        <Routes>
          {/* Маршрут для домашней страницы */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services /> {/* Уберем prop onNavigate */}
                <ProcessSteps />
                <Reviews2GIS />
                <PricingSection />
                <FAQ />
                <ContactSection />
                <CallToAction />
              </>
            }
          />
          {/* Маршруты для остальных страниц */}
          <Route path="/oppo-realme" element={<OppoRealmePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tv-repair" element={<TvRepairPage />} />
          <Route path="/laptop-repair" element={<LaptopRepairPage />} />
          <Route path="/phone-repair" element={<PhoneRepairPage />} />
          <Route path="/nintendo-switch" element={<NintendoSwitchPage />} />
          <Route path="/jbl-repair" element={<JBLRepairPage />} />
          <Route path="/complex-repair" element={<ComplexRepairPage />} />
          <Route path="/frp-unlock" element={<FRPUnlockPage />} />
          <Route path="/mobile-forensics" element={<MobileForensicsPage />} />
          <Route path="/tablet-repair" element={<TabletRepairPage />} />
          <Route path="/all-services" element={<AllServicesPage />} /> {/* Уберем prop onNavigate */}

          {/* Опционально: Маршрут для страницы "Не найдено" (404) */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Этот useEffect может остаться для установки общих мета-тегов по умолчанию,
  // но каждая страница должна иметь свои собственные (через Helmet или useEffect внутри компонента страницы)
  React.useEffect(() => {
    document.title = 'Агентство IT Услуг | Экспертный ремонт устройств в Ангарске';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Профессиональный ремонт смартфонов, ноутбуков, планшетов и электроники в Ангарске. Быстрый, надежный ремонт с гарантией 30 дней. Доступен ремонт в тот же день.'
      );
    }
  }, []);

  return (
    <Router> {/* Оборачиваем все приложение в BrowserRouter */}
      <AppContent />
    </Router>
  );
}

export default App;