"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingElements from "./floatingElements";

// Icônes SVG pour chaque catégorie
const BackendIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/>
  </svg>
);

const FrontendIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v10zm2-10l5 5-5 5V7z"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
  </svg>
);

const DevOpsIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ToolsIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.9 1.9 4.66 2.37 7-1.44l9.08 9.08c.78.78 2.05.78 2.83 0 .78-.78.78-2.04 0-2.83z"/>
  </svg>
);

// Nouvelle icône pour la modélisation, conception et gestion de projet
const ModelingIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>
    <path d="M7 7h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
    <path d="M7 11h10v2H7zm0 4h10v2H7z"/>
    <circle cx="12" cy="18" r="1"/>
    <path d="M9 17l1.5 1.5L12 17l1.5 1.5L15 17"/>
  </svg>
);

const skillsData = [
  {
    category: "Frontend",
    icon: <FrontendIcon />,
    skills: [
      { name: "HTML 5", src: "/logo/HTML 5.jpeg" },
      { name: "CSS", src: "/logo/CSS.jpeg" },
      { name: "React", src: "/logo/Reactjs.jpeg" },
      { name: "React Native", src: "/logo/React Native.jpeg" },
      { name: "Next.js", src: "/logo/next.jpeg" },
      { name: "TypeScript", src: "/logo/Typescript.jpeg" },
      { name: "Tailwind CSS", src: "/logo/Tailwind CSS.jpeg" },
      { name: "Angular", src: "/logo/Angular.jpeg" },
      { name: "Framer Motion", src: "/logo/Framer motion.jpeg" }
    ],
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    borderColorInitial: "rgba(59, 130, 246, 0.2)",
    borderColorHover: "rgb(96, 165, 250)",
    titleGradient: "from-blue-400 via-blue-600 to-cyan-500"
  },
  {
    category: "Backend & ERP",
    icon: <BackendIcon />,
    skills: [
      { name: "Node.js", src: "/logo/Node.jpeg"},
      { name: "Express.js", src: "/logo/Express.jpeg" },
      { name: "Python", src: "/logo/python.jpeg" },
      { name: "Java", src: "/logo/java.jpeg" },
      { name: "Spring boot", src: "/logo/Spring-Boot.jpeg" },
      { name: "FastAPI", src: "/logo/Fast API.jpeg" },
      { name: "REST APIs", src: "/logo/restApi.png" },
      { name: "ERP odoo", src: "/logo/Odoo.jpeg" }
    ],
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
    borderColorInitial: "rgba(34, 197, 94, 0.2)",
    borderColorHover: "rgb(16, 185, 129)",
    titleGradient: "from-green-400 via-green-600 to-emerald-500"
  },
  {
    category: "Base de données",
    icon: <DatabaseIcon />,
    skills: [
      { name: "PostgreSQL", src: "/logo/postgresql.jpeg" },
      { name: "MongoDB", src: "/logo/MongoDB.jpg" },
      { name: "MySQL", src: "/logo/MySQL.jpeg" },
      { name: "Oracle", src: "/logo/Oracle.jpeg" },
    ],
    color: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-500/20",
    borderColorInitial: "rgba(168, 85, 247, 0.2)",
    borderColorHover: "rgb(168, 85, 247)",
    titleGradient: "from-purple-400 via-purple-600 to-violet-500"
  },
  {
    category: "CI/CD & Version",
    icon: <DevOpsIcon />,
    skills: [
      { name: "Git", src: "/logo/Git.jpeg" },
      { name: "GitHub", src: "/logo/Github.jpeg" },
      { name: "GitLab CI", src: "/logo/gitlab.png" },
      { name: "Vercel", src: "/logo/Vercel.jpeg" },
      { name: "OVH cloud", src: "/logo/OVH.jpeg" },
      { name: "NGINX", src: "/logo/nginx.png" }
    ],
    color: "from-purple-500/10 to-violet-500/10",
    borderColor: "border-purple-500/20",
    borderColorInitial: "rgba(168, 85, 247, 0.2)",
    borderColorHover: "rgb(168, 85, 247)",
    titleGradient: "from-purple-400 via-purple-600 to-violet-500"
  },
  {
    category: "Outils de développement",
    icon: <ToolsIcon />,
    skills: [
      { name: "VS Code", src: "/logo/visual-studio.jpeg" },
      { name: "Postman", src: "/logo/Postman.jpeg" },
      { name: "Pycharm", src: "/logo/Pycharm.jpeg" },
      { name: "IntelliJ IDEA", src: "/logo/IntelliJ-IDEA.jpeg" }
    ],    
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    borderColorInitial: "rgba(59, 130, 246, 0.2)",
    borderColorHover: "rgb(96, 165, 250)",
    titleGradient: "from-blue-400 via-blue-600 to-cyan-500"
  },
  {
    category: "Outil de modélisation, conception et de gestion de projet",
    icon: <ModelingIcon />,
    skills: [
      { name: "Win'Design", src: "/logo/windesign.jpg" },
      { name: "Visual Paradigm", src: "/logo/visualParadigm.jpg" },
      { name: "GanttProject", src: "/logo/gantt.jpg" },
    ],
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "border-green-500/20",
    borderColorInitial: "rgba(34, 197, 94, 0.2)",
    borderColorHover: "rgb(16, 185, 129)",
    titleGradient: "from-green-400 via-green-600 to-emerald-500"
  },
];

