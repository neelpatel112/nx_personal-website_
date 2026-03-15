// src/scripts/animations.ts
// Run on every page — wires up GSAP ScrollTrigger for all gsap-hidden elements

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Staggered fade-up for all gsap-hidden elements
  const elements = document.querySelectorAll<HTMLElement>('.gsap-hidden');

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.delay ?? '0') * 0.12;
    const type = el.dataset.gsap ?? 'fade-up';

    const fromVars: gsap.TweenVars = { opacity: 0, duration: 0.7, delay, ease: 'power3.out' };

    if (type === 'fade-up')   { fromVars.y = 28; }
    if (type === 'fade-left') { fromVars.x = -28; }
    if (type === 'fade-scale'){ fromVars.scale = 0.93; }

    gsap.from(el, {
      ...fromVars,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // Bento cells stagger in groups
  const bentoCells = document.querySelectorAll<HTMLElement>('[data-bento-cell]');
  if (bentoCells.length) {
    gsap.from(bentoCells, {
      opacity: 0,
      y: 32,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bentoCells[0],
        start: 'top 85%',
      },
    });
  }
}
