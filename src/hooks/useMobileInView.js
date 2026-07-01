import { useState, useEffect, useRef } from 'react';

export function useMobileInView(options = {}) {
  const ref = useRef(null);
  
  // Initialize state based on window width to prevent flash of hidden content on desktop
  const [inView, setInView] = useState(() => {
    if (typeof window === 'undefined') return true;
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // If not mobile, or prefers reduced motion, elements are instantly in view
    return !isMobile || prefersReducedMotion;
  });

  useEffect(() => {
    // If already in view (desktop or already scrolled past), do nothing
    if (inView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [inView, options.threshold, options.rootMargin]);

  return { ref, inView };
}
