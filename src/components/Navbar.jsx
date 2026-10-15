import React, { useState } from 'react';
import {
  Terminal,
  Briefcase,
  Layers,
  Code2,
  GraduationCap,
  Mail,
  Search,
  Sun,
  Moon,
  HelpCircle,
  FileText,
  Menu,
  X,
  Globe,
  Type,
} from 'lucide-react';

export default function Navbar({
  activeSection,
  scrollProgress,
  lang,
  setLang,
  darkMode,
  setDarkMode,
  fontScale,
  setFontScale,
  onOpenCommandPalette,
  onOpenHelpModal,
  onOpenCvModal,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: lang === 'es' ? 'Inicio' : 'Home', icon: Terminal, shortcut: '1' },
    { id: 'experiencia', label: lang === 'es' ? 'Experiencia' : 'Experience', icon: Briefcase, shortcut: '2' },
    { id: 'proyectos', label: lang === 'es' ? 'Soluciones' : 'Solutions', icon: Layers, shortcut: '3' },
    { id: 'competencias', label: lang === 'es' ? 'Stack Técnico' : 'Tech Stack', icon: Code2, shortcut: '4' },
    { id: 'educacion', label: lang === 'es' ? 'Educación' : 'Education', icon: GraduationCap, shortcut: '5' },
    { id: 'contacto', label: lang === 'es' ? 'Contacto' : 'Contact', icon: Mail, shortcut: '6' },
  ];

  const cycleFontScale = () => {
    const order = ['sm', 'md', 'lg'];
    const next = order[(order.indexOf(fontScale) + 1) % order.length];
    setFontScale(next);
  };

  const fontScaleLabel = {
    sm: 'A-',
    md: 'A',
    lg: 'A+',
  }[fontScale];

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-200 border-b ${
        darkMode
          ? 'bg-slate-950/90 border-slate-800/80 text-slate-100'
          : 'bg-white/90 border-slate-200/90 text-slate-900'
      }`}
    >
      {/* Reading Progress Bar */}
      <div
        className={`w-full h-1 ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={lang === 'es' ? 'Progreso de lectura de la página' : 'Page reading progress'}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Status & Accessibility Bar */}
      <div
        className={`border-b text-xs ${
          darkMode
            ? 'bg-slate-900/70 border-slate-800/70 text-slate-300'
            : 'bg-slate-50/90 border-slate-200/70 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-2">
          {/* Left: System Status Indicator */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="inline-flex items-center gap-1.5 font-medium truncate">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className={darkMode ? 'text-emerald-400 font-semibold' : 'text-emerald-700 font-semibold'}>
                {lang === 'es' ? 'Disponible' : 'Available'}
              </span>
              <span className="hidden md:inline opacity-60">·</span>
              <span className="hidden md:inline truncate">
                {lang === 'es'
                  ? 'Sección actual:'
                  : 'Active section:'}{' '}
                <strong className={darkMode ? 'text-white' : 'text-slate-900'}>
                  {navItems.find((i) => i.id === activeSection)?.label || 'Inicio'}
                </strong>{' '}
                ({Math.round(scrollProgress)}%)
              </span>
            </span>
          </div>

          {/* Right: User Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Font Size / Readability Control */}
            <button
              type="button"
              onClick={cycleFontScale}
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-md font-mono font-semibold border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              title={
                lang === 'es'
                  ? 'Cambiar tamaño de lectura (A- / A / A+)'
                  : 'Cycle reading font size (A- / A / A+)'
              }
              aria-label={lang === 'es' ? 'Ajustar tamaño de texto' : 'Adjust font size'}
            >
              <Type className="w-3.5 h-3.5 text-blue-500" />
              <span>{fontScaleLabel}</span>
            </button>

            {/* Language Switcher ES / EN */}
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === 'es' ? 'en' : 'es'))}
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-md font-mono font-semibold border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              title={lang === 'es' ? 'Cambiar idioma a Inglés (EN)' : 'Switch language to Spanish (ES)'}
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              title={
                lang === 'es'
                  ? darkMode
                    ? 'Cambiar a modo claro'
                    : 'Cambiar a modo oscuro'
                  : darkMode
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              aria-label="Toggle color theme"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">
                {darkMode
                  ? lang === 'es'
                    ? 'Claro'
                    : 'Light'
                  : lang === 'es'
                  ? 'Oscuro'
                  : 'Dark'}
              </span>
            </button>

            {/* Help & Documentation Button */}
            <button
              type="button"
              onClick={onOpenHelpModal}
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-md border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              title={lang === 'es' ? 'Ayuda, glosario y atajos de teclado (?)' : 'Help, glossary & keyboard shortcuts (?)'}
              aria-label="Help and documentation"
            >
              <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
              <span className="hidden sm:inline">{lang === 'es' ? 'Ayuda' : 'Help'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Identity */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group shrink-0"
          aria-label="Néstor Sarmiento - Inicio"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border-2 border-blue-600 shadow-xs shrink-0">
            <img
              src="./profile.jpg"
              alt="Néstor David Sarmiento Caillagua"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight block leading-none">
              Néstor Sarmiento
            </span>
            <span
              className={`font-mono text-[11px] block mt-1 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              EPN · Software Eng.
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Navegación principal">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                  isActive
                    ? darkMode
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 font-semibold'
                      : 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold'
                    : darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-500' : 'opacity-70'}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Command Palette & CV Preview/Download */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800'
                : 'bg-slate-100/80 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-200/60'
            }`}
            title={
              lang === 'es'
                ? 'Abrir paleta de comandos rápidos (Ctrl+K o ⌘K)'
                : 'Open quick command palette (Ctrl+K or ⌘K)'
            }
          >
            <Search className="w-4 h-4 text-blue-500" />
            <span className="hidden sm:inline">
              {lang === 'es' ? 'Comandos...' : 'Commands...'}
            </span>
            <kbd
              className={`px-1.5 py-0.5 text-[11px] font-mono rounded border ${
                darkMode
                  ? 'bg-slate-800 border-slate-600 text-slate-300'
                  : 'bg-white border-slate-300 text-slate-600'
              }`}
            >
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>{lang === 'es' ? 'Ver / Descargar CV' : 'Preview / Download CV'}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`lg:hidden p-2 rounded-xl border cursor-pointer ${
              darkMode
                ? 'border-slate-700 text-slate-200 hover:bg-slate-800'
                : 'border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-4 pt-3 pb-5 space-y-2 ${
            darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600'
                      : darkMode
                      ? 'bg-slate-900 border-slate-800 text-slate-300'
                      : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
