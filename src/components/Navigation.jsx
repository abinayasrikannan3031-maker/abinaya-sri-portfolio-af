import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWorkClick = (e) => {
    e.preventDefault();
    handleMobileNavClick(); // close mobile menu if open
    if (location.pathname === '/') {
      const workEl = document.getElementById('work');
      if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const workEl = document.getElementById('work');
        if (workEl) workEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  useEffect(() => {
    // Initial route-based defaults before scrolling kicks in
    const initTimer = setTimeout(() => {
      if (location.pathname.startsWith('/work')) {
        setActiveSection('work');
      } else if (location.pathname === '/about') {
        setActiveSection('about');
      } else {
        setActiveSection('');
      }
    }, 0);

    // Use Intersection Observer for highly performant scroll spying
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.getAttribute('data-nav-key');
            if (key) setActiveSection(key);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -30% 0px', // Triggers when element is in the middle 40% of the screen
      }
    );

    const elementsToObserve = [];

    // Check for Work section
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.setAttribute('data-nav-key', 'work');
      elementsToObserve.push(workEl);
    }

    // Check for About section (if it exists as an anchor on page)
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.setAttribute('data-nav-key', 'about');
      elementsToObserve.push(aboutEl);
    }

    // Check for Resume section (if it exists as an anchor)
    const resumeEl = document.getElementById('resume');
    if (resumeEl) {
      resumeEl.setAttribute('data-nav-key', 'resume');
      elementsToObserve.push(resumeEl);
    }

    // Check for Footer to trigger Let's Talk active state
    const footerEl = document.querySelector('footer');
    if (footerEl) {
      footerEl.setAttribute('data-nav-key', 'lets-talk');
      elementsToObserve.push(footerEl);
    }

    elementsToObserve.forEach(el => observer.observe(el));

    // Handle clearing active state when scrolling back up to the Hero section on Home page
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.3 && location.pathname === '/') {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    const scrollTimer = setTimeout(() => handleScroll(), 0);

    return () => {
      elementsToObserve.forEach(el => observer.unobserve(el));
      observer.disconnect();
      clearTimeout(initTimer);
      clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const getLinkClasses = (sectionKey) => {
    // Retain the exact mobile layout fixes and structural layout we built previously
    const baseClasses = "min-h-[44px] min-w-[44px] flex items-center justify-center md:min-h-0 md:min-w-0 md:block p-2 md:p-0 -m-2 md:m-0 transition-all duration-[250ms] active:-translate-y-[2px] md:active:translate-y-0 text-[14px] font-normal";
    const isActive = activeSection === sectionKey;

    if (isActive) {
      return `${baseClasses} text-[#7D7871]`;
    } else {
      return `${baseClasses} text-[#7D7871] hover:text-[#2C2A28]`;
    }
  };

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[9999] w-full h-[80px] flex items-center"
      style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F5F5 100%)' }}
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-[80px] py-[24px] flex flex-row items-center justify-between relative">
        <Link to="/" className="w-auto flex items-center justify-start gap-3 cursor-pointer" onClick={() => { window.scrollTo(0, 0); handleMobileNavClick(); }}>
          <motion.picture 
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            <source srcSet="/logo.svg" type="image/svg+xml" />
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="/logo.png" 
              alt="Abinaya Sri Logo" 
              className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] object-contain animate-[spin_4s_linear_infinite]" 
            />
          </motion.picture>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row justify-end items-center gap-[40px] w-auto">
          <a href="/#work" onClick={handleWorkClick} className={getLinkClasses('work')}>Work</a>
          <Link to="/about" className={getLinkClasses('about')}>About</Link>
          <a href="/resume/Abinaya_Sri_Resume.jpg" target="_blank" rel="noopener noreferrer" className={getLinkClasses('resume')}>Resume</a>
          <a href="https://wa.me/917010933667" target="_blank" rel="noopener noreferrer" className={getLinkClasses('lets-talk')}>Let's talk</a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#7D7871] hover:text-[#2C2A28] text-[24px] focus:outline-none transition-colors duration-300 p-2 -mr-2"
            aria-label="Toggle Navigation Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[80px] left-0 w-full bg-[#F5F5F5] shadow-lg border-t border-gray-200 md:hidden flex flex-col items-center py-6 gap-6 z-[9998]"
        >
          <a href="/#work" onClick={handleWorkClick} className={getLinkClasses('work')}>Work</a>
          <Link to="/about" onClick={handleMobileNavClick} className={getLinkClasses('about')}>About</Link>
          <a href="/resume/Abinaya_Sri_Resume.jpg" target="_blank" rel="noopener noreferrer" onClick={handleMobileNavClick} className={getLinkClasses('resume')}>Resume</a>
          <a href="https://wa.me/917010933667" target="_blank" rel="noopener noreferrer" onClick={handleMobileNavClick} className={getLinkClasses('lets-talk')}>Let's talk</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
