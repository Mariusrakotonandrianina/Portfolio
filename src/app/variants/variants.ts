"use client";
import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

export const tagVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "spring",
      stiffness: 100,
    },
  },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.06,
    },
  },
};

export const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.4,
    },
  },
};

export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      delay: 0.6,
      type: "spring",
      stiffness: 150,
    },
  },
  hover: {
    scale: 1.15,
    y: -8,
    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.35)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.85,
    y: 0,
  },
};

export const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: 8,
    x: 120,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.4, 0, 0.2, 1],
      type: "spring",
      stiffness: 70,
      damping: 12,
    },
  },
};