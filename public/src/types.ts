export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: 'backend' | 'ai' | 'systems' | 'audio' | 'infrastructure';
  categoryLabel: string;
  badge: string;
  featured: boolean;
  whatIDid: string[];
  whatIApplied: string[];
  summary: string;
  tags: string[];
  highlights: { label: string; value: string }[];
  technicalDetails: {
    architecture: string;
    keyChallenges: string;
    outcome: string;
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    keyTools?: string[];
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
  description: string;
  competencies?: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
  levelDescription: string;
  details: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
}
