import type { Project } from '../types/index';

export const projects: Project[] = [
  {
    id: 'macos-nx',
    title: 'macOS Web Emulator',
    description: 'Full macOS desktop environment running entirely in the browser.',
    longDescription:
      'macOS NX is a fully functional, web-based clone of the macOS desktop environment, built from scratch using only vanilla HTML, CSS, and JavaScript. Features a draggable window system, dynamic dock with magnification, and built-in apps like Finder, Music, and Photos.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Vanilla JS'],
    dateRange: 'Jan 2026 – Present',
    status: 'in-progress',
    featured: true,
    accentColor: 'cyan',
    size: 'wide',
  },
  {
    id: 'windows-web8',
    title: 'Windows Web 8',
    description: 'Pixel-perfect Windows 8 OS mockup running in the browser.',
    longDescription:
      'An online design mockup of Microsoft Windows 8, coded using HTML5, CSS3, SASS and jQuery. Features boot screen, login screen, desktop, start menu, and a complete real-time Windows 8 experience.',
    techStack: ['HTML5', 'CSS3', 'SASS', 'jQuery'],
    dateRange: 'Jan 2026 – Mar 2026',
    status: 'completed',
    featured: true,
    accentColor: 'violet',
    size: 'square',
  },
  {
    id: 'machine-sound',
    title: 'Machine Sound Diagnostics',
    description: 'ML-powered fault detection via audio analysis — Android + Python backend.',
    longDescription:
      'An Android app captures .wav audio recordings of machine sounds and sends them to a Python ML backend deployed on Hugging Face Spaces. The model detects whether a mechanical fault is present with high accuracy.',
    techStack: ['Python', 'Machine Learning', 'Android', 'API', 'Hugging Face'],
    dateRange: 'Dec 2025 – Present',
    status: 'in-progress',
    featured: true,
    accentColor: 'amber',
    size: 'square',
  },
  {
    id: 'phantom-bios',
    title: 'Phantom BIOS',
    description: 'A web-based BIOS that boots into multiple web operating systems.',
    longDescription:
      'A browser-based BIOS setup utility with hardware utilities, built to serve as the bootloader for multiple web OS projects. Connects the Windows Web 8 and macOS NX emulators into a unified multi-boot experience.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    dateRange: 'Jan 2026 – Present',
    status: 'in-progress',
    featured: false,
    accentColor: 'rose',
    size: 'square',
  },
];
