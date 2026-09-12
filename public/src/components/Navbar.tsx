import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  FileText, 
  Menu, 
  X, 
  Mail, 
  Terminal,
  ExternalLink 
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Educación & Idiomas', href: '#educacion' },
    { label: 'Contacto', href: '#contacto' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-cyan-400 p-0.5 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-teal-400" />
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-white group-hover:text-teal-300 transition-colors flex items-center gap-2">
              {PERSONAL_INFO.name}
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Disponible para proyectos"></span>
            </span>
            <span className="text-xs text-slate-400 block font-mono">
              Backend & Systems Analyst
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-900/60 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            id="nav-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Santiago Olivera"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-all hover:border-slate-700 hover:shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            id="nav-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Santiago Olivera"
            className="p-2 text-slate-300 hover:text-sky-400 hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-all hover:border-slate-700 hover:shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-teal-300 bg-teal-950/50 hover:bg-teal-900/50 border border-teal-800/60 rounded-lg transition-all hover:border-teal-600 hover:shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Ver CV</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-xs font-semibold text-teal-300 bg-teal-950/60 border border-teal-800/60 rounded-lg"
            title="Ver CV"
          >
            <FileText className="w-4 h-4" />
          </button>
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg border border-slate-800 focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-5 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-teal-300 hover:bg-slate-900/80 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-300 bg-slate-900 rounded-lg border border-slate-800 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-300 bg-slate-900 rounded-lg border border-slate-800 hover:text-sky-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 text-slate-300 bg-slate-900 rounded-lg border border-slate-800 hover:text-teal-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg font-mono font-medium"
            >
              <FileText className="w-4 h-4" />
              Visualizar CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
