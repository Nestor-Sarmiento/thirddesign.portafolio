import React, { useState } from 'react';
import {
  Cpu,
  Workflow,
  Server,
  Layers,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  RotateCcw,
} from 'lucide-react';

const SOLUTION_ICONS = {
  'omnicanal-erp-automation': Workflow,
  'rag-legal-assistant': Cpu,
  'n8n-automation-engine': Workflow,
  'secure-api-linux': Server,
  'fullstack-enterprise-foundations': Layers,
};

export default function SolutionsSection({
  solutions,
  lang,
  darkMode,
  githubUrl,
  onSelectSkillFilter,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeCardId, setActiveCardId] = useState('omnicanal-erp-automation');

  const categories = [
    { id: 'all', label: lang === 'es' ? 'Todas las Soluciones' : 'All Solutions' },
    ...Array.from(new Set(solutions.map((s) => s.category))).map((cat) => ({
      id: cat,
      label: cat,
    })),
  ];

  const filteredSolutions =
    selectedCategory === 'all'
      ? solutions
      : solutions.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="proyectos"
      className={`py-16 sm:py-20 border-t ${
        darkMode
          ? 'border-slate-800/80 bg-slate-900/40'
          : 'border-slate-200/80 bg-slate-50/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
                02 · {lang === 'es' ? 'Ingeniería Aplicada' : 'Applied Engineering'}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'es'
                ? 'Soluciones y Proyectos Destacados'
                : 'Featured Engineering Solutions'}
            </h2>
          </div>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all self-start md:self-auto ${
              darkMode
                ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-blue-500'
                : 'bg-white border-slate-300 text-slate-800 hover:border-blue-500 shadow-2xs'
            }`}
          >
            <span>
              {lang === 'es'
                ? 'Explorar repositorios en GitHub (@Nestor-Sarmiento)'
                : 'Explore GitHub Repositories (@Nestor-Sarmiento)'}
            </span>
            <ExternalLink className="w-4 h-4 text-blue-500" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : darkMode
                      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {selectedCategory !== 'all' && (
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Mostrar todas' : 'Show all'}</span>
            </button>
          )}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSolutions.map((sol) => {
            const Icon = SOLUTION_ICONS[sol.id] || Layers;
            const isHighlighted = activeCardId === sol.id;

            return (
              <article
                key={sol.id}
                onClick={() => setActiveCardId(sol.id)}
                className={`group rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                  isHighlighted
                    ? darkMode
                      ? 'bg-slate-900 border-blue-500/60 shadow-lg shadow-blue-950/20'
                      : 'bg-white border-blue-400 shadow-md shadow-blue-950/5'
                    : darkMode
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div>
                  {/* Top Badge & Context */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-blue-600/10 text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                      {sol.category}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {sol.context}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="font-display text-xl font-bold tracking-tight mb-2.5">
                    {sol.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {sol.shortDescription}
                  </p>

                  {/* Structured Problem -> Solution Box */}
                  <div
                    className={`rounded-xl p-4 border space-y-3 mb-5 text-xs sm:text-sm leading-relaxed ${
                      darkMode
                        ? 'bg-slate-950/70 border-slate-800/90'
                        : 'bg-slate-50/90 border-slate-200/70'
                    }`}
                  >
                    <div>
                      <span className="font-mono text-[11px] uppercase font-bold text-amber-600 dark:text-amber-400 block mb-0.5">
                        {lang === 'es' ? 'Problema Abordado:' : 'Problem Addressed:'}
                      </span>
                      <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {sol.problem}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-200/70 dark:border-slate-800">
                      <span className="font-mono text-[11px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">
                        {lang === 'es' ? 'Arquitectura e Implementación:' : 'Architecture & Implementation:'}
                      </span>
                      <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {sol.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Outcomes */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sol.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg ${
                          darkMode
                            ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800/50'
                            : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Stack Tags */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {sol.stack.map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectSkillFilter(tech);
                        }}
                        className={`font-mono text-xs px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                          darkMode
                            ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-blue-500'
                            : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-blue-400'
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>

                  <a
                    href="#competencias"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectSkillFilter(sol.stack[0]);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>{lang === 'es' ? 'Ver en stack' : 'View in stack'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