// Import des variantes depuis le fichier dédié
import {
  cardContainerVariants,
  cardHoverVariants,
  cardHeaderVariants,
  cardContentVariants,
  cardIconVariants,
  cardListItemVariants,
  sectionTitleVariants,
  titleUnderlineVariants
} from "../variants/cardVariants";

export default function Skills({
  sectionRef,
}: {
  sectionRef: (node?: Element | null) => void;
}) {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-2 sm:py-3 md:py-4 lg:pt-12"
      ref={sectionRef}
    >
      {/* Background */}
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

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <FloatingElements />

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardContainerVariants}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.05 }}
          className="max-w-7xl mx-auto"
        >
          {/* Titre de la section */}
          <motion.div 
            className="text-center mb-8 lg:mb-12"
            variants={sectionTitleVariants}
          >
            <motion.div className="relative inline-block mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent">
                Compétences
              </h2>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"
                variants={titleUnderlineVariants}
              />
            </motion.div>
            <p className="text-base sm:text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto px-4">
              Découvrez mes compétences techniques acquises au fil de mes expériences et projets
            </p>
          </motion.div>

          {/* Grille des compétences - Layout responsive optimisé */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.category}
                initial="rest"
                whileInView="visible"
                whileHover="hover"
                variants={cardHoverVariants}
                className="group relative w-full"
              >
                <motion.div
                  className={`relative h-full p-3 sm:p-4 lg:p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br ${category.color} transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[hsl(var(--primary))]/10 bg-[hsl(var(--background))]/30`}
                  style={{
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: category.borderColorInitial
                  }}
                  whileHover={{
                    borderColor: category.borderColorHover,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Effet de brillance au hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, rgba(96, 165, 250, 0.1) 50%, transparent 70%)`
                    }}
                  />

                  {/* Header de la carte */}
                  <motion.div 
                    className="relative z-10"
                    variants={cardHeaderVariants}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <motion.div 
                        className="p-1.5 sm:p-2 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform duration-300"
                        variants={cardIconVariants}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className={`text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r ${category.titleGradient} bg-clip-text text-transparent leading-tight`}>
                        {category.category}
                      </h3>
                    </div>

                    {/* Liste des compétences - Layout optimisé pour mobile */}
                    <motion.div 
                      className="grid grid-cols-2 gap-1.5 sm:gap-2"
                      variants={cardContentVariants}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skill.name} 
                          className="flex items-center justify-center gap-1 sm:gap-1.5 p-2 sm:p-2.5 rounded-lg border border-[hsl(var(--border))]/30 backdrop-blur-sm bg-[hsl(var(--background))]/20 hover:bg-[hsl(var(--primary))]/5 hover:border-[hsl(var(--primary))]/30 transition-all duration-200 w-full min-w-0 h-16 sm:h-18 lg:h-20"
                          variants={cardListItemVariants}
                          whileHover={{ x: 2, scale: 1.02 }}
                        >
                          {/* Image de la technologie */}
                          {skill.src && (
                            <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 relative">
                              <Image
                                src={skill.src}
                                alt={skill.name}
                                fill
                                className="object-contain rounded"
                                sizes="(max-width: 640px) 24px, (max-width: 1024px) 32px, 40px"
                              />
                            </div>
                          )}
                          
                          {/* Nom de la technologie */}
                          <span className="text-xs sm:text-sm font-medium text-[hsl(var(--foreground))] text-center leading-tight px-1 flex-1">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}