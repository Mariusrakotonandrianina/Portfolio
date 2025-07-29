"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Code, Users } from "lucide-react";
import { enhancedCardVariants, skillTagVariants } from "../variants/experienceVariant";
import { experienceData } from "../data/experienceData";

// Import des variantes pour le titre (comme dans Skills)
import {
  cardContentVariants,
  sectionTitleVariants,
  titleUnderlineVariants
} from "../variants/cardVariants";
import FloatingElements from "./floatingElements";


export default function Experiences({ 
  sectionRef, 
}: { 
  sectionRef: (node?: Element | null) => void 
}) {
  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden text-[hsl(var(--foreground))] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background avec même style que l'accueil */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background3.jpeg"
          alt="Background Image"
          fill
          className="object-cover object-center opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))]/95 via-[hsl(var(--background))]/90 to-[hsl(var(--background))]/95 backdrop-blur-sm" />
      </div>

      {/* Éléments flottants de décoration - couleurs apaisantes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-400/6 to-slate-300/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-l from-rose-200/4 to-blue-300/3 rounded-full blur-4xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <FloatingElements />

      <div className="relative z-10 w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Titre de la section - Style amélioré */}
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="relative inline-block mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 via-slate-600 to-blue-500 bg-clip-text text-transparent tracking-tight">
                Expériences
              </h2>
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
                variants={titleUnderlineVariants}
              />
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent rounded-full"
                variants={titleUnderlineVariants}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Découvrez mon parcours professionnel et les projets sur lesquels j'ai travaillé
            </motion.p>
          </motion.div>

          {/* Timeline des expériences */}
          <div className="relative">
            {/* Ligne de timeline pour desktop - couleurs apaisantes */}
            <motion.div 
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400/50 via-slate-300/30 to-blue-300/20 rounded-full h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ originY: 0 }}
            />
            
            {/* Ligne de timeline pour mobile - couleurs apaisantes */}
            <motion.div 
              className="block md:hidden absolute left-6 sm:left-8 w-0.5 bg-gradient-to-b from-blue-400/50 via-slate-300/30 to-blue-300/20 rounded-full h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ originY: 0 }}
            />

            <div className="space-y-12 md:space-y-16">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                  variants={enhancedCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.3 }}
                >
                  {/* Point sur la timeline - couleurs douces */}
                  <motion.div 
                    className="absolute left-4 sm:left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-blue-500 to-slate-400 rounded-full border-3 sm:border-4 border-[hsl(var(--background))] z-10 shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.6, type: "spring" }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-rose-200 rounded-full animate-ping opacity-30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Carte d'expérience - dimensions optimisées pour mobile */}
                  <div className={`w-full md:w-5/12 ml-12 mr-2 sm:ml-16 sm:mr-4 md:mr-0 md:ml-0 ${
                    index % 2 === 1 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <motion.div
                      className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-md overflow-hidden group"
                      whileHover={{ 
                        y: -8, 
                        scale: 1.02,
                        rotateY: index % 2 === 0 ? 2 : -2
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {/* Bordure animée avec couleurs douces */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-blue-300/25"
                        animate={{
                          borderColor: [
                            "rgb(147 197 253 / 0.25)",
                            "rgb(148 163 184 / 0.35)", 
                            "rgb(251 207 232 / 0.2)",
                            "rgb(147 197 253 / 0.3)"
                          ]
                        }}
                        transition={{
                          duration: 8,
                          ease: "easeInOut",
                          repeat: Infinity,
                        }}
                      />

                      {/* Background gradient doux */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${experience.color} rounded-2xl sm:rounded-3xl opacity-25`}
                        animate={{
                          opacity: [0.25, 0.35, 0.25],
                          scale: [1, 1.01, 1]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Overlay avec glassmorphism doux */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))]/85 via-[hsl(var(--background))]/70 to-[hsl(var(--background))]/85 rounded-2xl sm:rounded-3xl backdrop-blur-sm" />

                      {/* Contenu de la carte */}
                      <motion.div 
                        className="relative z-10"
                        variants={cardContentVariants}
                      >
                        {/* En-tête avec icône et période */}
                        <motion.div 
                          className="flex items-start justify-between mb-4 sm:mb-5"
                          variants={cardContentVariants}
                        >
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <motion.div 
                              className="p-2.5 sm:p-4 bg-gradient-to-r from-blue-100/60 to-slate-100/40 rounded-xl sm:rounded-2xl text-blue-600 shadow-sm"
                              whileHover={{ scale: 1.05, rotate: 3 }}
                              transition={{ duration: 0.3 }}
                            >
                              {experience.icon}
                            </motion.div>
                            <div>
                              <h3 className="font-black text-lg sm:text-xl md:text-2xl text-[hsl(var(--foreground))] leading-tight tracking-tight">
                                {experience.title}
                              </h3>
                            </div>
                          </div>
                        </motion.div>

                        {/* Informations sur l'entreprise */}
                        <motion.div 
                          className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 text-[hsl(var(--muted-foreground))]"
                          variants={cardContentVariants}
                        >
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                          <span className="font-semibold text-base sm:text-lg">{experience.company}</span>
                        </motion.div>

                        {/* Période */}
                        <motion.div 
                          className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-5 text-[hsl(var(--muted-foreground))]"
                          variants={cardContentVariants}
                        >
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                          <span className="font-medium text-sm sm:text-base">{experience.period}</span>
                        </motion.div>

                        {/* Technologie utilisée */}
                        <motion.div 
                          className="mb-4 sm:mb-6"
                          variants={cardContentVariants}
                        >
                          <motion.div 
                            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2.5 bg-gradient-to-r from-blue-50/80 to-slate-50/60 text-blue-600 rounded-full text-xs sm:text-sm font-bold border border-blue-200/40 shadow-sm"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                            {experience.technology}
                          </motion.div>
                        </motion.div>

                        {/* Description */}
                        <motion.p 
                          className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base"
                          variants={cardContentVariants}
                        >
                          {experience.description}
                        </motion.p>

                        {/* Compétences */}
                        <motion.div 
                          className="flex flex-wrap gap-1.5 sm:gap-2.5"
                          variants={cardContentVariants}
                        >
                          {experience.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="px-2.5 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-50/60 to-rose-50/40 text-blue-600 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-blue-100/30 hover:bg-gradient-to-r hover:from-blue-100/60 hover:to-rose-100/50 transition-all duration-300 shadow-xs"
                              variants={skillTagVariants}
                              whileHover={{ scale: 1.02, y: -1 }}
                              transition={{ duration: 0.2 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Espace vide pour l'autre côté sur desktop */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}