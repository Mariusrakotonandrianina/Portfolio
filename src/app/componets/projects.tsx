"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Calendar, Code2, Eye } from "lucide-react";
import FloatingElements from "./floatingElements";
import {
  projectCardVariants,
  imageVariants,
  overlayVariants
} from "../variants/projectVariants";
import {
  cardContentVariants,
  sectionTitleVariants,
  titleUnderlineVariants,
  cardHoverVariants
} from "../variants/cardVariants";

// Import des données des projets
import { projectsData, ProjectType } from "../data/projectsData";

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

      {/* Éléments flottants de décoration - couleurs apaisantes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-[hsl(var(--primary))]/8 to-[hsl(var(--primary))]/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-l from-[hsl(var(--primary))]/6 to-[hsl(var(--primary))]/3 rounded-full blur-4xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
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
        <div className="max-w-7xl mx-auto">
          {/* Titre de la section - Style comme Skills */}
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="relative inline-block mb-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent">
                Mes Projets
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
              Découvrez une sélection de mes réalisations, des applications web aux projets mobiles
            </motion.p>
          </motion.div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                variants={projectCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative h-full backdrop-blur-md bg-gradient-to-br from-[hsl(var(--primary))]/5 to-[hsl(var(--primary))]/2 rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[hsl(var(--primary))]/20 bg-[hsl(var(--background))]/30 border border-[hsl(var(--primary))]/20"
                  initial="rest"
                  whileHover="hover"
                  variants={cardHoverVariants}
                >
                  {/* Badge Featured */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white text-xs font-bold rounded-full shadow-lg"
                      initial={{ scale: 0, rotate: -12 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      ⭐ Featured
                    </motion.div>
                  )}

                  {/* Image du projet */}
                  <motion.div 
                    className="relative h-48 sm:h-56 lg:h-60 overflow-hidden"
                    variants={imageVariants}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Overlay avec boutons au hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center space-x-4"
                      variants={overlayVariants}
                    >
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2.5 bg-[hsl(var(--primary))] text-white rounded-lg font-semibold hover:bg-[hsl(var(--primary))]/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">Voir</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2.5 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* Contenu de la carte */}
                  <motion.div 
                    className="p-6 sm:p-8"
                    variants={cardContentVariants}
                  >
                    {/* Catégorie */}
                    <motion.div 
                      className="flex items-center justify-between mb-3"
                      variants={cardContentVariants}
                    >
                      <span className="px-3 py-1.5 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-full text-xs font-bold border border-[hsl(var(--primary))]/20">
                        {project.category}
                      </span>
                    </motion.div>

                    {/* Titre */}
                    <motion.h3 
                      className="font-bold text-xl sm:text-2xl text-[hsl(var(--foreground))] mb-3 leading-tight bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent"
                      variants={cardContentVariants}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p 
                      className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6 text-sm sm:text-base"
                      variants={cardContentVariants}
                    >
                      {project.description}
                    </motion.p>

                    {/* Technologies */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      variants={cardContentVariants}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1.5 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] rounded-lg text-xs font-semibold border border-[hsl(var(--primary))]/20 hover:bg-[hsl(var(--primary))]/15 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Bouton Découvrir */}
                    <motion.div variants={cardContentVariants}>
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-white rounded-xl font-semibold hover:from-[hsl(var(--primary))]/90 hover:to-[hsl(var(--primary))]/70 transition-all duration-300 shadow-lg hover:shadow-xl group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Découvrir</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </motion.div>
                      </motion.a>
                    </motion.div>
                  </motion.div>

                  {/* Effet de brillance au hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, hsl(var(--primary) / 0.1) 50%, transparent 70%)`
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bouton Voir Plus (optionnel) */}
          <motion.div 
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[hsl(var(--primary))]/10 to-[hsl(var(--primary))]/5 text-[hsl(var(--primary))] rounded-2xl font-semibold border border-[hsl(var(--primary))]/20 hover:bg-[hsl(var(--primary))]/15 hover:border-[hsl(var(--primary))]/30 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code2 className="w-5 h-5" />
              <span>Voir tous mes projets sur GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}