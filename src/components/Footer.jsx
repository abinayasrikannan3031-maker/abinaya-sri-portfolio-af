import { FaBehance, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col font-sans"
    >
      {/* Main Dark Brown Footer */}
      <div className="w-full bg-[#4B2307] h-auto md:h-[60px] flex items-center">
        <div className="w-full h-full max-w-[1920px] mx-auto px-6 md:px-[80px] flex flex-col md:flex-row justify-between items-center py-4 md:py-0">

          {/* Left Side: Contact */}
          <div className="flex flex-col md:flex-row items-center h-full gap-2 md:gap-6">
            <div className="flex items-center gap-2.5">
              <FaPaperPlane className="text-[#E3A12E] text-lg" />
              <span className="text-[#FFF8DC] text-[14px] tracking-wide font-light">Say <span className="font-semibold">"Hello"</span></span>
            </div>
            <a
              href="mailto:abinaya.sri.uxui@gmail.com"
              className="text-[#FFF8DC] text-[13px] font-light md:hover:text-[#E3A12E] transition-colors duration-250"
            >
              abinaya.sri.uxui@gmail.com
            </a>
          </div>

          {/* Right Side: Socials & Copyright */}
          <div className="flex flex-col md:flex-row items-center h-full gap-3 md:gap-6 mt-2 md:mt-0">
            <div className="flex items-center gap-3">
              <a
                href="https://www.behance.net/abinayakannan2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                className="w-[36px] h-[36px] md:w-[28px] md:h-[28px] rounded-full bg-[#E3A12E] flex items-center justify-center text-[#4B2307] md:hover:brightness-110 md:hover:scale-105 transition-all duration-250"
              >
                <FaBehance className="text-[16px] md:text-[14px] md:translate-y-[0.5px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/abinaya-sri-513608309"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[36px] h-[36px] md:w-[28px] md:h-[28px] rounded-full bg-[#E3A12E] flex items-center justify-center text-[#4B2307] md:hover:brightness-110 md:hover:scale-105 transition-all duration-250"
              >
                <FaLinkedinIn className="text-[15px] md:text-[13px] md:translate-y-[0.5px]" />
              </a>
            </div>
            <span className="text-[#FFF8DC] text-[13px] font-light tracking-wide">
              © 2026 Abinaya
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Gold Strip */}
      <div className="w-full h-[36px] bg-[#E3A12E] flex justify-center items-center">
        <span className="text-[#4B2307] text-[12px] font-semibold">Made with Google Antigravity.</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
