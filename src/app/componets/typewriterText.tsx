import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  showCursor?: boolean;
}

export default function TypewriterText({ 
  text, 
  delay = 0, 
  className = "",
  showCursor = true 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay + currentIndex * 30);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, text, delay]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        // Style adaptatif avec intensité réduite
        textShadow: `
          0 0 5px hsl(var(--primary) / 0.6),
          0 0 10px hsl(var(--primary) / 0.4),
          0 0 15px hsl(var(--primary) / 0.3),
          0 2px 4px rgba(0, 0, 0, 0.3)
        `,
        color: "hsl(var(--foreground))",
        WebkitTextStroke: "0.5px hsl(var(--primary) / 0.3)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      {displayedText}
      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-6 ml-1 align-middle"
          style={{
            background: `linear-gradient(45deg, 
              hsl(var(--primary)), 
              hsl(var(--primary) / 0.6)
            )`,
            boxShadow: `
              0 0 3px hsl(var(--primary) / 0.6),
              0 0 6px hsl(var(--primary) / 0.5),
              0 0 9px hsl(var(--primary) / 0.4)
            `,
          }}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: isComplete ? 3 : Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.span>
  );
}