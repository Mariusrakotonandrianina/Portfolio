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
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    category: "Backend & ERP",
    icon: <BackendIcon />,
    skills: [
      { name: "Node.js", src: "/logo/Node_js.jpeg" },
      { name: "Express.js", src: "/logo/Express_js.jpeg" },
      { name: "Python", src: "/logo/python.jpeg" },
      { name: "Java", src: "/logo/java.jpeg" },
      { name: "Spring boot", src: "/logo/Spring-Boot.jpeg" },
      { name: "FastAPI", src: "/logo/Fast API.jpeg" },
      { name: "REST APIs", src: "/logo/Rest API.jpeg" }, ///bola tsy misy
      { name: "ERP odoo", src: "/logo/Odoo.jpeg" }
    ],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30"
  },
  {
    category: "Base de données",
    icon: <DatabaseIcon />,
    skills: [
      { name: "PostgreSQL", src: "/logo/postgresql.jpeg" },
      { name: "MongoDB", src: "/logo/MongoDB.jpeg" },
      { name: "MySQL", src: "/logo/MySQL.jpeg" },
      { name: "Oracle", src: "/logo/Oracle.jpeg" },
    ],
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    category: "CI/CD & Version",
    icon: <DevOpsIcon />,
    skills: [
      { name: "Git", src: "/logo/Git.jpeg" },
      { name: "GitHub", src: "/logo/Github.jpeg" },
      { name: "GitLab CI", src: "/logo/Gitlab.jpeg" },
      { name: "Vercel", src: "/logo/Vercel.jpeg" }, //Bola tsy misy
      { name: "OVH cloud", src: "/logo/OVH.jpeg" },
      { name: "NGINX", src: "/logo/NGINX.jpeg" }
    ],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30"
  },
  {
    category: "Outils de développement",
    icon: <ToolsIcon />,
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Pycharm", level: 85 },
      { name: "IntelliJ IDEA", level: 85 }
    ],
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30"
  }

];

// Import des variantes depuis le fichier dédié
import {
  cardContainerVariants,
  cardHoverVariants,
  cardHeaderVariants,
  cardContentVariants,
  cardIconVariants,
  progressBarVariants,
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
      className="min-h-screen flex items-center relative overflow-hidden text-[hsl(var(--foreground))] py-4 sm:py-6 md:py-8 lg:pt-24"
      ref={sectionRef}
    >
      {/* Background */}
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

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-112 md:h-112 bg-[hsl(var(--primary))]/3 rounded-full blur-4xl animate-pulse delay-500"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[hsl(var(--primary))]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <FloatingElements />

      <div className="relative z-10 w-full mx-auto px-6 sm:px-8 md:px-10 lg:px-24 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardContainerVariants}
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto"
        >
          {/* Titre de la section */}
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            variants={sectionTitleVariants}
          >
            <motion.div className="relative inline-block mb-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))]/70 bg-clip-text text-transparent">
                Compétences
              </h2>
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent"
                variants={titleUnderlineVariants}
              />
            </motion.div>
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
              Découvrez mes compétences techniques acquises au fil de mes expériences et projets
            </p>
          </motion.div>

          {/* Grille des compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {skillsData.map((category, index) => (
              <motion.div
                key={category.category}
                initial="rest"
                whileInView="visible"
                whileHover="hover"
                variants={cardHoverVariants}
                className="group relative"
              >
                <motion.div
                  className={`relative h-full p-6 lg:p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br ${category.color} border ${category.borderColor} transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[hsl(var(--primary))]/10`}
                  whileHover={{
                    borderColor: "hsl(var(--primary))",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Effet de brillance au hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, transparent 30%, hsl(var(--primary) / 0.1) 50%, transparent 70%)`
                    }}
                  />

                  {/* Header de la carte */}
                  <motion.div 
                    className="relative z-10"
                    variants={cardHeaderVariants}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="p-3 rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] group-hover:scale-110 transition-transform duration-300"
                        variants={cardIconVariants}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[hsl(var(--foreground))]">
                        {category.category}
                      </h3>
                    </div>

                    {/* Liste des compétences */}
                    <motion.div 
                      className="space-y-4"
                      variants={cardContentVariants}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div 
                          key={skill.name} 
                          className="space-y-2"
                          variants={cardListItemVariants}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm lg:text-base font-medium text-[hsl(var(--foreground))]">
                              {skill.name}
                            </span>
                          </div>
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