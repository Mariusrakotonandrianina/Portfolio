"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "spring",
      stiffness: 120,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.05,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.3,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.5,
      type: "spring",
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.05,
    y: -3,
    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    y: 0,
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: 5,
    x: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particules flottantes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-[hsl(var(--primary))]/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-[hsl(var(--primary))]/40 rounded-full"
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-[hsl(var(--primary))]/25 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Formes géométriques */}
      <motion.div
        className="absolute top-16 right-16 w-16 h-16 border-2 border-[hsl(var(--primary))]/20 rounded-lg"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-16 left-16 w-12 h-12 border-2 border-[hsl(var(--primary))]/15 rounded-full"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

const TypewriterText: React.FC<{ text: string; delay?: number }> = ({
  text,
  delay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * 50);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span className="relative">
      {displayedText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-[hsl(var(--primary))] ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
};

export default function Accueil({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  const splitText = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        variants={wordVariants}
        className="inline-block mr-2"
        style={{ transformOrigin: "50% 100%" }}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-16"
      ref={sectionRef}
    >
      {/* Arrière-plan avec dégradés */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[hsl(var(--primary))]/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Éléments flottants */}
      <FloatingElements />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 lg:px-20 py-16 min-h-[700px] w-full relative z-10 max-w-8xl mx-auto gap-16 lg:gap-24">
        
        {/* Contenu textuel */}
        <motion.div
          className="space-y-10 text-center lg:text-left lg:w-1/2 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Tag professionnel */}
          <motion.div variants={tagVariants} className="relative inline-block mb-8">
            <motion.p
              className="font-bold text-xl md:text-2xl tracking-widest uppercase text-[hsl(var(--primary))] relative z-10 px-6 py-3"
              whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
              transition={{ duration: 0.3 }}
            >
              <TypewriterText text="Développeur Full Stack" delay={500} />
            </motion.p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--primary))]/5 rounded-xl border border-[hsl(var(--primary))]/20 -z-10"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.5 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[hsl(var(--foreground))] tracking-tight mb-8"
            variants={titleVariants}
          >
            {splitText("Bonjour, je suis")}
            <br />
            <motion.span
              className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 bg-clip-text text-transparent font-extrabold tracking-wider"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {splitText("Dimithry Marius")}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl xl:text-2xl max-w-2xl mx-auto lg:mx-0 opacity-80 leading-relaxed text-[hsl(var(--foreground))]/70 font-medium mb-10"
            variants={descriptionVariants}
          >
            Développeur passionné spécialisé dans la création d'applications web modernes et performantes. 
            J'aide les entreprises à transformer leurs idées en solutions digitales innovantes avec 
            <span className="text-[hsl(var(--primary))] font-semibold"> React, Next.js, et Node.js</span>.
          </motion.p>



          {/* Boutons d'action */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-12">
            {/* Bouton principal - Portfolio */}
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="#projects"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-[hsl(var(--primary))] 
                  text-[hsl(var(--primary-foreground))] font-semibold rounded-xl overflow-hidden 
                  transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </motion.svg>
                  Portfolio
                </span>
                {/* Effet de brillance */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </motion.div>

            {/* Bouton secondaire - Contact */}
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="#contacts"
                className="relative inline-flex items-center justify-center px-8 py-4 border-2 border-[hsl(var(--primary))] 
                  text-[hsl(var(--primary))] font-semibold rounded-xl overflow-hidden 
                  transition-all duration-300 hover:text-[hsl(var(--primary-foreground))] group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                  Contact
                </span>
                {/* Effet de remplissage */}
                <motion.div
                  className="absolute inset-0 bg-[hsl(var(--primary))]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </Link>
            </motion.div>

            {/* Bouton CV - Compact */}
            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05, rotate: 3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/cv/mon-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-6 py-4 
                  text-[hsl(var(--foreground))] font-semibold rounded-xl 
                  transition-all duration-300 group border border-[hsl(var(--border))]
                  hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]
                  hover:shadow-md bg-[hsl(var(--card))]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                  CV
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Image professionnelle */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center items-center mb-12 lg:mb-0 mt-30"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Arrière-plan décoratif */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Cercle décoratif */}
            <motion.div
              className="absolute -inset-10 border-2 border-[hsl(var(--primary))]/30 rounded-full"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Image principale */}
            <motion.div
              className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden shadow-2xl border-4 border-[hsl(var(--primary))]/20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/image/2613.JPG"
                alt="RAKOTONANDRIANINA Dimithry Marius - Développeur Full Stack"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
              
              {/* Overlay au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}