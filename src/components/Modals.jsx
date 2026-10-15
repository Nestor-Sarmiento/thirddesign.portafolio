import React, { useState, useEffect } from 'react';
import {
  X,
  Search,
  Download,
  FileText,
  ExternalLink,
  Keyboard,
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/portfolioData';

export function CommandPaletteModal({
  isOpen,
  onClose,
  lang,
  darkMode,
  setDarkMode,
  setLang,
  onCopyEmail,
  onOpenCvModal,
  onSelectSkillFilter,
}) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isOpen) setQuery('');
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'goto-exp',
      label:
        lang === 'es'
          ? 'Ir a Experiencia Laboral (Arellano Store, Vibratio EC & Inclusión Digital)'
          : 'Go to Work Experience (Arellano Store, Vibratio EC & Digital Inclusion)',
      shortcut: '2',
      run: () => {
        document.getElementById('experiencia')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'goto-sol',
      label:
        lang === 'es'
          ? 'Ir a Soluciones (Omnicanal Meta/TikTok, ERP, RAG, VPS Docker)'
          : 'Go to Featured Solutions (Omnichannel, ERP, RAG, VPS Docker)',
      shortcut: '3',
      run: () => {
        document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'goto-skills',
      label:
        lang === 'es'
          ? 'Explorar Stack Técnico (28+ tecnologías: n8n, NestJS, React, Docker...)'
          : 'Explore Tech Stack (28+ skills: n8n, NestJS, React, Docker...)',
      shortcut: '4',
      run: () => {
        document.getElementById('competencias')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'goto-contact',
      label: lang === 'es' ? 'Ir a Contacto Directo / WhatsApp (+593961284734)' : 'Go to Direct Contact / WhatsApp (+593961284734)',
      shortcut: '6',
      run: () => {
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'copy-email',
      label: lang === 'es' ? 'Copiar correo: nesdav1005@gmail.com' : 'Copy email: nesdav1005@gmail.com',
      shortcut: 'C',
      run: () => {
        onCopyEmail();
        onClose();
      },
    },
    {
      id: 'preview-cv',
      label: lang === 'es' ? 'Previsualizar / Descargar CV Oficial (PDF)' : 'Preview / Download Official CV (PDF)',
      shortcut: 'D',
      run: () => {
        onClose();
        onOpenCvModal();
      },
    },
    {
      id: 'filter-python',
      label: lang === 'es' ? 'Filtrar competencia: Python & FastAPI' : 'Filter skill: Python & FastAPI',
      shortcut: 'F',
      run: () => {
        onClose();
        onSelectSkillFilter('FastAPI');
      },
    },
    {
      id: 'toggle-theme',
      label:
        lang === 'es'
          ? `Cambiar tema a modo ${darkMode ? 'Claro' : 'Oscuro'}`
          : `Switch to ${darkMode ? 'Light' : 'Dark'} mode`,
      shortcut: 'T',
      run: () => {
        setDarkMode((prev) => !prev);
        onClose();
      },
    },
    {
      id: 'toggle-lang',
      label:
        lang === 'es'
          ? 'Cambiar idioma del portafolio a Inglés (EN)'
          : 'Switch portfolio language to Spanish (ES)',
      shortcut: 'L',
      run: () => {
        setLang((prev) => (prev === 'es' ? 'en' : 'es'));
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Paleta de comandos"
    >
      <div
        className={`w-full max-w-xl rounded-2xl border shadow-2xl overflow-hidden ${
          darkMode
            ? 'bg-slate-900 border-slate-700 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'es'
                ? 'Escribe un comando o sección (Esc para salir)...'
                : 'Type a command or section (Esc to close)...'
            }
            className="w-full bg-transparent text-sm sm:text-base outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 rounded-md text-xs font-mono border border-slate-300 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Actions List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.map((action) => (
            <button
              key={action.id}
              type="button"
              onClick={action.run}
              className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                darkMode
                  ? 'hover:bg-slate-800 text-slate-200'
                  : 'hover:bg-blue-50 text-slate-800'
              }`}
            >
              <span className="flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>{action.label}</span>
              </span>
              <kbd
                className={`px-2 py-0.5 text-[11px] font-mono rounded border ${
                  darkMode
                    ? 'bg-slate-950 border-slate-700 text-slate-400'
                    : 'bg-slate-100 border-slate-300 text-slate-600'
                }`}
              >
                {action.shortcut}
              </kbd>
            </button>
          ))}
        </div>

        <div
          className={`px-4 py-2.5 text-[11px] font-mono border-t flex items-center justify-between ${
            darkMode
              ? 'bg-slate-950 border-slate-800 text-slate-400'
              : 'bg-slate-50 border-slate-200 text-slate-500'
          }`}
        >
          <span>
            {lang === 'es'
              ? 'Navegación rápida por teclado'
              : 'Quick keyboard navigation'}
          </span>
          <span>
            {lang === 'es' ? 'Presiona Esc para cerrar' : 'Press Esc to close'}
          </span>
        </div>
      </div>
    </div>
  );
}

