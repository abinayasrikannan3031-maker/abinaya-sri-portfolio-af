import { useLocation, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    // Check if mobile AND no reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isMobile || prefersReducedMotion) {
      setDisplayLocation(location);
      return;
    }

    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation.pathname]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div
      onTransitionEnd={handleAnimationEnd}
      className={`transition-opacity duration-300 ease-in-out ${
        transitionStage === 'fadeIn' ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Routes location={displayLocation}>
        {children}
      </Routes>
    </div>
  );
}
