import { useMobileInView } from '../hooks/useMobileInView';

export default function MobileFadeIn({ children, className = "", delay = 0 }) {
  const { ref, inView } = useMobileInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-opacity duration-[800ms] ease-in-out ${inView ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}
