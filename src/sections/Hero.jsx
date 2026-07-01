import { motion } from 'framer-motion';
import profileImage from '../assets/profile-street.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2 // Wait for header to fade in slightly
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      className="w-full h-auto flex flex-col justify-start pt-[32px] pb-[48px] md:pt-[100px] md:pb-[268px]"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 40%, #F9E6A3 100%)' }}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1200px] mx-auto px-6 md:px-[80px] flex flex-col items-center text-center md:items-start md:text-left"
      >
        <motion.p variants={itemVariants} className="text-[16px] md:text-[20px] text-[#7D7871] font-normal mb-4 md:mb-4">
            Hey there!
          </motion.p>

          <h1 className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-y-4 md:gap-x-4 mb-6 md:mb-6">
            <motion.span variants={itemVariants} className="whitespace-nowrap text-[32px] md:text-[52px] font-normal text-[#7D7871] leading-[1.2] md:leading-[1.1]">
              Meet Abinaya Sri!
            </motion.span>

            {/* Profile Image - Stacked cleanly on mobile, inline on desktop */}
            <motion.span variants={itemVariants} className="shrink-0 inline-flex items-center self-center">
              <div className="w-[100px] md:w-[140px] h-[50px] md:h-[68px] rounded-[16px] md:rounded-[20px] shadow-sm overflow-hidden group cursor-pointer flex items-center justify-center bg-white">
                <img
                  src={profileImage}
                  alt="Abinaya Sri"
                  className="w-full h-full object-cover object-center block transition-transform duration-[500ms] ease-out md:group-hover:scale-[1.05]"
                />
              </div>
            </motion.span>

            <motion.span variants={itemVariants} className="whitespace-nowrap text-[32px] md:text-[52px] font-normal text-[#2C2A28] leading-[1.2] md:leading-[1.1]">
              Product Designer
            </motion.span>
          </h1>

          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-4 md:gap-6">
            <h2 className="text-[24px] md:text-[52px] font-normal text-[#7D7871] leading-[1.3] md:leading-[1.2] tracking-normal max-w-[320px] md:max-w-none">
              exploring vibe coding, AI tools, and creative experimentation.
            </h2>

            <p className="text-[16px] md:text-[20px] text-[#7D7871] font-normal leading-relaxed max-w-[900px]">
              Specializes in crafting intuitive digital experiences as your Visual Thinker and Experience Crafter.
            </p>
          </motion.div>
      </motion.div>
    </section>
  );
}
