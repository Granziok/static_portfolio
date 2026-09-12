import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Terminal,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glows without harsh artificial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Technical grid backdrop subtle overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status & Location badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800/60 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Disponible para nuevos desafíos
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {PERSONAL_INFO.location}
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-800">
                <span className="text-teal-400 font-mono text-[11px] font-semibold">EN: B2</span>
                Inglés Técnico
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]">
              Hola! soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-200 to-sky-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl sm:text-2xl text-slate-200 font-medium mb-5 tracking-tight">
              Desarrollador Backend & Estudiante de Analista en Sistemas
            </p>

            {/* Concise Bio Pitch */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              Enfocado en la construcción de arquitecturas backend robustas en <strong className="text-slate-200 font-semibold">Java y Spring Boot</strong>, 
              modelos predictivos y visión computacional con <strong className="text-slate-200 font-semibold">YOLOv8</strong> calibrados para entornos críticos de salud, 
              y resolución de conflictos de sistemas operativos e infraestructura a bajo nivel.
            </p>

            {/* CTA Action buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <button
                id="hero-view-projects-btn"
                onClick={() => scrollToSection('#proyectos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explorar Proyectos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollToSection('#contacto')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-all hover:border-slate-600 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contactar</span>
              </button>

              <button
                id="hero-resume-modal-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-300 font-medium text-sm border border-slate-800 transition-all hover:text-white"
                title="Ver currículum vitae"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Ficha CV</span>
              </button>
            </div>

            {/* Social profiles & direct links */}
            <div className="flex items-center gap-4 text-sm text-slate-400 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Perfiles Oficiales:
              </span>
              
              <a
                id="hero-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:text-teal-400" />
                <span className="text-xs font-mono">github.com/Granziok</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                id="hero-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:text-sky-400" />
                <span className="text-xs font-mono">linkedin.com/in/santiago-olivera-dev</span>
              </a>
            </div>

          </div>

          {/* Right Column: Code & Architecture Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl p-5 overflow-hidden backdrop-blur-sm">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-teal-400" />
                    santiago@olivera:~/profile
                  </span>
                </div>
                <span className="text-[11px] font-mono text-teal-400/90 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/40">
                  v2.0-prod
                </span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs text-slate-300 space-y-2.5 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-purple-400 font-semibold">package</span>{' '}
                  <span className="text-slate-300">com.santiago.engineer;</span>
                </div>

                <div className="pt-1">
                  <span className="text-cyan-400">@ProfileSpecification</span>
                  <br />
                  <span className="text-purple-400 font-semibold">public record</span>{' '}
                  <span className="text-amber-300 font-semibold">SantiagoOlivera</span>(
                  <div className="pl-4 text-slate-400">
                    <p><span className="text-teal-300">String</span> role = <span className="text-emerald-300">"Backend & Systems Analyst"</span>,</p>
                    <p><span className="text-teal-300">String</span> education = <span className="text-emerald-300">"IFES (Sistemas) + ESMN (Sonido)"</span>,</p>
                    <p><span className="text-teal-300">String[]</span> coreTech = &#123;<span className="text-emerald-300">"Java"</span>, <span className="text-emerald-300">"Spring Boot"</span>, <span className="text-emerald-300">"YOLOv8"</span>, <span className="text-emerald-300">"Maven"</span>, <span className="text-emerald-300">"Linux"</span>&#125;,</p>
                    <p><span className="text-teal-300">int</span> medicalRecordsCleaned = <span className="text-amber-300">300_000</span>,</p>
                    <p><span className="text-teal-300">boolean</span> prioritizeHealthSensitivity = <span className="text-amber-300">true</span></p>
                  </div>
                  ) &#123;
                </div>

                <div className="pl-4 pt-1 text-slate-400">
                  <span className="text-slate-500">// Objetivo: minimizar falsos negativos en diagnósticos</span>
                  <br />
                  <span className="text-purple-400 font-semibold">public</span>{' '}
                  <span className="text-teal-300">AdaptiveMatrix</span>{' '}
                  <span className="text-blue-300">calibrateModel</span>() &#123;
                  <div className="pl-4">
                    <span className="text-purple-400 font-semibold">return</span>{' '}
                    <span className="text-slate-300">new DynamicThresholdFilter(</span>
                    <span className="text-amber-300">0.98</span>
                    <span className="text-slate-400"> /* target sensitivity */</span>
                    <span className="text-slate-300">);</span>
                  </div>
                  &#125;
                </div>
                <div>&#125;</div>
              </div>

              {/* Highlight Metrics Grid at bottom of card */}
              <div className="mt-5 pt-4 border-t border-slate-800/90 grid grid-cols-2 gap-3">
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[11px] text-slate-400">Dataset de Salud</div>
                  <div className="text-sm font-bold text-teal-300 font-mono">300k Registros</div>
                </div>
                <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                  <div className="text-[11px] text-slate-400">Enfoque Arquitectónico</div>
                  <div className="text-sm font-bold text-cyan-300 font-mono">JDO + DataNucleus</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
