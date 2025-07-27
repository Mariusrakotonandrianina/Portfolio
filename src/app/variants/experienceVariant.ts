import { Variants } from "framer-motion";

export const cardVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
}