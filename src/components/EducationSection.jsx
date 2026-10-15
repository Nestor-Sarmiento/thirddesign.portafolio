import React from 'react';
import {
  GraduationCap,
  Award,
  Globe,
  CheckCircle2,
  Clock,
  HelpCircle,
  MapPin,
} from 'lucide-react';
import GlossaryTerm from './GlossaryTerm';
import { RECRUITER_FAQS } from '../data/portfolioData';

export default function EducationSection({
  education,
  certifications,
  spokenLanguages,
  lang,
  darkMode,
}) {
  const faqs = RECRUITER_FAQS[lang] || RECRUITER_FAQS.es;

  return (
    <section
      id="educacion"
      className={`py-16 sm:py-20 border-t ${
        darkMode
          ? 'border-slate-800/80 bg-slate-900/40'
          : 'border-slate-200/80 bg-slate-50/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400">
              04 · {lang === 'es' ? 'Formación y Certificaciones' : 'Education & Certifications'}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
            {lang === 'es'
              ? 'Educación, Certificaciones e Idiomas'
              : 'Education, Certifications & Languages'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Academic Education Column */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="font-display font-bold text-lg flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <span>{lang === 'es' ? 'Educación Académica' : 'Academic Education'}</span>
            </h3>

            {education.map((edu) => (
              <div
                key={edu.id}
                className={`rounded-2xl p-6 border transition-all ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200/90 shadow-2xs'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400">
                    {edu.period}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      edu.status.includes('curso') || edu.status.includes('Progress')
                        ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400'
                        : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {edu.status.includes('curso') || edu.status.includes('Progress') ? (
                      <Clock className="w-3.5 h-3.5" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    )}
                    {edu.status}
                  </span>
                </div>

                <h4 className="font-display font-bold text-xl mb-1">{edu.degree}</h4>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.institution}</span>
                </p>

                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {edu.description}
                </p>

                {edu.academicProgress && (
                  <div
                    className={`mb-4 p-3.5 rounded-xl border ${
                      darkMode
                        ? 'bg-slate-950/80 border-slate-800'
                        : 'bg-blue-50/60 border-blue-200/70'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className="text-blue-600 dark:text-blue-400">
                        {lang === 'es'
                          ? `Avance de Carrera: Semestre ${edu.academicProgress.currentSemester} de ${edu.academicProgress.totalCareerSemesters}`
                          : `Degree Progress: Semester ${edu.academicProgress.currentSemester} of ${edu.academicProgress.totalCareerSemesters}`}
                      </span>
                      <span className="font-mono">
                        {edu.academicProgress.percentage}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden mb-1.5 ${
                        darkMode ? 'bg-slate-800' : 'bg-white'
                      }`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
                        style={{ width: `${edu.academicProgress.percentage}%` }}
                      />
                    </div>
                    <p className="text-[11px] font-mono opacity-80">
                      {edu.academicProgress.levelingNote}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Spoken Languages Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-500" />
                <span>
                  {lang === 'es' ? 'Certificaciones de Idioma' : 'Language Certifications'} (
                  <GlossaryTerm termKey="CEC-EPN" lang={lang} darkMode={darkMode}>
                    CEC-EPN
                  </GlossaryTerm>
                  )
                </span>
              </h3>

              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`rounded-2xl p-5 border ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-display font-bold text-base sm:text-lg">
                      {cert.title}
                    </h4>
                    <span
                      className={`shrink-0 inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        cert.badgeType === 'in-progress'
                          ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400'
                          : 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      }`}
                    >
                      {cert.badgeType === 'in-progress' ? (
                        <Clock className="w-3.5 h-3.5" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      )}
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2">
                    {cert.issuer}
                  </p>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Spoken Languages Progress */}
            <div
              className={`rounded-2xl p-6 border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200/90 shadow-2xs'
              }`}
            >
              <h3 className="font-display font-bold text-base sm:text-lg flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-emerald-500" />
                <span>{lang === 'es' ? 'Dominio de Idiomas' : 'Spoken Languages'}</span>
              </h3>

              <div className="space-y-4">
                {spokenLanguages.map((l) => (
                  <div key={l.name}>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-bold">{l.name}</span>
                      <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold">
                        {l.cefr}
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden mb-1.5 ${
                        darkMode ? 'bg-slate-800' : 'bg-slate-100'
                      }`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
                        style={{ width: `${l.percentage}%` }}
                      />
                    </div>
                    <p
                      className={`text-xs ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {l.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ for Recruiters */}
        <div
          className={`mt-10 rounded-2xl p-6 sm:p-7 border ${
            darkMode
              ? 'bg-slate-900/80 border-slate-800'
              : 'bg-white border-slate-200/90 shadow-2xs'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            <h3 className="font-display font-bold text-lg">
              {lang === 'es'
                ? 'Preguntas Frecuentes para Reclutadores y Colaboradores'
                : 'Frequently Asked Questions for Recruiters & Collaborators'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border ${
                  darkMode
                    ? 'bg-slate-950/60 border-slate-800'
                    : 'bg-slate-50/80 border-slate-200/80'
                }`}
              >
                <h4 className="font-display font-bold text-sm mb-2 text-blue-600 dark:text-blue-400">
                  {item.q}
                </h4>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
