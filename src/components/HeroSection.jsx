import React from 'react';
import {
  Mail,
  Phone,
  Copy,
  Check,
  FileText,
  Download,
  ExternalLink,
  MapPin,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Cpu,
  Database,
  MessageCircle,
} from 'lucide-react';
import GlossaryTerm from './GlossaryTerm';

export default function HeroSection({
  data,
  lang,
  darkMode,
  copiedField,
  onCopy,
  onOpenCvModal,
}) {
  const { personal, metrics } = data;

  return (
    <section
      id="inicio"
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-20 overflow-hidden"
    >
      {/* Subtle Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          className={`mx-auto aspect-[1155/678] w-[68rem] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-emerald-400/15 ${
            darkMode ? 'opacity-40' : 'opacity-70'
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: High-Readability Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{personal.availability}</span>
              <span className="opacity-50">•</span>
              <span className="inline-flex items-center gap-1 opacity-85">
                <MapPin className="w-3.5 h-3.5" />
                {personal.location}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
                {personal.role}
              </p>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12]">
                {personal.fullName}
              </h1>
              <p
                className={`text-lg sm:text-xl font-medium leading-relaxed max-w-2xl ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                {personal.headline}
              </p>
            </div>

            {/* High-Legibility Summary Paragraph */}
            <p
              className={`text-base sm:text-[1.0625rem] leading-[1.8] max-w-[66ch] ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {lang === 'es' ? (
                <>
                  Estudiante de <strong>7.º semestre (de 9)</strong> de{' '}
                  <strong>Ingeniería en Software</strong> en la{' '}
                  <strong>Escuela Politécnica Nacional</strong>. Actualmente en{' '}
                  <strong>Arellano Store</strong> desarrollando automatizaciones omnicanal
                  (Meta y TikTok) con{' '}
                  <GlossaryTerm termKey="n8n" lang={lang} darkMode={darkMode}>
                    n8n
                  </GlossaryTerm>
                  ,{' '}
                  <GlossaryTerm termKey="Chatwoot" lang={lang} darkMode={darkMode}>
                    Chatwoot y Evolution API
                  </GlossaryTerm>
                  , integración con <strong>ERP</strong> (inventario y proformas),
                  seguridad ante{' '}
                  <GlossaryTerm termKey="PromptInjection" lang={lang} darkMode={darkMode}>
                    Prompt Injection
                  </GlossaryTerm>
                  , <strong>Google AI Studio / Gemini</strong> (
                  <GlossaryTerm termKey="RAG" lang={lang} darkMode={darkMode}>
                    RAG
                  </GlossaryTerm>
                  ) y gestión de servidores <strong>Linux VPS</strong> con{' '}
                  <strong>Docker</strong>,{' '}
                  <GlossaryTerm termKey="Traefik" lang={lang} darkMode={darkMode}>
                    Traefik
                  </GlossaryTerm>
                  , <strong>PostgreSQL</strong>, <strong>Redis</strong> y{' '}
                  <strong>WordPress</strong>. Experiencia en desarrollo con{' '}
                  <GlossaryTerm termKey="FastAPI" lang={lang} darkMode={darkMode}>
                    FastAPI
                  </GlossaryTerm>
                  , <strong>NestJS (TypeScript)</strong>, <strong>Spring Boot</strong> y{' '}
                  <strong>React + Vite + Tailwind CSS</strong>.
                </>
              ) : (
                personal.summary
              )}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#experiencia"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 hover:shadow-lg transition-all"
              >
                <span>
                  {lang === 'es' ? 'Explorar Experiencia y Proyectos' : 'Explore Experience & Solutions'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm sm:text-base border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-slate-900 border-slate-700 text-slate-100 hover:bg-slate-800 hover:border-slate-600'
                    : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-2xs'
                }`}
              >
                <FileText className="w-4 h-4 text-blue-500" />
                <span>{lang === 'es' ? 'Vista Previa del CV' : 'Preview Official CV'}</span>
              </button>

              <a
                href={personal.cvPdfUrl}
                download="CV_Nestor_Sarmiento.pdf"
                className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm border transition-all ${
                  darkMode
                    ? 'border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
                title={lang === 'es' ? 'Descargar archivo PDF directamente' : 'Download PDF file directly'}
              >
                <Download className="w-4 h-4 text-emerald-500" />
                <span>PDF</span>
              </a>
            </div>

            {/* Quick Contact & Verified Profiles Bar */}
            <div
              className={`rounded-2xl p-4 border ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800'
                  : 'bg-slate-50/90 border-slate-200/90'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span
                  className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {lang === 'es'
                    ? '⚡ Contacto Rápido & Perfiles Verificados (1 Clic)'
                    : '⚡ Quick Contact & Verified Profiles (1-Click)'}
                </span>
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                  {lang === 'es' ? 'Atajo: tecla C = copiar email' : 'Shortcut: press C = copy email'}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* 1-Click Copy Email */}
                <button
                  type="button"
                  onClick={() => onCopy(personal.email, 'email')}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                    copiedField === 'email'
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : darkMode
                      ? 'bg-slate-950 border-slate-700 text-slate-200 hover:border-blue-500'
                      : 'bg-white border-slate-300 text-slate-800 hover:border-blue-500 shadow-2xs'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="font-mono">{personal.email}</span>
                  {copiedField === 'email' ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      {lang === 'es' ? '¡Copiado!' : 'Copied!'}
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                  )}
                </button>

                {/* 1-Click Copy Phone */}
                <button
                  type="button"
                  onClick={() => onCopy('+593961284734', 'phone')}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                    copiedField === 'phone'
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : darkMode
                      ? 'bg-slate-950 border-slate-700 text-slate-200 hover:border-blue-500'
                      : 'bg-white border-slate-300 text-slate-800 hover:border-blue-500 shadow-2xs'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="font-mono">+593961284734</span>
                  {copiedField === 'phone' ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      {lang === 'es' ? '¡Copiado!' : 'Copied!'}
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                  )}
                </button>

                {/* LinkedIn External Link */}
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                    darkMode
                      ? 'bg-slate-950 border-slate-700 text-slate-200 hover:border-blue-500'
                      : 'bg-white border-slate-300 text-slate-800 hover:border-blue-500 shadow-2xs'
                  }`}
                >
                  <span>LinkedIn: {personal.linkedinLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
                </a>

                {/* GitHub External Link */}
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                    darkMode
                      ? 'bg-slate-950 border-slate-700 text-slate-200 hover:border-blue-500'
                      : 'bg-white border-slate-300 text-slate-800 hover:border-blue-500 shadow-2xs'
                  }`}
                >
                  <span>GitHub: {personal.githubLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Credential Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-3xl p-6 sm:p-7 border shadow-xl transition-all ${
                darkMode
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800 shadow-black/50'
                  : 'bg-gradient-to-b from-white to-slate-50/90 border-slate-200/90 shadow-slate-900/5'
              }`}
            >
              {/* Top Credential Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {lang === 'es' ? 'Credencial Profesional' : 'Developer Credential'}
                  </span>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                  EPN · 7.º / 9 Sem.
                </span>
              </div>

              {/* Profile Photo + Core Identity */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border-2 border-blue-600/30 shadow-md shrink-0 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.fullName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="text-center sm:text-left space-y-2">
                  <h2 className="font-display font-bold text-xl leading-tight">
                    Néstor David Sarmiento C.
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400">
                    {lang === 'es'
                      ? 'Ing. en Software · Backend, Full Stack & IA'
                      : 'Software Eng. · Backend, Full Stack & AI'}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {lang === 'es'
                      ? 'Automatización omnicanal (n8n, Chatwoot, Evolution API), desarrollo Backend/Full Stack (FastAPI, NestJS, Spring Boot, React + Vite + Tailwind) e infraestructura Linux VPS (Docker, Traefik, PostgreSQL, Redis).'
                      : 'Omnichannel automation (n8n, Chatwoot, Evolution API), Backend/Full Stack (FastAPI, NestJS, Spring Boot, React + Vite + Tailwind), and Linux VPS infrastructure (Docker, Traefik, PostgreSQL, Redis).'}
                  </p>

                  {/* Core Pillar Tags */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-1">
                    {[
                      'Python · FastAPI',
                      'TS · NestJS',
                      'React · Vite · Tailwind',
                      'n8n · Chatwoot',
                      'Docker · Traefik · VPS',
                    ].map((pill) => (
                      <span
                        key={pill}
                        className={`font-mono text-[11px] px-2.5 py-0.5 rounded-md border font-medium ${
                          darkMode
                            ? 'bg-slate-800/90 border-slate-700 text-slate-200'
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Domain Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
                <div
                  className={`p-3 rounded-xl border ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800'
                      : 'bg-white border-slate-200/80'
                  }`}
                >
                  <Terminal className="w-4 h-4 text-blue-500 mb-1.5" />
                  <div className="font-semibold text-xs">Backend & Full Stack</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    FastAPI, NestJS, Spring Boot, React + Tailwind
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800'
                      : 'bg-white border-slate-200/80'
                  }`}
                >
                  <Cpu className="w-4 h-4 text-indigo-500 mb-1.5" />
                  <div className="font-semibold text-xs">
                    {lang === 'es' ? 'IA & Omnicanalidad' : 'AI & Omnichannel'}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    n8n, Chatwoot, Evolution API, Gemini, ERP
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border ${
                    darkMode
                      ? 'bg-slate-900/80 border-slate-800'
                      : 'bg-white border-slate-200/80'
                  }`}
                >
                  <Database className="w-4 h-4 text-emerald-500 mb-1.5" />
                  <div className="font-semibold text-xs">VPS, DevOps & Data</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Docker, Traefik, PostgreSQL, Redis, Linux
                  </div>
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                {metrics.map((m) => (
                  <div
                    key={m.id}
                    className={`p-2.5 rounded-xl ${
                      darkMode ? 'bg-slate-900/50' : 'bg-slate-100/70'
                    }`}
                  >
                    <div className="font-display font-extrabold text-lg sm:text-xl text-blue-600 dark:text-blue-400 leading-none">
                      {m.value}
                    </div>
                    <div className="font-semibold text-xs mt-1">{m.label}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
