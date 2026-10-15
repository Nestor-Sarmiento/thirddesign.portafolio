import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { GLOSSARY_TERMS } from '../data/portfolioData';

export default function GlossaryTerm({ termKey, children, lang = 'es', darkMode = false }) {
  const [open, setOpen] = useState(false);
  const entry = GLOSSARY_TERMS[termKey];

  if (!entry) return <span>{children || termKey}</span>;

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`inline-flex items-center gap-0.5 font-medium border-b border-dashed transition-colors cursor-help ${
          darkMode
            ? 'text-blue-300 border-blue-400/60 hover:text-blue-200 hover:border-blue-300'
            : 'text-blue-700 border-blue-500/60 hover:text-blue-800 hover:border-blue-700'
        }`}
        aria-label={`${entry.term}: ${entry[lang]}`}
      >
        <span>{children || termKey}</span>
        <HelpCircle className="w-3 h-3 opacity-75 shrink-0" />
      </button>

      {open && (
        <span
          role="tooltip"
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80 p-3 rounded-xl shadow-xl border text-left z-50 text-xs leading-relaxed pointer-events-none ${
            darkMode
              ? 'bg-slate-900 border-slate-700 text-slate-200 shadow-black/70'
              : 'bg-slate-900 border-slate-800 text-white shadow-slate-900/25'
          }`}
        >
          <span className="block font-mono font-bold text-blue-400 mb-1">
            {entry.term}
          </span>
          <span className="block text-slate-200">{entry[lang]}</span>
        </span>
      )}
    </span>
  );
}
