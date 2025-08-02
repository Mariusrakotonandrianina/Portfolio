"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Code2, Eye,ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import FloatingElements from "./floatingElements";
import {
  imageVariants,
  overlayVariants,
  buttonFloatVariants,
  techBadgeVariants,
  glowVariants,
  carouselVariants,
  modernButtonVariants,
  indicatorVariants,
} from "../variants/projectVariants";
import {
  cardContentVariants,
  sectionTitleVariants,
  titleUnderlineVariants,
} from "../variants/cardVariants";

import { projectsData } from "../data/projectsData";
import React from "react";

export default function Projects({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  // Calculer le nombre de projets par page selon la taille d'écran
  const projectsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  
  // Obtenir les projets pour la page actuelle
  const getCurrentProjects = () => {
    const startIndex = currentIndex * projectsPerPage;
    return projectsData.slice(startIndex, startIndex + projectsPerPage);
  };

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < totalPages) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    }
  };

  const goToPage = (pageIndex: number) => {
    if (pageIndex !== currentIndex) {
      setDirection(pageIndex > currentIndex ? 1 : -1);
      setCurrentIndex(pageIndex);
    }
  };

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

      {/* Éléments flottants de décoration */}
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
          {/* Titre de la section */}
          <motion.div
            className="text-center mb-8 lg:mb-12"
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="relative inline-block mb-4">
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

          {/* Indicateur de page et navigation */}
          <motion.div
            className="flex items-center justify-center mb-6 space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.p className="text-sm text-[hsl(var(--muted-foreground))]">
              {currentIndex * projectsPerPage + 1}-{Math.min((currentIndex + 1) * projectsPerPage, projectsData.length)} sur {projectsData.length} projets
            </motion.p>
            {totalPages > 1 && (
              <motion.p className="text-xs text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 px-3 py-1 rounded-full">
                {totalPages - currentIndex - 1 > 0 && `${(totalPages - currentIndex - 1) * projectsPerPage} autres projets à découvrir`}
              </motion.p>
            )}
          </motion.div>

          {/* Carrousel des projets */}
          <div className="relative min-h-[500px] lg:min-h-[550px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.4 },
                }}
                className={`grid gap-6 lg:gap-8 ${getCurrentProjects().length === 1 ? 'grid-cols-1 lg:justify-center' : 'grid-cols-1 lg:grid-cols-2'}`}
              >
                {getCurrentProjects().map((project, index) => (
                  <motion.div
                    key={project.id}
                    className={`group relative ${getCurrentProjects().length === 1 ? 'lg:max-w-md lg:mx-auto' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <motion.div
                      className="relative h-full backdrop-blur-md bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/2 rounded-2xl overflow-hidden transition-all duration-500 bg-[hsl(var(--background))]/30 border border-[hsl(var(--primary))]/20"
                      initial="rest"
                      whileHover="hover"
                      variants={glowVariants}
                    >
                      {/* Image du projet - Hauteur réduite */}
                      <motion.div
                        className="relative h-48 sm:h-52 lg:h-56 overflow-hidden"
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

                        {/* Overlay avec boutons au hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center space-x-4"
                          variants={overlayVariants}
                        >
                          {project.demoUrl && (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-4 py-2 bg-[hsl(var(--primary))] text-white rounded-lg font-semibold hover:bg-[hsl(var(--primary))]/90 transition-colors duration-300 shadow-lg"
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

                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg"
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

                      {/* Contenu de la carte - Padding réduit */}
                      <motion.div
                        className="p-4 sm:p-5 relative"
                        variants={cardContentVariants}
                      >
                        {/* Catégorie */}
                        <motion.div
                          className="flex items-center justify-between mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                        >
                          <motion.span
                            className="px-2 py-1 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-full text-xs font-bold border border-[hsl(var(--primary))]/20"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {project.category}
                          </motion.span>
                        </motion.div>

                        {/* Titre */}
                        <motion.h3
                          className="font-bold text-lg sm:text-xl text-[hsl(var(--foreground))] mb-3 leading-tight bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                        >
                          {project.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4 text-sm line-clamp-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                        >
                          {project.description}
                        </motion.p>

                        {/* Technologies - Espacement réduit */}
                        <motion.div
                          className="flex flex-wrap gap-1.5 mb-12"
                          initial="hidden"
                          animate="visible"
                        >
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-2 py-1 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-md text-xs font-semibold border border-[hsl(var(--primary))]/20 hover:bg-[hsl(var(--primary))]/15 transition-all duration-300"
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

                        {/* Boutons d'action */}
                        <motion.div
                          className="absolute bottom-4 right-4 flex gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                        >
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

                      {/* Effet de brillance au hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
            </AnimatePresence>

            {/* Boutons de navigation modernes */}
            {totalPages > 1 && (
              <>
                {/* Bouton Précédent */}
                <motion.button
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))]/30 via-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed backdrop-blur-md border border-[hsl(var(--primary))]/30 group overflow-hidden"
                  onClick={() => paginate(-1)}
                  disabled={currentIndex === 0}
                  variants={modernButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--primary))]/20 to-transparent -skew-x-12"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Icônes avec animation */}
                  <motion.div
                    className="relative z-10 flex items-center justify-center"
                    whileHover={{ x: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.div>

                  {/* Particules flottantes */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[hsl(var(--primary))]/40 rounded-full"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.button>

                {/* Bouton Suivant */}
                <motion.button
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-12 h-12 bg-gradient-to-br from-[hsl(var(--primary))]/30 via-[hsl(var(--primary))]/20 to-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed backdrop-blur-md border border-[hsl(var(--primary))]/30 group overflow-hidden"
                  onClick={() => paginate(1)}
                  disabled={currentIndex === totalPages - 1}
                  variants={modernButtonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--primary))]/20 to-transparent -skew-x-12"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                  
                  {/* Icônes avec animation */}
                  <motion.div
                    className="relative z-10 flex items-center justify-center"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>

                  {/* Particules flottantes */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[hsl(var(--primary))]/40 rounded-full"
                        style={{
                          left: `${60 + i * 15}%`,
                          top: `${30 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.button>
              </>
            )}
          </div>

          {/* Indicateurs de page */}
          {totalPages > 1 && (
            <motion.div
              className="flex justify-center space-x-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[hsl(var(--primary))]"
                      : "bg-[hsl(var(--primary))]/30 hover:bg-[hsl(var(--primary))]/50"
                  }`}
                  onClick={() => goToPage(index)}
                  variants={indicatorVariants}
                  animate={index === currentIndex ? "active" : "inactive"}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          )}

          {/* Bouton Voir Plus avec animation flottante */}
          <motion.div
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/Mariusrakotonandrianina"
              target="_blank"
              rel="noopener noreferrer"
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
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}