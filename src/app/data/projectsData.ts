import { ExternalLink, Github, Calendar, Code2, Eye, Smartphone, Globe, BarChart3, Users, ShoppingCart, CheckSquare } from "lucide-react";

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  icon?: React.ReactNode;
  completionDate?: string;
  status?: 'completed' | 'in-progress' | 'archived';
}

export const projectsData: ProjectType[] = [
  {
    id: 1,
    title: "Développement et Personnalisation d’un Module E‑Learning Odoo 16",
    description: "Projet consistant à développer et personnaliser un module e‑learning pour Odoo 16, intégrant la gestion des cours, des paiements et des certificats. Optimisation pour l’expérience utilisateur et compatibilité multi‑dispositifs.",
    image: "/image/spike.png",
    technologies: ["Odoo 16", "Python", "PostgreSQL", "XML", "JavaScript"],
    category: "ERP / E‑Learning",
    demoUrl: "https://spike-business.com/slides/all",
    githubUrl: "",
    featured: true,
    completionDate: "Décembre 2024",
    status: "completed"
  },
  {
    id: 2,
    title: "Recherche Opérationnelle – Algorithme de Démoucron Min‑Max",
    description: "Implémentation d’un algorithme de Démoucron Min‑Max pour l’ordonnancement de tâche et la résolution de problèmes d’optimisation en recherche opérationnelle. Visualisation des résultats et tests sur des jeux de données réels.",
    image: "/image/demoucron.png",
    technologies: ["Next.js", "React Flow"],
    category: "Research / Algorithm",
    demoUrl: "https://recherche-operationnelle.vercel.app/",
    githubUrl: "https://github.com/Mariusrakotonandrianina/Recherche-op-rationnelle",
    featured: true,
    completionDate: "Juin 2025",
    status: "completed"
  },
  {
    id: 3,
    title: "E‑Commerce – Vente de Produits",
    description: "Création d’une application e‑commerce pour la vente de produits avec gestion du catalogue, panier, commandes et paiement sécurisé en ligne.",
    image: "/image/ecommerce.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    category: "Application Web",
    demoUrl: "",
    githubUrl: "https://github.com/Mariusrakotonandrianina/E-commerce",
    featured: false,
    completionDate: "Décembre 2023",
    status: "completed"
  },
  {
    id: 4,
    title: "Plateforme de Covoiturage avec Réservation et Paiement",
    description: "Application de covoiturage permettant aux utilisateurs de réserver des trajets et d’effectuer des paiements sécurisés via Stripe. Interface web et mobile optimisée.",
    image: "/image/covoiturage.png",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Stripe API"],
    category: "Application Web",
    demoUrl: "",
    githubUrl: "https://github.com/Mariusrakotonandrianina/Covoiturage",
    featured: false,
    completionDate: "Avril 2024",
    status: "completed"
  },
  {
    id: 5,
    title: "Système de Réservation d’Hôtel avec Paiement Stripe",
    description: "Développement d'application web mobile d’un système de réservation d’hôtel avec calendrier interactif, gestion des chambres et paiements en ligne via Stripe.",
    image: "/image/mobileReserv.jpeg",
    technologies: ["Réacte Native", "Next.js", "Tailwind CSS", "Expresse.js", "MongoDB", "Stripe API"],
    category: "Application web mobile",
    demoUrl: "",
    githubUrl: "https://github.com/Mariusrakotonandrianina/Hotel-mobile",
    featured: false,
    completionDate: "Mai 2024",
    status: "in-progress"
  }
];

// Statistiques des projets (optionnel)
export const projectStats = {
  total: projectsData.length,
  completed: projectsData.filter(p => p.status === 'completed').length,
  inProgress: projectsData.filter(p => p.status === 'in-progress').length,
  featured: projectsData.filter(p => p.featured).length
};
