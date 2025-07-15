import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export default function TypewriterText({ text, delay = 0 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay + currentIndex * 60);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return (
    <motion.span
      className="relative inline-block px-3 py-1 text-white bg-transparent rounded-lg"
      style={{
        textShadow: "0 0 8px rgba(255, 255, 255, 0.75)", // White glow
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {displayedText || text}
      <motion.span
        className="inline-block w-0.5 h-6 bg-white ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.span>
  );
}