export function CvPreviewModal({ isOpen, onClose, personal, lang, darkMode }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vista previa del CV"
    >
      <div
        className={`w-full max-w-4xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${
          darkMode
            ? 'bg-slate-900 border-slate-700 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-blue-500" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-none">
                CV — {personal.fullName}
              </h3>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {lang === 'es'
                  ? 'Documento PDF Oficial · Escuela Politécnica Nacional'
                  : 'Official PDF Resume · Escuela Politécnica Nacional'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.cvPdfUrl}
              download="CV_Nestor_Sarmiento.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'es' ? 'Descargar PDF' : 'Download PDF'}</span>
            </a>

            <a
              href={personal.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border ${
                darkMode
                  ? 'border-slate-700 hover:bg-slate-800'
                  : 'border-slate-300 hover:bg-slate-100'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">
                {lang === 'es' ? 'Abrir en pestaña' : 'Open in tab'}
              </span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className={`p-2 rounded-xl border cursor-pointer ${
                darkMode
                  ? 'border-slate-700 hover:bg-slate-800 text-slate-300'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
              aria-label="Cerrar vista previa"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 min-h-[65vh]">
          <iframe
            src={personal.cvPdfUrl}
            title="CV Néstor David Sarmiento Caillagua"
            className="w-full h-[68vh] border-0"
          />
        </div>
      </div>
    </div>
  );
}

export function HelpAndDocumentationModal({ isOpen, onClose, lang, darkMode }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '⌘K / Ctrl+K', descEs: 'Abrir paleta de comandos rápidos', descEn: 'Open quick command palette' },
    { key: '/', descEs: 'Enfocar buscador de competencias técnicas', descEn: 'Focus technical skills search bar' },
    { key: 'D', descEs: 'Previsualizar o descargar el CV en PDF', descEn: 'Preview or download PDF CV' },
    { key: 'C', descEs: 'Copiar el correo electrónico al portapapeles', descEn: 'Copy email address to clipboard' },
    { key: 'T', descEs: 'Alternar entre modo Claro y Oscuro', descEn: 'Toggle Light / Dark theme' },
    { key: 'Esc', descEs: 'Cerrar cualquier ventana modal o menú abierto', descEn: 'Close any open modal or menu' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Centro de Ayuda y Documentación"
    >
      <div
        className={`w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden max-h-[88vh] flex flex-col ${
          darkMode
            ? 'bg-slate-900 border-slate-700 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase">
              {lang === 'es' ? 'Guía Rápida del Portafolio' : 'Portfolio Quick Guide'}
            </span>
            <h3 className="font-display font-bold text-lg sm:text-xl">
              {lang === 'es'
                ? 'Atajos de Teclado y Glosario Técnico'
                : 'Keyboard Shortcuts & Technical Glossary'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Keyboard Shortcuts */}
          <div>
            <h4 className="font-display font-bold text-base flex items-center gap-2 mb-3">
              <Keyboard className="w-4 h-4 text-blue-500" />
              <span>
                {lang === 'es'
                  ? 'Atajos de Navegación Rápida'
                  : 'Quick Navigation Shortcuts'}
              </span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {shortcuts.map((s) => (
                <div
                  key={s.key}
                  className={`flex items-center justify-between gap-2 p-2.5 rounded-xl border ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-xs">{lang === 'es' ? s.descEs : s.descEn}</span>
                  <kbd className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
                    {s.key}
                  </kbd>
                </div>
              ))}
            </div>
          </div>

          {/* Glossary of Technical Terms */}
          <div>
            <h4 className="font-display font-bold text-base flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>
                {lang === 'es'
                  ? 'Glosario de Tecnologías Clave'
                  : 'Core Technologies Glossary'}
              </span>
            </h4>
            <div className="space-y-2.5">
              {Object.values(GLOSSARY_TERMS).map((item) => (
                <div
                  key={item.term}
                  className={`p-3.5 rounded-xl border ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="font-mono font-bold text-xs text-blue-600 dark:text-blue-400 mb-1">
                    {item.term}
                  </div>
                  <p className="text-xs leading-relaxed opacity-90">{item[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
