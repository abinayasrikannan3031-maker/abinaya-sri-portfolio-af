import autistemProject from '../assets/autism/autistem-project.jpg';

import img1 from '../assets/autism/mobile/1_hero.png';
import img2 from '../assets/autism/mobile/2_problem.png';
import img3 from '../assets/autism/mobile/3_research.png';
import img4 from '../assets/autism/mobile/4_design_system.png';
import img5 from '../assets/autism/mobile/5_user_flow.png';
import img6 from '../assets/autism/mobile/6_final_screens.png';
import img7 from '../assets/autism/mobile/7_product_impact.png';
import img8 from '../assets/autism/mobile/8_conclusion.png';
import { motion } from 'framer-motion';
import projectDesktop2 from '../assets/project-desktop-2.png';

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

const AutistemCaseStudy = () => {
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
              Autistem LLM
            </h1>
            <p className="text-[15px] font-normal text-[#7D7871] mb-[32px] break-words whitespace-normal">
              Designing a Supportive Care Experience for Families with Autistic Children
            </p>
            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} src={img1} alt="Hero Section" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
          </FadeIn>

          {/* Metadata Section */}
          <FadeIn delay={0.3} className="flex flex-col w-full mt-[32px]">
            <div className="flex flex-wrap gap-x-[12px] gap-y-[16px] mb-[32px]">
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Autism Care</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Records Management</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Scheduling System</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Family Network Mapping</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Mobile App</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Care Coordination</span>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              <div>
                <h3 className="text-[13px] font-bold text-[#2C2A28] uppercase tracking-wide mb-2">MY ROLE</h3>
                <p className="text-[14px] text-[#7D7871] leading-relaxed">Product Designer<br />Design, Visual Design, User Flows, Rapid Prototyping</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#2C2A28] uppercase tracking-wide mb-2">DELIVERABLES</h3>
                <p className="text-[14px] text-[#7D7871] leading-relaxed">User Flows<br />Design System<br />Interactive Prototypes<br />Developer Handoff</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#2C2A28] uppercase tracking-wide mb-2">TEAM</h3>
                <p className="text-[14px] text-[#7D7871] leading-relaxed">Senior Product Designer<br />Designers<br />Product Managers<br />Developers</p>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-[#2C2A28] uppercase tracking-wide mb-2">YEAR</h3>
                <p className="text-[14px] text-[#7D7871] leading-relaxed">2026 – Present</p>
              </div>
            </div>
          </FadeIn>

          {/* Sections Wrapper */}
          <div className="flex flex-col w-full gap-[64px] mt-[48px]">

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                What Was The Problem?
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Parents of children with Autism Spectrum Disorder often manage medical records, therapy schedules, behavioral observations, and daily routines through fragmented systems such as WhatsApp chats, manual notes, reminders, and paper documents.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  This created emotional stress, poor organization, and difficulty coordinating care between parents, therapists, schools, and caregivers.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The goal was to design a centralized mobile experience that simplifies caregiving workflows, improves accessibility, and supports structured daily care management for families with autistic children.
                </p>
              </div>
              <img src={img2} alt="What Was The Problem?" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Understanding The Challenges Of Daily Caregiving
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Parents of children with Autism Spectrum Disorder often manage medical records, therapy schedules, behavioral observations, and daily routines through fragmented systems such as WhatsApp chats, manual notes, reminders, and paper documents.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  This created emotional stress, poor organization, and difficulty coordinating care between parents, therapists, schools, and caregivers.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The goal was to design a centralized mobile experience that simplifies caregiving workflows, improves accessibility, and supports structured daily care management for families with autistic children.
                </p>
              </div>
              <img src={img3} alt="Understanding The Challenges Of Daily Caregiving" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Understanding Parent & Caregiver Needs
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The design process focused on understanding how families manage autism care in their daily lives, including routines, medications, emotional patterns, appointments, and caregiver coordination.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Special attention was given to reducing cognitive overload and simplifying interactions so caregivers could quickly access important information during stressful situations.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The experience was designed around structured routines, behavioral tracking, scheduling systems, emergency support, and centralized record management to create a calmer and more organized caregiving ecosystem. The platform was designed to support structured daily management while creating a more supportive and accessible experience for families.
                </p>
              </div>
              <img src={img4} alt="Understanding Parent & Caregiver Needs" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Building A Consistent Caregiving Design System
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The design process focused on understanding how families manage autism care in their daily lives, including routines, medications, emotional patterns, appointments, and a structured design system was created to maintain consistency across onboarding, scheduling, behavioral logs, medical records, reminders, and caregiver collaboration features. caregiver coordination.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The interface was designed with accessible typography, clear visual hierarchy, reusable components, and calming visual patterns to support usability for parents and caregivers during emotionally demanding workflows.
                </p>
              </div>
              <img src={img5} alt="Building A Consistent Caregiving Design System" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Designing With Empathy & Accessibility
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Parents and caregivers of children with Autism Spectrum Disorder often face emotional, behavioral, and daily caregiving challenges while managing routines, therapy schedules, medical records, medications, school communication, and behavioral observations.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The experience was designed with a strong focus on supporting caregivers through structured workflows, simplified navigation, accessible interactions, and centralized child-related information.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Every feature — including scheduling, behavioral logs, medical records, reminders, emergency support, caregiver collaboration, and activity tracking — was thoughtfully designed to help families better manage day-to-day autism care while reducing cognitive overload and improving continuity of care.
                </p>
              </div>
              <img src={img6} alt="Designing With Empathy & Accessibility" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Supporting Structured Daily Care
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  To simplify these emotionally demanding workflows, the platform introduced centralized scheduling, activity tracking, behavioral logs, reminders, medical record management, and caregiver collaboration tools within one connected experience.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Each feature was refined through implementation discussions, usability thinking, and interaction improvements to ensure the experience remained accessible, intuitive, and supportive for caregivers managing daily autism care.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Every feature — including scheduling, behavioral logs, medical records, reminders, emergency support, caregiver collaboration, and activity tracking — was thoughtfully designed to help families better manage day-to-day autism care while reducing cognitive overload and improving continuity of care.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Special attention was given to simplifying navigation, organizing child-related information, and reducing friction across scheduling, records management, behavioral tracking, and caregiver collaboration workflows.
                </p>
              </div>
              <img src={img7} alt="Supporting Structured Daily Care" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Product Impact
              </h2>
              <div className="flex flex-col gap-4 mb-[24px]">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Autistem was designed to create a more organized and supportive caregiving experience for families of children with Autism Spectrum Disorder.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  By centralizing medical records, schedules, reminders, behavioral logs, emergency support, and caregiver coordination into one connected platform, the product helped simplify emotionally demanding caregiving workflows.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The platform focused on improving accessibility, continuity of care, and structured daily management for parents, therapists, schools, and support teams.
                </p>
              </div>
              <img src={img8} alt="Product Impact" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal className="flex flex-col w-full">
              <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                Conclusion
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Designing Autistem provided valuable experience in understanding the emotional and operational challenges families face while caring for children with Autism Spectrum Disorder.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  The project focused on creating a structured, accessible, and supportive caregiving experience through simplified workflows, centralized child management systems, behavioral tracking, scheduling, and caregiver collaboration tools.
                </p>
                <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                  Working on this project strengthened my understanding of healthcare UX, accessibility, caregiver-centered design, and collaborative product development.
                </p>
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
      src={projectDesktop2} 
      alt="Case Study Design" 
      className="w-full h-auto block object-contain" 
      style={{ imageRendering: 'auto' }} 
    />
  </div>

</main>
    </div>
  );
};

export default AutistemCaseStudy;
