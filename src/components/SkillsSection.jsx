import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  X,
  RotateCcw,
  LayoutGrid,
  List,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Code2,
  Layers,
  Database,
  Wrench,
  Cpu,
} from 'lucide-react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

const CATEGORY_META = [
  { id: 'all', label: { es: 'Todas', en: 'All' }, icon: LayoutGrid },
  { id: 'languages', label: { es: 'Lenguajes', en: 'Languages' }, icon: Code2 },
  { id: 'frameworks', label: { es: 'Frameworks & Web', en: 'Frameworks & Web' }, icon: Layers },
  { id: 'databases', label: { es: 'Bases de Datos', en: 'Databases' }, icon: Database },
  { id: 'tools', label: { es: 'DevOps & Infraestructura', en: 'DevOps & Infrastructure' }, icon: Wrench },
  { id: 'ai', label: { es: 'IA y Automatización', en: 'AI & Automation' }, icon: Cpu },
];

const SMART_QUERY_DIAGNOSIS = {
  pyton: { suggestion: 'Python', reasonEs: 'Posible error de tipeo en "Python".', reasonEn: 'Possible typo for "Python".' },
  phyton: { suggestion: 'Python', reasonEs: 'Posible error de tipeo en "Python".', reasonEn: 'Possible typo for "Python".' },
  postgre: { suggestion: 'PostgreSQL', reasonEs: 'Nombre completo en el stack: PostgreSQL.', reasonEn: 'Full stack name: PostgreSQL.' },
  postgres: { suggestion: 'PostgreSQL', reasonEs: 'Nombre completo en el stack: PostgreSQL.', reasonEn: 'Full stack name: PostgreSQL.' },
  fast: { suggestion: 'FastAPI', reasonEs: 'Framework backend principal en Python.', reasonEn: 'Primary Python backend framework.' },
  nest: { suggestion: 'NestJS', reasonEs: 'Framework backend modular con TypeScript.', reasonEn: 'Modular TypeScript backend framework.' },
  vite: { suggestion: 'React + Vite + Tailwind CSS', reasonEs: 'Incluido en la competencia de React + Vite + Tailwind CSS.', reasonEn: 'Included under React + Vite + Tailwind CSS.' },
  tailwind: { suggestion: 'React + Vite + Tailwind CSS', reasonEs: 'Incluido en la competencia de React + Vite + Tailwind CSS.', reasonEn: 'Included under React + Vite + Tailwind CSS.' },
  spring: { suggestion: 'Spring Boot', reasonEs: 'Framework empresarial Java.', reasonEn: 'Java enterprise framework.' },
  kubernetes: {
    suggestion: 'Docker',
    reasonEs: 'Néstor administra múltiples contenedores con Docker y Traefik sobre servidores Linux VPS.',
    reasonEn: 'Néstor manages multi-container stacks with Docker and Traefik on Linux VPS servers.',
  },
  k8s: {
    suggestion: 'Docker',
    reasonEs: 'Para contenedorización y despliegue en VPS, Néstor utiliza Docker y Traefik.',
    reasonEn: 'For containerization and VPS deployment, Néstor uses Docker and Traefik.',
  },
  nginx: {
    suggestion: 'Traefik',
    reasonEs: 'Para proxy inverso y enrutamiento de contenedores Docker en el VPS, Néstor utiliza Traefik.',
    reasonEn: 'For reverse proxy and Docker container routing on the VPS, Néstor uses Traefik.',
  },
  aws: {
    suggestion: 'Linux VPS',
    reasonEs: 'En infraestructura y nube, Néstor administra servidores Linux VPS con Docker, Traefik y Azure DevOps.',
    reasonEn: 'For cloud & infrastructure, Néstor manages Linux VPS servers with Docker, Traefik, and Azure DevOps.',
  },
  django: {
    suggestion: 'FastAPI',
    reasonEs: 'En el ecosistema Python backend, Néstor se especializa en FastAPI.',
    reasonEn: 'Within the Python backend ecosystem, Néstor specializes in FastAPI.',
  },
  angular: {
    suggestion: 'React',
    reasonEs: 'En desarrollo frontend moderno, Néstor trabaja con React, Vite, Tailwind CSS y TypeScript.',
    reasonEn: 'For modern frontend development, Néstor works with React, Vite, Tailwind CSS, and TypeScript.',
  },
  zapier: {
    suggestion: 'n8n',
    reasonEs: 'Para automatización de flujos, ERP y redes sociales, Néstor utiliza n8n.',
    reasonEn: 'For workflow, ERP, and social media automation, Néstor uses n8n.',
  },
  openai: {
    suggestion: 'Google AI Studio',
    reasonEs: 'En modelos LLM e IA Generativa, Néstor trabaja con Google AI Studio, Gemini API, RAG y prevención de Prompt Injection.',
    reasonEn: 'For LLMs and Generative AI, Néstor works with Google AI Studio, Gemini API, RAG, and Prompt Injection prevention.',
  },
};

