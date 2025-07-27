import { Code, Briefcase, LucideIcon } from "lucide-react";
import React from "react";

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  technology: string;
  description: string;
  skills: string[];
  icon: React.ReactElement;
  color: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Développement & personnalisation de modules e-learning",
    company: "SMART (Pike Malagasy for Research of Technology)",
    period: "Septembre 2024 – Décembre 2024",
    technology: "Odoo 16",
    description: "Personnalisation et développement de modules e-learning adaptés aux besoins pédagogiques.",
    skills: ["Odoo", "Python", "XML", "JavaScript", "PostgreSQL"],
    icon: React.createElement(Code, { className: "w-6 h-6" }),
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    title: "Développement d'un site e-commerce",
    company: "24 Invits",
    period: "Août 2023 – Novembre 2023",
    technology: "Stack MERN (MongoDB, Express, React, Node.js)",
    description: "Conception d'un site e-commerce complet avec gestion de produits, panier, paiement et tableau de bord.",
    skills: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
    icon: React.createElement(Briefcase, { className: "w-6 h-6" }),
    color: "from-green-500/20 to-blue-500/20"
  }
];