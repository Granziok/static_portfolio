import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  ArrowUp, 
  Heart,
  MapPin
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Educación & Idiomas', href: '#educacion' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Desarrollador Backend & Analista en Sistemas • Especializado en Java, Spring Boot, YOLOv8 e Infraestructura de Sistemas.
            </p>

            <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
              <MapPin className="w-3 h-3 text-rose-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap gap-4 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-400 hover:text-teal-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="GitHub de Santiago Olivera"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-sky-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="LinkedIn de Santiago Olivera"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-teal-300 hover:bg-slate-800 border border-slate-800 transition-colors"
              aria-label="Enviar email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors ml-2"
              title="Volver al inicio"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Santiago Olivera. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400">Disponible para nuevas oportunidades profesionales</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
