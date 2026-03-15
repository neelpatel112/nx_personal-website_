import type { Skill } from '../types/index';

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5',                 category: 'Frontend' },
  { name: 'CSS3',                  category: 'Frontend' },
  { name: 'SCSS / SASS',           category: 'Frontend' },
  { name: 'JavaScript',            category: 'Frontend' },
  { name: 'TypeScript',            category: 'Frontend' },
  { name: 'Frontend Dev',          category: 'Frontend' },

  // Backend
  { name: 'PHP',                   category: 'Backend' },
  { name: 'Python',                category: 'Backend' },
  { name: 'APIs',                  category: 'Backend' },
  { name: 'Backend Dev',           category: 'Backend' },
  { name: 'DBMS',                  category: 'Backend' },

  // Languages
  { name: 'C Programming',         category: 'Languages' },
  { name: 'C++ Programming',       category: 'Languages' },
  { name: 'Data Structures',       category: 'Languages' },

  // Systems
  { name: 'Computer Networking',   category: 'Systems' },
  { name: 'Operating Systems',     category: 'Systems' },
  { name: 'Computer Architecture', category: 'Systems' },

  // Tools
  { name: 'Blender 3D',            category: 'Tools' },
  { name: '3D Modeling',           category: 'Tools' },
];

export const categoryColors: Record<string, string> = {
  Frontend:  '#00f5d4',
  Backend:   '#7c3aed',
  Languages: '#f59e0b',
  Systems:   '#f43f5e',
  Tools:     '#60a5fa',
};
