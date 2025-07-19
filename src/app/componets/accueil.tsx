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

      {/* Main Container - Layout adaptatif pour mobile */}
      <div className="relative z-10 w-full h-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Layout mobile-first : colonne unique sur petits écrans, grid sur grands écrans */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center justify-center min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] md:min-h-[calc(100vh-4rem)]">
          
          {/* Section Image - Première sur mobile */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full">
            <div className="flex-1 flex items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
              <ImageHome />
            </div>
            <div className="flex-shrink-0 mt-2 sm:mt-4 md:mt-6">
              <ButtonHome />
            </div>
          </div>

          {/* Section Texte - Deuxième sur mobile */}
          <div className="order-2 lg:order-1 flex flex-col justify-center h-full w-full">
            <motion.div
              className="space-y-3 sm:space-y-4 md:space-y-5 text-center lg:text-left w-full"
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Professional Tag */}
              <motion.div
                variants={tagVariants}
                className="relative flex justify-center lg:justify-start mb-3 sm:mb-4 md:mb-5"
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

              {/* Main Title */}
              <motion.h1
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-black tracking-tight mb-4 sm:mb-5 md:mb-6 text-center lg:text-left"
                variants={titleVariants}
              >
                <TypewriterText
                  text="Je suis RAKOTONANDRIANINA Dimithry Marius"
                  delay={150}
                  className="text-black"
                />
              </motion.h1>

              {/* Description avec animation de dégradé */}
              <motion.div
                className="relative rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm space-y-3 sm:space-y-4 w-full overflow-hidden"
                variants={descriptionVariants}
              >
                {/* Arrière-plan animé avec dégradé */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `
                      linear-gradient(
                        45deg, 
                        hsl(var(--primary) / 0.1), 
                        hsl(var(--primary) / 0.05), 
                        hsl(var(--primary) / 0.15),
                        hsl(var(--primary) / 0.08),
                        hsl(var(--primary) / 0.12)
                      )
                    `,
                    backgroundSize: '400% 400%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
                
                {/* Bordure animée */}
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
                    backgroundSize: '400% 400%',
                  }}
                  animate={{
                    filter: [
                      'hue-rotate(0deg)',
                      'hue-rotate(20deg)',
                      'hue-rotate(0deg)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />

                {/* Contenu texte */}
                <div className="relative z-10">
                  <motion.p
                    className="text-sm sm:text-base md:text-lg opacity-80 leading-relaxed text-[hsl(var(--foreground))] mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Développeur passionné spécialisé dans la création
                    d'applications web modernes et performantes. J'aide les
                    entreprises à transformer leurs idées en solutions digitales
                    innovantes. Grâce à une approche centrée sur la structuration
                    des données et l'optimisation des flux d'information, je
                    conçois des solutions fiables, évolutives et parfaitement
                    adaptées aux enjeux métiers.
                  </motion.p>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg opacity-80 leading-relaxed text-[hsl(var(--foreground))]"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Mon approche combine créativité et expertise technique pour
                    livrer des solutions sur mesure qui répondent aux besoins
                    spécifiques de chaque client. De la conception à la mise en
                    production, je vous accompagne dans tous vos projets web.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}