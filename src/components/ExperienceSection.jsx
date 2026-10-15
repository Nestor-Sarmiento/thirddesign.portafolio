import React, { useState } from 'react';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  Terminal,
  Sparkles,
} from 'lucide-react';

export default function ExperienceSection({
  experiences,
  lang,
  darkMode,
  onSelectSkillFilter,
}) {
  const [expandedIds, setExpandedIds] = useState({ 'arellano-store': true });

  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="experiencia"
      className={`py-16 sm:py-20 border-t ${
        darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200/80 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
                01 · {lang === 'es' ? 'Trayectoria Profesional' : 'Professional Trajectory'}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'es' ? 'Experiencia Laboral y Prácticas' : 'Work Experience & Internships'}
            </h2>
          </div>

          <p
            className={`text-sm sm:text-base max-w-md ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {lang === 'es'
              ? 'Haz clic en cualquier tecnología para filtrarla en el Stack Técnico o despliega el detalle de arquitectura.'
              : 'Click any technology tag to filter it in the Tech Stack or expand the architecture breakdown.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8 border-l-2 border-blue-600/30 dark:border-blue-500/30 space-y-10">
          {experiences.map((exp, idx) => {
            const isExpanded = !!expandedIds[exp.id];
            return (
              <article
                key={exp.id}
                className={`relative rounded-2xl p-6 sm:p-8 border transition-all ${
                  darkMode
                    ? 'bg-slate-900/75 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-50/70 border-slate-200/90 hover:border-slate-300 shadow-2xs'
                }`}
              >
                {/* Timeline Node Dot */}
                <span
                  className={`absolute -left-[1.45rem] sm:-left-[2.45rem] top-7 w-4 h-4 rounded-full border-4 ${
                    idx === 0
                      ? 'bg-blue-600 border-blue-200 dark:border-blue-950'
                      : 'bg-emerald-500 border-emerald-100 dark:border-emerald-950'
                  }`}
                  aria-hidden="true"
                />

                {/* Top Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                        darkMode
                          ? 'bg-slate-800 border-slate-700 text-slate-300'
                          : 'bg-white border-slate-200 text-slate-600'
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    {exp.statusBadge}
                  </span>
                </div>

                {/* Role & Company */}
                <div className="mb-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2 mt-0.5">
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>{exp.company}</span>
                  </p>
                </div>

                {/* Executive Summary */}
                <p
                  className={`text-base leading-relaxed max-w-[72ch] mb-5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {exp.summary}
                </p>

                {/* Key Achievements List */}
                <div className="mb-6">
                  <h4
                    className={`text-xs font-mono uppercase tracking-wider font-semibold mb-3 ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {lang === 'es'
                      ? 'Responsabilidades y Logros Clave:'
                      : 'Key Responsibilities & Achievements:'}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.highlights.map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border text-sm leading-relaxed ${
                          darkMode
                            ? 'bg-slate-950/60 border-slate-800/80 text-slate-200'
                            : 'bg-white border-slate-200/80 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable Architecture Details & Tech Tags */}
                <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {exp.technologies.map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => onSelectSkillFilter(tech)}
                        className={`font-mono text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                          darkMode
                            ? 'bg-slate-800/90 border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-300'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-700'
                        }`}
                        title={
                          lang === 'es'
                            ? `Filtrar competencia "${tech}" en el Stack Técnico`
                            : `Filter "${tech}" in Tech Stack`
                        }
                      >
                        #{tech}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(exp.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                      isExpanded
                        ? 'bg-blue-600 text-white border-blue-600'
                        : darkMode
                        ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                        : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <Layers className="w-4 h-4" />
                    <span>
                      {isExpanded
                        ? lang === 'es'
                          ? 'Ocultar desglose técnico'
                          : 'Hide technical breakdown'
                        : lang === 'es'
                        ? 'Ver arquitectura y entregables'
                        : 'View architecture & deliverables'}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Expanded Architecture Details */}
                {isExpanded && exp.architectureDetails && (
                  <div
                    className={`mt-5 rounded-2xl p-5 border transition-all ${
                      darkMode
                        ? 'bg-slate-950/90 border-blue-900/50 text-slate-200'
                        : 'bg-blue-50/50 border-blue-200/80 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-display font-bold text-sm sm:text-base text-blue-600 dark:text-blue-400 mb-3">
                      <Terminal className="w-4 h-4" />
                      <span>{exp.architectureDetails.title}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm leading-relaxed mb-4">
                      <div
                        className={`p-3.5 rounded-xl border ${
                          darkMode
                            ? 'bg-slate-900 border-slate-800'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="font-mono text-xs uppercase font-bold text-amber-600 dark:text-amber-400 mb-1">
                          {lang === 'es' ? 'Reto / Contexto' : 'Challenge / Context'}
                        </div>
                        <p>{exp.architectureDetails.problem}</p>
                      </div>

                      <div
                        className={`p-3.5 rounded-xl border ${
                          darkMode
                            ? 'bg-slate-900 border-slate-800'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="font-mono text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                          {lang === 'es' ? 'Solución de Ingeniería' : 'Engineering Solution'}
                        </div>
                        <p>{exp.architectureDetails.solution}</p>
                      </div>
                    </div>

                    <div>
                      <div className="font-mono text-xs uppercase font-semibold opacity-75 mb-2">
                        {lang === 'es' ? 'Entregables Técnicos:' : 'Technical Deliverables:'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.architectureDetails.deliverables.map((deliv, idx2) => (
                          <span
                            key={idx2}
                            className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border ${
                              darkMode
                                ? 'bg-slate-900 border-slate-800 text-slate-300'
                                : 'bg-white border-slate-200 text-slate-700'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
