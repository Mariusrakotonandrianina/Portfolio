import { motion } from "framer-motion";
import Link from "next/link";

// Assuming these variants are defined elsewhere
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98 }
};

export default function ButtonHome() {
  const animateButtonText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        style={{
          fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
          fontWeight: "400",
          letterSpacing: "-0.01em"
        }}
        transition={{
          duration: 0.2,
          delay: index * 0.03,
          ease: "easeOut",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 flex-wrap justify-center">
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Link
              href="#projects"
              className="relative inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 
                    text-[hsl(var(--foreground))] font-semibold text-xs sm:text-sm md:text-base lg:text-lg 
                    bg-[hsl(var(--primary))]/10 hover:bg-[hsl(var(--primary))]/20 rounded-lg shadow-md border border-[hsl(var(--primary))]/20 transition-all duration-300 group"
              style={{
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                <motion.svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ rotate: 20, scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </motion.svg>
                <span 
                  className="font-semibold whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: "600",
                    letterSpacing: "-0.02em"
                  }}
                >
                  {animateButtonText("Découvrir Plus")}
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Contacter Moi Button */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Link
              href="#contacts"
              className="relative inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 
                    text-[hsl(var(--foreground))] font-semibold text-xs sm:text-sm md:text-base lg:text-lg 
                    bg-[hsl(var(--primary))]/10 hover:bg-[hsl(var(--primary))]/20 rounded-lg shadow-md border border-[hsl(var(--primary))]/20 transition-all duration-300 group"
              style={{
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                <motion.svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </motion.svg>
                <span 
                  className="font-semibold whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: "600",
                    letterSpacing: "-0.02em"
                  }}
                >
                  {animateButtonText("Contacter Moi")}
                </span>
              </span>
            </Link>
          </motion.div>

          {/* Voir Mon CV Button */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="inline-block"
          >
            <Link
              href="/cv/mon-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 
                    text-[hsl(var(--foreground))] font-semibold text-xs sm:text-sm md:text-base lg:text-lg 
                    bg-[hsl(var(--primary))]/10 hover:bg-[hsl(var(--primary))]/20 rounded-lg shadow-md border border-[hsl(var(--primary))]/20 transition-all duration-300 group"
              style={{
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                <motion.svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </motion.svg>
                <span 
                  className="font-semibold whitespace-nowrap"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: "600",
                    letterSpacing: "-0.02em"
                  }}
                >
                  {animateButtonText("Voir Mon CV")}
                </span>
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}