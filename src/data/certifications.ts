import type { Certification } from '../types/index';

export const certifications: Certification[] = [
  {
    id: 'networking',
    title: 'Computer Networking',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2026',
    description:
      'Covers network communication, IP addressing, Ethernet, routers, wireless configuration, and troubleshooting.',
    color: 'cyan',
  },
  {
    id: 'os-basics',
    title: 'Operating System Basics',
    issuer: 'Cisco Networking Academy × Parul University',
    date: 'Aug 2025',
    description:
      'Fundamental OS concepts including installation, configuration, file systems, directory structures, and system management.',
    color: 'violet',
  },
  {
    id: 'hardware',
    title: 'Computer Hardware Basics',
    issuer: 'Cisco Networking Academy × Parul University',
    date: 'Apr 2025',
    description:
      'Fundamental knowledge of computer components, assembly, maintenance, and troubleshooting.',
    color: 'amber',
  },
];
