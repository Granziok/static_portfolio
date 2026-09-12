import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Sliders, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Database,
  Cpu,
  Terminal,
  Volume2,
  Server
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'backend', label: 'Backend & Java' },
    { id: 'ai', label: 'IA & Visión Computacional' },
    { id: 'systems', label: 'Sistemas & Hardware' },
    { id: 'audio', label: 'Audio & DSP' },
    { id: 'infrastructure', label: 'Servidores & Economía' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'backend': return Database;
      case 'ai': return Cpu;
      case 'systems': return Terminal;
      case 'audio': return Volume2;
      case 'infrastructure': return Server;
      default: return FolderGit2;
    }
  };

  return (
    <section id="proyectos" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 mb-4">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portafolio de Ingeniería</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Proyectos Destacados & Arquitectura
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Casos reales implementados con rigor técnico: desde modelos predictivos con YOLOv8 en salud hasta backends empresariales con Spring Boot y JDO.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Mostrando {filteredProjects.length} de {PROJECTS.length} casos
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-bold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:shadow-teal-950/20"
              >
                {/* Card Top */}
                <div className="p-6">
                  
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/90 text-teal-300 border border-slate-700/60 font-mono">
                      <Icon className="w-3.5 h-3.5" />
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded border border-slate-800">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-2 gap-2 my-4 pt-4 border-t border-slate-800/70">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/80">
                        <div className="text-[10px] text-slate-500">{h.label}</div>
                        <div className="text-xs font-bold text-slate-200 font-mono truncate">{h.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono text-slate-400 bg-slate-950/50 px-2 py-0.5 rounded border border-slate-800/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-mono text-slate-500 px-1 py-0.5">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                </div>

                {/* Card Bottom / Actions */}
                <div className="p-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Ver Arquitectura & Simulación</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveProject(project)}
                    className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                    title="Detalle completo"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Repositories Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
              <FolderGit2 className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                ¿Deseas explorar los repositorios de código?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Visita mi perfil oficial en GitHub donde publico mis implementaciones, commits y código fuente.
              </p>
            </div>
          </div>

          <a
            id="projects-github-cta"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all border border-slate-700 shrink-0 hover:border-slate-600"
          >
            <span>Ir a GitHub (Granziok)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
};
