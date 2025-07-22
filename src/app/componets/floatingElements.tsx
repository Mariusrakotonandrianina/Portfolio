"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particleCount = 100;

  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => {
      const size = Math.random() * 6 + 2;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 5 + 4;
      const delay = Math.random() * 3;
      const scaleMax = Math.random() * 1.5 + 0.5;

      return (
        <motion.div
          key={i}
          className="absolute bg-[hsl(var(--primary))]/30 rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, scaleMax, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        />
      );
    });
  }, []); // Ne recalculer qu’une seule fois

  if (!mounted) return null; // rien afficher tant qu'on est côté serveur

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles}

      <motion.div
        className="absolute top-16 right-16 w-16 h-16 border-2 border-[hsl(var(--primary))]/30 rounded-lg"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-16 left-16 w-12 h-12 border-2 border-[hsl(var(--primary))]/15 rounded-full"
        animate={{
          rotate: [0, -360],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
