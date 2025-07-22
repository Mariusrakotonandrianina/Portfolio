"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { titleVariants, wordVariants } from "../variants/variants";

export default function NameStyled() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Pour éviter les erreurs d'hydratation liées au thème
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const backgroundImage =
    theme === "dark"
      ? "linear-gradient(-45deg, #60a5fa, #f9fafb, #6b7280, #1e40af)"
      : "linear-gradient(-45deg, #2563eb, #e0f2fe, #93c5fd, #3b82f6)";

  const animatedTextStyle = {
    fontFamily: "'Poppins', sans-serif",
    backgroundImage,
    backgroundSize: "400% 400%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 50%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-0.01em",
  };

  return (
    <motion.span>
      <motion.h1
        className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-4 text-center lg:text-left"
        initial="hidden"
        whileInView="visible"
        variants={titleVariants}
        viewport={{ once: true }}
      >
        <motion.div
          variants={wordVariants}
          style={animatedTextStyle}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          RAKOTONANDRIANINA
        </motion.div>

        <motion.div
          variants={wordVariants}
          className="text-2xl lg:text-3xl font-medium mt-2"
          style={animatedTextStyle}
          animate={{
            backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        >
          Dimithry Marius
        </motion.div>
      </motion.h1>
    </motion.span>
  );
}
