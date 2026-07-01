import { motion } from 'framer-motion';
import autismCard from '../assets/final_cards/autistem-card.png';
import wealthifiedCard from '../assets/final_cards/wealthified-card.png';
import homeMaintenanceCard from '../assets/final_cards/home-maintenance-card.png';
import behanceCard from '../assets/final_cards/more-case-studies-card.png';
import { Link } from 'react-router-dom';

const RevealOnScroll = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
};

const SelectedWork = () => {
  return (
    <section id="work" className="w-full flex flex-col items-center pt-2 md:pt-[80px] pb-12 md:pb-[136px] bg-[#F8F7F4] md:bg-[#F8F7F4]">
      {/* 1320px container + 60px padding */}
      <div className="w-full max-w-[1320px] mx-auto px-[24px] md:px-[60px]">
        <h2 className="text-[28px] md:text-[40px] font-medium leading-[1.4] text-[#2C2A28] tracking-wide mt-[64px] md:mt-0 mb-10 md:mb-[80px] text-left">Selected Work</h2>

        <div className="flex flex-col gap-12 md:gap-[140px] w-full mx-auto">
          
          {/* Row 1: Autistem LLM - Image Left, Text Right */}
          <RevealOnScroll delay={0}>
            {/* MOBILE VIEW */}
            <div className="md:hidden flex flex-col gap-6">
               <div className="w-full rounded-[24px] overflow-hidden shadow-sm">
                 <img src={autismCard} alt="Autistem" className="w-full h-auto object-contain block" />
               </div>
               <div className="flex flex-col items-start">
                  <p className="text-[12px] text-gray-500 tracking-wide mb-2">Present · 2026</p>
                  <h3 className="text-[28px] font-bold text-[#2C2A28] mb-3">Autistem LLM</h3>
                  <p className="text-[16px] text-gray-500 leading-relaxed mb-6">Helping caregivers manage routines, records, schedules, and support networks in one secure place.</p>
                  <Link to="/work/autistem" className="bg-[#613C15] hover:bg-[#4B2307] text-white rounded-full flex items-center justify-center w-[54px] h-[36px] transition-colors"><span className="text-xl leading-none font-light">→</span></Link>
               </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden md:flex flex-row w-full justify-between items-center">
              
              {/* Left Image (approx 62%) */}
              <div className="w-[62%] h-auto rounded-[32px] relative group cursor-pointer md:hover:-translate-y-1.5 md:hover:scale-[1.02] md:hover:shadow-2xl transition-all duration-250">
                <Link to="/work/autistem" className="block w-full h-auto flex items-center justify-center">
                  <img src={autismCard} alt="Autistem LLM" className="w-full h-auto object-contain block rounded-[32px] shadow-sm" style={{ imageRendering: 'auto' }} />
                </Link>
              </div>

              {/* Right Text (approx 32%) */}
              <div className="w-[32%] flex flex-col items-start justify-center">
                <p className="text-[13px] text-gray-500 tracking-wide mb-3">Present · 2026</p>
                <h3 className="text-[32px] font-bold text-[#2C2A28] mb-4">Autistem LLM</h3>
                <p className="text-[18px] text-gray-500 leading-relaxed mb-8">
                  Helping caregivers manage routines, records, schedules, and support networks in one secure place.
                </p>
                <Link to="/work/autistem" className="group/btn bg-[#613C15] hover:bg-[#4B2307] text-[#FFF8DC] rounded-full w-[64px] h-[40px] transition-all duration-300 flex items-center justify-center shadow-sm md:hover:scale-105">
                  <span className="text-xl leading-none font-light md:group-hover/btn:translate-x-1 transition-transform duration-[250ms]">→</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>


          {/* Row 2: Wealthified - Text Left, Image Right */}
          <RevealOnScroll delay={100}>
             {/* MOBILE VIEW */}
             <div className="md:hidden flex flex-col gap-6">
               <div className="w-full rounded-[24px] overflow-hidden shadow-sm">
                 <img src={wealthifiedCard} alt="Wealthified" className="w-full h-auto object-contain block" />
               </div>
               <div className="flex flex-col items-start">
                  <p className="text-[12px] text-gray-500 tracking-wide mb-2">Live Project · 2025 - 2026</p>
                  <h3 className="text-[28px] font-bold text-[#2C2A28] mb-3">Wealthified</h3>
                  <p className="text-[16px] text-gray-500 leading-relaxed mb-6">Designing intuitive investment, portfolio tracking, and financial planning experiences</p>
                  <Link to="/work/wealthified" className="bg-[#613C15] hover:bg-[#4B2307] text-white rounded-full flex items-center justify-center w-[54px] h-[36px] transition-colors"><span className="text-xl leading-none font-light">→</span></Link>
               </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden md:flex flex-row w-full justify-between items-center">
              
              {/* Left Text (approx 32%) */}
              <div className="w-[32%] flex flex-col items-start justify-center">
                <p className="text-[13px] text-gray-500 tracking-wide mb-3">Live Project · 2025 - 2026</p>
                <h3 className="text-[32px] font-bold text-[#2C2A28] mb-4">Wealthified</h3>
                <p className="text-[18px] text-gray-500 leading-relaxed mb-8">
                  Designing intuitive investment, portfolio tracking, and financial planning experiences
                </p>
                <Link to="/work/wealthified" className="group/btn bg-[#613C15] hover:bg-[#4B2307] text-[#FFF8DC] rounded-full w-[64px] h-[40px] transition-all duration-300 flex items-center justify-center shadow-sm md:hover:scale-105">
                  <span className="text-xl leading-none font-light md:group-hover/btn:translate-x-1 transition-transform duration-[250ms]">→</span>
                </Link>
              </div>

              {/* Right Image (approx 62%) */}
              <div className="w-[62%] h-auto rounded-[32px] relative group cursor-pointer md:hover:-translate-y-1.5 md:hover:scale-[1.02] md:hover:shadow-2xl transition-all duration-250">
                <Link to="/work/wealthified" className="block w-full h-auto flex items-center justify-center">
                  <img src={wealthifiedCard} alt="Wealthified" className="w-full h-auto object-contain block rounded-[32px] shadow-sm" style={{ imageRendering: 'auto' }} />
                </Link>
              </div>
            </div>
          </RevealOnScroll>


          {/* Row 3: Two Column Grid (Home Maintenance & More Case Studies) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px] items-start">
            
            {/* Home Maintenance */}
            <RevealOnScroll delay={200}>
              {/* MOBILE VIEW */}
              <div className="md:hidden flex flex-col gap-6">
                <div className="w-full rounded-[24px] overflow-hidden shadow-sm">
                  <img src={homeMaintenanceCard} alt="Home Maintenance" className="w-full h-auto object-contain block" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[12px] text-gray-500 tracking-wide mb-2">2025</p>
                  <h3 className="text-[24px] font-bold text-[#2C2A28] mb-1">Home Maintenance</h3>
                  <p className="text-[16px] text-gray-500 mb-3">On-Demand Home Service Platform</p>
                  <p className="text-[15px] text-gray-500 leading-relaxed mb-6">Connecting homeowners with trusted professionals for repairs, maintenance, and everyday home services.</p>
                  <Link to="/work/home-maintenance" className="bg-[#613C15] hover:bg-[#4B2307] text-white rounded-full flex items-center justify-center w-[54px] h-[36px] transition-colors"><span className="text-xl leading-none font-light">→</span></Link>
                </div>
              </div>

              {/* DESKTOP VIEW (Vertical Card) */}
              <div className="hidden md:flex flex-col gap-8 w-full">
                <div className="w-full h-auto rounded-[32px] relative group cursor-pointer md:hover:-translate-y-1.5 md:hover:scale-[1.02] md:hover:shadow-2xl transition-all duration-250">
                  <Link to="/work/home-maintenance" className="block w-full h-auto flex items-center justify-center">
                    <img src={homeMaintenanceCard} alt="Home Maintenance" className="w-full h-auto object-contain block rounded-[32px] shadow-sm" style={{ imageRendering: 'auto' }} />
                  </Link>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[13px] text-gray-500 tracking-wide mb-3">2025</p>
                  <h3 className="text-[32px] font-bold text-[#2C2A28] mb-2">Home Maintenance</h3>
                  <p className="text-[18px] text-gray-500 mb-4">On-Demand Home Service Platform</p>
                  <p className="text-[18px] text-gray-500 leading-relaxed mb-8">
                    Connecting homeowners with trusted professionals for repairs, maintenance, and everyday home services.
                  </p>
                  <Link to="/work/home-maintenance" className="group/btn bg-[#613C15] hover:bg-[#4B2307] text-[#FFF8DC] rounded-full w-[64px] h-[40px] transition-all duration-300 flex items-center justify-center shadow-sm md:hover:scale-105">
                    <span className="text-xl leading-none font-light md:group-hover/btn:translate-x-1 transition-transform duration-[250ms]">→</span>
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            {/* More Case Studies */}
            <RevealOnScroll delay={300}>
              {/* MOBILE VIEW */}
              <div className="md:hidden flex flex-col gap-6">
                <div className="w-full rounded-[24px] overflow-hidden shadow-sm">
                  <img src={behanceCard} alt="More Case Studies" className="w-full h-auto object-contain block" />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[12px] text-gray-500 tracking-wide mb-2">2025</p>
                  <h3 className="text-[24px] font-bold text-[#2C2A28] mb-3">More Case Studies</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed mb-6">Explore additional UX/UI projects, product design explorations, and experimental concepts across web and mobile experiences.</p>
                  <a href="https://www.behance.net/abinayakannan2" target="_blank" rel="noopener noreferrer" className="font-medium text-[#2C2A28] underline underline-offset-4 decoration-gray-300">View on Behance</a>
                </div>
              </div>

              {/* DESKTOP VIEW (Vertical Card) */}
              <div className="hidden md:flex flex-col gap-8 w-full">
                <div className="w-full h-auto rounded-[32px] relative group cursor-pointer md:hover:-translate-y-1.5 md:hover:scale-[1.02] md:hover:shadow-2xl transition-all duration-250">
                  <a href="https://www.behance.net/abinayakannan2" target="_blank" rel="noopener noreferrer" className="block w-full h-auto flex items-center justify-center">
                    <img src={behanceCard} alt="More Case Studies" className="w-full h-auto object-contain block rounded-[32px] shadow-sm" style={{ imageRendering: 'auto' }} />
                  </a>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[13px] text-gray-500 tracking-wide mb-3">2025</p>
                  <h3 className="text-[32px] font-bold text-[#2C2A28] mb-4">More Case Studies</h3>
                  <p className="text-[18px] text-gray-500 leading-relaxed mb-8">
                    Explore additional UX/UI projects, product design explorations, and experimental concepts across web and mobile experiences.
                  </p>
                  <p className="text-[18px] text-gray-500">
                    View on <a href="https://www.behance.net/abinayakannan2" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#2C2A28] underline underline-offset-4 decoration-gray-400 hover:decoration-[#2C2A28]">Behance</a>
                  </p>
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
