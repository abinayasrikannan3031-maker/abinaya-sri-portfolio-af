
import homeMaintenanceProject from '../assets/home-maintenance-project.jpg';

import img1 from '../assets/homemaintenance/mobile/1.png';
import img2 from '../assets/homemaintenance/mobile/2.png';
import img3 from '../assets/homemaintenance/mobile/3.png';
import img4 from '../assets/homemaintenance/mobile/4.png';
import img5 from '../assets/homemaintenance/mobile/5.png';
import { motion } from 'framer-motion';
import projectDesktop3 from '../assets/project-desktop-3.png';

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

const HomeMaintenanceCaseStudy = () => {
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
              Home Maintenance
            </h1>
            <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] mb-[24px] break-words whitespace-normal">
              Designing a Smarter Maintenance Experience for Apartment Residents
            </p>
          </FadeIn>

          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} src={img1} alt="Hero Image" className="w-full h-auto block rounded-xl shadow-sm mb-[24px]" loading="lazy" />

          {/* Metadata Section */}
          <FadeIn delay={0.3} className="flex flex-col w-full">
            <div className="flex flex-wrap gap-x-[12px] gap-y-[16px] mb-[32px]">
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Home Repairs</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Service Marketplace</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Booking System</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Location Tracking</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Customer Support</span>
              <span className="inline-flex items-center justify-center h-[36px] px-[16px] bg-[#4B2307] text-[#FFF8DC] text-[13px] font-medium rounded-full shadow-sm">Mobile Experience</span>
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-6 mb-[48px]">
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
          <div className="flex flex-col w-full gap-[64px]">

            {/* SECTION 1 */}
            <ScrollReveal className="flex flex-col w-full">
              <div className="flex flex-col gap-[40px] mb-[24px]">
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Project Overview
                  </h2>
                  <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                    A mobile-first home maintenance platform designed to help apartment residents easily report issues, schedule services, track maintenance requests, and communicate with property management teams through a centralized experience.
                  </p>
                </div>
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Product Goal
                  </h2>
                  <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                    Create a simple and transparent maintenance management experience that reduces communication gaps, improves service visibility, and helps residents manage maintenance requests more efficiently.
                  </p>
                </div>
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    What Was The Challenge?
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      Residents often face difficulties when reporting maintenance issues, tracking service progress, and communicating with property management teams.
                    </p>
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      The lack of transparency and fragmented communication creates frustration, delays, and uncertainty throughout the maintenance process.
                    </p>
                  </div>
                </div>
              </div>
              <img src={img1} alt="Home Maintenance UI 1" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            {/* SECTION 2 */}
            <ScrollReveal className="flex flex-col w-full">
              <div className="flex flex-col gap-[40px] mb-[24px]">
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    User Research & Insights
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      Research revealed that residents wanted a faster and more organized way to manage maintenance requests.
                    </p>
                    <div>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal mb-2">Key Findings:</p>
                      <ul className="list-disc pl-5 flex flex-col gap-1">
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Difficulty tracking maintenance status</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Delayed communication and updates</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Lack of maintenance history</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Unclear service schedules</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Limited visibility into request progress</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Understanding User Needs
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal mb-2">
                      Users needed a solution that provides:
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-1">
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Easy issue reporting</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Real-time request tracking</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Service scheduling</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Clear communication channels</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Maintenance history management</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    User Journey
                  </h2>
                  <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                    Report Issue → Submit Request → Track Progress → Schedule Service → Resolve Issue → Feedback
                  </p>
                </div>
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Designing the Solution
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      The solution focused on simplifying the maintenance workflow through a structured and user-friendly experience.
                    </p>
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      The design aimed to reduce friction, improve transparency, and create a seamless experience from issue reporting to service completion.
                    </p>
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      The updated experience aimed to create a cleaner, more modern interface while supporting both new and existing product requirements.
                    </p>
                  </div>
                </div>
              </div>
              <img src={img2} alt="Home Maintenance UI 2" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            {/* SECTION 3 */}
            <ScrollReveal className="flex flex-col w-full">
              <div className="flex flex-col gap-[40px] mb-[24px]">
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Key Features
                  </h2>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Maintenance Request Management</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Quickly submit maintenance requests with descriptions, categories, and supporting details.</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Service Tracking</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Track maintenance progress through clear status updates and notifications.</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Service Scheduling</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Choose preferred dates and times for maintenance visits.</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Notifications & Updates</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Receive real-time updates throughout the service lifecycle.</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Maintenance History</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Access previous requests, service records, and maintenance history.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Wireframes & Exploration
                  </h2>
                  <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                    Early wireframes helped explore user flows, navigation patterns, and maintenance management workflows before moving into high-fidelity designs. Maintaining consistency across dashboard and mobile experiences was an important part of the design process.
                  </p>
                </div>
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Visual Design System
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      The visual system focused on clarity, accessibility, and consistency through reusable components, typography, spacing systems, and intuitive interaction patterns.
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-1">
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Colors</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Typography</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Components</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Icons</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Spacing System</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img src={img3} alt="Home Maintenance UI 3" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            {/* SECTION 4 */}
            <ScrollReveal className="flex flex-col w-full">
              <div className="flex flex-col gap-[40px] mb-[24px]">
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Final Experience
                  </h2>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Home Dashboard</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Overview of maintenance requests, upcoming services, and important updates.</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Maintenance Requests</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Easy issue reporting and request management.</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Service Tracking</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Real-time request progress and service updates.</p>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold text-[#2C2A28] mb-1">Communication & Notifications</h4>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Transparent communication between residents and management teams.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Product Impact
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal mb-2">
                      The redesigned experience aimed to:
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-1">
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Simplify maintenance management</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Improve communication transparency</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Increase service visibility</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Reduce user frustration</li>
                      <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Create a more organized maintenance workflow</li>
                    </ul>
                  </div>
                </div>
              </div>
              <img src={img4} alt="Home Maintenance UI 4" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
            </ScrollReveal>

            {/* SECTION 5 */}
            <ScrollReveal className="flex flex-col w-full">
              <div className="flex flex-col gap-[40px] mb-[24px]">
                <div>
                  <h2 className="text-[24px] font-semibold text-[#2C2A28] leading-tight mb-[16px] break-words whitespace-normal">
                    Reflection
                  </h2>
                  <div className="flex flex-col gap-4 mb-6">
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      This project strengthened my understanding of user-centered problem solving, service design, information architecture, and workflow optimization.
                    </p>
                    <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal">
                      It reinforced the importance of balancing user needs and operational requirements while designing scalable digital experiences.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal mb-2">Challenges Faced</p>
                      <ul className="list-disc pl-5 flex flex-col gap-1">
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Understanding maintenance workflows</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Balancing resident and management needs</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Organizing request tracking flows</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-[15px] font-normal text-[#7D7871] leading-[1.6] break-words whitespace-normal mb-2">Key Learnings</p>
                      <ul className="list-disc pl-5 flex flex-col gap-1">
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Service design thinking</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Information architecture</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Workflow optimization</li>
                        <li className="text-[15px] font-normal text-[#7D7871] leading-[1.6]">Designing for operational products</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <img src={img5} alt="Home Maintenance UI 5" className="w-full h-auto block rounded-xl shadow-sm" loading="lazy" />
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
      src={projectDesktop3} 
      alt="Case Study Design" 
      className="w-full h-auto block object-contain" 
      style={{ imageRendering: 'auto' }} 
    />
  </div>

</main>
    </div>
  );
};

export default HomeMaintenanceCaseStudy;
