import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const elements = document.querySelectorAll<HTMLElement>('.gsap-hidden');

  elements.forEach((el) => {
    // Reset opacity first so it's visible even if animation fails
    el.style.opacity = '1';
    el.style.transform = 'none';

    const delay = parseFloat(el.dataset.delay ?? '0') * 0.12;
    const type = el.dataset.gsap ?? 'fade-up';

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration: 0.7,
      delay,
      ease: 'power3.out',
    };

    if (type === 'fade-up')    fromVars.y = 28;
    if (type === 'fade-left')  fromVars.x = -28;
    if (type === 'fade-scale') fromVars.scale = 0.93;

    gsap.from(el, {
      ...fromVars,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });
} 