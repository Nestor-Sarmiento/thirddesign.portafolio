import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUp, CheckCircle2, X, HelpCircle } from 'lucide-react';
import { PROFILE_DATA } from './data/portfolioData';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SolutionsSection from './components/SolutionsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import {
  CommandPaletteModal,
  CvPreviewModal,
  HelpAndDocumentationModal,
} from './components/Modals';

export default function App() {
  const [lang, setLang] = useState('es');
  const [darkMode, setDarkMode] = useState(false);
  const [fontScale, setFontScale] = useState('md'); // 'sm' | 'md' | 'lg'

  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [copiedField, setCopiedField] = useState(null);
  const [toast, setToast] = useState(null);

  const [skillSearchQuery, setSkillSearchQuery] = useState('');

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const currentData = PROFILE_DATA[lang] || PROFILE_DATA.es;

  const showToast = useCallback((message, subtext = '') => {
    setToast({ message, subtext, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3800);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-scale', fontScale);
  }, [fontScale]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowBackToTop(scrollTop > 420);

      const sectionIds = [
        'inicio',
        'experiencia',
        'proyectos',
        'competencias',
        'educacion',
        'contacto',
      ];
      let current = 'inicio';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = useCallback(
    (text, fieldId) => {
      navigator.clipboard?.writeText(text).catch(() => {});
      setCopiedField(fieldId);
      showToast(
        lang === 'es'
          ? `Copiado al portapapeles: ${text}`
          : `Copied to clipboard: ${text}`,
        lang === 'es'
          ? 'Listo para pegar directamente.'
          : 'Ready to paste directly.'
      );
      setTimeout(() => setCopiedField(null), 2500);
    },
    [lang, showToast]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
        return;
      }

      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
        setIsCvModalOpen(false);
        setIsHelpModalOpen(false);
        return;
      }

      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.key === '?') {
        e.preventDefault();
        setIsHelpModalOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setIsCvModalOpen(true);
      } else if (e.key.toLowerCase() === 'c') {
        e.preventDefault();
        handleCopy(currentData.personal.email, 'email');
      } else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        setDarkMode((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentData.personal.email, handleCopy]);

  const handleSelectSkillFilter = (techName) => {
    setSkillSearchQuery(techName);
    document.getElementById('competencias')?.scrollIntoView({ behavior: 'smooth' });
    showToast(
      lang === 'es'
        ? `Filtrando competencia técnica: "${techName}"`
        : `Filtering technical skill: "${techName}"`
    );
  };

  const whatsappDirectUrl =
    'https://wa.me/593961284734?text=' +
    encodeURIComponent(
      lang === 'es'
        ? 'Hola Néstor, revisé tu portafolio digital y me gustaría conversar contigo.'
        : 'Hi Néstor, I reviewed your digital portfolio and would like to get in touch.'
    );

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* Skip to content link for keyboard accessibility */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-xl focus:bg-blue-600 focus:text-white focus:font-semibold"
      >
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>

      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        fontScale={fontScale}
        setFontScale={setFontScale}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenHelpModal={() => setIsHelpModalOpen(true)}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content */}
      <main>
        <HeroSection
          data={currentData}
          lang={lang}
          darkMode={darkMode}
          copiedField={copiedField}
          onCopy={handleCopy}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        <ExperienceSection
          experiences={currentData.experiences}
          lang={lang}
          darkMode={darkMode}
          onSelectSkillFilter={handleSelectSkillFilter}
        />

        <SolutionsSection
          solutions={currentData.featuredSolutions}
          lang={lang}
          darkMode={darkMode}
          githubUrl={currentData.personal.githubUrl}
          onSelectSkillFilter={handleSelectSkillFilter}
        />

        <SkillsSection
          lang={lang}
          darkMode={darkMode}
          externalSearchQuery={skillSearchQuery}
          setExternalSearchQuery={setSkillSearchQuery}
        />

        <EducationSection
          education={currentData.education}
          certifications={currentData.certifications}
          spokenLanguages={currentData.spokenLanguages}
          lang={lang}
          darkMode={darkMode}
        />

        <ContactSection
          personal={currentData.personal}
          lang={lang}
          darkMode={darkMode}
          copiedField={copiedField}
          onCopy={handleCopy}
        />
      </main>

      {/* Footer */}
      <footer
        className={`py-10 border-t text-xs sm:text-sm ${
          darkMode
            ? 'bg-slate-950 border-slate-800 text-slate-400'
            : 'bg-white border-slate-200 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-slate-900 dark:text-white">
              {currentData.personal.fullName}
            </span>
            <span>·</span>
            <span>Escuela Politécnica Nacional (EPN)</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsHelpModalOpen(true)}
              className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{lang === 'es' ? 'Ayuda y Atajos (?)' : 'Help & Shortcuts (?)'}</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Toast Notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 left-4 right-4 sm:left-6 sm:right-auto z-50 max-w-md rounded-2xl p-4 shadow-2xl border bg-slate-900 border-slate-700 text-white flex items-start justify-between gap-3"
        >
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-xs sm:text-sm">{toast.message}</div>
              {toast.subtext && (
                <div className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                  {toast.subtext}
                </div>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setToast(null)}
            className="p-1 rounded-lg text-slate-400 hover:text-white cursor-pointer"
            aria-label="Cerrar notificación"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Action Stack: Back to Top + WhatsApp (+593961284734) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        {showBackToTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`p-3 rounded-2xl border shadow-lg cursor-pointer transition-all ${
              darkMode
                ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200'
                : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
            }`}
            title={lang === 'es' ? 'Volver al inicio de la página' : 'Back to top'}
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Button (+593961284734) */}
        <a
          href={whatsappDirectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp al +593961284734"
          title={
            lang === 'es'
              ? 'Escribir por WhatsApp a Néstor (+593961284734)'
              : 'Chat on WhatsApp with Néstor (+593961284734)'
          }
          className="group inline-flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:scale-[1.03] transition-all duration-200"
        >
          <span className="relative flex items-center justify-center w-6 h-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30" />
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-6 h-6 relative"
              aria-hidden="true"
            >
              <path d="M16.004 3.2c-7.072 0-12.8 5.728-12.8 12.8 0 2.256.592 4.464 1.712 6.416L3.2 28.8l6.56-1.712a12.74 12.74 0 0 0 6.244 1.632h.005c7.067 0 12.795-5.728 12.795-12.8 0-3.424-1.333-6.64-3.755-9.061A12.72 12.72 0 0 0 16.004 3.2Zm0 23.36h-.004a10.61 10.61 0 0 1-5.408-1.483l-.389-.23-3.893 1.019 1.04-3.797-.251-.4a10.58 10.58 0 0 1-1.637-5.669c0-5.856 4.768-10.624 10.629-10.624 2.837 0 5.504 1.104 7.509 3.115a10.55 10.55 0 0 1 3.11 7.509c0 5.861-4.768 10.624-10.624 10.624Zm5.829-7.957c-.32-.16-1.888-.933-2.181-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.349-.496-2.571-1.584-.949-.848-1.589-1.893-1.776-2.213-.187-.32-.021-.491.139-.651.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.261-.624-.528-.539-.72-.549l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.256 3.445 5.467 4.832.763.331 1.36.528 1.824.677.768.245 1.467.208 2.021.128.619-.091 1.888-.773 2.155-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
            </svg>
          </span>
          <div className="text-left leading-tight">
            <span className="block text-xs sm:text-sm font-bold tracking-tight">
              WhatsApp
            </span>
            <span className="block text-[11px] font-mono opacity-95">
              +593961284734
            </span>
          </div>
        </a>
      </div>

      {/* Modals */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        lang={lang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setLang={setLang}
        onCopyEmail={() => handleCopy(currentData.personal.email, 'email')}
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onSelectSkillFilter={handleSelectSkillFilter}
      />

      <CvPreviewModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        personal={currentData.personal}
        lang={lang}
        darkMode={darkMode}
      />

      <HelpAndDocumentationModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        lang={lang}
        darkMode={darkMode}
      />
    </div>
  );
}
