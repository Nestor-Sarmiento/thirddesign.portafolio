import React, { useState, useEffect } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Save,
} from 'lucide-react';

const EMAIL_DOMAIN_FIXES = {
  'gmial.com': 'gmail.com',
  'gamil.com': 'gmail.com',
  'gmail.co': 'gmail.com',
  'gmai.com': 'gmail.com',
  'hotmial.com': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'outlok.com': 'outlook.com',
  'outllok.com': 'outlook.com',
  'yaho.com': 'yahoo.com',
};

const STORAGE_KEY = 'nestor_portfolio_contact_draft_v1';

export default function ContactSection({
  personal,
  lang,
  darkMode,
  copiedField,
  onCopy,
}) {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore storage errors
    }
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  });

  const [touched, setTouched] = useState({});
  const [deletedDraftSnapshot, setDeletedDraftSnapshot] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null); // 'sending' | 'sent' | null
  const [draftSavedAt, setDraftSavedAt] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      if (formData.name || formData.email || formData.message) {
        setDraftSavedAt(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    } catch {
      // ignore
    }
  }, [formData]);

  const diagnoseEmail = (emailValue) => {
    const trimmed = emailValue.trim();
    if (!trimmed) {
      return {
        valid: false,
        message:
          lang === 'es'
            ? 'Por favor ingresa tu correo electrónico para que Néstor pueda responderte.'
            : 'Please enter your email address so Néstor can reply to you.',
        suggestion: null,
      };
    }

    if (!trimmed.includes('@')) {
      return {
        valid: false,
        message:
          lang === 'es'
            ? `El correo "${trimmed}" no contiene el símbolo "@". Ejemplo válido: nombre@empresa.com`
            : `The email "${trimmed}" is missing the "@" symbol. Valid example: name@company.com`,
        suggestion: `${trimmed}@gmail.com`,
      };
    }

    const [localPart, domainPart] = trimmed.split('@');
    if (!localPart || !domainPart || !domainPart.includes('.')) {
      return {
        valid: false,
        message:
          lang === 'es'
            ? 'El dominio del correo parece incompleto. Asegúrate de incluir el dominio (ej. @empresa.com).'
            : 'The email domain looks incomplete. Make sure to include a valid domain (e.g. @company.com).',
        suggestion: localPart ? `${localPart}@gmail.com` : null,
      };
    }

    const lowerDomain = domainPart.toLowerCase();
    if (EMAIL_DOMAIN_FIXES[lowerDomain]) {
      const fixedEmail = `${localPart}@${EMAIL_DOMAIN_FIXES[lowerDomain]}`;
      return {
        valid: false,
        isTypoWarning: true,
        message:
          lang === 'es'
            ? `Detectamos un posible error de tipeo en el dominio "@${domainPart}".`
            : `We detected a possible typo in the domain "@${domainPart}".`,
        suggestion: fixedEmail,
      };
    }

    return { valid: true, message: null, suggestion: null };
  };

  const emailDiagnosis = diagnoseEmail(formData.email);
  const nameInvalid = touched.name && formData.name.trim().length < 2;
  const messageInvalid = touched.message && formData.message.trim().length < 10;

  const subjectPresets =
    lang === 'es'
      ? [
          {
            label: 'Automatización IA, n8n, Chatwoot & ERP',
            subject: 'Proyecto de Automatización Omnicanal (n8n / Chatwoot / IA / ERP)',
            body: 'Hola Néstor, vimos tu experiencia en Arellano Store y Vibratio EC integrando n8n, Chatwoot, Evolution API, Meta/TikTok y endpoints de ERP. Nos gustaría conversar sobre...',
          },
          {
            label: 'Vacante Backend / Infraestructura (FastAPI / NestJS / Docker)',
            subject: 'Oportunidad Desarrollo Backend & VPS (FastAPI / NestJS / Docker)',
            body: 'Hola Néstor, revisé tu portafolio y tu manejo de Python (FastAPI), TypeScript (NestJS) y servidores Linux VPS con Docker y Traefik...',
          },
          {
            label: 'Rol Full Stack (React + Vite + Tailwind / Backend)',
            subject: 'Oportunidad Ingeniería de Software Full Stack',
            body: 'Hola Néstor, vimos tu perfil de 7.º semestre en la EPN y tu experiencia con React, Vite, Tailwind CSS y backends tipados...',
          },
        ]
      : [
          {
            label: 'AI Automation, n8n, Chatwoot & ERP',
            subject: 'Omnichannel Automation & AI Project (n8n / Chatwoot / ERP)',
            body: 'Hi Néstor, we saw your experience at Arellano Store and Vibratio EC integrating n8n, Chatwoot, Evolution API, Meta/TikTok, and ERP endpoints. We would love to discuss...',
          },
          {
            label: 'Backend / Infrastructure Role (FastAPI / NestJS / Docker)',
            subject: 'Backend & VPS Engineering Opportunity (FastAPI / NestJS / Docker)',
            body: 'Hi Néstor, I reviewed your portfolio and experience with Python (FastAPI), TypeScript (NestJS), and Linux VPS with Docker and Traefik...',
          },
          {
            label: 'Full Stack Role (React + Vite + Tailwind / Backend)',
            subject: 'Full Stack Software Engineering Opportunity',
            body: 'Hi Néstor, we saw your 7th-semester EPN Software Engineering profile and experience with React, Vite, Tailwind CSS, and typed backends...',
          },
        ];

  const handleClearForm = () => {
    setDeletedDraftSnapshot({ ...formData });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTouched({});
    setSubmitStatus(null);
  };

  const handleUndoClear = () => {
    if (!deletedDraftSnapshot) return;
    setFormData(deletedDraftSnapshot);
    setDeletedDraftSnapshot(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (
      formData.name.trim().length < 2 ||
      !emailDiagnosis.valid ||
      formData.message.trim().length < 10
    ) {
      return;
    }

    setSubmitStatus('sending');
    setTimeout(() => {
      setSubmitStatus('sent');
    }, 500);
  };

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    formData.subject || 'Contacto desde Portafolio Digital'
  )}&body=${encodeURIComponent(
    `Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  return (
    <section
      id="contacto"
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
              05 · {lang === 'es' ? 'Contacto Directo' : 'Direct Contact'}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight">
            {lang === 'es'
              ? '¿Listo para conversar sobre tu próximo proyecto o vacante?'
              : 'Ready to discuss your next project or engineering role?'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`rounded-2xl p-6 border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200/90 shadow-2xs'
              }`}
            >
              <h3 className="font-display font-bold text-lg mb-2">
                {lang === 'es' ? 'Canales de Comunicación Directa' : 'Direct Communication Channels'}
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed mb-5 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                {lang === 'es'
                  ? 'Copia los datos verificados en un clic o abre una conversación directa por WhatsApp, correo o LinkedIn.'
                  : 'Copy verified contact details in one click or start a direct conversation via WhatsApp, email, or LinkedIn.'}
              </p>

              <div className="space-y-3">
                {/* Email Card */}
                <div
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-2 ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800'
                      : 'bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono uppercase text-slate-400">
                      Email Oficial
                    </div>
                    <div className="font-mono text-sm font-semibold truncate">
                      {personal.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onCopy(personal.email, 'contact-email')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer shrink-0 ${
                      copiedField === 'contact-email'
                        ? 'bg-emerald-600 text-white border-emerald-500'
                        : 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {copiedField === 'contact-email' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{lang === 'es' ? 'Copiado' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{lang === 'es' ? 'Copiar' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Phone / WhatsApp Card */}
                <div
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-2 ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800'
                      : 'bg-slate-50 border-slate-200/80'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono uppercase text-slate-400">
                      {lang === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'}
                    </div>
                    <div className="font-mono text-sm font-semibold">
                      +593961284734{' '}
                      <span className="text-xs font-normal opacity-65">
                        ({personal.phone})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => onCopy('+593961284734', 'contact-phone')}
                      className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        copiedField === 'contact-phone'
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : darkMode
                          ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                          : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      {copiedField === 'contact-phone' ? (
                        <Check className="w-3.5 h-3.5" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{lang === 'es' ? 'Copiar' : 'Copy'}</span>
                    </button>

                    <a
                      href={personal.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* LinkedIn & GitHub */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={personal.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 hover:border-blue-500 text-slate-200'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-500 text-slate-800'
                    }`}
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                  </a>
                  <a
                    href={personal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 hover:border-blue-500 text-slate-200'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-500 text-slate-800'
                    }`}
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl p-6 sm:p-8 border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200/90 shadow-2xs'
              }`}
            >
              {/* Top Form Status Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="font-display font-bold text-lg">
                    {lang === 'es' ? 'Redactar Mensaje Rápido' : 'Compose Quick Message'}
                  </h3>
                  {draftSavedAt && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                      <Save className="w-3 h-3" />
                      {lang === 'es'
                        ? `Borrador autoguardado (${draftSavedAt})`
                        : `Draft auto-saved (${draftSavedAt})`}
                    </span>
                  )}
                </div>
              </div>

              {/* Undo Banner if form was cleared */}
              {deletedDraftSnapshot && (
                <div
                  role="status"
                  className={`mb-5 p-3.5 rounded-xl border flex items-center justify-between gap-3 text-xs sm:text-sm ${
                    darkMode
                      ? 'bg-indigo-950/50 border-indigo-700 text-indigo-200'
                      : 'bg-indigo-50 border-indigo-200 text-indigo-950'
                  }`}
                >
                  <span>
                    {lang === 'es'
                      ? 'Formulario limpiado. ¿Deseas recuperar el texto anterior?'
                      : 'Form cleared. Would you like to restore your previous text?'}
                  </span>
                  <button
                    type="button"
                    onClick={handleUndoClear}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer shrink-0"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{lang === 'es' ? 'Deshacer' : 'Undo'}</span>
                  </button>
                </div>
              )}

              {/* Quick Subject Templates */}
              <div className="mb-5">
                <span
                  className={`block text-xs font-mono mb-2 ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {lang === 'es'
                    ? 'Plantillas rápidas (1 clic para autocompletar):'
                    : 'Quick templates (1-click autofill):'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {subjectPresets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          subject: preset.subject,
                          message: prev.message || preset.body,
                        }))
                      }
                      className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                        formData.subject === preset.subject
                          ? 'bg-blue-600 text-white border-blue-600'
                          : darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-blue-500'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-400'
                      }`}
                    >
                      + {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs sm:text-sm font-semibold mb-1.5"
                    >
                      {lang === 'es' ? 'Tu Nombre o Empresa *' : 'Your Name or Company *'}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder={
                        lang === 'es' ? 'Ej. María Gómez · Tech Recruiter' : 'e.g. Jane Doe · Tech Recruiter'
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-all ${
                        nameInvalid
                          ? 'border-rose-500 bg-rose-500/5'
                          : darkMode
                          ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-blue-500'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-blue-600'
                      }`}
                    />
                    {nameInvalid && (
                      <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {lang === 'es'
                            ? 'Ingresa al menos 2 caracteres para identificar tu mensaje.'
                            : 'Please enter at least 2 characters to identify your message.'}
                        </span>
                      </p>
                    )}
                  </div>

                  {/* Email Field with Smart Typo Recovery */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs sm:text-sm font-semibold mb-1.5"
                    >
                      {lang === 'es' ? 'Tu Correo Electrónico *' : 'Your Email Address *'}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="nombre@empresa.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-all ${
                        touched.email && !emailDiagnosis.valid
                          ? 'border-amber-500 bg-amber-500/5'
                          : darkMode
                          ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-blue-500'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-blue-600'
                      }`}
                    />

                    {touched.email && !emailDiagnosis.valid && (
                      <div
                        role="alert"
                        className={`mt-2 p-2.5 rounded-xl border text-xs space-y-1.5 ${
                          darkMode
                            ? 'bg-amber-950/40 border-amber-500/50 text-amber-200'
                            : 'bg-amber-50 border-amber-300 text-amber-950'
                        }`}
                      >
                        <div className="flex items-start gap-1.5">
                          <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{emailDiagnosis.message}</span>
                        </div>
                        {emailDiagnosis.suggestion && (
                          <button
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                email: emailDiagnosis.suggestion,
                              }))
                            }
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors cursor-pointer"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>
                              {lang === 'es'
                                ? `¿Quisiste decir ${emailDiagnosis.suggestion}? (Corregir en 1 clic)`
                                : `Did you mean ${emailDiagnosis.suggestion}? (1-click fix)`}
                            </span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs sm:text-sm font-semibold mb-1.5"
                  >
                    {lang === 'es' ? 'Asunto' : 'Subject'}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, subject: e.target.value }))
                    }
                    placeholder={
                      lang === 'es'
                        ? 'Ej. Oportunidad Backend Python / FastAPI'
                        : 'e.g. Backend Python / FastAPI Opportunity'
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-all ${
                      darkMode
                        ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-blue-500'
                        : 'bg-white border-slate-300 text-slate-900 focus:border-blue-600'
                    }`}
                  />
                </div>

                {/* Message Textarea with Character Counter */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs sm:text-sm font-semibold"
                    >
                      {lang === 'es' ? 'Mensaje *' : 'Message *'}
                    </label>
                    <span
                      className={`font-mono text-xs ${
                        formData.message.length >= 10
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-400'
                      }`}
                    >
                      {formData.message.length} / 600
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    rows={4}
                    maxLength={600}
                    value={formData.message}
                    onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder={
                      lang === 'es'
                        ? 'Cuéntale a Néstor sobre el proyecto, rol o consulta técnica...'
                        : 'Tell Néstor about the role, project, or technical inquiry...'
                    }
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm border transition-all leading-relaxed ${
                      messageInvalid
                        ? 'border-rose-500 bg-rose-500/5'
                        : darkMode
                        ? 'bg-slate-950 border-slate-700 text-slate-100 focus:border-blue-500'
                        : 'bg-white border-slate-300 text-slate-900 focus:border-blue-600'
                    }`}
                  />
                  {messageInvalid && (
                    <p className="mt-1.5 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {lang === 'es'
                          ? `El mensaje es muy breve (${formData.message.trim().length}/10 caracteres mínimos). Agrega un poco más de contexto.`
                          : `Message is too short (${formData.message.trim().length}/10 minimum characters). Please add a bit more context.`}
                      </span>
                    </p>
                  )}
                </div>

                {/* Actions Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all cursor-pointer disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>
                        {submitStatus === 'sending'
                          ? lang === 'es'
                            ? 'Preparando envío...'
                            : 'Preparing message...'
                          : lang === 'es'
                          ? 'Validar y Preparar Envío'
                          : 'Validate & Prepare Message'}
                      </span>
                    </button>

                    {(formData.name ||
                      formData.email ||
                      formData.subject ||
                      formData.message) && (
                      <button
                        type="button"
                        onClick={handleClearForm}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                          darkMode
                            ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                            : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>{lang === 'es' ? 'Limpiar' : 'Clear'}</span>
                      </button>
                    )}
                  </div>

                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {personal.statusDetail}
                  </span>
                </div>

                {/* Submission Confirmation State */}
                {submitStatus === 'sent' && (
                  <div
                    role="status"
                    className={`mt-4 p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      darkMode
                        ? 'bg-emerald-950/40 border-emerald-700/70 text-emerald-200'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-950'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="block font-semibold">
                          {lang === 'es'
                            ? '¡Mensaje validado y listo para enviar!'
                            : 'Message validated and ready to send!'}
                        </strong>
                        <span>
                          {lang === 'es'
                            ? 'Puedes abrirlo directamente en tu cliente de correo o enviar por WhatsApp:'
                            : 'Open directly in your email client or send via WhatsApp:'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>{lang === 'es' ? 'Abrir Correo' : 'Open Mail App'}</span>
                      </a>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
