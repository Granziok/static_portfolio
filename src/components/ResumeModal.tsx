import React, { useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, EDUCATION, LANGUAGES, SOFT_SKILLS } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="resume-view-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
            <span className="text-sm font-bold text-white tracking-tight font-mono">
              CV Ejecutivo • {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
              title="Imprimir o guardar en PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Styled Resume Document */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900 text-slate-200 space-y-8 print:bg-white print:text-black print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base text-teal-400 font-semibold print:text-slate-800 mt-1 font-mono">
                  {PERSONAL_INFO.tagline}
                </p>
                <p className="text-xs text-slate-400 print:text-slate-600 mt-2 max-w-2xl leading-relaxed">
                  Estudiante de Analista en Sistemas y Tecnicatura en Sonido, con interés en incorporarme a un equipo de trabajo para desarrollar experiencia en entornos reales. Me destaco por mi compromiso, responsabilidad y disposición para aprender, buscando aplicar mis conocimientos y seguir creciendo tanto a nivel técnico como profesional.
                </p>
              </div>

              {/* Contact Pill Column */}
              <div className="text-xs font-mono text-slate-300 print:text-black space-y-1.5 shrink-0 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 print:bg-white print:border-black">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <span>github.com/Granziok</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Language Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Educación */}
            <div>
              <h2 className="text-sm font-bold text-white print:text-black uppercase tracking-wider font-mono mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>Educación</span>
              </h2>

              <div className="space-y-4 text-xs">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="space-y-1">
                    <div className="font-bold text-slate-100 print:text-black text-sm">
                      {edu.degree}
                    </div>
                    <div className="text-teal-400 print:text-slate-700 font-mono font-medium">
                      {edu.institution} • {edu.period}
                    </div>
                    <p className="text-slate-400 print:text-slate-600 leading-relaxed text-[11px]">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Idioma & Referencias */}
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-bold text-white print:text-black uppercase tracking-wider font-mono mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Idiomas</span>
                </h2>

                <div className="space-y-2 text-xs">
                  <div className="font-bold text-slate-200 print:text-black">
                    Inglés – Nivel B2 (Intermedio)
                  </div>
                  <ul className="text-[11px] text-slate-400 print:text-slate-600 space-y-1 pl-3 list-disc">
                    <li>Comprensión de textos técnicos y manuales.</li>
                    <li>Lectura e interpretación de documentación en inglés.</li>
                    <li>Capacidad para seguir instrucciones escritas.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-white print:text-black uppercase tracking-wider font-mono mb-2 flex items-center gap-2 border-b border-slate-800 pb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Referencias</span>
                </h2>
                <p className="text-xs text-slate-400 print:text-slate-600">
                  Disponibles a petición.
                </p>
              </div>
            </div>
          </div>

          {/* Proyectos Destacados */}
          <div>
            <h2 className="text-sm font-bold text-white print:text-black uppercase tracking-wider font-mono mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Briefcase className="w-4 h-4 text-teal-400" />
              <span>Proyectos Destacados</span>
            </h2>

            <div className="space-y-5 text-xs">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 print:bg-white print:border-black space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-sm text-slate-100 print:text-black">
                      {proj.title}
                    </span>
                    <span className="font-mono text-[11px] text-teal-400 print:text-slate-700">
                      {proj.categoryLabel}
                    </span>
                  </div>

                  <p className="text-slate-300 print:text-slate-700 leading-relaxed text-[11px]">
                    {proj.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] pt-1">
                    <div>
                      <strong className="text-teal-300 print:text-black">Qué hice:</strong>
                      <ul className="list-disc pl-4 text-slate-400 print:text-slate-600 space-y-0.5 mt-0.5">
                        {proj.whatIDid.slice(0, 3).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong className="text-cyan-300 print:text-black">Qué apliqué:</strong>
                      <ul className="list-disc pl-4 text-slate-400 print:text-slate-600 space-y-0.5 mt-0.5">
                        {proj.whatIApplied.slice(0, 3).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades & Aptitudes */}
          <div>
            <h2 className="text-sm font-bold text-white print:text-black uppercase tracking-wider font-mono mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
              <span>Habilidades & Competencias</span>
            </h2>

            <div className="flex flex-wrap gap-2 text-xs">
              {SOFT_SKILLS.map((s, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-950 text-slate-300 border border-slate-800 font-mono text-[11px] print:border-black print:text-black"
                >
                  ✓ {s.title}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            Documento actualizado • Neuquén, Argentina
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Cerrar Ficha
          </button>
        </div>

      </div>
    </div>
  );
};
