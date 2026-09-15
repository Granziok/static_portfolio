import React from 'react';
import { PERSONAL_INFO, SOFT_SKILLS } from '../data/portfolioData';
import { 
  User, 
  Target, 
  BrainCircuit, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Award,
  Terminal
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Database,
      title: 'Persistencia & Arquitectura Backend',
      description:
        'Estructuro proyectos backend desde los cimientos: estableciendo capas de persistencia sólidas (JDO, DataNucleus, SQL), controladores RESTful limpios con Java y Spring Boot, y separación rigurosa de responsabilidades.'
    },
    {
      icon: BrainCircuit,
      title: 'IA Crítica & Análisis Riguroso',
      description:
        'Experiencia en el análisis exploratorio y depuración de datasets de gran escala (300k+ registros) y ajuste de modelos YOLOv8 con matrices de confusión dinámicas, priorizando métricas de sensibilidad en salud.'
    },
    {
      icon: Terminal,
      title: 'Diagnóstico & Troubleshooting a Bajo Nivel',
      description:
        'Habilidad demostrada para desplegar entornos multiplataforma (Linux Mint / Windows LTSC), gestionar sistemas de arranque dual GRUB/BIOS y resolver conflictos de controladores de red y hardware.'
    },
    {
      icon: ShieldCheck,
      title: 'Compromiso & Trabajo en Equipo',
      description:
        'Me destaco por una actitud proactiva y una disposición constante para aprender y adaptarme rápidamente a nuevas tecnologías, integrándome con responsabilidad y comunicación fluida en equipos reales.'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 md:py-28 relative border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-950/80 text-teal-300 border border-teal-800/60 mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Perfil & Biografía</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Rigurosidad técnica, pasión por la arquitectura y aprendizaje continuo
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Conoce mi trayectoria, mi formación multidisciplinaria y la filosofía de trabajo que aplico en cada proyecto.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-400" />
                <span>Quién soy y mi objetivo</span>
              </h3>
              
              <p className="text-slate-300">
                Estudiante de <strong className="text-white">Analista en Sistemas (IFES)</strong> y de la{' '}
                <strong className="text-white">Tecnicatura en Sonido (ESMN)</strong> en Neuquén Capital. 
                Mi objetivo principal es incorporarme a un equipo de trabajo profesional donde pueda aportar mi compromiso, 
                responsabilidad y conocimientos para desarrollar experiencia en entornos de producción reales.
              </p>

              <p className="text-slate-300">
                Mi formación comienza con una fuerte base técnica como <strong className="text-white">Bachiller en Prácticas de Laboratorio</strong>, 
                forjando así mi metodología analítica: respeto por los datos empíricos, control de variables y búsqueda exhaustiva de la causa raíz ante cualquier anomalía. 
                Ese mismo rigor es el que traslado hoy al software, ya sea diseñando una capa de persistencia en Java o evaluando la sensibilidad estadística de un modelo predictivo médico.
              </p>

              <p className="text-slate-300">
                Busco entender cómo interactúa el hardware con el sistema operativo, 
                cómo fluyen los datos a través del backend y cómo estructurar código modular y mantenible que facilite el trabajo de todo el equipo.
                Sin dejar espacio para soluciones superficiales.
              </p>
            </div>

            {/* Quick Fact Callout */}
            <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-800/40 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div className="text-sm text-slate-300">
                <strong className="text-teal-200">Disposición inmediata para crecer:</strong> Busco activamente colaborar en proyectos de backend, análisis de datos, desarrollo full-stack o administración de sistemas, aportando alta capacidad de asimilación tecnológica y proactividad constante.
              </div>
            </div>
          </div>

          {/* Pillars of Engineering */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2 px-1">
              Pilares de mi enfoque técnico:
            </h3>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all hover:bg-slate-900/70 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-slate-800 text-teal-400 group-hover:bg-teal-950 group-hover:text-teal-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-11">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Soft Skills Showcase */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800/80">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-400" />
                <span>Competencias Personales & Profesionales</span>
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Cualidades que potencian mi rendimiento y facilitan la cohesión dentro de equipos de desarrollo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOFT_SKILLS.map((skill, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/70 hover:border-teal-800/50 hover:bg-slate-900/60 transition-all group"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {skill.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
