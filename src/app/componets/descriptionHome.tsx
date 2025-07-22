import React from "react";
import { motion } from "framer-motion";

export default function DescriptionHome() {
  return (
    <motion.p
      className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 leading-relaxed text-[hsl(var(--foreground))]"
      style={{
        fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif",
        fontWeight: "300",
        letterSpacing: "0.02em",
        lineHeight: "1.8",
        fontStyle: "normal",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Développeur passionné spécialisé dans la création d'applications web
        modernes et performantes.
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        J'aide les entreprises à transformer leurs idées en solutions digitales
        innovantes.
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        Grâce à une approche centrée sur la structuration des données et
        l'optimisation des flux d'information, je conçois des solutions fiables,
        évolutives et parfaitement adaptées aux enjeux métiers.
      </motion.span>
    </motion.p>
  );
}
