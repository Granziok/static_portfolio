import React from 'react';
import { EDUCATION, LANGUAGES } from '../data/portfolioData';
import { 
  GraduationCap, 
  Languages, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  FileCheck2, 
  Download, 
  ExternalLink,
  Award
} from 'lucide-react';

interface EducationSectionProps {
  onOpenResume: () => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="educacion" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formación & Idiomas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Trayectoria Académica & Competencia Lingüística
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Formación multidisciplinaria en desarrollo de sistemas, procesamiento sonoro y metodología científica de laboratorio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2 mb-6">
              <BookOpen className="w-4 h-4 text-teal-400" />
              <span>Estudios Cursados & en Curso</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {EDUCATION.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-teal-400 group-hover:scale-110 transition-transform"></div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-teal-300 bg-teal-950/60 px-2.5 py-0.5 rounded border border-teal-800/40">
                        {item.institution}
                      </span>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {item.period}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white">
                        {item.degree}
                      </h4>
                      <span className="text-xs text-slate-400 font-medium">
                        Estado: <strong className="text-slate-200">{item.status}</strong>
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {item.competencies && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {item.competencies.map((comp, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                          >
                            ✓ {comp}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & References Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Languages Block */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Languages className="w-4 h-4 text-cyan-400" />
                <span>Competencia en Idiomas</span>
              </h3>

              <div className="space-y-5">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">
                        {lang.language}
                      </span>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                        {lang.level}
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-400">
                      {lang.levelDescription}
                    </p>

                    <ul className="space-y-1.5 pt-1 text-[11px] text-slate-300 leading-relaxed">
                      {lang.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* References Card */}
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-teal-400" />
                  <span>Referencias Laborales & Académicas</span>
                </h4>
                <span className="text-[11px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/40">
                  A petición
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Contactos y cartas de referencia técnica disponibles a solicitud para procesos de selección o evaluación institucional.
              </p>
            </div>

            {/* Curriculum Vitae Full Action */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-950/40 to-slate-900 border border-teal-800/40 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white">
                  Curriculum Vitae Completo
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Visualiza o imprime el resumen ejecutivo de Santiago Olivera.
                </p>
              </div>

              <button
                id="education-view-cv-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors font-mono shrink-0 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Ver Ficha CV</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
