"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import FloatingElements from "./floatingElements";
import TypewriterText from "./typewriterText";
import {
  containerVariants,
  tagVariants,
  titleVariants,
  wordVariants,
  descriptionVariants,
  buttonVariants,
  imageVariants,
} from "../variants/variants";

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
        className="inline-block mr-3"
        style={{ transformOrigin: "50% 100%" }}
      >
        {word}
      </motion.span>
    ));
  };

  // Animation pour le texte des boutons
  const animateButtonText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        whileHover={{
          y: -2,
          color: "hsl(var(--primary))",
          scale: 1.1,
          textShadow: "0 0 8px hsl(var(--primary))",
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
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-20"
      ref={sectionRef}
    >
      {/* Background Image with Semi-Transparent Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background1.jpeg"
          alt="Background Image"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[hsl(var(--background))]/65 backdrop-blur-md" />
      </div>

      {/* Gradient Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-4xl animate-pulse"></div>
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-4xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-112 h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-20 lg:px-24 py-24 min-h-[800px] w-full relative z-10 max-w-8xl mx-auto gap-20 lg:gap-32">
        {/* Text Content */}
        <motion.div
          className="space-y-8 text-center lg:text-left lg:w-1/2 max-w-4xl"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Professional Tag */}
          <motion.div variants={tagVariants} className="relative inline-block mb-10">
          <p className="font-bold text-xl md:text-3xl tracking-wider uppercase text-[hsl(var(--primary-foreground))] relative z-10 px-8 py-4">
            <TypewriterText text="Développeur Full Stack" delay={0} />
          </p>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/15 to-[hsl(var(--primary))]/5 rounded-xl border border-[hsl(var(--primary))]/25 -z-10"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.8 }}
              style={{ transformOrigin: "left" }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[hsl(var(--foreground))] tracking-tight mb-10"
            variants={titleVariants}
          >
            {splitText("Bonjour, je suis")}
            <br />
            <motion.span
              className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 bg-clip-text text-transparent font-extrabold tracking-wider"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              {splitText("Dimithry Marius")}
            </motion.span>
          </motion.h1>

          {/* Description with Animation */}
          <motion.p
            className="text-lg md:text-xl xl:text-2xl max-w-3xl mx-auto lg:mx-0 opacity-80 leading-relaxed text-[hsl(var(--foreground))]/70 font-medium mb-12"
            variants={descriptionVariants}
            whileHover={{ scale: 1.02, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Développeur passionné spécialisé dans la création d'applications web modernes et performantes. 
            J'aide les entreprises à transformer leurs idées en solutions digitales innovantes avec 
            <motion.span
              className="text-[hsl(var(--primary))] font-semibold"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              React, Next.js, et Node.js
            </motion.span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-14"
            variants={containerVariants}
          >
            {/* Découvrir Plus Button */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="inline-block"
            >
              <Link
                href="#projects"
                className="relative inline-flex items-center justify-center px-4 py-2 
                  text-[hsl(var(--foreground))] font-bold text-lg 
                  transition-all duration-400 group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 20, scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </motion.svg>
                  <span className="font-bold">
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
                className="relative inline-flex items-center justify-center px-4 py-2 
                  text-[hsl(var(--foreground))] font-bold text-lg 
                  transition-all duration-400 group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                  <span className="font-bold">
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
                className="relative inline-flex items-center justify-center px-4 py-2 
                  text-[hsl(var(--foreground))] font-bold text-lg 
                  transition-all duration-400 group"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                  <span className="font-bold">
                    {animateButtonText("Voir Mon CV")}
                  </span>
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Professional Image */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center items-center mb-16 lg:mb-0"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/25 to-[hsl(var(--primary))]/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -inset-12 border-2 border-[hsl(var(--primary))]/30 rounded-full"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden shadow-2xl border-4 border-[hsl(var(--primary))]/25"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/image/2613.JPG"
                alt="RAKOTONANDRIANINA Dimithry Marius - Développeur Full Stack"
                width={450}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/25 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-400"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}