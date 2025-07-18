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
          src="/image/background3.jpeg"
          alt="Background Image"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[hsl(var(--background))]/100 backdrop-blur-lg" />
      </div>

      {/* Gradient Backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 md:-top-48 md:-right-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-4xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 md:-bottom-48 md:-left-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-4xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Main Container with Grid Layout - Optimized for all screen sizes */}
      <div className="relative z-10 w-full h-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-center min-h-[(calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)]">
          {/* Text Content */}
          <div className="flex flex-col justify-center h-full">
            <motion.div
              className="space-y-2 sm:space-y-3 md:space-y-4 text-left w-full"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Professional Tag - Centré */}
              <motion.div
                variants={tagVariants}
                className="relative flex justify-center mb-2 sm:mb-3 md:mb-4"
              >
                <div className="relative inline-block mb-3 sm:mb-4 md:mb-5">
                  <p className="text-center font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-wider uppercase text-[hsl(var(--primary-foreground))] relative z-10 px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5">
                    <TypewriterText text="Développeur Full Stack" delay={0} />
                  </p>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5 rounded-xl border border-[hsl(var(--primary))]/30 -z-10"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1.6 }}
                    style={{ transformOrigin: "center" }}
                  />
                </div>
              </motion.div>

              {/* Main Title with Typewriter Effect */}
              <motion.h1
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight text-black tracking-tight mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center mx-auto"
                variants={titleVariants}
              >
                <TypewriterText
                  text="Je suis RAKOTONANDRIANINA Dimithry Marius"
                  delay={150}
                  className="text-black"
                />
              </motion.h1>

              {/* Description */}
              <motion.div
                className="relative bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--primary))]/5 rounded-xl border-2 border-[hsl(var(--primary))]/30 animate-border-gradient p-2 sm:p-4 md:p-6 backdrop-blur-sm space-y-2 sm:space-y-3 md:space-y-4 w-full mb-2 sm:mb-4 md:mb-6"
                variants={descriptionVariants}
              >
                <motion.p
                  className="text-xs sm:text-sm md:text-base lg:text-lg opacity-75 leading-relaxed text-[hsl(var(--foreground))]"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Développeur passionné spécialisé dans la création
                  d’applications web modernes et performantes. J’aide les
                  entreprises à transformer leurs idées en solutions digitales
                  innovantes. Grâce à une approche centrée sur la structuration
                  des données et l’optimisation des flux d’information, je
                  conçois des solutions fiables, évolutives et parfaitement
                  adaptées aux enjeux métiers.
                </motion.p>

                <motion.p
                  className="text-xs sm:text-sm md:text-base lg:text-lg opacity-75 leading-relaxed text-[hsl(var(--foreground))]"
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
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 h-full">
            <div className="flex-1 flex items-center justify-center w-full">
              <ImageHome />
            </div>
            <div className="flex-shrink-0 mb-8 sm:mb-12 md:mb-16">
              <ButtonHome />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}