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
  descriptionVariants,
} from "../variants/variants";
import NameStyled from "./namestyled";
import DescriptionHome from "./descriptionHome";

export default function Accueil({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-4 sm:py-6 md:py-8 lg:pt-24"
      ref={sectionRef}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background3.jpeg"
          alt="Background Image"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[hsl(var(--background))]/100 backdrop-blur-sm" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 md:-top-48 md:-right-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-4xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 md:-bottom-48 md:-left-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-4xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
      </div>

      <FloatingElements />

      <div className="relative z-10 w-full h-full mx-auto px-6 sm:px-8 md:px-10 lg:px-24 py-1 sm:py-6 md:py-2">
        <div className="flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-4rem)] items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr_auto] lg:gap-y-0 lg:gap-x-6">
          {/* Titre "Développeur Full Stack" - Marge top augmentée, marge bottom réduite */}
          <motion.div
            className="w-full text-center lg:col-span-2 lg:row-start-1 mt-12 sm:mt-16 md:mt-10 lg:mt-8 mb-1 sm:mb-1 md:mb-1 lg:mb-1"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={tagVariants}
              className="relative flex justify-center"
            >
              <div className="relative inline-block">
                <p className="text-center font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider uppercase text-[hsl(var(--primary-foreground))] relative z-10 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5">
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
          </motion.div>

          {/* Image (haut sur mobile, droite sur desktop) - Déplacée vers le haut */}
          <div className="order-1 lg:order-2 lg:col-start-2 lg:row-start-2 flex items-start justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full lg:-mt-8">
            <ImageHome />
          </div>

          {/* Groupement de NameStyled + DescriptionHome + Boutons (desktop) */}
          <motion.div
            className="order-2 lg:order-1 lg:col-start-1 lg:row-start-2 w-full flex flex-col items-center lg:items-start space-y-3 sm:space-y-4 md:space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex justify-center w-full sm:mb-4 md:mb-8">
              <NameStyled />
            </div>

            <motion.div
              className="relative rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm w-full overflow-hidden"
              variants={descriptionVariants}
            >
              <motion.div
                className="absolute inset-0 rounded-xl border-2"
                style={{
                  borderImage: `
          linear-gradient(
            45deg,
            hsl(var(--primary) / 0.3),
            hsl(var(--primary) / 0.6),
            hsl(var(--primary) / 0.2),
            hsl(var(--primary) / 0.5),
            hsl(var(--primary) / 0.3)
          ) 1
        `,
                  backgroundSize: "400% 400%",
                }}
                animate={{
                  filter: [
                    "hue-rotate(0deg)",
                    "hue-rotate(20deg)",
                    "hue-rotate(0deg)",
                  ],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <div>
                <DescriptionHome />
              </div>
            </motion.div>

            {/* Boutons - Sous la description en desktop, séparés sur mobile */}
            <div className="hidden lg:flex justify-center lg:justify-end w-full mt-4">
              <ButtonHome />
            </div>
          </motion.div>

          {/* Boutons - Visibles seulement sur mobile/tablette */}
          <div className="order-4 lg:hidden flex justify-center w-full mt-1 sm:mt-1 md:mt-2">
            <ButtonHome />
          </div>
        </div>
      </div>
    </section>
  );
}