export default function SkillsSection({
  lang,
  darkMode,
  externalSearchQuery,
  setExternalSearchQuery,
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'compact'
  const [previousFilterSnapshot, setPreviousFilterSnapshot] = useState(null);
  const searchInputRef = useRef(null);

  const searchQuery = externalSearchQuery || '';
  const setSearchQuery = setExternalSearchQuery;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const quickSuggestions = [
    'n8n',
    'Docker',
    'Traefik',
    'Chatwoot',
    'NestJS',
    'React',
    'FastAPI',
    'PostgreSQL',
    'Redis',
    'Google AI Studio',
  ];

  const categoryCounts = useMemo(() => {
    const counts = { all: TECHNICAL_SKILLS.length };
    TECHNICAL_SKILLS.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredSkills = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return TECHNICAL_SKILLS.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'all' || skill.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      const inName = skill.name.toLowerCase().includes(q);
      const inContext = skill.context[lang].toLowerCase().includes(q);
      const inCategory = skill.categoryLabel[lang].toLowerCase().includes(q);
      const inKeywords = skill.keywords.some((k) => k.toLowerCase().includes(q));
      return inName || inContext || inCategory || inKeywords;
    });
  }, [selectedCategory, searchQuery, lang]);

  const errorDiagnosis = useMemo(() => {
    if (filteredSkills.length > 0 || !searchQuery.trim()) return null;
    const q = searchQuery.trim().toLowerCase();

    for (const [key, diag] of Object.entries(SMART_QUERY_DIAGNOSIS)) {
      if (q.includes(key) || key.includes(q)) {
        return {
          suggestion: diag.suggestion,
          reason: lang === 'es' ? diag.reasonEs : diag.reasonEn,
        };
      }
    }

    const matchInOtherCategory = TECHNICAL_SKILLS.find(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.keywords.some((k) => k.toLowerCase().includes(q))
    );
    if (matchInOtherCategory && selectedCategory !== 'all') {
      return {
        suggestion: matchInOtherCategory.name,
        switchCategoryToAll: true,
        reason:
          lang === 'es'
            ? `"${matchInOtherCategory.name}" sí forma parte del CV, pero pertenece a la categoría "${matchInOtherCategory.categoryLabel.es}".`
            : `"${matchInOtherCategory.name}" is in the CV under the "${matchInOtherCategory.categoryLabel.en}" category.`,
      };
    }

    return {
      suggestion: 'Python',
      reason:
        lang === 'es'
          ? `No se encontraron coincidencias exactas para "${searchQuery}". Puedes explorar las competencias principales en Backend (Python, FastAPI, Java), IA (Gemini, RAG, n8n) o Full Stack (React, PostgreSQL).`
          : `No exact matches found for "${searchQuery}". You can explore core skills in Backend (Python, FastAPI, Java), AI (Gemini, RAG, n8n), or Full Stack (React, PostgreSQL).`,
    };
  }, [filteredSkills.length, searchQuery, selectedCategory, lang]);

  const handleResetFilters = () => {
    setPreviousFilterSnapshot({ category: selectedCategory, query: searchQuery });
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const handleUndoReset = () => {
    if (!previousFilterSnapshot) return;
    setSelectedCategory(previousFilterSnapshot.category);
    setSearchQuery(previousFilterSnapshot.query);
    setPreviousFilterSnapshot(null);
  };

  return (
    <section
      id="competencias"
      className={`py-16 sm:py-20 border-t ${
        darkMode ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200/80 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
                03 · {lang === 'es' ? 'Competencias Técnicas' : 'Technical Competencies'}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
              {lang === 'es' ? 'Caja de Herramientas y Stack Tecnológico' : 'Engineering Toolbox & Tech Stack'}
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <div
              className={`inline-flex rounded-xl p-1 border ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}
              role="group"
              aria-label="Modo de visualización"
            >
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Tarjetas Detalladas' : 'Detailed Cards'}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('compact')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'compact'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>{lang === 'es' ? 'Vista Compacta' : 'Compact Matrix'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filter Control Panel */}
        <div
          className={`rounded-2xl p-4 sm:p-5 border mb-8 ${
            darkMode
              ? 'bg-slate-900/75 border-slate-800'
              : 'bg-slate-50/90 border-slate-200/90'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Input with "/" Shortcut */}
            <div className="lg:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'es'
                    ? 'Buscar tecnología (ej. FastAPI, RAG, Java, Docker)...'
                    : 'Search technology (e.g. FastAPI, RAG, Java, Docker)...'
                }
                className={`w-full pl-10 pr-20 py-2.5 rounded-xl text-sm border transition-all ${
                  darkMode
                    ? 'bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-blue-500'
                    : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                }`}
                aria-label={lang === 'es' ? 'Buscar competencias técnicas' : 'Search technical skills'}
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                    title={lang === 'es' ? 'Limpiar búsqueda' : 'Clear search'}
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <kbd
                    className={`px-1.5 py-0.5 text-[11px] font-mono rounded border ${
                      darkMode
                        ? 'bg-slate-900 border-slate-700 text-slate-400'
                        : 'bg-slate-100 border-slate-300 text-slate-500'
                    }`}
                  >
                    /
                  </kbd>
                )}
              </div>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="lg:col-span-7 flex flex-wrap items-center gap-1.5">
              <span
                className={`text-xs font-mono mr-1 ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {lang === 'es' ? 'Sugerencias:' : 'Quick picks:'}
              </span>
              {quickSuggestions.map((item) => {
                const isSelected = searchQuery.toLowerCase() === item.toLowerCase();
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery(isSelected ? '' : item);
                    }}
                    className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600'
                        : darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-blue-500'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-blue-400'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Tabs with Item Counts */}
          <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-1.5" role="tablist">
              {CATEGORY_META.map((cat) => {
                const Icon = cat.icon;
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      active
                        ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                        : darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label[lang]}</span>
                    <span
                      className={`font-mono text-[11px] px-1.5 py-0.2 rounded-full ${
                        active
                          ? 'bg-white/20 text-white'
                          : darkMode
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {categoryCounts[cat.id] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Status Counter + Undo / Reset */}
            <div className="flex items-center gap-3 text-xs">
              <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                {lang === 'es' ? 'Mostrando' : 'Showing'}{' '}
                <strong className={darkMode ? 'text-white' : 'text-slate-900'}>
                  {filteredSkills.length}
                </strong>{' '}
                {lang === 'es' ? 'de' : 'of'} {TECHNICAL_SKILLS.length}
              </span>

              {(selectedCategory !== 'all' || searchQuery.trim() !== '') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'es' ? 'Restablecer' : 'Reset'}</span>
                </button>
              )}

              {previousFilterSnapshot &&
                selectedCategory === 'all' &&
                searchQuery.trim() === '' && (
                  <button
                    type="button"
                    onClick={handleUndoReset}
                    className="inline-flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>
                      {lang === 'es' ? 'Deshacer restablecimiento' : 'Undo reset'}
                    </span>
                  </button>
                )}
            </div>
          </div>
        </div>

        {/* Constructive Empty State with Suggestions */}
        {filteredSkills.length === 0 && errorDiagnosis && (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-2xl p-6 sm:p-8 border-2 border-dashed mb-8 ${
              darkMode
                ? 'bg-amber-950/20 border-amber-500/40 text-slate-100'
                : 'bg-amber-50/70 border-amber-300 text-slate-900'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-bold text-lg">
                    {lang === 'es'
                      ? `Sin coincidencias exactas para "${searchQuery}"`
                      : `No exact matches for "${searchQuery}"`}
                  </h3>
                  <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold">
                    {lang === 'es' ? 'Sugerencia inteligente' : 'Smart suggestion'}
                  </span>
                </div>

                <p
                  className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {errorDiagnosis.reason}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {errorDiagnosis.suggestion && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('all');
                        setSearchQuery(errorDiagnosis.suggestion);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>
                        {lang === 'es'
                          ? `Ver competencia relacionada: "${errorDiagnosis.suggestion}"`
                          : `View related skill: "${errorDiagnosis.suggestion}"`}
                      </span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                      darkMode
                        ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                        : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>
                      {lang === 'es'
                        ? 'Restablecer todos los filtros'
                        : 'Reset all filters'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Display: Detailed Cards vs Compact Matrix */}
        {filteredSkills.length > 0 && viewMode === 'cards' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className={`rounded-2xl p-5 border transition-all flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/75 border-slate-800 hover:border-blue-500/50'
                    : 'bg-white border-slate-200/90 hover:border-blue-400 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 block">
                        {skill.categoryLabel[lang]}
                      </span>
                      <h3 className="font-display font-bold text-lg leading-snug mt-0.5">
                        {skill.name}
                      </h3>
                    </div>

                    {skill.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        Core
                      </span>
                    )}
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {skill.context[lang]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span
                    className={`font-mono font-medium ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {skill.level[lang]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredSkills.length > 0 && viewMode === 'compact' && (
          <div
            className={`rounded-2xl p-5 border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex flex-wrap gap-2.5">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs sm:text-sm ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-slate-200'
                      : 'bg-white border-slate-200 text-slate-800 shadow-2xs'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-xs font-mono opacity-60">
                    ({skill.categoryLabel[lang]})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
