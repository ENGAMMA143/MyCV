import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/arabic-fixes.css';
import './styles/arabic-headers-fix.css';
import './styles/advanced-animations.css';
import './styles/portfolio-animations.css';

// Import components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThreeD_Goals from './components/ThreeD_Goals';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import TimelineSection from './components/TimelineSection';
import Footer from './components/Footer';
import ViewMyWork from './components/ViewMyWork';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showViewMyWork, setShowViewMyWork] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.startsWith('ar') ? 'ar' : 'en';
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      setLanguage(browserLanguage);
    }
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Apply language direction to document
  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <div className={`min-h-screen bg-background text-foreground ${language === 'ar' ? 'rtl arabic-text' : 'ltr'}`}>
      {showViewMyWork ? (
        <ViewMyWork 
          language={language} 
          onClose={() => setShowViewMyWork(false)} 
        />
      ) : (
        <>
          {/* Header */}
          <Header 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            language={language}
            toggleLanguage={toggleLanguage}
            onViewMyWork={() => setShowViewMyWork(true)}
          />

          {/* Main Content */}
          <main className={language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <HeroSection 
              language={language} 
              onViewMyWork={() => setShowViewMyWork(true)}
            />

            {/* 3D Goals Section */}
            <ThreeD_Goals language={language} />

            {/* Skills Section */}
            <SkillsSection language={language} />

            {/* Portfolio Section */}
            <PortfolioSection 
              language={language} 
              onViewMyWork={() => setShowViewMyWork(true)}
            />

            {/* Timeline Section */}
            <TimelineSection language={language} />
          </main>

          {/* Footer */}
          <Footer language={language} />

          {/* Scroll to Top Button */}
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 animate-bounce"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default App;

