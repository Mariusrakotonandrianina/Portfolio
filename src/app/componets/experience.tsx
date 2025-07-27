"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Code, Users } from "lucide-react";
import {
  containerVariants,
  tagVariants,
  descriptionVariants,
} from "../variants/variants";
import { cardVariants } from "../variants/experienceVariant";
import { experienceData } from "../data/experienceData";

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
          className="object-cover object-center opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[hsl(var(--background))]/95 backdrop-blur-sm" />
      </div>

      {/* Éléments flottants de décoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 md:-top-48 md:-left-48 w-48 h-48 md:w-96 md:h-96 bg-[hsl(var(--primary))]/10 rounded-full blur-4xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-[hsl(var(--primary))]/5 rounded-full blur-4xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-[hsl(var(--primary))]/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full mx-auto px-6 sm:px-8 md:px-10 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Titre de la section */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={tagVariants}
              className="relative flex justify-center mb-6"
            >
              <div className="relative inline-block">
                <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider text-[hsl(var(--primary-foreground))] relative z-10 px-6 sm:px-8 md:px-10 py-3 sm:py-4">
                  Mes Expériences
                </h2>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/5 rounded-2xl border border-[hsl(var(--primary))]/30 -z-10"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  style={{ transformOrigin: "center" }}
                />
              </div>
            </motion.div>
            
            <motion.p 
              className="text-[hsl(var(--muted-foreground))] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              variants={descriptionVariants}
            >
              Découvrez mon parcours professionnel et les projets sur lesquels j'ai travaillé
            </motion.p>
          </motion.div>

          {/* Timeline des expériences */}
          <div className="relative">
            {/* Ligne de timeline pour desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[hsl(var(--primary))]/50 to-[hsl(var(--primary))]/20 rounded-full h-full"></div>
            
            {/* Ligne de timeline pour mobile */}
            <div className="block md:hidden absolute left-8 w-0.5 bg-gradient-to-b from-[hsl(var(--primary))]/50 to-[hsl(var(--primary))]/20 rounded-full h-full"></div>

            <div className="space-y-12 md:space-y-16">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-[hsl(var(--primary))] rounded-full border-4 border-[hsl(var(--background))] z-10 shadow-lg">
                    <div className="absolute inset-0 bg-[hsl(var(--primary))] rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Carte d'expérience */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <motion.div
                      className="relative rounded-2xl p-6 sm:p-7 md:p-8 backdrop-blur-sm overflow-hidden group hover:scale-[1.02] transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      {/* Bordure animée */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2"
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

                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>

                      {/* Contenu de la carte */}
                      <div className="relative z-10">
                        {/* En-tête avec icône et période */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-3 bg-[hsl(var(--primary))]/20 rounded-xl text-[hsl(var(--primary))]">
                              {experience.icon}
                            </div>
                            <div>
                              <h3 className="font-bold text-lg sm:text-xl text-[hsl(var(--foreground))] leading-tight">
                                {experience.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Informations sur l'entreprise */}
                        <div className="flex items-center space-x-2 mb-3 text-[hsl(var(--muted-foreground))]">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{experience.company}</span>
                        </div>

                        {/* Période */}
                        <div className="flex items-center space-x-2 mb-4 text-[hsl(var(--muted-foreground))]">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>

                        {/* Technologie utilisée */}
                        <div className="mb-4">
                          <div className="inline-flex items-center px-3 py-1.5 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-full text-sm font-medium border border-[hsl(var(--primary))]/20">
                            <Code className="w-3 h-3 mr-2" />
                            {experience.technology}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
                          {experience.description}
                        </p>

                        {/* Compétences */}
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-[hsl(var(--primary))]/5 text-[hsl(var(--primary))] rounded-lg text-sm border border-[hsl(var(--primary))]/10 hover:bg-[hsl(var(--primary))]/10 transition-colors duration-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
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