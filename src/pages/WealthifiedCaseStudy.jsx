
import wealthifiedProject from '../assets/wealthified-project.jpg';

import img1 from '../assets/wealthified/mobile/w1.png';
import img2 from '../assets/wealthified/mobile/w2.png';
import img3 from '../assets/wealthified/mobile/w3.png';
import img4 from '../assets/wealthified/mobile/w4.png';
import img5 from '../assets/wealthified/mobile/w5.png';
import img6 from '../assets/wealthified/mobile/w6.png';
import img7 from '../assets/wealthified/mobile/w7.png';
import img8 from '../assets/wealthified/mobile/w8.png';
import img9 from '../assets/wealthified/mobile/w9.png';
import img10 from '../assets/wealthified/mobile/w10.png';
import img11 from '../assets/wealthified/mobile/w11.png';
import { motion } from 'framer-motion';
import projectDesktop1 from '../assets/project-desktop-1.png';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
    {children}
  </motion.div>
);

const ScrollReveal = ({ children, className = "" }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, ease: "easeOut" }} className={className}>
    {children}
  </motion.div>
);

const WealthifiedCaseStudy = () => {
  return (
    <div className="font-sans text-gray-900 bg-[#F8F7F4] md:bg-[#F8F7F4]">
      <main className="w-full bg-[#F8F7F4] md:bg-[#F8F7F4] flex flex-col pb-16 md:pb-[64px]">
  
  {/* MOBILE VIEW - PRESERVED EXACTLY */}
  <div className="w-full max-w-[1920px] mx-auto px-[24px] box-border md:hidden flex flex-col">
    <div className="w-full max-w-[1468px] mx-auto flex flex-col">
      <div className="flex flex-col md:hidden w-full">

          {/* Header Section */}
          <FadeIn className="flex flex-col w-full mt-[40px]">
            <h1 className="text-[32px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
              Wealthified
            </h1>
            <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] mb-[16px] break-words whitespace-normal">
              Designing a Personalized Wealth Management Experience for Smarter Financial Decisions
            </p>
            <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] mb-[32px] break-words whitespace-normal">
              Wealthified helps users track investments, monitor net worth, manage financial goals, and make informed financial decisions through personalized financial insights and portfolio management tools.
            </p>
          </FadeIn>

          {/* Metadata Section */}
          <FadeIn delay={0.3} className="flex flex-col w-full">
            <div className="flex flex-wrap gap-x-[12px] gap-y-[16px] mb-[32px]">
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Wealth Management</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Financial Dashboard</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Portfolio Tracking</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Investment Insights</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Goal Planning</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Mobile App</span>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              <div>
                <h3 className="text-[13px] font-bold text-[#2C2A28] uppercase tracking-wide mb-2">MY ROLE</h3>
                <p className="text-[14px] text-[#7D7871] leading-relaxed">Product Designer</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#2C2A28] uppercase tracking-wide mb-2">DELIVERABLES</h3>
                <p className="text-[14px] text-[#7D7871] leading-relaxed">User Flows<br />Wireframes<br />UI Design<br />Interactive Prototypes</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#2C2A28] uppercase tracking-wide mb-2">TEAM</h3>
                <p className="text-[14px] text-[#7D7871] leading-relaxed">Senior Product Designer<br />Designers<br />Developers</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#2C2A28] uppercase tracking-wide mb-2">YEAR</h3>
                <p className="text-[14px] text-[#7D7871] leading-relaxed">Oct 2025 – May 2026</p>
              </div>
            </div>
          </FadeIn>

          {/* Sections Wrapper */}
          <div className="flex flex-col w-full gap-[64px] mt-[48px]">

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Product Goal
              </h2>
              <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] mb-[24px] break-words whitespace-normal">
                Help users track investments, monitor net worth, manage financial goals, and make informed financial decisions through a unified dashboard and mobile experience.
              </p>
              <img src={img1} alt="Product Goal" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                What Was The Challenge?
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  As Wealthified evolved, new business requirements and user expectations required improvements across both the dashboard and mobile experience.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The existing interfaces needed better visual consistency, improved usability, and support for new product capabilities while maintaining a seamless experience across platforms.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The challenge was to redesign key experiences, introduce new features, and simplify complex financial information into interfaces that felt intuitive, organized, and easy to understand.
                </p>
              </div>
              <img src={img2} alt="What Was The Challenge?" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Understanding User & Business Needs
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Managing investments, tracking portfolio performance, monitoring net worth, and planning financial goals often involves large amounts of information spread across different workflows.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The experience needed to help users quickly understand their financial position, access meaningful insights, and make informed decisions without feeling overwhelmed by complex data.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Special attention was given to improving information hierarchy, simplifying navigation, and making financial data more accessible to everyday users.
                </p>
              </div>
              <img src={img3} alt="Understanding User & Business Needs" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Redesigning the Dashboard Experience
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The dashboard redesign focused on improving information clarity, visual hierarchy, and accessibility across key financial workflows.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Important financial information was organized into clearer sections, allowing users to monitor investments, review reports, and access portfolio insights more efficiently.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The updated experience aimed to create a cleaner, more modern interface while supporting both new and existing product requirements.
                </p>
              </div>
              <img src={img4} alt="Redesigning the Dashboard Experience" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Improving the Vittae Mobile Experience
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The Vittae mobile application underwent a complete visual refresh focused on consistency, usability, and modern financial experiences.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Existing screens were redesigned with updated visual patterns, improved navigation structures, and refined user interactions.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  New features were also introduced to support evolving user needs while maintaining a consistent experience across the application.
                </p>
              </div>
              <img src={img5} alt="Improving the Vittae Mobile Experience" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Building the Group Structure Feature
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The feature enables users to manage and view financial information across multiple members through a consolidated experience, making it easier to understand collective financial positions and relationships.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The design process involved workflow exploration, user flows, wireframing, interface design, and iterative refinements to create a scalable and intuitive experience.
                </p>
              </div>
              <img src={img6} alt="Building the Group Structure Feature" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Design System & Consistency
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Maintaining consistency across dashboard and mobile experiences was an important part of the design process.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The project utilized an existing design system, reusable components, typography standards, spacing principles, and visual patterns to ensure a cohesive user experience across the platform.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  This helped improve efficiency during design iterations while maintaining product consistency.
                </p>
              </div>
              <img src={img7} alt="Design System & Consistency" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Product Impact
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The redesign contributed to a more structured and user-friendly financial management experience.
                </p>
                <div>
                  <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal mb-2">
                    Key improvements included:
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-1">
                    <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Better visual consistency</li>
                    <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Improved navigation</li>
                    <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Clearer financial information hierarchy</li>
                    <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Enhanced dashboard usability</li>
                    <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">More scalable feature experiences</li>
                  </ul>
                </div>
              </div>
              <img src={img8} alt="Product Impact" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Reflection
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Working on Wealthified strengthened my understanding of product design within a real-world financial platform.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The project helped me improve requirement analysis, client communication, workflow thinking, collaboration with developers, and designing solutions within fast-paced product environments.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  It also reinforced the importance of balancing business goals, user needs, and scalable design decisions when building digital products.
                </p>
              </div>
              <div className="flex flex-col gap-[24px]">
                <img src={img9} alt="Reflection Mobile Screens" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
                <img src={img10} alt="Reflection Additional Screens 1" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
                <img src={img11} alt="Reflection Additional Screens 2" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
              </div>
            </ScrollReveal>

          </div>
        
      </div>
    </div>
  </div>

  {/* DESKTOP VIEW - EXACTLY AS REQUESTED */}
  <div className="hidden md:flex flex-col w-full max-w-[1320px] mx-auto px-[60px] -mt-[16px] mb-0">
    <motion.img 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      src={projectDesktop1} 
      alt="Case Study Design" 
      className="w-full h-auto block object-contain" 
      style={{ imageRendering: 'auto' }} 
    />
  </div>

</main>
    </div>
  );
};

export default WealthifiedCaseStudy;
