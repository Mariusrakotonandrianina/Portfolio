"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingElements from "./floatingElements";
import TypewriterText from "./typewriterText";
import ButtonHome from "./buttonHome";
import ImageHome from "./imageHome";
import {
  containerVariants,
  tagVariants,
  titleVariants,
  wordVariants,
  descriptionVariants,
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
        className="inline-block mr-1 sm:mr-2"
        style={{ transformOrigin: "50% 100%" }}
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-4 sm:py-6 md:py-8"
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
        <div className="absolute inset-0 bg-[hsl(var(--background))]/70 backdrop-blur-lg" />
      </div>

      {/* Gradient Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 md:-top-48 md:-right-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-4xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 md:-bottom-48 md:-left-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-4xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Main Container with Grid Layout - Optimized for full screen */}
      <div className="relative z-10 w-full h-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)]">
          {/* Text Content */}
          <div className="flex flex-col justify-center h-full order-1 md:order-1">
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-6 text-left w-full"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Professional Tag */}
              <motion.div
                variants={tagVariants}
                className="relative inline-block mb-3 sm:mb-4 md:mb-6"
              >
                <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-wider uppercase text-[hsl(var(--primary-foreground))] relative z-10 px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3">
                  <TypewriterText text="Développeur Full Stack" delay={0} />
                </p>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5 rounded-xl border border-[hsl(var(--primary))]/30 -z-10"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.6 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>

              {/* Main Title */}
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-[hsl(var(--foreground))] tracking-tight mb-4 sm:mb-5 md:mb-6 lg:mb-8"
                variants={titleVariants}
              >
                {splitText("Bonjour, je suis")}
                <br />
                <motion.span
                  className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 bg-clip-text text-transparent font-extrabold tracking-wider"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  {splitText("Dimithry Marius")}
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.div
                className="space-y-3 sm:space-y-4 md:space-y-5 w-full mb-4 sm:mb-6 md:mb-8 sm:ml-4   md:ml-8"
                variants={descriptionVariants}
              >
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl opacity-90 leading-relaxed text-[hsl(var(--foreground))]/85 font-medium"
                  whileHover={{ scale: 1.01, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Développeur passionné spécialisé dans la création d'applications
                  web modernes et performantes. J'aide les entreprises à
                  transformer leurs idées en solutions digitales innovantes.
                </motion.p>

                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl opacity-80 leading-relaxed text-[hsl(var(--foreground))]/75"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Avec plus de 3 ans d'expérience, je maîtrise les technologies
                  frontend et backend :
                  <motion.span
                    className="text-[hsl(var(--primary))] font-semibold"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB
                  </motion.span>
                  et bien d'autres.
                </motion.p>

                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl opacity-75 leading-relaxed text-[hsl(var(--foreground))]/70"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Mon approche combine créativité et expertise technique pour
                  livrer des solutions sur mesure qui répondent aux besoins
                  spécifiques de chaque client. De la conception à la mise en
                  production, je vous accompagne dans tous vos projets web.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          {/* Image and Buttons */}
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 order-2 md:order-2 h-full pl-0 md:pl-2 lg:pl-3">
            <div className="flex-1 flex items-center justify-center">
              <ImageHome />
            </div>
            <div className="flex-shrink-0 mb-16">
              <ButtonHome />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}