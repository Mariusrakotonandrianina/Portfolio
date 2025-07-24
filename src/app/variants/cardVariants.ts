// Card Variants - Animations pour les composants de cartes
import { Variants } from "framer-motion";

// Container principal pour les grilles de cartes
export const cardContainerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Animation de base pour les cartes
export const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutCubic
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Animation pour les cartes avec effet de slide depuis la gauche
export const cardSlideLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -80,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

// Animation pour les cartes avec effet de slide depuis la droite
export const cardSlideRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 80,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

// Animation pour les cartes avec effet de flip
export const cardFlipVariants: Variants = {
  hidden: { 
    opacity: 0, 
    rotateY: -90,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Animation pour les cartes avec effet de zoom
export const cardZoomVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.3,
    y: 30
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 150,
      damping: 20
    }
  }
};

// Animation pour les cartes avec effet de rotation
export const cardRotateVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -45
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 18
    }
  }
};

// Animation pour les en-têtes de cartes
export const cardHeaderVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2
    }
  }
};

// Animation pour le contenu des cartes
export const cardContentVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.3,
      staggerChildren: 0.1
    }
  }
};

// Animation pour les icônes dans les cartes
export const cardIconVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0,
    rotate: -180
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.4
    }
  }
};

// Animation pour les barres de progression
export const progressBarVariants: Variants = {
  hidden: { 
    width: "0%" 
  },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.6
    }
  })
};

// Animation pour les éléments de liste dans les cartes
export const cardListItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Animation pour les badges/tags
export const cardBadgeVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
      damping: 25
    }
  }
};

// Animation pour les boutons dans les cartes
export const cardButtonVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
};

// Animation pour les effets de hover sur les cartes
export const cardHoverVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.03,
    y: -8,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Animation pour les grilles masonry/alternées
export const cardMasonryVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: (index % 3) * 0.1, // Délai basé sur la position dans la grille
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  })
};

// Animation pour les cartes avec effet de reveal depuis le bas
export const cardRevealVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 100,
    clipPath: "inset(100% 0 0 0)"
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      clipPath: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
};

// Animation pour les overlays de cartes
export const cardOverlayVariants: Variants = {
  hidden: { 
    opacity: 0,
    backdropFilter: "blur(0px)"
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(8px)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

// Animation pour les titres de section avec underline
export const sectionTitleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

// Animation pour les underlines de titres
export const titleUnderlineVariants: Variants = {
  hidden: { 
    width: "0%",
    opacity: 0
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: 0.5
    }
  }
};

// Animation pour les images dans les cartes
export const cardImageVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 1.1,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3
    }
  }
};