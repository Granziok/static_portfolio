import React, { useEffect } from 'react';
import { Project } from '../types';
import { ProjectSimulator } from './ProjectSimulator';
import { 
  X, 
  CheckCircle2, 
  Wrench, 
  Layers, 
  ExternalLink, 
  Github, 
  Cpu, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-slate-950/60 sticky top-0 z-20 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-800/60">
                {project.categoryLabel}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                {project.badge}
              </span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors shrink-0"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-8 flex-1">
          
          {/* Highlights Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.highlights.map((h, i) => (
              <div key={i} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-[11px] text-slate-400 font-medium">{h.label}</div>
                <div className="text-xs sm:text-sm font-bold text-teal-300 font-mono mt-0.5">{h.value}</div>
              </div>
            ))}
          </div>

          {/* Interactive Simulator / Architecture Demo */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-teal-400" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Demostración & Lógica Interactiva
              </h4>
            </div>
            <ProjectSimulator project={project} />
          </div>

          {/* Grid: Qué hice & Qué apliqué */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Qué hice */}
            <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 space-y-3">
              <h4 className="text-sm font-bold text-teal-300 flex items-center gap-2 border-b border-slate-800 pb-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Qué hice (Responsabilidades & Ejecución)</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                {project.whatIDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qué apliqué */}
            <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 space-y-3">
              <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2 border-b border-slate-800 pb-2">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Qué apliqué (Tecnologías & Principios)</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                {project.whatIApplied.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Technical Deep Dive Details */}
          <div className="bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>Arquitectura del Proyecto & Desafíos Resueltos</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                  Diseño de Arquitectura:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {project.technicalDetails.architecture}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-rose-400 font-semibold uppercase tracking-wider text-[10px]">
                  Desafío Crítico:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {project.technicalDetails.keyChallenges}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-emerald-400 font-semibold uppercase tracking-wider text-[10px] block mb-1">
                Resultado & Impacto:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {project.technicalDetails.outcome}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
              >
                #{t}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Ver repositorio en GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-sky-400 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Consultar en LinkedIn</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors ml-auto"
          >
            Cerrar Ficha
          </button>
        </div>

      </div>
    </div>
  );
};
