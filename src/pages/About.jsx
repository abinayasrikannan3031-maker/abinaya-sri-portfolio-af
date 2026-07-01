import { motion } from 'framer-motion';
import MobileFadeIn from '../components/MobileFadeIn';

import figmaLogo from '../assets/logo_figma.png';
import chatgptLogo from '../assets/logo_chatgpt.png';
import claudeLogo from '../assets/logo_claude.png';
import antigravityLogo from '../assets/logo_antigravity.png';
import vscodeLogo from '../assets/logo_vscode.png';
import photoshopLogo from '../assets/logo_photoshop.png';
import lovableLogo from '../assets/logo_lovable.png';
import profileImage from '../assets/profile.jpg';
import React from 'react';

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

const About = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-[#F8F7F4] flex flex-col">
      <main className="w-full flex-grow">
        {/* Introduction Section */}
        <section
          className="w-full h-auto flex flex-col justify-start pt-[32px] pb-[48px] md:pt-[100px] md:pb-0"
        >
          <div className="w-full max-w-[1200px] mx-auto px-6 md:pr-[80px] md:pl-[42px] flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-[80px] items-center md:items-start justify-center">
            <FadeIn className="w-full flex flex-col gap-6 items-center text-center md:items-start md:text-left pt-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-[#333]">
                Hi, I'm Abinaya Sri
              </h1>
              <div className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed font-light flex flex-col gap-5 text-center md:text-left max-w-[540px] lg:max-w-[700px]">
                <p>
                  I started my journey in product design with a strong desire to see people interact with digital experiences and how thoughtful choices can simplify everyday tasks. I find joy in removing friction from user flows, making products more accessible and delightful for everyone.
                </p>
                <p>
                  Working at the intersection of design, technology, and user empathy, I believe in combining aesthetic appeal with functional clarity.
                </p>
                <p>
                  Today, I focus on crafting scalable design systems, building interactive prototypes, and creating user-centered solutions that tell meaningful stories.
                </p>
              </div>
              <div className="mt-2">
                <a
                  href="/resume/Abinaya_Sri_Resume.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 rounded-full bg-[#6B3A14] text-[#F5D28B] hover:bg-[#5A2F10] transition-all duration-[250ms] active:-translate-y-[2px] md:active:translate-y-0 font-medium text-[15px]"
                >
                  Download CV
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="w-full md:w-[290px] flex-shrink-0 flex justify-center md:justify-start">
              <MobileFadeIn>
                <img
                  src={profileImage}
                  alt="Abinaya Sri"
                  className="w-full max-w-[389px] md:max-w-none h-[400px] sm:h-[500px] md:h-[500px] object-cover object-left rounded-none rounded-br-[10px]"
                />
              </MobileFadeIn>
            </FadeIn>
          </div>
        </section>

        {/* My Design Path Section */}
        <ScrollReveal className="w-full">
          <section className="w-full max-w-[1200px] mx-auto px-6 md:pr-[80px] md:pl-[42px] py-6 md:py-[60px]">
            <h2 className="text-2xl md:text-3xl font-medium text-[#333] mb-8 text-left">My Design Path</h2>
            <div className="flex flex-col gap-0">
              {/* Experience Item 1 */}
              <div className="pb-8 border-b border-[#E8D5B5]">
                <h3 className="text-xl font-semibold text-[#4B2307] mb-1">Product Designer - I</h3>
                <h4 className="text-[16px] text-gray-700 font-medium mb-1">Dexio LabX Pvt. Ltd</h4>
                <span className="block text-[14px] text-gray-500 font-medium mb-4">Jan 2026 – May 2026</span>
                <p className="text-gray-600 font-light leading-relaxed max-w-[800px]">
                  Promoted from Product Design Intern to Product Designer within three months. Led end-to-end design across web and mobile products, creating user flows, features, and interfaces while collaborating with developers using Figma and AI-assisted workflows.
                </p>
              </div>
              {/* Experience Item 2 */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-[#4B2307] mb-1">Product Design Intern</h3>
                <h4 className="text-[16px] text-gray-700 font-medium mb-1">Dexio LabX Pvt. Ltd</h4>
                <span className="block text-[14px] text-gray-500 font-medium mb-4">Oct 2025 – Jan 2026</span>
                <p className="text-gray-600 font-light leading-relaxed max-w-[800px]">
                  Contributed to early-stage design across web and mobile products, gaining hands-on experience in design systems, prototyping, and AI-assisted workflows — leading to a full-time Product Designer role within three months.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* What I Enjoy Building Section */}
        <ScrollReveal className="w-full">
          <section className="w-full max-w-[1200px] mx-auto px-6 md:pr-[80px] md:pl-[42px] py-6 md:py-[60px]">
            <h2 className="w-full text-2xl md:text-3xl font-medium text-[#333] mb-8 md:mb-6 text-left">What I Enjoy Building</h2>
            <div className="w-full flex flex-wrap gap-3 justify-start">
              {["UX Research", "Information Architecture", "Wireframing", "Usability Testing", "Design Systems", "Problem Solving", "Visual UI Design", "High-Fidelity Design", "User Flows", "Interaction Design", "Accessibility", "UX Thinking", "Responsive Design", "Prototyping"].map((skill, i) => (
                <MobileFadeIn key={skill} delay={i * 30}>
                  <span className="inline-flex items-center justify-center px-4 py-1.5 bg-[#F2EFEC] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-none text-[#555555] text-[13px] font-normal whitespace-nowrap">
                    {skill}
                  </span>
                </MobileFadeIn>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* My Creative Stack Section */}
        <ScrollReveal className="w-full">
          <section className="w-full max-w-[1200px] mx-auto px-6 md:pr-[80px] md:pl-[42px] py-6 md:py-[60px]">
            <h2 className="w-full text-2xl md:text-3xl font-medium text-[#333] mb-[24px] md:mb-[60px] text-left">My Creative Stack</h2>
            <div className="w-full flex lg:justify-start">
              <div className="w-full lg:w-fit flex flex-col gap-3 lg:items-center">
                {/* Row 1 */}
                <div className="flex flex-wrap gap-3 justify-start lg:justify-center">
                  {[
                    { icon: <img src={figmaLogo} alt="Figma" className="h-[24px] w-auto object-contain" />, name: "Figma", desc: "Design" },
                    { icon: <img src={chatgptLogo} alt="ChatGPT" className="h-[24px] w-auto object-contain" />, name: "ChatGPT", desc: "Content & Ideation" },
                    { icon: <img src={claudeLogo} alt="Claude" className="h-[24px] w-auto object-contain" />, name: "Claude", desc: "Research & Vibe coding" },
                    { icon: <img src={antigravityLogo} alt="Google Antigravity" className="h-[24px] w-auto object-contain" />, name: "Google Antigravity", desc: "AI Coding" },
                  ].map((tool, i) => (
                    <MobileFadeIn key={tool.name} delay={i * 100}>
                      <div className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-4 md:py-2 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-none border border-[#E8D5B5] bg-transparent">
                        <div className="flex-shrink-0">{tool.icon}</div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[13px] md:text-[14px] font-medium text-[#333] leading-tight">{tool.name}</span>
                          <span className="text-[11px] md:text-[12px] text-gray-500 font-light leading-tight mt-[2px]">{tool.desc}</span>
                        </div>
                      </div>
                    </MobileFadeIn>
                  ))}
                </div>
                {/* Row 2 */}
                <div className="flex flex-wrap gap-3 justify-start lg:justify-center">
                  {[
                    { icon: <img src={vscodeLogo} alt="VS Code" className="h-[24px] w-auto object-contain" />, name: "VS Code", desc: "Coding" },
                    { icon: <img src={photoshopLogo} alt="Photoshop" className="h-[24px] w-auto object-contain" />, name: "Photoshop", desc: "Visual Design & Image Editing" },
                    { icon: <img src={lovableLogo} alt="Lovable" className="h-[24px] w-auto object-contain" />, name: "Lovable", desc: "Website Builder" },
                  ].map((tool, i) => (
                    <MobileFadeIn key={tool.name} delay={i * 100}>
                      <div className="flex items-center gap-2 px-4 py-2 md:gap-3 md:px-4 md:py-2 rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] rounded-br-none border border-[#E8D5B5] bg-transparent">
                        <div className="flex-shrink-0">{tool.icon}</div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[13px] md:text-[14px] font-medium text-[#333] leading-tight">{tool.name}</span>
                          <span className="text-[11px] md:text-[12px] text-gray-500 font-light leading-tight mt-[2px]">{tool.desc}</span>
                        </div>
                      </div>
                    </MobileFadeIn>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Education Section */}
        <ScrollReveal className="w-full">
          <section className="w-full max-w-[1200px] mx-auto px-6 md:pr-[80px] md:pl-[42px] py-6 md:py-[60px]">
            <h2 className="text-2xl md:text-3xl font-medium text-[#333] mb-8">Education</h2>
            <div className="flex flex-col gap-10">
              {/* Education Item 1 */}
              <div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                  <h3 className="text-xl font-semibold text-[#4B2307]">UI/UX Designing Course</h3>
                  <span className="text-sm text-gray-500 font-medium mt-1 md:mt-0">June 2024 - Sep 2024</span>
                </div>
                <h4 className="text-lg text-gray-700 font-medium mb-3">Aspire Design School</h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Transferred from fashion design to UX/UI design, combining a strong visual foundation with user-centered problem solving to create intuitive digital experiences.
                </p>
              </div>
              {/* Education Item 2 */}
              <div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                  <h3 className="text-xl font-semibold text-[#4B2307]">B.Sc Fashion Technology & Costume Designing</h3>
                  <span className="text-sm text-gray-500 font-medium mt-1 md:mt-0">2021 - 2024</span>
                </div>
                <h4 className="text-lg text-gray-700 font-medium mb-3">Shrimati Indira Gandhi College</h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  Studied garment construction, textile science, and pattern making. Focused on translating creative fashion concepts into technically precise designs.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Off the Clock Section */}
        <ScrollReveal className="w-full">
          <section className="w-full max-w-[1200px] mx-auto py-6 md:py-[60px]">
            <h2 className="text-2xl md:text-3xl font-medium text-[#333] mb-8 text-left px-6 md:pr-[80px] md:pl-[42px]">Off the Clock</h2>
            <div className="relative w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden flex">
              <div
                className="flex w-max hover:[animation-play-state:paused]"
                style={{ animation: 'marquee 75s linear infinite' }}
              >
                {/* Original Set */}
                <div className="flex flex-row gap-6 pr-6">
                  {[
                    { bw: '/off-the-clock/burger-bw.png', color: '/off-the-clock/burger-color.png', alt: 'Burger' },
                    { bw: '/off-the-clock/coffee-bw.png', color: '/off-the-clock/coffee-color.png', alt: 'Coffee' },
                    { bw: '/off-the-clock/beach-bw.png', color: '/off-the-clock/beach-color.png', alt: 'Beach' },
                    { bw: '/off-the-clock/window-bw.png', color: '/off-the-clock/window-color.png', alt: 'Window Quote' },
                    { bw: '/off-the-clock/laptop-bw.png', color: '/off-the-clock/laptop-color.png', alt: 'Laptop and Pepsi' },
                    { bw: '/off-the-clock/footprints-bw.png', color: '/off-the-clock/footprints-color.png', alt: 'Footprints' },
                    { bw: '/off-the-clock/camera-bw.png', color: '/off-the-clock/camera-color.png', alt: 'Camera Portrait' },
                  ].map((item, index) => (
                    <div
                      key={`orig-${index}`}
                      className="group relative overflow-hidden rounded-none bg-[#EAE8E4] cursor-pointer flex-shrink-0 w-[280px] sm:w-[360px] h-[400px] sm:h-[520px]"
                    >
                      <img src={item.bw} alt={`${item.alt} Black and White`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-105" />
                      <img src={item.color} alt={`${item.alt} Color`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-all duration-[600ms] ease-in-out group-hover:opacity-100 group-hover:scale-105" />
                    </div>
                  ))}
                </div>

                {/* Duplicate Set */}
                <div className="flex flex-row gap-6 pr-6">
                  {[
                    { bw: '/off-the-clock/burger-bw.png', color: '/off-the-clock/burger-color.png', alt: 'Burger' },
                    { bw: '/off-the-clock/coffee-bw.png', color: '/off-the-clock/coffee-color.png', alt: 'Coffee' },
                    { bw: '/off-the-clock/beach-bw.png', color: '/off-the-clock/beach-color.png', alt: 'Beach' },
                    { bw: '/off-the-clock/window-bw.png', color: '/off-the-clock/window-color.png', alt: 'Window Quote' },
                    { bw: '/off-the-clock/laptop-bw.png', color: '/off-the-clock/laptop-color.png', alt: 'Laptop and Pepsi' },
                    { bw: '/off-the-clock/footprints-bw.png', color: '/off-the-clock/footprints-color.png', alt: 'Footprints' },
                    { bw: '/off-the-clock/camera-bw.png', color: '/off-the-clock/camera-color.png', alt: 'Camera Portrait' },
                  ].map((item, index) => (
                    <div
                      key={`dup-${index}`}
                      className="group relative overflow-hidden rounded-none bg-[#EAE8E4] cursor-pointer flex-shrink-0 w-[280px] sm:w-[360px] h-[400px] sm:h-[520px]"
                    >
                      <img src={item.bw} alt={`${item.alt} Black and White`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[600ms] ease-out group-hover:scale-105" />
                      <img src={item.color} alt={`${item.alt} Color`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-all duration-[600ms] ease-in-out group-hover:opacity-100 group-hover:scale-105" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal className="w-full mb-[80px] md:mb-0">
          <section className="w-full max-w-[1200px] mx-auto px-6 md:px-[80px] flex flex-col items-start justify-start text-left lg:items-center lg:justify-center lg:text-center pt-[48px] pb-[48px] md:py-[60px]">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#333] mb-4">Building something meaningful?</h2>
            <p className="text-xl md:text-2xl text-[#E3A12E] font-normal mb-8">
              I help transform ideas into thoughtful, intuitive, and user-centered digital experiences.
            </p>
            <p className="text-gray-600 font-light max-w-2xl lg:mx-auto mb-[24px] md:mb-10">
              Whether it's a new product, a redesign, or an early concept, I enjoy turning complex challenges into intuitive and meaningful experiences.
            </p>
            <a
              href="https://wa.me/917010933667"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[180px] h-[50px] md:w-fit md:h-auto md:px-6 md:py-2.5 bg-[#6B3A14] md:bg-[#4B2307] text-[#FFF8DC] rounded-full transition-colors duration-300 font-medium text-[16px] md:text-[15px] flex items-center justify-center gap-2 md:hover:bg-[#3A1B05] md:hover:scale-105"
            >
              Let's talk <span className="text-[16px] leading-none">&#8594;</span>
            </a>
          </section>
        </ScrollReveal>

      </main>
    </div>
  );
};

export default About;
