import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageSquare, 
  MapPin, 
  Phone, 
  ExternalLink, 
  Github, 
  Linkedin,
  Clock,
  Sparkles,
  AlertCircle,
  Loader2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    category: 'Oportunidad Laboral / Propuesta de Empleo',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const categories = [
    'Oportunidad Laboral / Propuesta de Empleo',
    'Desarrollo Backend en Java / Spring Boot',
    'Proyecto de Visión Computacional / IA',
    'Optimización de Infraestructura & Sistemas',
    'Consulta General / Networking Profesional'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email.trim());
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Por favor complete todos los campos obligatorios.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Por favor ingrese un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);

    try {
      const recipientEmail = PERSONAL_INFO.email.trim();
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.name.trim(),
          Email: formData.email.trim(),
          Motivo: formData.category,
          Asunto: formData.subject.trim() || 'Sin asunto especificado',
          Mensaje: formData.message.trim(),
          _subject: `[Portafolio] ${formData.category}: ${formData.subject.trim() || formData.name.trim()}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'Error en la respuesta del servicio FormSubmit.');
      }
    } catch (err: any) {
      console.error('Error al enviar el formulario a FormSubmit:', err);
      setErrorMessage(
        'No se pudo conectar con el servicio de entrega automática. Puedes reintentar en unos momentos o comunicarte directamente por correo o WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`[Portafolio] ${formData.category}: ${formData.subject || formData.name}`);
    const body = encodeURIComponent(
      `Hola Santiago,\n\nMi nombre es ${formData.name} (${formData.email}).\n\nMotivo: ${formData.category}\n\nMensaje:\n${formData.message}\n\nSaludos cordiales.`
    );
    return `mailto:${PERSONAL_INFO.email.trim()}?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hola Santiago, me comunico desde tu portafolio profesional para conversar sobre una consulta técnica / oportunidad laboral.`
    );
    return `https://wa.me/5492996225217?text=${text}`;
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950/80">
      {/* Subtle Glow backdrop */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/60 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Contacto Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Conversemos
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            ¿Tenes una propuesta laboral, un proyecto backend o deseas coordinar una entrevista técnica? Completa el formulario o contactame por cualquiera de los canales directos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>Canales de Contacto Directo</span>
              </h3>

              {/* Email Block */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Correo Electrónico Principal:
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-slate-200 truncate select-all">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors shrink-0 ml-2"
                    title="Copiar email al portapapeles"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-teal-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-teal-400 font-mono pl-1 animate-in fade-in">
                    ✓ ¡Correo copiado al portapapeles!
                  </p>
                )}
              </div>

              {/* Location & Timezone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    <span>Ubicación</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {PERSONAL_INFO.location}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>Zona Horaria</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    GMT-3 (Argentina)
                  </div>
                </div>
              </div>

              {/* WhatsApp & Phone */}
              <div className="pt-2 border-t border-slate-800/80">
                <a
                  id="contact-whatsapp-link"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-800/50 text-emerald-300 transition-all hover:border-emerald-700 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/60 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-emerald-200">WhatsApp Directo</div>
                      <div className="text-[11px] text-emerald-400/80 font-mono">{PERSONAL_INFO.phone}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Professional Profile Links */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono block">
                  Enlaces a Redes Profesionales:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    id="contact-github-profile-link"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-2.5 transition-colors group"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <div className="text-left overflow-hidden">
                      <div className="text-xs font-bold text-slate-200 group-hover:text-white">GitHub</div>
                      <div className="text-[10px] font-mono text-slate-500 truncate">@Granziok</div>
                    </div>
                  </a>

                  <a
                    id="contact-linkedin-profile-link"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-2.5 transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <div className="text-left overflow-hidden">
                      <div className="text-xs font-bold text-slate-200 group-hover:text-sky-300">LinkedIn</div>
                      <div className="text-[10px] font-mono text-slate-500 truncate">santiago-olivera-dev</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Response Pledge */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>
                <strong>Compromiso de respuesta:</strong> Reviso mis mensajes a diario y respondo todas las consultas profesionales en un plazo menor a 24 horas hábiles.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Formulario de Consulta
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Detalla tu propuesta o consulta técnica para agilizar la respuesta.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-teal-400 bg-teal-950/80 px-2.5 py-1 rounded-full border border-teal-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                  <span>FormSubmit Directo</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-teal-950/80 text-teal-400 border border-teal-700/60 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xl font-bold text-white">
                      ¡Mensaje enviado con éxito!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Muchas gracias, <strong>{formData.name}</strong>. Tu consulta ha sido entregada directamente a mi casilla <strong className="text-teal-400 font-mono">{PERSONAL_INFO.email.trim()}</strong> mediante el servicio de FormSubmit. Te responderé en un plazo menor a 24 horas hábiles.
                    </p>
                  </div>

                  {/* Quick Action Options */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          subject: '',
                          category: 'Oportunidad Laboral / Propuesta de Empleo',
                          message: ''
                        });
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-teal-500/20"
                    >
                      Enviar otra consulta
                    </button>

                    <a
                      id="contact-send-email-client-btn"
                      href={getMailtoLink()}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors border border-slate-700"
                      title="Abrir una copia en tu cliente de correo predeterminado"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Abrir copia en tu correo</span>
                    </a>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 font-mono">
                    ✓ Transmisión completada sin inicio de sesión requerido • {PERSONAL_INFO.email.trim()}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* FormSubmit Config Fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800/80 text-rose-300 text-xs flex items-center justify-between gap-2 animate-in fade-in">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <a 
                        href={getMailtoLink()} 
                        className="underline text-rose-200 hover:text-white shrink-0 ml-2 font-mono text-[11px]"
                      >
                        Enviar por correo
                      </a>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300">
                        Nombre Completo <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Ing. Martín Gómez"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300">
                        Correo Electrónico <span className="text-teal-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu.correo@empresa.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Motivo / Categoría */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-category" className="block text-xs font-semibold text-slate-300">
                      Motivo de la Consulta
                    </label>
                    <select
                      id="contact-category"
                      name="category"
                      disabled={isSubmitting}
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors disabled:opacity-50"
                    >
                      {categories.map((c, i) => (
                        <option key={i} value={c} className="bg-slate-900 text-white">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Asunto específico */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300">
                      Asunto Específico
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ej. Entrevista técnica para Desarrollador Backend Java"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300">
                      Mensaje <span className="text-teal-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe los requerimientos del puesto o el alcance del proyecto..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Enviando mensaje a través de FormSubmit...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje Profesional</span>
                      </>
                    )}
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 font-mono pt-1">
                    <span>⚡ Envío directo vía FormSubmit.co</span>
                    <span>🔒 Sin registro ni login necesario</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
