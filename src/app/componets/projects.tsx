"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Code2, Eye } from "lucide-react";
import FloatingElements from "./floatingElements";
import {
  imageVariants,
  overlayVariants,
  buttonFloatVariants,
  techBadgeVariants,
  containerVariants,
  glowVariants,
} from "../variants/projectVariants";
import {
  cardContentVariants,
  sectionTitleVariants,
  titleUnderlineVariants,
  cardRevealVariants,
} from "../variants/cardVariants";

import { projectsData } from "../data/projectsData";

export default function Projects({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  return (
    <section
      id="projects"
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
        <div className="absolute inset-0 bg-[hsl(var(--background))]/100 backdrop-blur-sm" />
      </div>

      {/* Éléments flottants de décoration avec plus d'animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-[hsl(var(--primary))]/8 to-[hsl(var(--primary))]/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1.1, 1],
            opacity: [0.3, 0.7, 0.4, 0.3],
            rotate: [0, 180, 270, 360],
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-l from-[hsl(var(--primary))]/6 to-[hsl(var(--primary))]/3 rounded-full blur-4xl"
          animate={{
            scale: [1.2, 0.9, 1.4, 1.2],
            opacity: [0.2, 0.5, 0.3, 0.2],
            rotate: [360, 180, 90, 0],
            x: [0, -30, 15, 0],
            y: [0, 20, -25, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Nouveaux éléments flottants */}
        <motion.div
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-[hsl(var(--primary))]/10 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.4, 0.8, 0.4],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      <FloatingElements />

      <div className="relative z-10 w-full mx-auto px-3 sm:px-6 md:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Titre de la section avec animation améliorée */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="relative inline-block mb-6">
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                }}
              >
                Mes Projets
              </motion.h2>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"
                variants={titleUnderlineVariants}
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.div>
            <motion.p
              className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Découvrez une sélection de mes réalisations, des applications web
              aux projets mobiles
            </motion.p>
          </motion.div>

          {/* Grille des projets - 2 colonnes au lieu de 3 */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                variants={cardRevealVariants}
                custom={index}
              >
                <motion.div
                  className="relative h-full backdrop-blur-md bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/2 rounded-3xl overflow-hidden transition-all duration-500 bg-[hsl(var(--background))]/30 border border-[hsl(var(--primary))]/20"
                  initial="rest"
                  whileHover="hover"
                  variants={glowVariants}
                >
                  {/* Image du projet avec parallax */}
                  <motion.div
                    className="relative h-64 sm:h-72 lg:h-80 overflow-hidden"
                    variants={imageVariants}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>

                    {/* Overlay avec boutons au hover - Affichage conditionnel */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center space-x-4"
                      variants={overlayVariants}
                    >
                      {/* Bouton Demo - affiché seulement si demoUrl existe */}
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-5 py-3 bg-[hsl(var(--primary))] text-white rounded-xl font-semibold hover:bg-[hsl(var(--primary))]/90 transition-colors duration-300 shadow-lg"
                          variants={buttonFloatVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.95 }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">Voir</span>
                        </motion.a>
                      )}

                      {/* Bouton GitHub - affiché seulement si githubUrl existe */}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-5 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg"
                          variants={buttonFloatVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.95 }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">Code</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Contenu de la carte avec animations échelonnées */}
                  <motion.div
                    className="p-6 sm:p-8 relative"
                    variants={cardContentVariants}
                  >
                    {/* Catégorie avec animation */}
                    <motion.div
                      className="flex items-center justify-between mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    >
                      <motion.span
                        className="px-3 py-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-full text-xs font-bold border border-[hsl(var(--primary))]/20"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.category}
                      </motion.span>
                    </motion.div>

                    {/* Titre avec effet de machine à écrire */}
                    <motion.h3
                      className="font-bold text-xl sm:text-2xl text-[hsl(var(--foreground))] mb-4 leading-tight bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6 text-sm sm:text-base"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies avec animations échelonnées */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-16"
                      initial="hidden"
                      whileInView="visible"
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-2 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-lg text-xs font-semibold border border-[hsl(var(--primary))]/20 hover:bg-[hsl(var(--primary))]/15 transition-all duration-300"
                          variants={techBadgeVariants}
                          custom={techIndex}
                          whileHover={{
                            scale: 1.1,
                            y: -3,
                            rotate: 2,
                            transition: { duration: 0.2 },
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Boutons d'action - Petits et fixés en bas à droite */}
                    <motion.div
                      className="absolute bottom-6 right-6 flex gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                    >
                      {/* Bouton principal (Demo ou GitHub selon disponibilité) */}
                      {project.demoUrl ? (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white rounded-lg font-medium text-xs hover:from-[hsl(var(--primary))]/90 hover:to-[hsl(var(--primary))]/70 transition-all duration-300 shadow-md hover:shadow-lg"
                          variants={buttonFloatVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Voir</span>
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      ) : project.githubUrl ? (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg font-medium text-xs hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md hover:shadow-lg"
                          variants={buttonFloatVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github className="w-3 h-3" />
                          <span>Code</span>
                        </motion.a>
                      ) : null}
                      
                      {/* Bouton secondaire GitHub si demo existe */}
                      {project.demoUrl && project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center p-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                          variants={buttonFloatVariants}
                          whileHover="hover"
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github className="w-3 h-3" />
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>

                  {/* Effet de brillance au hover avec animation */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, hsl(var(--primary) / 0.1) 50%, transparent 70%)`,
                    }}
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bouton Voir Plus avec animation flottante */}
          <motion.div
            className="text-center mt-16 lg:mt-20"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--primary))]/5 text-[hsl(var(--primary))] rounded-2xl font-semibold border border-[hsl(var(--primary))]/20 hover:bg-[hsl(var(--primary))]/15 hover:border-[hsl(var(--primary))]/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={buttonFloatVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              animate={{
                y: [0, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Code2 className="w-5 h-5" />
              </motion.div>
              <span>Voir tous mes projets sur GitHub</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}