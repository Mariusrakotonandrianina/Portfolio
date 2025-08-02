import { Variants } from "framer-motion";

export const projectCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const overlayVariants: Variants = {
  rest: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const cardRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const techBadgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  }),
};

export const buttonFloatVariants: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -5,
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export const glowVariants: Variants = {
  rest: {
    boxShadow: "0 0 0 rgba(var(--primary-rgb), 0)",
    scale: 1,
  },
  hover: {
    boxShadow:
      "0 20px 40px rgba(var(--primary-rgb), 0.15), 0 0 30px rgba(var(--primary-rgb), 0.1)",
    scale: 1.02,
    transition: { duration: 0.4 },
  },
};
export const indicatorVariants: Variants = {
  inactive: { scale: 1, opacity: 0.5 },
  active: { scale: 1.2, opacity: 1 },
};

export const carouselVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
};
export const modernButtonVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    boxShadow: "0 4px 20px rgba(var(--primary-rgb), 0.2)",
  },
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    boxShadow: "0 8px 30px rgba(var(--primary-rgb), 0.4)",
    transition: {
      duration: 0.3,
      rotate: { duration: 0.6, ease: "easeInOut" },
    },
  },
  tap: { scale: 0.95 },
};
