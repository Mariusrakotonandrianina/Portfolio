import { Variants } from "framer-motion";

export const cardContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3
    }
  }
};

export const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  }
};

export const formVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100
    }
  }
};

export const sectionTitleVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100
    }
  }
};

export const titleUnderlineVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100px",
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }
};
