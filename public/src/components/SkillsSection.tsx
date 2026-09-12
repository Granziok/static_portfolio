import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Cpu, 
  Server, 
  Terminal, 
  Headphones, 
  Layout, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Wrench,
  Award
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('backend');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      case 'Terminal': return Terminal;
      case 'Headphones': return Headphones;
      case 'Layout': return Layout;
      default: return Layers;
    }
  };

  const activeCategory = SKILL_CATEGORIES.find(c => c.id === activeCategoryId) || SKILL_CATEGORIES[0];

  return (
    <section id="habilidades" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/60 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Competencias Técnicas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Stack Tecnológico & Especialización
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Habilidades estructuradas en pilares de ingeniería de software, análisis empírico y diagnóstico de infraestructura.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            const isSelected = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-teal-500/80 shadow-lg shadow-teal-950/30'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className={`p-2 w-fit rounded-lg mb-3 ${
                  isSelected ? 'bg-teal-950 text-teal-300' : 'bg-slate-900 text-slate-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {cat.name}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-mono">
                    {cat.skills.length} competencias
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Detail Panel */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{activeCategory.name}</span>
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {activeCategory.description}
              </p>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-teal-400 shrink-0 self-start sm:self-auto">
              Nivel de aplicación comprobado
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-sm font-bold text-slate-100">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-teal-950/60 text-teal-300 border border-teal-800/40 shrink-0">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {skill.keyTools && (
                  <div className="pt-3 border-t border-slate-800/70 flex flex-wrap gap-1.5">
                    {skill.keyTools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
