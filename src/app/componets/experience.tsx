"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Code, Users } from "lucide-react";
import {
  enhancedCardVariants,
  skillTagVariants,
} from "../variants/experienceVariant";
import { experienceData } from "../data/experienceData";

import {
  cardContentVariants,
  sectionTitleVariants,
  titleUnderlineVariants,
  cardHoverVariants,
} from "../variants/cardVariants";
import FloatingElements from "./floatingElements";

export default function Experiences({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden text-[hsl(var(--foreground))] py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/background3.jpeg"
          alt="Background Image"
          fill
          className="object-cover object-center opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[hsl(var(--background))]/100 backdrop-blur-sm" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-[hsl(var(--primary))]/8 to-[hsl(var(--primary))]/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-l from-[hsl(var(--primary))]/6 to-[hsl(var(--primary))]/3 rounded-full blur-4xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      <FloatingElements />

      <div className="relative z-10 w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="relative inline-block mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent">
                Expériences
              </h2>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"
                variants={titleUnderlineVariants}
              />
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Découvrez mon parcours professionnel et les projets sur lesquels
              j&apos;ai travaillé
            </motion.p>
          </motion.div>
          <div className="relative">
            <motion.div
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[hsl(var(--primary))]/50 via-[hsl(var(--primary))]/30 to-[hsl(var(--primary))]/20 rounded-full h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ originY: 0 }}
            />
            <motion.div
              className="block md:hidden absolute left-6 sm:left-8 w-0.5 bg-gradient-to-b from-[hsl(var(--primary))]/50 via-[hsl(var(--primary))]/30 to-[hsl(var(--primary))]/20 rounded-full h-full"
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
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  variants={enhancedCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <motion.div
                    className="absolute left-4 sm:left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 rounded-full border-3 sm:border-4 border-[hsl(var(--background))] z-10 shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.3 + 0.5,
                      duration: 0.6,
                      type: "spring",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-[hsl(var(--primary))] rounded-full animate-ping opacity-30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>

                  <div
                    className={`w-full md:w-5/12 ml-12 mr-6 sm:ml-16 sm:mr-8 md:mr-0 md:ml-0 ${
                      index % 2 === 1 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <motion.div
                      className="group relative h-full p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/2 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[hsl(var(--primary))]/10 bg-[hsl(var(--background))]/30 border border-[hsl(var(--primary))]/20"
                      initial="rest"
                      whileHover="hover"
                      variants={cardHoverVariants}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(45deg, transparent 30%, hsl(var(--primary) / 0.1) 50%, transparent 70%)`,
                        }}
                      />

                      <motion.div
                        className="relative z-10"
                        variants={cardContentVariants}
                      >
                        <motion.div
                          className="flex items-start justify-between mb-4 sm:mb-5"
                          variants={cardContentVariants}
                        >
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <motion.div
                              className="p-2.5 sm:p-4 bg-[hsl(var(--primary))]/10 rounded-xl sm:rounded-2xl text-[hsl(var(--primary))] shadow-sm group-hover:scale-110 transition-transform duration-300"
                              whileHover={{ scale: 1.05, rotate: 3 }}
                              transition={{ duration: 0.3 }}
                            >
                              {experience.icon}
                            </motion.div>
                            <div>
                              <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-[hsl(var(--foreground))] leading-tight tracking-tight bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent">
                                {experience.title}
                              </h3>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4 text-[hsl(var(--muted-foreground))]"
                          variants={cardContentVariants}
                        >
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--primary))]" />
                          <span className="font-semibold text-base sm:text-lg">
                            {experience.company}
                          </span>
                        </motion.div>

                        <motion.div
                          className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-5 text-[hsl(var(--muted-foreground))]"
                          variants={cardContentVariants}
                        >
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--primary))]" />
                          <span className="font-medium text-sm sm:text-base">
                            {experience.period}
                          </span>
                        </motion.div>

                        <motion.div
                          className="mb-4 sm:mb-6"
                          variants={cardContentVariants}
                        >
                          <motion.div
                            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2.5 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-full text-xs sm:text-sm font-bold border border-[hsl(var(--primary))]/20 shadow-sm hover:bg-[hsl(var(--primary))]/15 transition-all duration-300"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                            {experience.technology}
                          </motion.div>
                        </motion.div>

                        <motion.p
                          className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 sm:mb-6 font-medium text-sm sm:text-base"
                          variants={cardContentVariants}
                        >
                          {experience.description}
                        </motion.p>

                        <motion.div
                          className="flex flex-wrap gap-1.5 sm:gap-2.5"
                          variants={cardContentVariants}
                        >
                          {experience.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              className="px-2.5 sm:px-4 py-1 sm:py-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold border border-[hsl(var(--primary))]/20 hover:bg-[hsl(var(--primary))]/15 hover:border-[hsl(var(--primary))]/30 transition-all duration-300 shadow-sm"
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
