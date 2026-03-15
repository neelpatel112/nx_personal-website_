// ─────────────────────────────────────────
// PROJECT
// ─────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  dateRange: string;
  status: 'completed' | 'in-progress';
  featured: boolean;
  accentColor: 'cyan' | 'violet' | 'amber' | 'rose';
  size: 'wide' | 'tall' | 'square' | 'large';
}

// ─────────────────────────────────────────
// SKILL
// ─────────────────────────────────────────
export type SkillCategory = 'Frontend' | 'Backend' | 'Systems' | 'Tools' | 'Languages';

export interface Skill {
  name: string;
  category: SkillCategory;
}

// ─────────────────────────────────────────
// CERTIFICATION
// ─────────────────────────────────────────
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  color: 'cyan' | 'violet' | 'amber';
}

// ─────────────────────────────────────────
// NAV LINK
// ─────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─────────────────────────────────────────
// STAT
// ─────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}
